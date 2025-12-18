import * as THREE from "three";
import type { TreeConfig } from "../config/treeConfig";
import type { OrnamentType } from "./Ornament";

type OrnamentBuilder = () => THREE.Object3D;

/**
 * 装饰物工厂：集中创建不同材质/几何体，保持 TreeExperience 主逻辑干净
 */
export class OrnamentFactory {
    private readonly builders: Map<OrnamentType, OrnamentBuilder>;
    private readonly config: TreeConfig;

    constructor(config: TreeConfig) {
        this.config = config;
        this.builders = new Map<OrnamentType, OrnamentBuilder>();
        this.registerDefaults();
    }

    create(type: OrnamentType): THREE.Object3D {
        const builder = this.builders.get(type);
        if (!builder) {
            throw new Error("Missing ornament builder for type: " + type);
        }
        return builder();
    }

    /** 注册默认装饰品的建造器 */
    private registerDefaults() {
        const sphereGeo = new THREE.SphereGeometry(0.5, 32, 32);
        const boxGeo = new THREE.BoxGeometry(0.55, 0.55, 0.55);
        const candyGeo = this.createCandyCaneGeometry();

        const goldMat = new THREE.MeshStandardMaterial({
            color: this.config.colors.champagneGold,
            metalness: 1.0,
            roughness: 0.1,
            envMapIntensity: 2.0,
            emissive: 0x443300,
            emissiveIntensity: 0.3,
        });

        const greenMat = new THREE.MeshStandardMaterial({
            color: this.config.colors.deepGreen,
            metalness: 0.2,
            roughness: 0.8,
            emissive: 0x002200,
            emissiveIntensity: 0.2,
        });

        const redMat = new THREE.MeshPhysicalMaterial({
            color: this.config.colors.accentRed,
            metalness: 0.3,
            roughness: 0.2,
            clearcoat: 1.0,
            emissive: 0x330000,
        });

        const candyMat = new THREE.MeshStandardMaterial({
            map: this.createCandyCaneTexture(),
            roughness: 0.4,
        });
        const hatMat = new THREE.MeshStandardMaterial({
            color: this.config.colors.accentRed,
            roughness: 0.4,
            metalness: 0.1,
        });
        const furMat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            roughness: 0.9,
            metalness: 0.0,
        });

        this.builders.set("GIFT_GREEN", () => new THREE.Mesh(boxGeo, greenMat));
        this.builders.set("GIFT_GOLD", () => new THREE.Mesh(boxGeo, goldMat));
        this.builders.set(
            "GOLDEN_BALL",
            () => new THREE.Mesh(sphereGeo, goldMat)
        );
        this.builders.set("RED_BALL", () => new THREE.Mesh(sphereGeo, redMat));
        this.builders.set(
            "CANDY_CANE",
            () => new THREE.Mesh(candyGeo, candyMat)
        );
        this.builders.set("SANTA_HAT", () =>
            this.createSantaHatMesh(hatMat, furMat)
        );
    }

    /** 绘制糖果手杖条纹贴图，避免额外图片资源 */
    private createCandyCaneTexture() {
        const canvas = document.createElement("canvas");
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext("2d")!;
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, 128, 128);
        ctx.fillStyle = "#880000";
        ctx.beginPath();
        const stripeWidth = 64;
        for (let i = -256; i < 512; i += stripeWidth) {
            ctx.moveTo(i, 0);
            ctx.lineTo(i + stripeWidth, 128);
            ctx.lineTo(i + stripeWidth - stripeWidth / 2, 256);
            ctx.lineTo(i - stripeWidth / 2, 0);
        }
        ctx.fill();
        const texture = new THREE.CanvasTexture(canvas);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(5, 5);
        return texture;
    }

    /** 通过曲线 + TubeGeometry 生成糖果手杖造型 */
    private createCandyCaneGeometry() {
        const curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, -0.5, 0),
            new THREE.Vector3(0, 0.3, 0),
            new THREE.Vector3(0.1, 0.5, 0),
            new THREE.Vector3(0.3, 0.4, 0),
        ]);
        return new THREE.TubeGeometry(curve, 16, 0.12, 8, false);
    }

    private createSantaHatMesh(
        hatMaterial: THREE.Material,
        furMaterial: THREE.Material
    ) {
        const group = new THREE.Group();

        const cone = new THREE.Mesh(
            new THREE.ConeGeometry(0.35, 0.9, 24),
            hatMaterial
        );
        cone.position.y = 0.35;
        group.add(cone);

        const brim = new THREE.Mesh(
            new THREE.CylinderGeometry(0.45, 0.45, 0.15, 24),
            furMaterial
        );
        brim.position.y = -0.05;
        group.add(brim);

        const pom = new THREE.Mesh(
            new THREE.SphereGeometry(0.15, 16, 16),
            furMaterial
        );
        pom.position.set(0.05, 0.8, 0.05);
        group.add(pom);

        return group;
    }
}
