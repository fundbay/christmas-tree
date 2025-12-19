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

export class TreeExperience {
    private readonly sceneManager: SceneManager;
    private environmentManager: EnvironmentManager | null;
    private ornamentSystem: OrnamentSystem | null;
    private snowSystem: SnowSystem | null;
    private composer: EffectComposer | null;
    private baseCameraPos: THREE.Vector3 | null;
    private readonly baseLookAt: THREE.Vector3;
    private readonly focusTargetWorld: THREE.Vector3;
    private readonly focusDirection: THREE.Vector3;
    private readonly focusCameraPos: THREE.Vector3;
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
        this.baseCameraPos = null;
        this.baseLookAt = new THREE.Vector3(0, 0, 0);
        this.focusTargetWorld = new THREE.Vector3();
        this.focusDirection = new THREE.Vector3();
        this.focusCameraPos = new THREE.Vector3();
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

    mount(preloadImages?: string[]) {
        const core = this.sceneManager.init(this.container);
        this.baseCameraPos = core.camera.position.clone();
        this.environmentManager = new EnvironmentManager(core);
        this.environmentManager.applyEnvironment();
        this.environmentManager.setupLights();

        this.ornamentSystem = new OrnamentSystem(core, this.clock);
        this.ornamentSystem.populateBaseDecorations();

        const photoLoader = new PhotoLoader({
            onTexture: (texture) => this.ornamentSystem?.addPhoto(texture),
        });
        photoLoader.load(preloadImages);

        this.snowSystem = new SnowSystem(core.scene);
        this.snowSystem.create();

        const pipeline = new PostProcessingPipeline(core);
        this.composer = pipeline.createComposer();

        window.addEventListener("resize", this.resizeHandler);
        this.animate();
    }

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
            if (this.state.mode === "FOCUS") {
                this.state.mode = "SCATTER";
            } else {
                this.state.mode = "TREE";
            }
            this.state.focusTarget = null;
        } else if (pinchRatio < 0.35) {
            if (this.state.mode === "SCATTER") {
                this.state.mode = "FOCUS";
                this.state.focusTarget =
                    this.ornamentSystem?.getRandomPhotoMesh() ?? null;
            }
        } else if (extensionRatio > 1.7) {
            this.state.mode = "SCATTER";
            this.state.focusTarget = null;
        }
    }

    addPhotoTexture(texture: THREE.Texture) {
        this.ornamentSystem?.addPhoto(texture);
    }

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

    private animate = () => {
        this.animationId = requestAnimationFrame(this.animate);
        const core = this.getCore();
        if (!this.composer || !this.ornamentSystem) return;

        const dt = this.clock.getDelta();
        this.updateRotation(dt);

        this.updateCameraFocus(dt);

        core.mainGroup.updateWorldMatrix(true, false);
        this.ornamentSystem.update(this.state, dt);
        this.snowSystem?.update(this.clock);
        this.composer.render();
    };

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
     * Smooth camera focus when entering/leaving FOCUS mode.
     */
    private updateCameraFocus(dt: number) {
        const core = this.getCore();
        if (!this.baseCameraPos) return;

        if (this.state.mode === "FOCUS" && this.state.focusTarget) {
            this.state.focusTarget.getWorldPosition(this.focusTargetWorld);
            this.focusDirection
                .subVectors(core.camera.position, this.focusTargetWorld)
                .normalize();
            if (this.focusDirection.lengthSq() < 1e-6) {
                this.focusDirection.set(0, 0, 1);
            }
            this.focusCameraPos
                .copy(this.focusTargetWorld)
                .addScaledVector(this.focusDirection, 6);
            core.camera.position.lerp(this.focusCameraPos, 3.0 * dt);
            core.camera.lookAt(this.focusTargetWorld);
            return;
        }

        core.camera.position.lerp(this.baseCameraPos, 2.0 * dt);
        core.camera.lookAt(this.baseLookAt);
    }

    /**
     * Handle resize for camera and composer.
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

