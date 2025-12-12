<template>
    <div ref="threeContainer" class="three-container"></div>
</template>

<script setup lang="ts">
import {
    ref,
    reactive,
    watch,
    onMounted,
    onUnmounted,
    onBeforeUnmount,
    markRaw,
} from "vue";
import * as THREE from "three";
import { Float32BufferAttribute, Vector3 } from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import type { HandTrackingData } from "../types/handTracking";

// ===================================================================================
//
// 定义组件的 Props 用于接收外部传入的数据
//
// ===================================================================================

const props = defineProps<{
    newTexture: THREE.Texture | null; // 接收父组件传入的新图片纹理
    // interactionState: AppState | null; // 接收父组件的模式和手部数据
    handTrackingData: HandTrackingData | null; // 接收父组件传入的手势追踪数据
}>();

// ===================================================================================
//
// 定义组件的 Emits 用于向外部发送事件
//
// ===================================================================================

const emit = defineEmits<{
    (e: "particle-system-update", system: any[]): void;
}>();

// ===================================================================================
//
// 定义全局变量
//
// ===================================================================================

/** 全局配置项 */
const CONFIG = {
    colors: {
        bg: 0x050d1a, // 修改：深邃午夜蓝 (Midnight Blue)
        fog: 0x050d1a,
        champagneGold: 0xffd966,
        deepGreen: 0x03180a,
        accentRed: 0x990000,
    },
    particles: {
        count: 1500,
        dustCount: 2000,
        snowCount: 1000, // 新增：雪花数量
        treeHeight: 24,
        treeRadius: 8,
    },
    camera: { z: 50 },

    preload: {
        // 自动加载本地图片（默认扫描images文件夹）
        autoScanLocal: true,
        // 循环搜索images文件夹的图片序号数量（从1开始，*.jpg 和 *.png）
        scanCount: 5,
        // 通过链接加载的默认图片集
        images: [
            "https://images.unsplash.com/photo-1545048702-79362596cdc9?q=80&w=600",
            "https://images.unsplash.com/photo-1543258103-a62bdc069871?q=80&w=600",
            "https://images.unsplash.com/photo-1480733992048-df39e3947a38?q=80&w=600",
            "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=600",
        ],
    },
};

/** 引用 threeContainer DOM 容器 */
const threeContainer = ref<HTMLDivElement | null>(null);

/** 存储 requestAnimationFrame ID，需要响应式来确保 cleanup 时的正确性 */
const animationFrameId = ref<number | undefined>(undefined);

/** 存储 Three.js 核心对象。使用 let 变量避免 Vue 代理。 */
let core: ThreeCore | null = null;

/** 存储雪花系统实例，供 animate 函数使用。 */
let snowSystem: THREE.Points | null = null;

/** 存储装饰品实例的数组，供 createParticles 和 update 函数使用 */
let particleSystem: Particle[] = [];

/** 存储照片装饰品的 Group，便于聚焦时管理 */
let photoMeshGroup = new THREE.Group();

/** 后期处理效果合成器（在场景渲染完成后，对生成的图像进行额外处理以增强视觉效果。） */
let composer: EffectComposer | null = null;

/** 时钟，用于动画计算 */
let clock = new THREE.Clock();

const STATE = reactive<TreeState>({
    mode: "TREE" as ParticleMode,
    focusIndex: -1,
    focusTarget: null,
    hand: { detected: false, x: 0, y: 0 },
    rotation: { x: 0, y: 0 },
});

// ===================================================================================
//
// 定义对象的类型
//
// ===================================================================================

/**
 * 核心 Three.js 对象的类型定义。
 * 注意：这些对象将通过 markRaw 存储，避免 Vue 响应式代理。
 */
export interface ThreeCore {
    scene: THREE.Scene;
    mainGroup: THREE.Group;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    tree?: THREE.Object3D; // 圣诞树主体 (Group 或 Mesh)
}

/** 装饰品状态的类型 */
export type ParticleMode = "TREE" | "SCATTER" | "FOCUS";

/** 手势状态的类型 */
export type TreeState = {
    mode: ParticleMode;
    focusIndex?: number;
    focusTarget: THREE.Object3D | null;
    hand: {
        detected: boolean;
        x: number;
        y: number;
    };
    rotation: {
        x: number;
        y: number;
    };
    particleSystem?: Particle[];
};

// ===================================================================================
//
// 定义装饰品基类属性及方法
//
// ===================================================================================

class Particle {
    public mesh: THREE.Object3D;
    public type: string;
    public isDust: boolean;
    public posTree: Vector3;
    public posScatter: Vector3;
    public baseScale: number;
    public spinSpeed: Vector3;

    constructor(mesh: THREE.Object3D, type: string, isDust = false) {
        this.mesh = mesh;
        this.type = type;
        this.isDust = isDust;
        /**
         * 初始化 Vector3 实例，控制位置和旋转属性
         */
        this.posTree = new THREE.Vector3();
        this.posScatter = new THREE.Vector3();
        this.baseScale = mesh.scale.x;

        /**
         * 初始化旋转速度，根据类型调整速度倍率
         */
        const speedMult = type === "PHOTO" ? 0.3 : 2.0;
        this.spinSpeed = new THREE.Vector3(
            (Math.random() - 0.5) * speedMult,
            (Math.random() - 0.5) * speedMult,
            (Math.random() - 0.5) * speedMult
        );

        this.calculatePositions();
    }

    /**
     * 计算目标位置
     */
    calculatePositions() {
        if (this.type === "PHOTO") {
            this.posTree.set(0, 0, 0);
            const rScatter = 8 + Math.random() * 12;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            this.posScatter.set(
                rScatter * Math.sin(phi) * Math.cos(theta),
                rScatter * Math.sin(phi) * Math.sin(theta),
                rScatter * Math.cos(phi)
            );
            return;
        }

        /**
         * TREE 模式位置计算
         */
        const h = CONFIG.particles.treeHeight;
        const halfH = h / 2;
        let t = Math.random();
        t = Math.pow(t, 0.8);
        const y = t * h - halfH;

        /**
         * 根据高度计算最大半径，形成锥形分布
         */
        let rMax = CONFIG.particles.treeRadius * (1.0 - t);
        if (rMax < 0.5) rMax = 0.5;

        /**
         * 螺旋角度 + 随机偏移
         */
        const angle = t * 50 * Math.PI + Math.random() * Math.PI;
        const r = rMax * (0.8 + Math.random() * 0.4);
        this.posTree.set(Math.cos(angle) * r, y, Math.sin(angle) * r);

        /**
         * SCATTER 模式位置计算
         */
        let rScatter = this.isDust
            ? 12 + Math.random() * 20
            : 8 + Math.random() * 12;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        this.posScatter.set(
            rScatter * Math.sin(phi) * Math.cos(theta),
            rScatter * Math.sin(phi) * Math.sin(theta),
            rScatter * Math.cos(phi)
        );
    }

    /**
     * 动画更新
     *
     * @param dt
     * @param mode
     * @param focusTargetMesh
     */
    update(
        dt: number,
        mode: ParticleMode,
        focusTargetMesh: THREE.Object3D | null
    ) {
        if (!core) return;
        const { mainGroup, camera } = core;

        let target: Vector3 = this.posTree;

        /**
         * 根据当前模式选择目标位置
         */
        if (mode === "SCATTER") target = this.posScatter;
        else if (mode === "FOCUS") {
            if (this.mesh === focusTargetMesh) {
                const desiredWorldPos = new THREE.Vector3(0, 2, 35);
                const invMatrix = new THREE.Matrix4()
                    .copy(mainGroup.matrixWorld)
                    .invert();
                target = desiredWorldPos.applyMatrix4(invMatrix);
            } else {
                target = this.posScatter;
            }
        }

        /**
         * 线性插值移动到目标位置
         */
        const lerpSpeed =
            mode === "FOCUS" && this.mesh === focusTargetMesh ? 5.0 : 2.0;
        this.mesh.position.lerp(target, lerpSpeed * dt);

        /**
         * 旋转动画
         */
        if (mode === "SCATTER") {
            this.mesh.rotation.x += this.spinSpeed.x * dt;
            this.mesh.rotation.y += this.spinSpeed.y * dt;
            this.mesh.rotation.z += this.spinSpeed.z * dt;
        } else if (mode === "TREE") {
            if (this.type === "PHOTO") {
                this.mesh.lookAt(0, this.mesh.position.y, 0);
                this.mesh.rotateY(Math.PI);
            } else {
                this.mesh.rotation.x = THREE.MathUtils.lerp(
                    this.mesh.rotation.x,
                    0,
                    dt
                );
                this.mesh.rotation.z = THREE.MathUtils.lerp(
                    this.mesh.rotation.z,
                    0,
                    dt
                );
                this.mesh.rotation.y += 0.5 * dt;
            }
        }

        /**
         * FOCUS 模式下，目标装饰品面向相机
         */
        if (mode === "FOCUS" && this.mesh === focusTargetMesh) {
            this.mesh.lookAt(camera.position);
        }

        /**
         * 缩放动画
         */
        let s: number = this.baseScale;
        if (this.isDust) {
            s =
                this.baseScale *
                (0.8 + 0.4 * Math.sin(clock.elapsedTime * 4 + this.mesh.id));
            if (mode === "TREE") s = 0;
        } else if (mode === "SCATTER" && this.type === "PHOTO") {
            s = this.baseScale * 2.5;
        } else if (mode === "FOCUS") {
            if (this.mesh === focusTargetMesh) s = 4.5;
            else s = this.baseScale * 0.8;
        }

        /**
         * 平滑过渡到目标缩放
         */
        this.mesh.scale.lerp(new THREE.Vector3(s, s, s), 4 * dt);
    }
}

// ===================================================================================
//
// 定义组件监听器
//
// ===================================================================================

watch(
    () => props.newTexture,
    (newTexture) => {
        // 确保新值存在且是 Texture 对象
        if (newTexture instanceof THREE.Texture) {
            // 调用组件内部的 THREE.js 逻辑
            addPhotoToScene(newTexture);
        }
    },
    { deep: false }
); // 不需要深度监听，只关注对象引用变化

/**
 * 监听 props.handTrackingData 变化，在动画循环中判定手势状态来执行操作
 */
watch(
    () => props.handTrackingData,
    (newHandTrackingData) => {
        if (!newHandTrackingData) return;

        /** 未检测到手时重置状态 */
        if (!newHandTrackingData.detected) {
            STATE.hand.detected = false;
            STATE.focusTarget = null;
            return;
        }

        /** 检查到手时，更新 STATE.hand 状态 */
        STATE.hand.detected = newHandTrackingData.detected;
        STATE.hand.x = newHandTrackingData.position.x;
        STATE.hand.y = newHandTrackingData.position.y;

        /** 根据手势比例更新模式 */
        const extensionRatio = newHandTrackingData.ratios.extensionRatio;
        const pinchRatio = newHandTrackingData.ratios.pinchRatio;

        // 优先检查握拳 (Tree)，防止因为大拇指靠近食指而被误判为 Focus
        if (extensionRatio < 1.5) {
            // 握拳：变成树 (阈值从 1.4 提高到 1.5，更容易触发)
            STATE.mode = "TREE";
            STATE.focusTarget = null;
        } else if (pinchRatio < 0.35) {
            // 捏合：进入聚焦模式 (仅当没有握拳时才检查)
            if (STATE.mode !== "FOCUS") {
                STATE.mode = "FOCUS";
                const photos = particleSystem.filter(
                    (p): p is Particle => p.type === "PHOTO"
                );
                if (photos.length > 0) {
                    const randomIndex = Math.floor(
                        Math.random() * photos.length
                    );
                    STATE.focusTarget = markRaw(photos[randomIndex]!.mesh); // <= 修复：赋值给 focusTarget 时使用 markRaw 确保是未被 Vue 代理的 THREE.Object3D
                } else {
                    STATE.focusTarget = null;
                }
            }
        } else if (extensionRatio > 1.7) {
            // 张开：散开照片
            STATE.mode = "SCATTER";
            STATE.focusTarget = null;
        }
    },
    { deep: true } // <= 需要深度监听，因为 mode 和 hand 都是对象内部属性
);

// ===================================================================================
//
// 创建圣诞树场景的核心函数
//
// ===================================================================================

/**
 * 初始化 Three.js 场景、相机和渲染器
 */
const initThree = () => {
    if (!threeContainer.value) return;

    /**
     * 场景 (Scene)
     *
     * 设置 Three.js 场景背景为深蓝色，与 CSS 渐变配合
     * mainGroup 场景容器，用于后续将圣诞树、装饰物、或者其他复杂的模型组件添加进去，以便于后续对整个模型进行统一的操作
     */
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(CONFIG.colors.bg);
    scene.fog = new THREE.FogExp2(CONFIG.colors.fog, 0.015); // 调整雾气浓度
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    /**
     * 相机 (Camera)
     */
    const camera = new THREE.PerspectiveCamera(
        42,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.set(0, 2, CONFIG.camera.z);

    /**
     * 渲染器 (Renderer)
     */
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true, // 启用 alpha: true 以便未来如果有需要可以透过背景
        powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 2.2;

    /**
     * 添加渲染器的 DOM 元素
     */
    threeContainer.value.innerHTML = "";
    threeContainer.value.appendChild(renderer.domElement);

    /**
     * 核心：使用 markRaw 存储 Three.js 实例，防止响应式代理冲突
     */
    core = markRaw({ scene, mainGroup, camera, renderer });
};

/**
 * 创建糖果手杖纹理 CanvasTexture 实例并返回
 */
const createCandyCaneTextures = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;

    // 绘制糖果手杖条纹纹理
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, 128, 128);
    ctx.fillStyle = "#880000";
    ctx.beginPath();

    // 绘制红色斜条纹
    const stripeWidth = 64;
    for (let i = -256; i < 512; i += stripeWidth) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i + stripeWidth, 128);
        ctx.lineTo(i + stripeWidth - stripeWidth / 2, 256);
        ctx.lineTo(i - stripeWidth / 2, 0);
    }
    ctx.fill();

    // 创建糖果手杖纹理 CanvasTexture 实例
    const caneTexture = new THREE.CanvasTexture(canvas);
    caneTexture.wrapS = THREE.RepeatWrapping;
    caneTexture.wrapT = THREE.RepeatWrapping;
    caneTexture.repeat.set(5, 5);
    return caneTexture;
};

/**
 * 创建圣诞树装饰品系统和主星星
 */
const createParticles = () => {
    if (!core) return;
    const { mainGroup } = core;

    /**
     * 装饰品几何体定义
     */
    const sphereGeo = new THREE.SphereGeometry(0.5, 32, 32);
    const boxGeo = new THREE.BoxGeometry(0.55, 0.55, 0.55);

    /**
     * 糖果手杖几何体定义
     */
    const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, -0.5, 0),
        new THREE.Vector3(0, 0.3, 0),
        new THREE.Vector3(0.1, 0.5, 0),
        new THREE.Vector3(0.3, 0.4, 0),
    ]);
    const candyGeo = new THREE.TubeGeometry(
        curve,
        16,
        0.12, // <-- 调整半径：从 0.08 增加到 0.12，使手杖更粗
        8,
        false
    );

    /**
     * 装饰品材质定义（金色）
     */
    const goldMat = new THREE.MeshStandardMaterial({
        color: CONFIG.colors.champagneGold,
        metalness: 1.0,
        roughness: 0.1,
        envMapIntensity: 2.0,
        emissive: 0x443300,
        emissiveIntensity: 0.3,
    });

    /**
     * 装饰品材质定义（深绿色）
     */
    const greenMat = new THREE.MeshStandardMaterial({
        color: CONFIG.colors.deepGreen,
        metalness: 0.2,
        roughness: 0.8,
        emissive: 0x002200,
        emissiveIntensity: 0.2,
    });

    /**
     * 装饰品材质定义（红色）
     */
    const redMat = new THREE.MeshPhysicalMaterial({
        color: CONFIG.colors.accentRed,
        metalness: 0.3,
        roughness: 0.2,
        clearcoat: 1.0,
        emissive: 0x330000,
    });

    /**
     * 糖果手杖材质定义
     */
    const caneTexture = createCandyCaneTextures();
    const candyMat = new THREE.MeshStandardMaterial({
        map: caneTexture,
        roughness: 0.4,
    });

    /**
     * 随机创建装饰品
     */
    for (let i = 0; i < CONFIG.particles.count; i++) {
        const rand = Math.random();
        let mesh, type;

        if (rand < 0.4) {
            mesh = new THREE.Mesh(boxGeo, greenMat);
            type = "BOX";
        } else if (rand < 0.7) {
            mesh = new THREE.Mesh(boxGeo, goldMat);
            type = "GOLD_BOX";
        } else if (rand < 0.92) {
            mesh = new THREE.Mesh(sphereGeo, goldMat);
            type = "GOLD_SPHERE";
        } else if (rand < 0.97) {
            mesh = new THREE.Mesh(sphereGeo, redMat);
            type = "RED";
        } else {
            mesh = new THREE.Mesh(candyGeo, candyMat);
            type = "CANE";
        }

        const s = 0.4 + Math.random() * 0.5;
        mesh.scale.set(s, s, s);
        mesh.rotation.set(
            Math.random() * 6,
            Math.random() * 6,
            Math.random() * 6
        );

        mainGroup.add(mesh);
        particleSystem.push(new Particle(mesh, type, false));
    }

    // Star
    const starShape = new THREE.Shape();
    const points = 5;
    const outerRadius = 1.5;
    const innerRadius = 0.7;

    for (let i = 0; i < points * 2; i++) {
        const angle = (i * Math.PI) / points + Math.PI / 2;
        const r = i % 2 === 0 ? outerRadius : innerRadius;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        if (i === 0) starShape.moveTo(x, y);
        else starShape.lineTo(x, y);
    }
    starShape.closePath();

    const starGeo = new THREE.ExtrudeGeometry(starShape, {
        depth: 0.4,
        bevelEnabled: true,
        bevelThickness: 0.1,
        bevelSize: 0.1,
        bevelSegments: 2,
    });
    starGeo.center();

    const starMat = new THREE.MeshStandardMaterial({
        color: 0xffdd88,
        emissive: 0xffaa00,
        emissiveIntensity: 1.0,
        metalness: 1.0,
        roughness: 0,
    });
    const star = new THREE.Mesh(starGeo, starMat);
    star.position.set(0, CONFIG.particles.treeHeight / 2 + 1.2, 0);
    mainGroup.add(star);

    mainGroup.add(photoMeshGroup);
};

/**
 * 设置一个环境光 (Image-Based Lighting, IBL)，提高 3D 场景真实感和视觉质量
 */
const setupEnvironment = () => {
    if (!core) return;
    const { scene, renderer } = core;
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(
        new RoomEnvironment(),
        0.04
    ).texture;
};

/**
 * 设置不同的光源，以实现对圣诞树模型的照明和渲染效果
 */
const setupLights = () => {
    if (!core) return;
    const { scene, mainGroup } = core;

    /**
     * 环境光 (Ambient Light)
     * - 提供整体的基础照明，确保场景中的所有对象都能被轻微照亮
     * - 避免完全的黑暗区域，提升视觉舒适度
     */
    const ambient = new THREE.AmbientLight(0xffffff, 0.6); // 稍微提高环境光
    scene.add(ambient);

    /**
     * 内部点光源 (Point Light)
     * - 模拟圣诞树内部的灯光效果，营造温暖的氛围
     */
    const innerLight = new THREE.PointLight(0xffaa00, 2, 20);
    innerLight.position.set(0, 5, 0);
    mainGroup.add(innerLight);
    mainGroup.add(innerLight);

    /**
     * 聚光灯 (Spotlights)
     * - 暖色主光 (Gold Spotlight)
     * - 模拟从上方和侧面投射的光线，突出圣诞树的形状和细节
     * - 增强立体感和视觉层次
     */
    const spotGold = new THREE.SpotLight(0xffcc66, 1200);
    spotGold.position.set(30, 40, 40);
    spotGold.angle = 0.5;
    spotGold.penumbra = 0.5;
    scene.add(spotGold);

    /**
     * 冷色背光 (Blue Spotlight)
     * - 模拟月光效果，增加场景的神秘感和节日氛围
     * - 提供对比色，丰富视觉体验
     */
    const spotBlue = new THREE.SpotLight(0x6688ff, 800); // 增强蓝色背光，营造月光感
    spotBlue.position.set(-30, 20, -30);
    scene.add(spotBlue);

    /**
     * 填充光 (Fill Light)
     * - 软化阴影，减少对比度
     */
    const fill = new THREE.DirectionalLight(0xffeebb, 0.8);
    fill.position.set(0, 0, 50);
    scene.add(fill);
};

/**
 * 创建尘埃粒子系统
 */
const createDust = () => {
    if (!core) return;
    const { mainGroup } = core;

    const geo = new THREE.TetrahedronGeometry(0.08, 0);
    const mat = new THREE.MeshBasicMaterial({
        color: 0xffeebb,
        transparent: true,
        opacity: 0.8,
    });

    for (let i = 0; i < CONFIG.particles.dustCount; i++) {
        const mesh = new THREE.Mesh(geo, mat);
        mesh.scale.setScalar(0.5 + Math.random());
        mainGroup.add(mesh);
        particleSystem.push(new Particle(mesh, "DUST", true));
    }
};

/**
 * 图片加载系统，加载预定义图片作为装饰品添加到圣诞树上
 */
const loadPredefinedImages = () => {
    const loader = new THREE.TextureLoader();
    CONFIG.preload.images.forEach((url) => {
        loader.load(
            url,
            (t) => {
                t.colorSpace = THREE.SRGBColorSpace;
                addPhotoToScene(t);
            },
            undefined,
            (e) => {
                console.log(`Skipped: ${url}`);
                console.error(e);
            }
        );
    });

    if (CONFIG.preload.autoScanLocal) {
        for (let i = 1; i <= CONFIG.preload.scanCount; i++) {
            const pathJpg = `./images/${i}.jpg`;
            const pathPng = `./images/${i}.png`;
            loader.load(
                pathJpg,
                (t) => {
                    t.colorSpace = THREE.SRGBColorSpace;
                    addPhotoToScene(t);
                },
                undefined,
                () => {
                    loader.load(
                        pathPng,
                        (t) => {
                            t.colorSpace = THREE.SRGBColorSpace;
                            addPhotoToScene(t);
                        },
                        undefined,
                        () => {}
                    );
                }
            );
        }
    }
};

/**
 * 具体实现了辉光效果 (Unreal Bloom)，提升画面节日氛围和光源真实感
 */
const setupPostProcessing = () => {
    if (!core) return;
    const { scene, camera, renderer } = core;

    /**
     * 创建渲染通道
     */
    const renderScene = new RenderPass(scene, camera);

    /**
     * 创建辉光效果通道
     */
    const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1.5,
        0.4,
        0.85
    );

    /**
     * 调整辉光参数以适应场景需求
     */
    bloomPass.threshold = 0.65; // 稍微降低阈值让更多东西发光
    bloomPass.strength = 0.5;
    bloomPass.radius = 0.4;

    /**
     * 创建效果合成器 (Effect Composer)
     */
    composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);
};

/**
 * 创建雪花粒子系统
 */
const createSnow = () => {
    if (!core) return;
    const { scene } = core;

    /**
     * 初始化几何体和属性数组
     */
    const geometry = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const velocities: number[] = [];
    // const loader = new THREE.TextureLoader();

    /**
     * 创建雪花纹理
     */
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const context = canvas.getContext("2d")!; // 使用非空断言 (!) 确保 context 不为 null
    context.fillStyle = "white";
    context.beginPath();
    context.arc(16, 16, 16, 0, Math.PI * 2);
    context.fill();
    const snowTexture = new THREE.CanvasTexture(canvas);

    /**
     * 生成雪花粒子位置、速度等属性
     */
    for (let i = 0; i < CONFIG.particles.snowCount; i++) {
        /**
         * 为每个雪花粒子分配随机位置
         */
        const x = THREE.MathUtils.randFloatSpread(100);
        const y = THREE.MathUtils.randFloatSpread(60);
        const z = THREE.MathUtils.randFloatSpread(60);
        vertices.push(x, y, z);

        /**
         * 为每个雪花粒子分配随机速度属性
         */
        velocities.push(
            Math.random() * 0.2 + 0.1, // 雪花下落速度
            Math.random() * 0.05 // 雪花摆动速度
        );
    }

    /**
     * 将位置属性添加到几何体 position 中
     */
    geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
    );

    /**
     * 将速度属性添加到几何体 userData 中
     */
    geometry.setAttribute(
        "userData",
        new THREE.Float32BufferAttribute(velocities, 2)
    );

    /**
     * 创建雪花粒子材质
     */
    const material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.4,
        map: snowTexture,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
    });

    /**
     * 创建雪花粒子 Points 对象并添加到场景中
     */
    const snow = new THREE.Points(geometry, material);
    scene.add(snow);

    /**
     * 将创建的雪花粒子系统存储到外部变量，以便在 animate 中访问和更新
     */
    snowSystem = snow;
};

/**
 * 更新雪花位置，实现下落和摇摆效果
 */
const updateSnow = () => {
    if (!snowSystem) return;

    /**
     * 获取位置和自定义数据属性
     */
    const positionAttribute = snowSystem.geometry.attributes
        .position! as Float32BufferAttribute;
    const userDataAttribute = snowSystem.geometry.attributes
        .userData! as Float32BufferAttribute;
    if (!positionAttribute || !userDataAttribute) {
        console.error("Missing attributes on snowSystem geometry");
        return;
    }

    /**
     * 获取底层的 Float32Array
     */
    const positions = positionAttribute.array as Float32Array;
    const userData = userDataAttribute.array as Float32Array;
    if (!positions || !userData) {
        console.error("Missing arrays on snowSystem geometry attributes");
        return;
    }

    /**
     * 遍历每个雪花粒子，更新其位置
     */
    const snowCount = CONFIG.particles.snowCount;
    if (positions.length < snowCount * 3 || userData.length < snowCount * 2) {
        // 如果数组长度不够，说明 createSnow 初始化失败或配置错误，直接退出
        console.error(
            "Snow particle arrays are undersized. Check CONFIG and createSnow."
        );
        return;
    }

    for (let i = 0; i < CONFIG.particles.snowCount; i++) {
        /**
         * Y轴下落
         */
        const fallSpeed = userData[i * 2];
        positions[i * 3 + 1]! -= fallSpeed!;

        // X轴摇摆
        const swaySpeed = userData[i * 2 + 1];
        positions[i * 3]! +=
            Math.sin(clock.elapsedTime * 2 + i) * swaySpeed! * 0.1;

        // 循环重置
        if (positions[i * 3 + 1]! < -30) {
            positions[i * 3 + 1] = 30;
            positions[i * 3] = THREE.MathUtils.randFloatSpread(100);
            positions[i * 3 + 2] = THREE.MathUtils.randFloatSpread(60);
        }
    }
    positionAttribute.needsUpdate = true;
};

/**
 * 动画循环及渲染函数
 */
function animate() {
    requestAnimationFrame(animate);
    const dt = clock.getDelta();

    if (!core || !composer) return;

    // 主场景旋转逻辑
    if (STATE.mode === "SCATTER" && STATE.hand.detected) {
        const targetRotY = STATE.hand.x * Math.PI * 0.9;
        const targetRotX = STATE.hand.y * Math.PI * 0.25;
        STATE.rotation.y += (targetRotY - STATE.rotation.y) * 3.0 * dt;
        STATE.rotation.x += (targetRotX - STATE.rotation.x) * 3.0 * dt;
    } else {
        if (STATE.mode === "TREE") {
            STATE.rotation.y += 0.3 * dt;
            STATE.rotation.x += (0 - STATE.rotation.x) * 2.0 * dt;
        } else {
            STATE.rotation.y += 0.1 * dt;
        }
    }

    /** 应用旋转到主场景组 */
    core.mainGroup.rotation.x = STATE.rotation.x;
    core.mainGroup.rotation.y = STATE.rotation.y;

    // 🚨 修复：强制更新 mainGroup 的世界矩阵
    // 确保 mainGroup.matrixWorld 在下一行 p.update 中使用时是最新的
    core.mainGroup.updateWorldMatrix(true, false);

    /** 通过循环动画更新每个装饰品的位置和状态 */
    particleSystem.forEach((p) => p.update(dt, STATE.mode, STATE.focusTarget));

    /** 通过循环动画更新雪花位置，实现下雪的效果 */
    updateSnow();

    /**
     * 使用效果合成器渲染场景
     */
    composer.render();
}

// ===================================================================================
//
// 其他函数
//
// ===================================================================================

/**
 * 将图片纹理添加到场景中，作为带相框的装饰品。
 * @param texture - 包含用户图片数据的 THREE.Texture 实例。
 */
const addPhotoToScene = (texture: THREE.Texture) => {
    /**
     * 创建相框和照片网格
     */
    const frameGeo = new THREE.BoxGeometry(1.4, 1.4, 0.05);
    const frameMat = new THREE.MeshStandardMaterial({
        color: CONFIG.colors.champagneGold,
        metalness: 1.0,
        roughness: 0.1,
    });
    const frame = new THREE.Mesh(frameGeo, frameMat);

    let width = 1.2;
    let height = 1.2;

    /**
     * 根据图片的宽高比调整照片尺寸
     */
    if (texture.image) {
        const image = texture.image as { width: number; height: number }; // 使用类型断言确保 image 具有 width 和 height 属性
        const aspect = image.width / image.height;
        if (aspect > 1) {
            height = width / aspect;
        } else {
            width = height * aspect;
        }
    }

    /**
     * 创建照片平面
     */
    const photoGeo = new THREE.PlaneGeometry(width, height);
    const photoMat = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
    });
    const photo = new THREE.Mesh(photoGeo, photoMat);
    photo.position.z = 0.04;

    /**
     * 组合相框和照片为一个 Group
     */
    const group = new THREE.Group();
    group.add(frame);
    group.add(photo);

    frame.scale.set(width / 1.2, height / 1.2, 1);

    const s = 0.8;
    group.scale.set(s, s, s);

    /**
     * 将照片组添加到照片网格组中，并创建对应的粒子实例
     */
    photoMeshGroup.add(group);
    particleSystem.push(new Particle(group, "PHOTO", false));

    /**
     * 更新照片装饰品的布局
     */
    updatePhotoLayout();
};

/**
 * 更新照片装饰品的布局
 * 根据当前照片数量，调整它们在圣诞树上的分布位置
 * 目前实现为简单的螺旋分布
 */
const updatePhotoLayout = () => {
    const photos = particleSystem.filter((p) => p.type === "PHOTO");
    const count = photos.length;
    if (count === 0) return;

    const h = CONFIG.particles.treeHeight * 0.9;
    const bottomY = -h / 2;
    const stepY = h / count;
    const loops = 3;

    photos.forEach((p, i) => {
        const y = bottomY + stepY * i + stepY / 2;
        const fullH = CONFIG.particles.treeHeight;
        const normalizedH = (y + fullH / 2) / fullH;

        let rMax = CONFIG.particles.treeRadius * (1.0 - normalizedH);
        if (rMax < 1.0) rMax = 1.0;

        const r = rMax + 3.0;
        const angle = normalizedH * Math.PI * 2 * loops + Math.PI / 4;

        p.posTree.set(Math.cos(angle) * r, y, Math.sin(angle) * r);
    });
};

/**
 * 窗口调整大小处理函数
 */
const handleResize = () => {
    if (!core || !composer) return;

    const { camera, renderer } = core;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
};

// ===================================================================================
//
// 组件的生命周期钩子
//
// ===================================================================================

onMounted(() => {
    initThree();
    createParticles();
    setupEnvironment();
    setupLights();
    createDust();
    loadPredefinedImages();
    setupPostProcessing();
    createSnow();
    animate();

    /** 绑定窗口 Resize 事件（监听窗口尺寸变化并做处理） */
    window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
    /** 窗口 Resize 事件解绑 */
    window.removeEventListener("resize", handleResize);
});

onUnmounted(() => {
    // 组件卸载时，清理 Three.js 资源，防止内存泄漏

    if (animationFrameId.value !== undefined) {
        // 停止动画循环
        cancelAnimationFrame(animationFrameId.value);
    }

    if (core) {
        // 清理渲染器和场景
        core.renderer.dispose();
        core.scene.clear();

        // 释放核心对象引用
        core = null;
    }
});
</script>

<style scoped>
/* 必须给容器一个明确的尺寸 */
.three-container {
    width: 100%;
    height: 100vh; /* 占满整个视口高度 */
    overflow: hidden;
    display: block;
    background-color: #282c34; /* 防止闪烁，与场景背景色一致 */
    top: 0;
    left: 0;
    position: absolute;
    z-index: 1;
}
</style>
