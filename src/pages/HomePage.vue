<template>
    <LoadingSpinner v-if="showLoadingSpinner"></LoadingSpinner>

    <ChristmasTree
        :new-texture="latestTexture"
        :hand-tracking-data="handTrackingData"
        @tree-render-completed="handleTreeRenderCompleted"
    ></ChristmasTree>

    <div id="ui-layer">
        <h1>Merry Christmas</h1>

        <div ref="controlsWrapperRef" class="controls-wrapper">
            <div class="btn-group">
                <label class="upload-btn">
                    Select Folder
                    <input
                        type="file"
                        webkitdirectory
                        directory
                        multiple
                        @change="handleImageUpload"
                    />
                </label>

                <label class="upload-btn">
                    Select Files
                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        @change="handleImageUpload"
                    />
                </label>
            </div>
            <div class="hint-text">
                Use "Select Folder" to load all photos at once
            </div>
            <div class="hint-text" style="opacity: 0.7; font-size: 8px">
                Or put photos in "./images/" (1.jpg - 30.jpg)
            </div>
            <div class="hint-text">Press "H" to hide all the UIs</div>
        </div>
    </div>

    <!-- 音乐播放器 -->
    <div ref="MusicPlayerWrapperRef" class="music-player-wrapper">
        <NeteasePlayer></NeteasePlayer>
    </div>

    <!-- Mediapipe 插件 -->
    <div ref="webcamWrapperRef" class="webcam-wrapper">
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

/**
 * 键盘按键处理函数
 */
const handleKeydown = (e: KeyboardEvent) => {
    /** 按 H 隐藏所有控件 */
    if (e.key.toLowerCase() === "h") {
        // 控制面板
        if (controlsWrapperRef.value) {
            controlsWrapperRef.value.classList.toggle("ui-hidden");
        }
        // 摄像头
        if (webcamWrapperRef.value) {
            webcamWrapperRef.value.classList.toggle("ui-hidden");
        }
        // 音乐播放器
        if (MusicPlayerWrapperRef.value) {
            MusicPlayerWrapperRef.value.classList.toggle("ui-hidden");
        }
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

<style scoped>
/* UI Overlay */
#ui-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    box-sizing: border-box;
    transition: opacity 0.5s ease;
}

.ui-hidden {
    opacity: 0 !important;
    pointer-events: none !important;
}

/* Controls */
.controls-wrapper {
    position: absolute;
    top: 30px;
    right: 30px;
    pointer-events: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    z-index: 20;
    transition: opacity 0.5s ease;
}

/* 上传按钮 */
.btn-group {
    display: flex;
    gap: 10px;
}

/* 统一按钮样式: Select Folder/Files */
.upload-btn {
    background: rgba(20, 20, 20, 0.6);
    border: 1px solid rgba(212, 175, 55, 0.4);
    color: #d4af37;
    padding: 10px 20px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 10px;
    transition: all 0.4s;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
    min-width: 120px;
    height: 38px;
    box-sizing: border-box;
    line-height: 1.2;
}

.upload-btn:hover {
    background: #d4af37;
    color: #000;
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
}

input[type="file"] {
    display: none;
}

/* 文字 */
.hint-text {
    color: rgba(212, 175, 55, 0.5);
    font-size: 9px;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: right;
    margin-top: 5px;
}

/* 网易云音乐 iframe 播放器样式 */
.music-player-wrapper {
    position: absolute;
    bottom: 30px;
    right: 30px;
    pointer-events: auto;
    z-index: 20;
    transition: opacity 0.5s ease;
}

.webcam-wrapper {
    position: absolute;
    bottom: 30px;
    left: 30px;
    width: 280px;
    height: 210px;
    border: 1px solid rgba(212, 175, 55, 0.5);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.9);
    border-radius: 4px;
    overflow: hidden;
    opacity: 1;
    pointer-events: none;
    z-index: 50;
    background: #000;
    transition: opacity 0.5s ease;
}
</style>
