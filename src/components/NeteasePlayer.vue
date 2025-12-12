<template>
    <iframe
        :frameborder="frameborder || 'no'"
        :border="border || '0'"
        :marginwidth="marginwidth || '0'"
        :marginheight="marginheight || '0'"
        :width="width || '330'"
        :height="height || '86'"
        :src="
            src ||
            'https://music.163.com/outchain/player?type=2&id=1999170057&auto=1&height=66'
        "
        :allow="iframeAllow || 'autoplay; encrypted-media;'"
    ></iframe>
</template>

<script lang="ts" setup>
const props = defineProps<{
    frameborder?: string;
    border?: string;
    marginwidth?: string;
    marginheight?: string;
    width?: string;
    height?: string;
    src?: string;
    iframeAllow?: string;
}>();
</script>

<style scoped></style>
