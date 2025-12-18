<template>
    <LoadingSpinner v-if="showLoadingSpinner"></LoadingSpinner>

    <ChristmasTree
        :new-texture="latestTexture"
        :hand-tracking-data="handTrackingData"
        @tree-render-completed="handleTreeRenderCompleted"
    ></ChristmasTree>

    <div
        id="ui-layer"
        class="pointer-events-none absolute inset-0 z-10 flex flex-col items-center pt-10 transition-opacity duration-500 ease-out"
    >
        <h1>Merry Christmas</h1>

        <div
            ref="controlsWrapperRef"
            class="pointer-events-auto absolute right-8 top-8 z-20 flex flex-col items-end gap-2.5 transition-opacity duration-500 ease-out"
        >
            <div class="flex gap-2.5">
                <label
                    class="group flex h-[38px] min-w-[120px] cursor-pointer items-center justify-center border border-[rgba(212,175,55,0.4)] bg-[rgba(20,20,20,0.6)] px-5 text-[10px] uppercase tracking-[2px] text-[#d4af37] transition duration-300 hover:bg-[#d4af37] hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] backdrop-blur-sm"
                >
                    Select Folder
                    <input
                        type="file"
                        class="hidden"
                        webkitdirectory
                        directory
                        multiple
                        @change="handleImageUpload"
                    />
                </label>

                <label
                    class="group flex h-[38px] min-w-[120px] cursor-pointer items-center justify-center border border-[rgba(212,175,55,0.4)] bg-[rgba(20,20,20,0.6)] px-5 text-[10px] uppercase tracking-[2px] text-[#d4af37] transition duration-300 hover:bg-[#d4af37] hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] backdrop-blur-sm"
                >
                    Select Files
                    <input
                        type="file"
                        class="hidden"
                        multiple
                        accept="image/*"
                        @change="handleImageUpload"
                    />
                </label>
            </div>
            <div
                class="mt-1.5 text-right text-[9px] uppercase tracking-[1px] text-[rgba(212,175,55,0.5)]"
            >
                Use "Select Folder" to load all photos at once
            </div>
            <div
                class="mt-1 text-right text-[8px] uppercase tracking-[1px] text-[rgba(212,175,55,0.35)]"
            >
                Or put photos in "./images/" (1.jpg - 30.jpg)
            </div>
            <div
                class="mt-1.5 text-right text-[9px] uppercase tracking-[1px] text-[rgba(212,175,55,0.5)]"
            >
                Press "H" to hide all the UIs
            </div>
        </div>
    </div>

    <!-- 音乐播放器 -->
    <div
        ref="MusicPlayerWrapperRef"
        class="pointer-events-auto absolute bottom-8 right-8 z-20 transition-opacity duration-500 ease-out"
    >
        <NeteasePlayer></NeteasePlayer>
    </div>

    <!-- Mediapipe 插件 -->
    <div
        ref="webcamWrapperRef"
        class="pointer-events-none absolute bottom-8 left-8 z-50 h-[210px] w-[280px] overflow-hidden rounded border border-[rgba(212,175,55,0.5)] bg-black shadow-[0_0_20px_rgba(0,0,0,0.9)] transition-opacity duration-500 ease-out"
    >
        <WebcamHandTracker
            :debug-mode="true"
            delegate="GPU"
            @tracking-data="handleHandData"
            @error="handleTrackerError"
            @ready="handleTrackerReady"
        ></WebcamHandTracker>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import ChristmasTree from "../components/ChristmasTree.vue";
import NeteasePlayer from "../components/NeteasePlayer.vue";
import WebcamHandTracker from "../components/WebcamHandTracker.vue";
import * as THREE from "three";
import type { HandTrackingData } from "../types/handTracking";

/**
 * DOM 引用声明 (使用 ref)
 */
// 声明文件上传相关变量
const latestTexture = ref<THREE.Texture | null>(null);

// 用于切换 class 的 UI 元素（虽然它们不是 input，但我们仍可通过 ref 访问）
const controlsWrapperRef = ref<HTMLElement | null>(null);
const webcamWrapperRef = ref<HTMLElement | null>(null);
const MusicPlayerWrapperRef = ref<HTMLElement | null>(null);

// 响应式状态：接收 WebcamHandTracker 发出的原始手部数据
const handTrackingData = ref<HandTrackingData>({
    detected: false,
    position: { x: 0, y: 0 },
    ratios: { extensionRatio: 0, pinchRatio: 0, handSize: 0 },
});

/**
 * Loading Spinner 控制器
 * - true: 加载器存在并可见 (初始状态)
 * - false: 加载器被移除
 */
const showLoadingSpinner = ref(true);

const toggleUiVisibility = (
    element: HTMLElement | null,
    togglePointerEvents = true
) => {
    if (!element) return;
    element.classList.toggle("opacity-0");
    if (togglePointerEvents) {
        element.classList.toggle("pointer-events-none");
        element.classList.toggle("pointer-events-auto");
    }
};

/**
 * 键盘按键处理函数
 */
const handleKeydown = (e: KeyboardEvent) => {
    /** 按 H 隐藏所有控件 */
    if (e.key.toLowerCase() === "h") {
        toggleUiVisibility(controlsWrapperRef.value, true);
        toggleUiVisibility(webcamWrapperRef.value, false);
        toggleUiVisibility(MusicPlayerWrapperRef.value, true);
    }
};

/**
 * 上传照片处理函数
 */
const handleImageUpload = (e: Event): void => {
    /**
     * 断言 e.target 是一个 HTMLInputElement，它有 files 属性
     */
    const inputElement = e.target as HTMLInputElement | null;

    /**
     * 运行时检查和类型守卫
     */
    if (!inputElement || !inputElement.files) return;

    // files 是 FileList 类型
    const files = inputElement.files;
    if (files.length === 0) return;

    Array.from(files).forEach((f: File) => {
        /**
         * 检查文件类型
         */
        if (!f.type.startsWith("image/")) return;

        /**
         * 读取文件
         */
        const reader = new FileReader();
        reader.onload = (ev: ProgressEvent<FileReader>) => {
            /** 确保 result 存在且是字符串 (Data URL) */
            const result = ev.target?.result;
            if (typeof result !== "string") return;

            /** 使用 TextureLoader 加载纹理 */
            new THREE.TextureLoader().load(result, (t: THREE.Texture) => {
                t.colorSpace = THREE.SRGBColorSpace;
                /** 更新状态，通知子组件 */
                latestTexture.value = t;
                /** 重要：为了能够连续上传，这里可以重置输入框，触发下一次 change 事件 */
                inputElement.value = "";
            });
        };
        reader.readAsDataURL(f);
    });
};

/**
 * 处理 WebcamHandTracker 组件回传手部追踪数据的函数
 */
function handleHandData(data: HandTrackingData) {
    /**
     * 更新手部追踪数据状态
     */
    handTrackingData.value = data;
}

/**
 * 处理 WebcamHandTracker 组件错误事件
 */
function handleTrackerError(message: string) {
    console.error("Webcam Tracker Component Error:", message);
}

/**
 * 处理 WebcamHandTracker 组件就绪事件
 */
function handleTrackerReady() {
    console.log("Webcam Tracker Component Ready !");
}

/**
 * 处理 ChristmasTree 组件渲染完成事件
 */
const handleTreeRenderCompleted = () => {
    // showLoadingSpinner.value = false;
    setTimeout(() => (showLoadingSpinner.value = false), 800);
};

onMounted(() => {
    /**
     * 绑定事件监听器
     */

    /** 窗口绑定 keydown 事件，用于隐藏/显示 UI */
    window.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
    /** 解绑窗口 keydown 事件 */
    window.removeEventListener("keydown", handleKeydown);
});
</script>
