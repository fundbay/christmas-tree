import * as THREE from "three";
import { TREE_CONFIG } from "../config/treeConfig";

interface PhotoLoaderOptions {
    onTexture: (texture: THREE.Texture) => void;
}

/**
 * 图片加载器：统一处理预设图片和本地扫描，并在加载成功时回调
 */
export class PhotoLoader {
    private readonly loader: THREE.TextureLoader;
    private readonly options: PhotoLoaderOptions;

    constructor(options: PhotoLoaderOptions) {
        this.options = options;
        this.loader = new THREE.TextureLoader();
    }

    /**
     * 加载配置文件中的网络图片，同时尝试扫描 ./images 文件夹
     */
    loadPreconfigured() {
        TREE_CONFIG.preload.images.forEach((url) => {
            this.loader.load(
                url,
                (texture) => this.handleTexture(texture),
                undefined,
                (error) => console.error("Texture load error", error)
            );
        });

        if (TREE_CONFIG.preload.autoScanLocal) {
            for (let i = 1; i <= TREE_CONFIG.preload.scanCount; i++) {
                const pathJpg = "./images/" + i + ".jpg";
                const pathPng = "./images/" + i + ".png";
                this.loader.load(
                    pathJpg,
                    (texture) => this.handleTexture(texture),
                    undefined,
                    () => {
                        this.loader.load(
                            pathPng,
                            (texture) => this.handleTexture(texture)
                        );
                    }
                );
            }
        }
    }

    /**
     * ????????????????????
     */
    load(preloadImages?: string[]) {
        if (preloadImages && preloadImages.length > 0) {
            preloadImages.forEach((url) => {
                this.loader.load(
                    url,
                    (texture) => this.handleTexture(texture),
                    undefined,
                    (error) => console.error("Texture load error", error)
                );
            });
            return;
        }

        this.loadPreconfigured();
    }

    private handleTexture(texture: THREE.Texture) {
        texture.colorSpace = THREE.SRGBColorSpace;
        this.options.onTexture(texture);
    }
}
