import type * as THREE from "three";

/** Three.js 粒子系统的运行模式 */
export type ParticleMode = "TREE" | "SCATTER" | "FOCUS";

/** TreeExperience 的运行态数据，记录旋转、聚焦对象等信息 */
export interface TreeState {
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
}

/** SceneManager 初始化后对外暴露的核心 Three.js 句柄 */
export interface ThreeCore {
    scene: THREE.Scene;
    mainGroup: THREE.Group;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
}
