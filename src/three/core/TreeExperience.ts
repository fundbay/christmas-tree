import * as THREE from "three";
import type { HandTrackingData } from "../../mediapipe/types";
import type { TreeState, ThreeCore } from "../types";
import { SceneManager } from "./SceneManager";
import { EnvironmentManager } from "../environment/EnvironmentManager";
import { OrnamentSystem } from "../systems/OrnamentSystem";
import { SnowSystem } from "../systems/SnowSystem";
import { PhotoLoader } from "../loaders/PhotoLoader";
import { PostProcessingPipeline } from "./PostProcessing";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";

/**
 * TreeExperience 负责调度场景、装饰物、手势等所有子系统
 */
export class TreeExperience {
    private readonly sceneManager: SceneManager;
    private environmentManager: EnvironmentManager | null;
    private ornamentSystem: OrnamentSystem | null;
    private snowSystem: SnowSystem | null;
    private composer: EffectComposer | null;
    private readonly clock: THREE.Clock;
    private animationId: number | null;
    private readonly resizeHandler: () => void;
    private state: TreeState;
    private readonly container: HTMLElement;

    constructor(container: HTMLElement) {
        this.container = container;
        this.sceneManager = new SceneManager();
        this.environmentManager = null;
        this.ornamentSystem = null;
        this.snowSystem = null;
        this.composer = null;
        this.clock = new THREE.Clock();
        this.animationId = null;
        this.resizeHandler = () => this.handleResize();
        this.state = {
            mode: "TREE",
            focusIndex: -1,
            focusTarget: null,
            hand: { detected: false, x: 0, y: 0 },
            rotation: { x: 0, y: 0 },
        };
    }

    /**
     * 初始化并挂载整棵圣诞树，包括环境、装饰与后期
     */
    mount() {
        const core = this.sceneManager.init(this.container);
        this.environmentManager = new EnvironmentManager(core);
        this.environmentManager.applyEnvironment();
        this.environmentManager.setupLights();

        this.ornamentSystem = new OrnamentSystem(core, this.clock);
        this.ornamentSystem.populateBaseDecorations();

        const photoLoader = new PhotoLoader({
            onTexture: (texture) => this.ornamentSystem?.addPhoto(texture),
        });
        photoLoader.loadPreconfigured();

        this.snowSystem = new SnowSystem(core.scene);
        this.snowSystem.create();

        const pipeline = new PostProcessingPipeline(core);
        this.composer = pipeline.createComposer();

        window.addEventListener("resize", this.resizeHandler);
        this.animate();
    }

    /**
     * 将 MediaPipe 返回的手势数据喂入状态机，驱动模式切换
     */
    setHandTrackingData(data: HandTrackingData | null) {
        if (!data) {
            this.state.hand.detected = false;
            this.state.focusTarget = null;
            return;
        }

        if (!data.detected) {
            this.state.hand.detected = false;
            this.state.focusTarget = null;
            // this.state.mode = "TREE"; // 当手离开摄像头范围则恢复为树形
            return;
        }

        this.state.hand.detected = true;
        this.state.hand.x = data.position.x;
        this.state.hand.y = data.position.y;

        const { extensionRatio, pinchRatio } = data.ratios;
        if (extensionRatio < 1.5) {
            this.state.mode = "TREE";
            this.state.focusTarget = null;
        } else if (pinchRatio < 0.35) {
            if (this.state.mode !== "FOCUS") {
                this.state.mode = "FOCUS";
                this.state.focusTarget =
                    this.ornamentSystem?.getRandomPhotoMesh() ?? null;
            }
        } else if (extensionRatio > 1.7) {
            this.state.mode = "SCATTER";
            this.state.focusTarget = null;
        }
    }

    /**
     * 向装饰系统追加新的相框贴图
     */
    addPhotoTexture(texture: THREE.Texture) {
        this.ornamentSystem?.addPhoto(texture);
    }

    /**
     * 清理渲染循环和所有子系统
     */
    destroy() {
        if (this.animationId !== null) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        window.removeEventListener("resize", this.resizeHandler);
        this.environmentManager?.dispose();
        this.environmentManager = null;
        this.snowSystem?.dispose();
        this.snowSystem = null;
        this.ornamentSystem?.dispose();
        this.ornamentSystem = null;
        this.sceneManager.dispose();
    }

    /**
     * 渲染主循环：更新旋转、粒子、雪花并触发后期
     */
    private animate = () => {
        this.animationId = requestAnimationFrame(this.animate);
        const core = this.getCore();
        if (!this.composer || !this.ornamentSystem) return;

        const dt = this.clock.getDelta();
        this.updateRotation(dt);

        core.mainGroup.updateWorldMatrix(true, false);
        this.ornamentSystem.update(this.state, dt);
        this.snowSystem?.update(this.clock);
        this.composer.render();
    };

    /**
     * 根据当前模式与手势插值 mainGroup 的旋转
     */
    private updateRotation(dt: number) {
        if (this.state.mode === "SCATTER" && this.state.hand.detected) {
            const targetRotY = this.state.hand.x * Math.PI * 0.9;
            const targetRotX = this.state.hand.y * Math.PI * 0.25;
            this.state.rotation.y +=
                (targetRotY - this.state.rotation.y) * 3.0 * dt;
            this.state.rotation.x +=
                (targetRotX - this.state.rotation.x) * 3.0 * dt;
        } else {
            if (this.state.mode === "TREE") {
                this.state.rotation.y += 0.3 * dt;
                this.state.rotation.x += (0 - this.state.rotation.x) * 2.0 * dt;
            } else {
                this.state.rotation.y += 0.1 * dt;
            }
        }

        const core = this.getCore();
        core.mainGroup.rotation.x = this.state.rotation.x;
        core.mainGroup.rotation.y = this.state.rotation.y;
    }

    /**
     * 处理窗口缩放，保持后期和渲染器尺寸一致
     */
    private handleResize() {
        this.sceneManager.resize();
        if (!this.composer) return;
        this.composer.setSize(window.innerWidth, window.innerHeight);
    }

    private getCore(): ThreeCore {
        return this.sceneManager.core;
    }
}
