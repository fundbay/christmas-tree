import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import type { ThreeCore } from "../types";

/**
 * ??????????? RenderPass + BloomPass?????????
 */
export class PostProcessingPipeline {
    private core: ThreeCore;

    constructor(core: ThreeCore) {
        this.core = core;
    }

    /**
     * ?? EffectComposer??????????????? Bloom ??
     */
    createComposer() {
        const { scene, camera, renderer } = this.core;
        const renderScene = new RenderPass(scene, camera);

        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            1.5,
            0.4,
            0.85
        );
        bloomPass.threshold = 0.65;
        bloomPass.strength = 0.5;
        bloomPass.radius = 0.4;

        const composer = new EffectComposer(renderer);
        composer.addPass(renderScene);
        composer.addPass(bloomPass);
        return composer;
    }
}
