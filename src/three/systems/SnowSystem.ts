import * as THREE from "three";
import { TREE_CONFIG } from "../config/treeConfig";
import type { TreeConfig } from "../config/treeConfig";

type SnowflakeState = {
    position: THREE.Vector3;
    fallSpeed: number;
    swaySpeed: number;
    swayOffset: number;
    tiltAxis: THREE.Vector3;
    tiltAngle: number;
    spinAngle: number;
    spinSpeed: number;
    scale: number;
};

/** 简单的雪花粒子系统，负责创建/更新/销毁飘落效果 */
export class SnowSystem {
    private snow: THREE.InstancedMesh | null;
    private readonly scene: THREE.Scene;
    private readonly config: TreeConfig;
    private readonly flakes: SnowflakeState[];
    private readonly dummy: THREE.Object3D;

    constructor(scene: THREE.Scene, config: TreeConfig = TREE_CONFIG) {
        this.scene = scene;
        this.config = config;
        this.snow = null;
        this.flakes = [];
        this.dummy = new THREE.Object3D();
    }

    /** 构建片状雪花网格，并添加到场景 */
    create() {
        const count = this.getResponsiveParticleCount(
            this.config.particles.snowCount
        );
        const geometry = this.createSnowflakeGeometry();
        const material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
            roughness: 0.95,
            metalness: 0.05,
        });

        this.snow = new THREE.InstancedMesh(geometry, material, count);
        this.snow.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        this.scene.add(this.snow);
        this.flakes.length = 0;

        for (let i = 0; i < count; i++) {
            const state: SnowflakeState = {
                position: this.randomSpawnPosition(),
                fallSpeed: Math.random() * 0.2 + 0.05,
                swaySpeed: Math.random() * 0.5 + 0.1,
                swayOffset: Math.random() * Math.PI * 2,
                tiltAxis: new THREE.Vector3(
                    Math.random() * 2 - 1,
                    Math.random() * 2 - 1,
                    Math.random() * 2 - 1
                ).normalize(),
                tiltAngle: Math.random() * Math.PI * 2,
                spinAngle: Math.random() * Math.PI * 2,
                spinSpeed: Math.random() * 2 + 0.5,
                scale: Math.random() * 0.7 + 0.4,
            };
            this.flakes.push(state);
            this.writeMatrix(i, state);
        }
    }

    /** 基于随机速度更新雪花位置，制造飘落与旋转 */
    update(clock: THREE.Clock) {
        if (!this.snow) return;

        const dt = clock.getDelta();
        for (let i = 0; i < this.flakes.length; i++) {
            const flake = this.flakes[i]!;
            flake.position.y -= flake.fallSpeed;
            flake.position.x +=
                Math.sin(clock.elapsedTime * 1.5 + flake.swayOffset) *
                flake.swaySpeed *
                0.02;
            flake.position.z +=
                Math.cos(clock.elapsedTime * 1.2 + flake.swayOffset) *
                flake.swaySpeed *
                0.015;
            flake.spinAngle += flake.spinSpeed * dt;

            if (flake.position.y < -40) {
                flake.position.copy(this.randomSpawnPosition(true));
                flake.tiltAxis = new THREE.Vector3(
                    Math.random() * 2 - 1,
                    Math.random() * 2 - 1,
                    Math.random() * 2 - 1
                ).normalize();
                flake.tiltAngle = Math.random() * Math.PI * 2;
                flake.spinAngle = Math.random() * Math.PI * 2;
                flake.spinSpeed = Math.random() * 2 + 0.5;
                flake.scale = Math.random() * 0.7 + 0.4;
            }

            this.writeMatrix(i, flake);
        }
        this.snow.instanceMatrix.needsUpdate = true;
    }

    dispose() {
        if (!this.snow) return;
        this.scene.remove(this.snow);
        this.snow.geometry.dispose();
        (this.snow.material as THREE.Material).dispose();
        this.snow.dispose();
        this.snow = null;
        this.flakes.length = 0;
    }

    private writeMatrix(index: number, flake: SnowflakeState) {
        if (!this.snow) return;
        const tiltQuat = new THREE.Quaternion().setFromAxisAngle(
            flake.tiltAxis,
            flake.tiltAngle
        );
        const normal = new THREE.Vector3(0, 0, 1).applyQuaternion(tiltQuat);
        const spinQuat = new THREE.Quaternion().setFromAxisAngle(
            normal,
            flake.spinAngle
        );
        this.dummy.position.copy(flake.position);
        this.dummy.quaternion.copy(tiltQuat.multiply(spinQuat));
        this.dummy.scale.setScalar(flake.scale);
        this.dummy.updateMatrix();
        this.snow.setMatrixAt(index, this.dummy.matrix);
    }

    private createSnowflakeGeometry() {
        const shape = new THREE.Shape();
        const steps = 360;
        for (let i = 0; i <= steps; i++) {
            const angle = (i / steps) * Math.PI * 2;
            const point = this.computeSnowflakePoint(angle);
            if (i === 0) shape.moveTo(point.x, point.y);
            else shape.lineTo(point.x, point.y);
        }
        return new THREE.ShapeGeometry(shape);
    }

    private computeSnowflakePoint(theta: number) {
        let pc = { x: theta, y: 0.25 };
        pc = this.fieldA(this.fieldB(pc, 5.0));
        return new THREE.Vector2(
            pc.y * Math.cos(pc.x),
            pc.y * Math.sin(pc.x)
        );
    }

    private fieldA(pc: { x: number; y: number }) {
        pc.y += 0.02 * Math.floor(Math.cos(pc.x * 6.0) * 5.0);
        pc.y += 0.01 * Math.floor(10.0 * Math.cos(pc.x * 30.0));
        pc.y += 0.5 * Math.cos(pc.y * 10.0);
        return pc;
    }

    private fieldB(pc: { x: number; y: number }, f: number) {
        pc.y += 0.1 * Math.cos(pc.y * 100.0 + 10.0);
        pc.y += 0.1 * Math.cos(pc.y * 20.0 + f);
        pc.y += 0.04 * Math.cos(pc.y * 10.0 + 10.0);
        return pc;
    }

    private randomSpawnPosition(reset = false) {
        const xSpread = 120;
        const zStart = 25;
        const zRange = 45;
        const yMin = reset ? 30 : -20;
        const yMax = reset ? 50 : 40;
        return new THREE.Vector3(
            THREE.MathUtils.randFloatSpread(xSpread),
            THREE.MathUtils.randFloat(yMin, yMax),
            -(zStart + Math.random() * zRange)
        );
    }

    private getResponsiveParticleCount(base: number) {
        const perf = this.config.performance;
        if (!perf?.responsiveParticles) return base;
        if (typeof window === "undefined") return base;
        if (window.innerWidth >= perf.smallDeviceWidth) return base;
        const scale = perf.particleScale?.snow ?? 1;
        return Math.max(1, Math.floor(base * scale));
    }
}
