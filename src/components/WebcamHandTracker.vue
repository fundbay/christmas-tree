<template>
    <div>
        <!-- 仅负责渲染 video 标签，具体逻辑交由 useHandTracker 处理 -->
        <video
            ref="webcamVideo"
            class="h-full w-full -scale-x-100 object-cover"
            autoplay
            playsinline
        ></video>

        <!-- 调试层：实时展示 MediaPipe 加载状态和手势数值 -->
        <div
            v-show="debugMode"
            ref="debugInfo"
            class="pointer-events-none absolute bottom-1 left-1 right-1 bg-[rgba(0,0,0,0.5)] px-1.5 py-1 font-mono text-[10px] text-[rgba(212,175,55,0.8)]"
        >
            Awaiting MediaPipe initialization...
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, toRef } from "vue";
import type { HandTrackingData } from "../mediapipe/types";
import { useHandTracker } from "../mediapipe/hooks/useHandTracker";

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
const debugMode = toRef(props, "debugMode");

const emit = defineEmits<{
    (e: "tracking-data", data: HandTrackingData): void;
    (e: "error", message: string): void;
    (e: "ready"): void;
}>();

const webcamVideo = ref<HTMLVideoElement | null>(null);
const debugInfo = ref<HTMLElement | null>(null);

// 通过组合式函数封装 MediaPipe 初始化、预测和事件回调
useHandTracker({
    getVideoElement: () => webcamVideo.value,
    getDebugElement: () => debugInfo.value,
    delegate: props.delegate,
    numHands: props.numHands,
    debugMode: debugMode.value,
    emitters: {
        onTrackingData: (data) => emit("tracking-data", data),
        onReady: () => emit("ready"),
        onError: (message) => emit("error", message),
    },
});
</script>
