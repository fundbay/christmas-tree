<template>
    <div
        ref="threeContainer"
        class="absolute top-0 left-0 z-[1] block h-screen w-full overflow-hidden bg-[#282c34]"
    ></div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount, onUnmounted } from "vue";
import * as THREE from "three";
import type { HandTrackingData } from "../mediapipe/types";
import { TreeExperience } from "../three/core/TreeExperience";

const props = defineProps<{
    newTexture: THREE.Texture | null;
    handTrackingData: HandTrackingData | null;
}>();

const emit = defineEmits<{
    (e: "tree-render-completed"): void;
}>();

const threeContainer = ref<HTMLDivElement | null>(null);
let experience: TreeExperience | null = null;

// 当父组件传入新的照片纹理时，将纹理交给三维体验实例生成新的装饰物
watch(
    () => props.newTexture,
    (texture) => {
        if (texture && experience) {
            experience.addPhotoTexture(texture);
        }
    }
);

// 将最新的手势识别数据推送到三维体验实例，用于驱动模式切换/旋转
watch(
    () => props.handTrackingData,
    (data) => {
        experience?.setHandTrackingData(data ?? null);
    },
    { deep: true }
);

// 初始化三维体验，挂载 Three.js 场景并告知父组件准备完成
const initExperience = () => {
    if (!threeContainer.value) return;
    experience = new TreeExperience(threeContainer.value);
    experience.mount();
    if (props.handTrackingData) {
        experience.setHandTrackingData(props.handTrackingData);
    }
    emit("tree-render-completed");
};

// 统一的资源释放函数，确保 WebGL 资源和事件被清理
const disposeExperience = () => {
    experience?.destroy();
    experience = null;
};

onMounted(initExperience);
onBeforeUnmount(disposeExperience);
onUnmounted(disposeExperience);
</script>
