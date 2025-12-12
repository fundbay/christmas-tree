<template>
    <LoadingSpinner v-if="showLoader"></LoadingSpinner>

    <ChristmasTree
        :new-texture="latestTexture"
        :interaction-state="appState"
        :hand-tracking-data="handTrackingData"
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
                        ref="folderInputRef"
                        @change="handleImageUpload"
                    />
                </label>

                <label class="upload-btn">
                    Select Files
                    <input
                        type="file"
                        ref="fileInputRef"
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
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import ChristmasTree from "../components/ChristmasTree.vue";
import NeteasePlayer from "../components/NeteasePlayer.vue";
import WebcamHandTracker from "../components/WebcamHandTracker.vue";
import * as THREE from "three";
import type { HandTrackingData } from "../types/handTracking";
import type { TreeState } from "../components/ChristmasTree.vue";

/**
 * DOM 引用声明 (使用 ref)
 */
// 声明文件上传相关变量
const fileInputRef = ref<HTMLInputElement | null>(null);
const folderInputRef = ref<HTMLInputElement | null>(null);
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
 * 键盘按下处理函数
 */
const handleKeydown = (e: KeyboardEvent) => {
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
 * 应用程序状态类型和响应式状态
 */
const appState = reactive<TreeState>({
    mode: "SCATTER",
    focusTarget: null, // 这个通常由 ChristmasTree 组件内部的 THREE.js 逻辑来管理
    hand: {
        detected: false,
        x: 0,
        y: 0,
    },
    rotation: {
        x: 0,
        y: 0,
    },
    particleSystem: [], // 粒子系统数据应该从 Tree 组件获取或管理
});

/**
 * 处理 WebcamHandTracker 手部追踪数据的函数
 */
function handleHandData(data: HandTrackingData) {
    /**
     * 更新手部追踪数据状态
     */
    handTrackingData.value = data;
    // if (!data.detected) {
    //     // 未检测到手时，可以保持当前模式或恢复默认模式
    //     return;
    // }
    // A. 更新手部位置和检测状态
    // appState.hand.detected = data.detected;
    // appState.hand.x = data.position.x;
    // appState.hand.y = data.position.y;
    // B. 根据比例数据判断手势模式 (原 processGestures 的逻辑)
    // const { extensionRatio, pinchRatio } = data.ratios;
    /**
     * 逻辑说明：
     * - 当 extensionRatio 小于 1.5 时，认为是握拳动作，切换到 TREE 模式。
     * - 当 pinchRatio 小于 0.35 时，认为是捏合动作，切换到 FOCUS 模式，并随机选择一个粒子作为焦点。
     * - 当 extensionRatio 大于 1.7 时，认为是张开手动作，切换到 SCATTER 模式。
     * - 这些阈值可以根据实际测试进行调整，以获得更好的用户体验。
     * - 切换模式时，确保只在模式变化时更新状态，避免重复触发。
     * - focusTarget 的选择依赖于 ChristmasTree 组件暴露的粒子系统数据。
     * - 这样设计可以让用户通过简单的手势自然地控制粒子系统的行为。
     * - 注意：focusTarget 的具体实现需要确保 ChristmasTree 组件能够将粒子数据传递回来。
     * - 这样可以实现更丰富的交互体验。
     * - 该逻辑假设 appState.particleSystem 已经包含了粒子数据，并且每个粒子都有 type 和 mesh 属性。
     * - 具体的粒子数据结构需要根据 ChristmasTree 组件的实现进行调整。
     * - 该逻辑可以根据实际需求进行扩展，例如添加更多手势或调整现有手势的响应方式。
     * - 通过这种方式，用户可以通过手势直观地与粒子系统进行交互，提升整体体验。
     */
    // 握拳 (TREE)：变成树 (阈值从 1.4 提高到 1.5，更容易触发)
    // if (extensionRatio < 1.5) {
    //     if (appState.mode !== "TREE") {
    //         appState.mode = "TREE";
    //         appState.focusTarget = null;
    //     }
    // }
    // // 捏合 (FOCUS)：进入聚焦模式 (仅当没有握拳时才检查)
    // else if (pinchRatio < 0.35) {
    //     if (appState.mode !== "FOCUS") {
    //         appState.mode = "FOCUS";
    //         // 🚨 注意：这里需要依赖 ChristmasTree 暴露的粒子系统数据来随机选择 focusTarget
    //         // 您需要确保 ChristmasTree.vue 能将粒子数据传回来。
    //         if (!appState.particleSystem) return;
    //         const photos = appState.particleSystem.filter(
    //             (p: any) => p.type === "PHOTO"
    //         );
    //         if (photos.length) {
    //             appState.focusTarget =
    //                 photos[Math.floor(Math.random() * photos.length)]!.mesh;
    //         }
    //     }
    // }
    // // 张开 (SCATTER)：散开照片
    // else if (extensionRatio > 1.7) {
    //     if (appState.mode !== "SCATTER") {
    //         appState.mode = "SCATTER";
    //         appState.focusTarget = null;
    //     }
    // }
    // console.log(
    //     `Hand Gesture Detected - Mode: ${
    //         appState.mode
    //     }, ExtensionRatio: ${extensionRatio.toFixed(
    //         2
    //     )}, PinchRatio: ${pinchRatio.toFixed(2)}`
    // );
}

/**
 * 处理 WebcamHandTracker 组件错误事件
 */
function handleTrackerError(message: string) {
    console.error("Webcam Tracker Component Error:", message);
    // 可以在这里显示一个用户友好的错误提示
}

/**
 * 处理 WebcamHandTracker 组件就绪事件
 */
function handleTrackerReady() {
    console.log("Webcam Tracker Component Ready !");
}

/**
 * Loading Spinner 控制器
 * - true: 加载器存在并可见 (初始状态)
 * - false: 加载器被移除
 */
const showLoader = ref(true);

async function init() {
    setTimeout(() => (showLoader.value = false), 800);
}

onMounted(() => {
    /**
     * 绑定事件监听器
     * - 文件/文件夹上传输入框绑定 change 事件，用于处理上传
     * - 窗口绑定 keydown 事件，用于隐藏/显示 UI
     */
    if (fileInputRef.value) {
        fileInputRef.value.addEventListener("change", handleImageUpload);
    }

    if (folderInputRef.value) {
        folderInputRef.value.addEventListener("change", handleImageUpload);
    }

    window.addEventListener("keydown", handleKeydown);

    /**
     * 初始化函数
     */
    init();
});

onBeforeUnmount(() => {
    // 窗口事件解绑
    window.removeEventListener("keydown", handleKeydown);

    // 输入事件解绑
    if (fileInputRef.value) {
        fileInputRef.value.removeEventListener("change", handleImageUpload);
    }

    if (folderInputRef.value) {
        folderInputRef.value.removeEventListener("change", handleImageUpload);
    }
});
</script>

<style scoped>
/* 修改背景为深色渐变，不再是纯黑 */
body {
    margin: 0;
    overflow: hidden;
    background: radial-gradient(
        circle at center,
        #0f2027 0%,
        #203a43 50%,
        #2c5364 100%
    );
    background-color: #050d1a; /* Fallback */
    font-family: "Times New Roman", serif;
}

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
h1 {
    color: #fceea7;
    font-size: 56px;
    margin: 0;
    font-weight: 400;
    letter-spacing: 6px;
    text-shadow: 0 0 50px rgba(252, 238, 167, 0.6);
    background: linear-gradient(to bottom, #fff, #eebb66);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Cinzel", "Times New Roman", serif;
    opacity: 0.9;
    transition: opacity 0.5s ease;
}

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
