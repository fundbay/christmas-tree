<h1 align="center">手势交互圣诞树 🎄</h1>

> 2025 年 TikTok 爆火的 3D 手势圣诞树，支持自定义相册、摄像头手势互动、网易云背景音乐，以及手机/平板/桌面响应式体验。

- 在线体验（需允许摄像头）：https://fundbay.github.io/christmas-tree/
- 可本地运行或导出单个 `index.html`，方便分享、离线播放

---

## ✨ 功能特性

- **Three.js 场景与装饰系统**：树体、粒子、Bloom 后期、可扩展的装饰品（圣诞帽、糖果手杖等）。
- **自定义相册**：上传文件/文件夹或在 `./images` 放置 `1.jpg~n.jpg` 加载自定义照片。
- **手势控制**：握拳 → 圣诞树模式、张开 → 星球模式、捏合手指 → 放大图片，随心所欲。
- **网易云背景音乐**：`NeteasePlayer` 组件可替换为自定义背景音乐。
- **Tailwind UI + 响应式**：所有组件集成 TailwindCSS；手机/平板自动隐藏面板，仅保留上传按钮；桌面端可按 `H` 显隐 UI。
- **单文件导出**：`npm run build:single` 生成离线可用的 `index.html`。

---

## 📁 目录结构

```
├── src
│   ├── assets / style.css        # 全局样式（含背景、标题字体）
│   ├── components                # Vue 单文件组件（圣诞树、Loading、Webcam 等）
│   ├── pages/HomePage.vue        # 单页入口，整合 UI 控件 / 响应式逻辑
│   ├── mediapipe                 # 手势识别 hooks / services / types
│   └── three                     # Three.js 配置、核心体验、装饰/雪花系统
└── public/mediapipe              # wasm / 模型文件（离线兜底）
```

---

## 🧰 技术栈

| 分类 | 技术 | 说明 |
| --- | --- | --- |
| 框架 | [Vue 3.5](https://cn.vuejs.org/) + `<script setup>` | TypeScript 开发体验 |
| 构建 | [Vite 7](https://cn.vite.dev/) | 极速开发/构建 |
| 3D 渲染 | [Three.js 0.182](https://threejs.org/) | 场景、粒子、Bloom 后期 |
| 手势识别 | [MediaPipe Tasks](https://ai.google.dev/edge/mediapipe) | HandLandmarker |
| UI | TailwindCSS | 无需额外 CSS 预处理器 |

---

## 🚀 快速开始

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run dev

# 3. 生产构建 & 预览
npm run build
npm run preview

# 4. 导出单文件（dist-singlefile/index.html）
npm run build:single
```

> **环境要求**：Node.js 18+；Chrome/Edge/Firefox/Safari 等现代浏览器，并允许摄像头权限。

---

## 📸 使用指引

1. **上传照片**  
   - 桌面端：右上角按钮（支持 Folder / Files 上传）。  
   - 手机/平板：右下角按钮（仅文件上传，图标展示）。  
   - 或在项目根目录新建 `images` 文件夹，放入 `1.jpg~30.jpg`。
2. **隐私声明**  
   - 照片只在本地通过 FileReader → Base64 解码，不会上传服务器；应用不保存任何个人信息。
3. **摄像头授权**  
   - 首次访问需允许摄像头；左下角调试面板会显示手势参数，便于调校。
4. **快捷键（桌面端）**  
   - `H`：显隐 UI（控制面板/摄像头窗口/音乐播放器）。

---

## 📱 响应式说明

- **手机 / 平板**：自动隐藏控制面板、摄像头预览和音乐播放器，仅保留圆形上传按钮，避免 overflow。
- **桌面**：完整 UI 可见，并可按 `H` 键快速切换。
- **标题字体**：自适应大小，确保 “Merry Christmas” 始终单行居中显示。

---

## 📄 单文件运行

1. 执行 `npm run build:single`  
2. 打开 `dist-singlefile/index.html` 即可离线体验  
3. 若浏览器限制本地文件权限，可通过 `npx serve dist-singlefile` 等 HTTP Server 打开

---

## ⚠️ 已知问题

- 个别照片在 Bloom 后期下高光偏亮，可调整 `src/three/core/PostProcessing.ts` 中的参数。

---

## 🤝 参与贡献

欢迎 Issue / PR，共同丰富装饰物、手势交互与 UI 体验。若使用网易云或其他音乐/图片资源，请确认版权。祝大家玩得开心，圣诞快乐！🎅
