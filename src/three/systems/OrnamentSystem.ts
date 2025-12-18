import * as THREE from "three";
import { TREE_CONFIG } from "../config/treeConfig";
import type { TreeConfig } from "../config/treeConfig";
import type { TreeState, ThreeCore } from "../types";
import { Ornament, type OrnamentType } from "../decorations/Ornament";
import { OrnamentFactory } from "../decorations/OrnamentFactory";

/** 统一管理所有装饰物（含照片/尘埃），负责创建、更新及回收 */
export class OrnamentSystem {
    private readonly ornaments: Ornament[];
    private readonly photoGroup: THREE.Group;
    private readonly factory: OrnamentFactory;
    private readonly core: ThreeCore;
    private readonly clock: THREE.Clock;
    private readonly config: TreeConfig;

    constructor(
        core: ThreeCore,
        clock: THREE.Clock,
        config: TreeConfig = TREE_CONFIG
    ) {
        this.core = core;
        this.clock = clock;
        this.config = config;
        this.ornaments = [];
        this.photoGroup = new THREE.Group();
        this.factory = new OrnamentFactory(config);
        this.core.mainGroup.add(this.photoGroup);
    }

    /** 根据配置随机生成基础装饰物和顶部星星 */
    populateBaseDecorations() {
        const total = this.getResponsiveParticleCount(
            this.config.particles.count,
            "ornaments"
        );
        for (let i = 0; i < total; i++) {
            const type = this.pickRandomType();
            const mesh = this.factory.create(type);
            const scale = 0.4 + Math.random() * 0.5;
            mesh.scale.set(scale, scale, scale);
            mesh.rotation.set(
                Math.random() * 6,
                Math.random() * 6,
                Math.random() * 6
            );
            this.core.mainGroup.add(mesh);
            this.ornaments.push(new Ornament(mesh, type, this.config));
        }

        this.createStar();
        this.createDust();
    }

    /** 将新的用户图片转换为三维相框并加入系统 */
    addPhoto(texture: THREE.Texture) {
        texture.colorSpace = THREE.SRGBColorSpace;

        let photoWidth = 1.2;
        let photoHeight = 1.2;
        if (texture.image) {
            const image = texture.image as { width: number; height: number };
            const aspect = image.width / image.height;
            if (aspect > 1) {
                photoHeight = photoWidth / aspect;
            } else {
                photoWidth = photoHeight * aspect;
            }
        }

        const borderSize = 0.05;
        const frameThickness = 0.05;
        const frameWidth = photoWidth + borderSize * 2;
        const frameHeight = photoHeight + borderSize * 2;

        const frameGeo = new THREE.BoxGeometry(
            frameWidth,
            frameHeight,
            frameThickness
        );
        const frameMat = new THREE.MeshStandardMaterial({
            color: this.config.colors.champagneGold,
            metalness: 1.0,
            roughness: 0.1,
        });
        const frame = new THREE.Mesh(frameGeo, frameMat);

        const photoGeo = new THREE.PlaneGeometry(photoWidth, photoHeight);
        const photoMat = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide,
        });
        const photo = new THREE.Mesh(photoGeo, photoMat);
        photo.position.z = frameThickness / 2 + 0.001;

        const group = new THREE.Group();
        group.add(frame);
        group.add(photo);
        const s = 0.8;
        group.scale.set(s, s, s);

        this.photoGroup.add(group);
        this.ornaments.push(new Ornament(group, "PHOTO", this.config));
        this.updatePhotoLayout();
    }

    /** 每一帧为所有 Ornament 推动动画 */
    update(state: TreeState, dt: number) {
        if (!this.ornaments.length) return;
        this.ornaments.forEach((ornament) =>
            ornament.update(
                {
                    mode: state.mode,
                    focusTarget: state.focusTarget,
                    clock: this.clock,
                    core: this.core,
                },
                dt
            )
        );
    }

    /** 从已有照片中抽取一个，用于手势聚焦 */
    getRandomPhotoMesh(): THREE.Object3D | null {
        const photos = this.ornaments.filter((o) => o.type === "PHOTO");
        if (!photos.length) return null;
        const index = Math.floor(Math.random() * photos.length);
        return photos[index]!.mesh;
    }

    /** 回收 Three 对象引用，避免内存泄漏 */
    dispose() {
        this.photoGroup.clear();
        this.ornaments.splice(0, this.ornaments.length);
    }

    private pickRandomType(): OrnamentType {
        const rand = Math.random();
        if (rand < 0.35) return "GIFT_GREEN";
        if (rand < 0.65) return "GIFT_GOLD";
        if (rand < 0.88) return "GOLDEN_BALL";
        if (rand < 0.93) return "RED_BALL";
        if (rand < 0.98) return "SANTA_HAT";
        return "CANDY_CANE";
    }

    private createStar() {
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
        star.position.set(0, this.config.particles.treeHeight / 2 + 1.2, 0);
        this.core.mainGroup.add(star);
    }

    private createDust() {
        const geo = new THREE.TetrahedronGeometry(0.08, 0);
        const mat = new THREE.MeshBasicMaterial({
            color: 0xffeebb,
            transparent: true,
            opacity: 0.8,
        });

        const total = this.getResponsiveParticleCount(
            this.config.particles.dustCount,
            "dust"
        );
        for (let i = 0; i < total; i++) {
            const mesh = new THREE.Mesh(geo, mat);
            mesh.scale.setScalar(0.5 + Math.random());
            this.core.mainGroup.add(mesh);
            this.ornaments.push(
                new Ornament(mesh, "DUST", this.config, { isDust: true })
            );
        }
    }

    /** 以螺旋方式重新计算所有照片的树形位置 */
    private updatePhotoLayout() {
        const photos = this.ornaments.filter((o) => o.type === "PHOTO");
        const count = photos.length;
        if (!count) return;

        const h = this.config.particles.treeHeight * 0.9;
        const bottomY = -h / 2;
        const stepY = h / count;
        const loops = 3;

        photos.forEach((p, i) => {
            const y = bottomY + stepY * i + stepY / 2;
            const fullH = this.config.particles.treeHeight;
            const normalizedH = (y + fullH / 2) / fullH;

            let rMax = this.config.particles.treeRadius * (1.0 - normalizedH);
            if (rMax < 1.0) rMax = 1.0;

            const r = rMax + 3.0;
            const angle = normalizedH * Math.PI * 2 * loops + Math.PI / 4;
            p.setTreePosition(Math.cos(angle) * r, y, Math.sin(angle) * r);
        });
    }

    private getResponsiveParticleCount(
        base: number,
        type: keyof TreeConfig["performance"]["particleScale"]
    ) {
        const perf = this.config.performance;
        if (!perf?.responsiveParticles) return base;
        if (typeof window === "undefined") return base;
        if (window.innerWidth >= perf.smallDeviceWidth) return base;
        const scale = perf.particleScale?.[type] ?? 1;
        return Math.max(1, Math.floor(base * scale));
    }
}
