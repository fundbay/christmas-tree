<template>
    <LoadingSpinner v-if="showLoadingSpinner"></LoadingSpinner>

    <ChristmasTree
        :hand-tracking-data="handTrackingData"
        :preload-images="uploadedImages"
        :key="treeSeed"
        @tree-render-completed="handleTreeRenderCompleted"
    ></ChristmasTree>

    <div
        id="ui-layer"
        class="pointer-events-none absolute inset-0 z-10 flex flex-col items-center pt-10 transition-opacity duration-500 ease-out"
    >
        <h1 class="text-center">Merry Christmas</h1>

        <div
            ref="controlsWrapperRef"
            class="pointer-events-auto absolute right-8 top-8 z-20 hidden flex-col items-end gap-2.5 transition-opacity duration-500 ease-out lg:flex"
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
                class="mt-1.5 text-right text-[9px] uppercase tracking-[1px] text-[rgba(212,175,55,0.5)]"
            >
                Or put photos in "./images/" Folder (Naming by 1.jpg - 30.jpg)
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
        class="pointer-events-auto absolute bottom-8 right-8 z-20 hidden transition-opacity duration-500 ease-out lg:block"
    >
        <NeteasePlayer></NeteasePlayer>
    </div>

    <!-- Mediapipe 插件 -->
    <div
        ref="webcamWrapperRef"
        class="pointer-events-none absolute bottom-8 left-8 z-50 hidden h-[210px] w-[280px] overflow-hidden rounded border border-[rgba(212,175,55,0.5)] bg-black shadow-[0_0_20px_rgba(0,0,0,0.9)] transition-opacity duration-500 ease-out lg:block"
    >
        <WebcamHandTracker
            :debug-mode="true"
            delegate="GPU"
            @tracking-data="handleHandData"
            @error="handleTrackerError"
            @ready="handleTrackerReady"
        ></WebcamHandTracker>
    </div>

    <!-- 移动端上传按钮 -->
    <label
        class="lg:hidden fixed bottom-4 right-4 z-30 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[rgba(212,175,55,0.4)] bg-[rgba(20,20,20,0.75)] text-[#d4af37] shadow-lg backdrop-blur"
        aria-label="Upload Images"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-6 w-6 fill-current"
        >
            <path
                d="M12 3l4 4h-3v6h-2V7H8l4-4zm-7 15h14v2H5v-2z"
            />
        </svg>
        <input
            type="file"
            class="hidden"
            multiple
            accept="image/*"
            @change="handleImageUpload"
        />
    </label>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import ChristmasTree from "../components/ChristmasTree.vue";
import NeteasePlayer from "../components/NeteasePlayer.vue";
import WebcamHandTracker from "../components/WebcamHandTracker.vue";
import type { HandTrackingData } from "../types/handTracking";

/**
 * DOM 引用声明 (使用 ref)
 */
// 声明文件上传相关变量
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

const uploadedImages = ref<string[] | null>(null);
const treeSeed = ref(0);

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
const readFileAsDataUrl = (file: File) =>
    new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (typeof reader.result === "string") {
                resolve(reader.result);
            } else {
                reject(new Error("Invalid file result"));
            }
        };
        reader.onerror = () => reject(reader.error ?? new Error("Read error"));
        reader.readAsDataURL(file);
    });

const handleImageUpload = async (e: Event): Promise<void> => {
    const inputElement = e.target as HTMLInputElement | null;
    if (!inputElement || !inputElement.files) return;

    const files = Array.from(inputElement.files).filter((f) =>
        f.type.startsWith("image/")
    );
    if (files.length == 0) return;

    showLoadingSpinner.value = true;
    try {
        const urls = await Promise.all(files.map(readFileAsDataUrl));
        uploadedImages.value = urls;
        treeSeed.value += 1;
    } catch (error) {
        console.error("Upload image error:", error);
    } finally {
        inputElement.value = "";
    }
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
