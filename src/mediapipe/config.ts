/** MediaPipe CDN 资源地址，优先尝试以获得最新模型 */
export const CDN_WASM_PATH =
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.21/wasm";
export const CDN_MODEL_PATH =
    "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task";

/** 摄像头采集参数，限制分辨率与帧率，兼顾性能 */
export const MEDIA_CONSTRAINTS: MediaStreamConstraints = {
    video: {
        width: { ideal: 640 },
        height: { ideal: 480 },
        frameRate: { ideal: 30 },
    },
};
