<template>
    <!-- 简单的加载过渡动画，用于 Three.js 初始化阶段 -->
    <div
        class="absolute inset-0 z-[100] flex h-full w-full flex-col items-center justify-center bg-[#050d1a] transition-opacity duration-700 ease-out"
    >
        <div
            class="h-10 w-10 rounded-full border border-[rgba(212,175,55,0.2)] border-t-[#d4af37] animate-spin"
        ></div>
        <div
            class="mt-5 text-[14px] font-thin uppercase tracking-[4px] text-[#d4af37]"
        >
            Loading Memories
        </div>
    </div>
</template>

<script lang="ts" setup></script>
