import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteSingleFile } from "vite-plugin-singlefile";

// https://vite.dev/config/
export default defineConfig({
    base: "/christmas-tree/",
    build: {
        outDir: "dist-singlefile", // 输出目录改为 'dist-singlefile'
        cssCodeSplit: false, // 禁用 CSS 代码分割，确保 CSS 被内联
        // 可选：禁用哈希命名，让最终的 HTML 文件名保持不变（即 index.html）
        rollupOptions: {
            output: {
                entryFileNames: `assets/[name].js`,
                chunkFileNames: `assets/[name].js`,
                assetFileNames: `assets/[name].[ext]`,
            },
        },
    },
    plugins: [vue(), viteSingleFile()],
});
