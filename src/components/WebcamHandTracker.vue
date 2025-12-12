<template>
    <div>
        <video
            ref="webcamVideo"
            class="webcam-feed"
            autoplay
            playsinline
        ></video>

        <div v-show="debugMode" ref="debugInfo" class="debug-overlay">
            Awaiting MediaPipe initialization...
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { FilesetResolver, HandLandmarker } from "@mediapipe/tasks-vision";
import type { HandTrackingData } from "../types/handTracking";

// ===================================
// 1. 组件 Props 和事件定义
// ===================================

/**
 * 定义组件的 Props 用于接收外部数据
 * - debugMode: 是否显示网络摄像头调试信息 (默认值: true)
 * - delegate: MediaPipe 模型的运行代理 ("CPU" 或 "GPU"，默认值: "GPU")
 * - numHands: HandLandmarker 检测手的数量 (默认值: 1)
 */
interface Props {
    debugMode?: boolean;
    delegate?: "CPU" | "GPU";
    numHands?: number;
}

const props = withDefaults(defineProps<Props>(), {
    debugMode: true,
    delegate: "GPU",
    numHands: 1,
});

/**
 * 定义事件触发器
 * - "tracking-data": 传递 HandTrackingData 对象
 * - "error": 传递错误信息字符串
 * - "ready": 当摄像头和模型准备好时触发
 */
const emit = defineEmits<{
    (e: "tracking-data", data: HandTrackingData): void;
    (e: "error", message: string): void;
    (e: "ready"): void;
}>();

// ===================================
// 2. 定义全局变量
// ===================================

const webcamVideo = ref<HTMLVideoElement | null>(null);
const debugInfo = ref<HTMLElement | null>(null);
let handLandmarker: HandLandmarker | null = null;
let lastVideoTime = -1;
let animationFrameId: number | null = null;
// let isReady = false;

// ===================================
// 3. MediaPipe 核心函数
// ===================================

/**
 * 初始化 MediaPipe 模型和网络摄像头。（异步）
 */
async function initMediaPipe() {
    const video = webcamVideo.value;
    if (!video) return;

    if (debugInfo.value) {
        debugInfo.value.innerText = "Loading MediaPipe models...";
    }

    // 1. 设置摄像头参数
    const constraints: MediaStreamConstraints = {
        video: {
            width: { ideal: 640 },
            height: { ideal: 480 },
            frameRate: { ideal: 30 },
        },
    };

    try {
        // 2. 初始化 FilesetResolver 和 HandLandmarker
        const vision = await FilesetResolver.forVisionTasks("/mediapipe/wasm");
        handLandmarker = await HandLandmarker.createFromOptions(vision, {
            baseOptions: {
                modelAssetPath: "/mediapipe/models/hand_landmarker.task",
                delegate: props.delegate,
            },
            runningMode: "VIDEO",
            numHands: props.numHands,
        });

        // 3. 获取视频流
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;

        video.addEventListener("loadeddata", () => {
            video.play();
            // isReady = true;
            emit("ready");
            predictWebcam();
        });

        if (debugInfo.value) {
            debugInfo.value.innerText = "Webcam active. Show hand.";
        }
    } catch (e) {
        const error = e as Error;
        console.error("MediaPipe/Webcam Init Error:", error);

        const errorMessage = `Camera Error: ${error.message}`;
        if (debugInfo.value) {
            debugInfo.value.innerText = errorMessage;
        }
        emit("error", errorMessage);
    }
}

/**
 * 动画循环：预测手部关键点
 */
async function predictWebcam() {
    const video = webcamVideo.value;
    if (!video || !handLandmarker) {
        animationFrameId = requestAnimationFrame(predictWebcam);
        return;
    }

    if (video.currentTime !== lastVideoTime) {
        lastVideoTime = video.currentTime;

        // MediaPipe 预测
        const result = handLandmarker.detectForVideo(video, performance.now());

        // 处理结果并触发事件
        processGestures(result);
    }

    animationFrameId = requestAnimationFrame(predictWebcam);
}

/**
 * 从 MediaPipe 结果中计算关键的归一化手部数据，并通过事件输出。
 */
function processGestures(result: any) {
    if (result.landmarks && result.landmarks.length > 0) {
        const lm = result.landmarks[0]; // 第一个检测到的手

        const thumb = lm[4];
        const index = lm[8];
        const wrist = lm[0];
        const middleMCP = lm[9]; // 中指指根 (Knuckle)

        // 1. 归一化手部中心 [-1, 1]
        const position = {
            x: (middleMCP.x - 0.5) * 2,
            y: (middleMCP.y - 0.5) * 2,
        };

        // 2. 计算手掌基准大小 (手腕到中指指根的距离)
        const handSize = Math.hypot(
            middleMCP.x - wrist.x,
            middleMCP.y - wrist.y
        );

        if (handSize < 0.02) {
            // 如果手太小或模型不稳定，不输出数据和 emit 事件
            // 否则会因手太小或模型不稳定，导致圣诞树状态跳动的情况
            emit("tracking-data", {
                detected: false,
                position,
                ratios: { extensionRatio: 0, pinchRatio: 0, handSize: 0 },
            } as HandTrackingData);
            return;
        }

        // 3. 计算手指尖端的平均伸展距离
        const tips = [lm[8], lm[12], lm[16], lm[20]];
        let avgTipDist = 0;
        tips.forEach(
            (t: any) => (avgTipDist += Math.hypot(t.x - wrist.x, t.y - wrist.y))
        );
        avgTipDist /= 4;

        // 3. 计算捏合距离 (拇指到食指)
        const pinchDist = Math.hypot(thumb.x - index.x, thumb.y - index.y);

        // 4. 计算相对比例
        const ratios = {
            handSize: handSize,
            extensionRatio: avgTipDist / handSize,
            pinchRatio: pinchDist / handSize,
        };

        // 5. 触发事件，将处理后的数据发送给父组件
        emit("tracking-data", {
            detected: true,
            position,
            ratios,
        } as HandTrackingData);

        // 6. 更新调试信息
        if (props.debugMode && debugInfo.value) {
            debugInfo.value.innerText = `Detected | Ext: ${ratios.extensionRatio.toFixed(
                2
            )} | Pinch: ${ratios.pinchRatio.toFixed(
                2
            )} | Pos: (${position.x.toFixed(2)}, ${position.y.toFixed(2)})`;
        }
    } else {
        // 未检测到手时不触发事件
        // 否则会因手部离开摄像头而导致 handSize 重置误触发握拳指令
        emit("tracking-data", {
            detected: false,
            position: { x: 0, y: 0 },
            ratios: { extensionRatio: 0, pinchRatio: 0, handSize: 0 },
        } as HandTrackingData);

        if (props.debugMode && debugInfo.value) {
            debugInfo.value.innerText = "No hand detected";
        }
    }
}

// ===================================
// 4. 生命周期和清理
// ===================================

onMounted(() => {
    // 检查 navigator.mediaDevices 对象是否存在，并且 getUserMedia 属性的值是否为一个函数。
    // 这明确表达了“检查 API 支持”的意图，并且可以避免 Linter 的警告。
    if (typeof navigator.mediaDevices?.getUserMedia === "function") {
        // 如果支持，则开始初始化 MediaPipe 和摄像头
        initMediaPipe();
    } else {
        // 如果浏览器不支持该 API
        if (debugInfo.value) {
            debugInfo.value.innerText =
                "Error: Webcam/WebRTC API not supported by this browser.";
        }
    }
});

onUnmounted(() => {
    if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
    }
    if (handLandmarker) {
        handLandmarker.close();
        handLandmarker = null;
    }
    // 停止视频流
    if (webcamVideo.value?.srcObject) {
        (webcamVideo.value.srcObject as MediaStream)
            .getTracks()
            .forEach((track) => track.stop());
    }
});
</script>

<style scoped>
/* 视频显示样式 */
.webcam-feed {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scaleX(-1); /* 镜像，以匹配用户视角 */
}

.debug-overlay {
    position: absolute;
    bottom: 5px;
    left: 5px;
    right: 5px;
    color: rgba(212, 175, 55, 0.8);
    font-size: 10px;
    font-family: monospace;
    background: rgba(0, 0, 0, 0.5);
    padding: 2px 5px;
    pointer-events: none;
}
</style>
