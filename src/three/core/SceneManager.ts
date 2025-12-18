import * as THREE from "three";
import { markRaw } from "vue";
import { TREE_CONFIG } from "../config/treeConfig";
import type { ThreeCore } from "../types";

/** 负责创建/销毁 Three.js 场景核心对象的轻量管理器 */
export class SceneManager {
    private _core: ThreeCore | null;

    constructor() {
        this._core = null;
    }

    /** 将渲染器挂载到 DOM，并返回核心句柄 */
    init(container: HTMLElement): ThreeCore {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(TREE_CONFIG.colors.bg);
        scene.fog = new THREE.FogExp2(TREE_CONFIG.colors.fog, 0.015);
        const mainGroup = new THREE.Group();
        scene.add(mainGroup);

        const camera = new THREE.PerspectiveCamera(
            42,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.set(0, 2, TREE_CONFIG.camera.z);

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = THREE.ReinhardToneMapping;
        renderer.toneMappingExposure = 2.2;

        container.innerHTML = "";
        container.appendChild(renderer.domElement);

        this._core = markRaw({ scene, mainGroup, camera, renderer });
        return this._core;
    }

    /** 对外暴露已经初始化完成的核心实例 */
    get core(): ThreeCore {
        if (!this._core) {
            throw new Error("Scene has not been initialized");
        }
        return this._core;
    }

    /** 响应窗口尺寸变化，更新相机与渲染器 */
    resize() {
        if (!this._core) return;
        const { camera, renderer } = this._core;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    /** 释放 WebGL 资源，避免内存泄漏 */
    dispose() {
        if (!this._core) return;
        this._core.renderer.dispose();
        this._core.scene.clear();
        this._core = null;
    }
}
