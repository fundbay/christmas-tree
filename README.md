# 手势交互圣诞树

2025 TikTok 很火的 3D 手势交互圣诞树，支持添加自定义图片。

示例页面（需要授权摄像头功能）：https://fundbay.github.io/christmas-tree/

持续维护更新中...

已知存在问题：

-   图片过曝（修复中）

## 开发框架

-   Vue.js
    -   渐进式 JavaScript 框架
    -   版本：3.5.x
    -   [官方文档](https://cn.vuejs.org/)
-   Vite.js
    -   前端构建工具
    -   版本：7.2.x
    -   [官方文档](https://cn.vite.dev/)
-   Three.js
    -   JavaScript 3D Library
    -   版本：0.182.x
    -   [官方文档](https://threejs.org/)
-   mediapipe
    -   由 Google Research 开发的一个开源、跨平台的框架，专门用于构建和部署多媒体（例如视频、音频）上的机器学习（ML）解决方案。
    -   版本：0.10.x
    -   [官方文档](https://ai.google.dev/edge/mediapipe/solutions/guide)

## 功能介绍

-   支持本地运行（无需构建服务器）

    1. 使用 `npm run build:single` 命令构建单个 index.html 文件

    2. 在 `dist-singlefile` 目录找到 index.html

    3. 在本地浏览器打开 index.html 文件

-   支持上传自定义图片

    -   可通过 `文件` 或者 `文件夹` 方式上传自定义图片

    -   **< 隐私保护声明 >** 个人上传的自定义图片由本地浏览器（Chrome/Firefox/Safari...）做 Base64 编码后直接读取，而不是上传到服务器。**\* 本应用不会保存任何个人信息**
