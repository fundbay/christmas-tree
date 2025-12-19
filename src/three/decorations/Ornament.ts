import * as THREE from "three";
import type { TreeConfig } from "../config/treeConfig";
import type { ParticleMode, ThreeCore } from "../types";

/** 当前支持的装饰物类型，方便后续扩展更多节日饰品 */
export type OrnamentType =
    | "GIFT_GREEN"
    | "GIFT_GOLD"
    | "GOLDEN_BALL"
    | "RED_BALL"
    | "CANDY_CANE"
    | "SANTA_HAT"
    | "PHOTO"
    | "DUST";

/** 动画更新需要的上下文信息 */
export interface OrnamentUpdateContext {
    mode: ParticleMode;
    focusTarget: THREE.Object3D | null;
    clock: THREE.Clock;
    core: ThreeCore;
}

/**
 * 单个装饰品的数据模型，负责管理其 Tree/Scatter/Foucus 三种状态下的行为
 */
export class Ornament {
    public readonly mesh: THREE.Object3D;
    public readonly type: OrnamentType;
    private readonly isDust: boolean;
    private readonly posTree: THREE.Vector3;
    private readonly posScatter: THREE.Vector3;
    private readonly baseScale: number;
    private readonly spinSpeed: THREE.Vector3;

    constructor(
        mesh: THREE.Object3D,
        type: OrnamentType,
        config: TreeConfig,
        options?: { isDust?: boolean }
    ) {
        this.mesh = mesh;
        this.type = type;
        this.isDust = Boolean(options?.isDust);
        this.posTree = new THREE.Vector3();
        this.posScatter = new THREE.Vector3();
        this.baseScale = mesh.scale.x;
        const speedMult = type === "PHOTO" ? 0.3 : 2.0;
        this.spinSpeed = new THREE.Vector3(
            (Math.random() - 0.5) * speedMult,
            (Math.random() - 0.5) * speedMult,
            (Math.random() - 0.5) * speedMult
        );
        this.calculatePositions(config);
    }

    /** 手动覆盖 Tree 模式的目标位置（照片布局更新时会调用） */
    setTreePosition(x: number, y: number, z: number) {
        this.posTree.set(x, y, z);
    }

    /** 根据当前模式更新位置、旋转和缩放 */
    update(context: OrnamentUpdateContext, dt: number) {
        const { mode, focusTarget, clock, core } = context;
        let target = this.posTree;

        if (mode === "SCATTER" || mode === "FOCUS") {
            target = this.posScatter;
        } else {
            target = this.posTree;
        }

        const lerpSpeed = mode === "TREE" ? 3.0 : 2.0;
        this.mesh.position.lerp(target, lerpSpeed * dt);

        if (mode === "SCATTER" || (mode === "FOCUS" && this.mesh !== focusTarget)) {
            this.mesh.rotation.x += this.spinSpeed.x * dt;
            this.mesh.rotation.y += this.spinSpeed.y * dt;
            this.mesh.rotation.z += this.spinSpeed.z * dt;
        } else if (mode === "TREE" || mode === "FOCUS") {
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

        if (mode === "FOCUS" && this.mesh === focusTarget) {
            this.mesh.lookAt(core.camera.position);
        }

        let scale = this.baseScale;
        if (this.isDust) {
            scale =
                this.baseScale *
                (0.8 + 0.4 * Math.sin(clock.elapsedTime * 4 + this.mesh.id));
            if (mode === "TREE") scale = 0;
        } else if (mode !== "TREE" && this.type === "PHOTO") {
            scale = this.baseScale * 2.5;
        }

        this.mesh.scale.lerp(new THREE.Vector3(scale, scale, scale), 4 * dt);
    }

    /** 初始化 Tree/Scatter 模式的目标位置 */
    private calculatePositions(config: TreeConfig) {
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

        const h = config.particles.treeHeight;
        const halfH = h / 2;
        let t = Math.random();
        t = Math.pow(t, 0.8);
        const y = t * h - halfH;

        let rMax = config.particles.treeRadius * (1.0 - t);
        if (rMax < 0.5) rMax = 0.5;

        const angle = t * 50 * Math.PI + Math.random() * Math.PI;
        const r = rMax * (0.8 + Math.random() * 0.4);
        this.posTree.set(Math.cos(angle) * r, y, Math.sin(angle) * r);

        const rScatter = this.isDust
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
}
