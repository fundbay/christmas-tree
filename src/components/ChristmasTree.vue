<template>
    <div
        ref="threeContainer"
        class="absolute top-0 left-0 z-[1] block h-screen w-full overflow-hidden bg-[#282c34]"
    ></div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount, onUnmounted } from "vue";
import type { HandTrackingData } from "../mediapipe/types";
import { TreeExperience } from "../three/core/TreeExperience";

const props = defineProps<{
    handTrackingData: HandTrackingData | null;
    preloadImages?: string[] | null;
}>();

const emit = defineEmits<{
    (e: "tree-render-completed"): void;
}>();

const threeContainer = ref<HTMLDivElement | null>(null);
let experience: TreeExperience | null = null;
// Push hand tracking data into the experience for mode switching.
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
    experience.mount(props.preloadImages ?? undefined);
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
