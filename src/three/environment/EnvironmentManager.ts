import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import type { ThreeCore } from "../types";

/** 负责 IBL 与灯光布置的管理器 */
export class EnvironmentManager {
    private pmremGenerator: THREE.PMREMGenerator | null;
    private core: ThreeCore;

    constructor(core: ThreeCore) {
        this.core = core;
        this.pmremGenerator = null;
    }

    /** 构建 PMREM 环境贴图，增加金属材质质感 */
    applyEnvironment() {
        this.pmremGenerator = new THREE.PMREMGenerator(this.core.renderer);
        this.core.scene.environment = this.pmremGenerator.fromScene(
            new RoomEnvironment(),
            0.04
        ).texture;
    }

    /** 配置场景内多种光源，营造节日氛围 */
    setupLights() {
        const { scene, mainGroup } = this.core;

        const ambient = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambient);

        const innerLight = new THREE.PointLight(0xffaa00, 2, 20);
        innerLight.position.set(0, 5, 0);
        mainGroup.add(innerLight);
        mainGroup.add(innerLight.clone());

        const spotGold = new THREE.SpotLight(0xffcc66, 1200);
        spotGold.position.set(30, 40, 40);
        spotGold.angle = 0.5;
        spotGold.penumbra = 0.5;
        scene.add(spotGold);

        const spotBlue = new THREE.SpotLight(0x6688ff, 800);
        spotBlue.position.set(-30, 20, -30);
        scene.add(spotBlue);

        const fill = new THREE.DirectionalLight(0xffeebb, 0.8);
        fill.position.set(0, 0, 50);
        scene.add(fill);
    }

    dispose() {
        this.pmremGenerator?.dispose();
        this.pmremGenerator = null;
    }
}
