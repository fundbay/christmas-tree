import {
    FilesetResolver,
    HandLandmarker,
    type HandLandmarkerResult,
} from "@mediapipe/tasks-vision";
import {
    CDN_MODEL_PATH,
    CDN_WASM_PATH,
    MEDIA_CONSTRAINTS,
} from "../config";
import type { HandTrackingData } from "../types";

export interface HandTrackerOptions {
    delegate: "CPU" | "GPU";
    numHands: number;
    debugElement?: HTMLElement | null;
    debugMode?: boolean;
}

export interface HandTrackerCallbacks {
    onData: (data: HandTrackingData) => void;
    onReady: () => void;
    onError: (message: string) => void;
}

/**
 * 对 @mediapipe/tasks-vision 的封装，负责模型加载、相机采集和手势解析
 */
export class HandTrackerService {
    private handLandmarker: HandLandmarker | null;
    private lastVideoTime: number;
    private animationFrameId: number | null;
    private video: HTMLVideoElement;
    private options: HandTrackerOptions;
    private callbacks: HandTrackerCallbacks;

    constructor(
        video: HTMLVideoElement,
        options: HandTrackerOptions,
        callbacks: HandTrackerCallbacks
    ) {
        this.video = video;
        this.options = options;
        this.callbacks = callbacks;
        this.handLandmarker = null;
        this.lastVideoTime = -1;
        this.animationFrameId = null;
    }

    /** 初始化模型和摄像头流 */
    async init() {
        if (!this.video) return;
        this.updateDebug("Loading MediaPipe models...");

        try {
            const loaded = await this.tryLoadModels();
            if (!loaded) {
                throw new Error("Unable to load MediaPipe models.");
            }

            const stream = await navigator.mediaDevices.getUserMedia(
                MEDIA_CONSTRAINTS
            );
            this.video.srcObject = stream;
            this.video.addEventListener("loadeddata", () => {
                this.video.play();
                this.callbacks.onReady();
                this.predict();
            });
            this.updateDebug("Webcam active. Show hand.");
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            this.updateDebug(`Camera Error: ${message}`);
            this.callbacks.onError(message);
        }
    }

    /** 关闭动画循环与摄像头，释放资源 */
    dispose() {
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
        if (this.handLandmarker) {
            this.handLandmarker.close();
            this.handLandmarker = null;
        }
        if (this.video.srcObject) {
            (this.video.srcObject as MediaStream)
                .getTracks()
                .forEach((track) => track.stop());
            this.video.srcObject = null;
        }
    }

    /** 依次尝试 CDN 与本地模型，保证离线可用 */
    private async tryLoadModels() {
        try {
            await this.loadFrom(CDN_WASM_PATH, CDN_MODEL_PATH);
            this.updateDebug("Loaded MediaPipe models from CDN.");
            return true;
        } catch (cdnError) {
            console.warn(
                "CDN model loading failed, falling back to local files.",
                cdnError
            );
            const BASE_URL = import.meta.env.BASE_URL;
            try {
                await this.loadFrom(
                    `${BASE_URL}mediapipe/wasm`,
                    `${BASE_URL}mediapipe/models/hand_landmarker.task`
                );
                this.updateDebug("Loaded MediaPipe models from local assets.");
                return true;
            } catch (localError) {
                console.error("MediaPipe model loading failed", localError);
                return false;
            }
        }
    }

    /** 根据传入的 wasm 和模型路径去实例化 HandLandmarker */
    private async loadFrom(wasmPath: string, modelPath: string) {
        const vision = await FilesetResolver.forVisionTasks(wasmPath);
        this.handLandmarker = await HandLandmarker.createFromOptions(vision, {
            baseOptions: {
                modelAssetPath: modelPath,
                delegate: this.options.delegate,
            },
            runningMode: "VIDEO",
            numHands: this.options.numHands,
        });
    }

    /** 使用 requestAnimationFrame 轮询视频帧并解析手势 */
    private predict() {
        if (!this.handLandmarker) {
            this.animationFrameId = requestAnimationFrame(() => this.predict());
            return;
        }

        if (this.video.currentTime !== this.lastVideoTime) {
            this.lastVideoTime = this.video.currentTime;
            const result = this.handLandmarker.detectForVideo(
                this.video,
                performance.now()
            );
            const data = this.processGestures(result);
            this.callbacks.onData(data);
        }

        this.animationFrameId = requestAnimationFrame(() => this.predict());
    }

    /** 将 MediaPipe 原始 landmarks 转换为 HandTrackingData */
    private processGestures(result: HandLandmarkerResult): HandTrackingData {
        if (result.landmarks && result.landmarks.length > 0) {
            const lm = result.landmarks[0]!;
            const thumb = lm[4]!;
            const index = lm[8]!;
            const wrist = lm[0]!;
            const middleMCP = lm[9]!;

            const position = {
                x: (middleMCP.x - 0.5) * 2,
                y: (middleMCP.y - 0.5) * 2,
            };

            const handSize = Math.hypot(
                middleMCP.x - wrist.x,
                middleMCP.y - wrist.y
            );

            if (handSize < 0.02) {
                return {
                    detected: false,
                    position,
                    ratios: { extensionRatio: 0, pinchRatio: 0, handSize: 0 },
                };
            }

            const tips = [lm[8], lm[12], lm[16], lm[20]];
            let avgTipDist = 0;
            tips.forEach((t) => {
                avgTipDist += Math.hypot(t!.x - wrist.x, t!.y - wrist.y);
            });
            avgTipDist /= 4;

            const pinchDist = Math.hypot(
                thumb.x - index.x,
                thumb.y - index.y
            );

            const ratios = {
                handSize,
                extensionRatio: avgTipDist / handSize,
                pinchRatio: pinchDist / handSize,
            };

            if (this.options.debugMode && this.options.debugElement) {
                this.options.debugElement.innerText = `Detected | Ext: ${ratios.extensionRatio.toFixed(
                    2
                )} | Pinch: ${ratios.pinchRatio.toFixed(
                    2
                )} | Pos: (${position.x.toFixed(2)}, ${position.y.toFixed(2)})`;
            }

            return {
                detected: true,
                position,
                ratios,
            };
        }

        this.updateDebug("No hand detected");
        return {
            detected: false,
            position: { x: 0, y: 0 },
            ratios: { extensionRatio: 0, pinchRatio: 0, handSize: 0 },
        };
    }

    private updateDebug(message: string) {
        if (this.options.debugMode && this.options.debugElement) {
            this.options.debugElement.innerText = message;
        }
    }
}
