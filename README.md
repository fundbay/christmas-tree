<h1 align="center">手势交互圣诞树 🎄</h1>

> 2025 年 TikTok 爆火的 3D 手势圣诞树，支持上传自定义照片与摄像头手势互动。

- 在线体验（需允许摄像头）：https://fundbay.github.io/christmas-tree/
- 可本地运行或导出单个 `index.html`，方便分享 / 部署

---

## ✨ 功能特性

- **Three.js 场景**：带有环境光、雪花粒子、Bloom 后期、可扩展的装饰系统（支持圣诞帽、糖果手杖等）
- **自定义相册**：上传文件 / 文件夹或在 `./images` 中放置 `1.jpg~n.jpg` 即可
- **MediaPipe 手势**：握拳 → TREE，张开 → SCATTER，捏合 → FOCUS，轻松切换展示状态
- **网易云背景音乐**：支持网易云音乐 iframe 外链播放器，可通过修改 `NeteasePlayer` 组件的 `src` 链接来自定义背景音乐。
- **TailwindCSS 集成**：全部组件已集成 TailwindCSS，支持快速自定义样式，结合 Vite.js 热加载可实时预览自定义样式，无需繁琐的 CSS 调试。
- **单文件导出**：`npm run build:single` 生成离线可用的 `index.html`

---

## 🗂️ 目录结构

```
├── src
│   ├── assets / style.css       # 静态资源 & 全局样式入口
│   ├── components               # Vue 组件（圣诞树、Loading、Webcam 等）
│   ├── pages/HomePage.vue       # 单页入口，包含上传/提示 UI
│   ├── mediapipe                # 手势识别 hooks / services / 类型
│   └── three                    # Three.js 配置、核心体验、装饰系统
└── public/mediapipe             # 本地化的 wasm / 模型兜底资源
```

---

## 🛠️ 技术栈

| 分类 | 技术 | 说明 |
| --- | --- | --- |
| 框架 | [Vue 3.5](https://cn.vuejs.org/) + `<script setup>` | 使用 TypeScript |
| 构建 | [Vite 7](https://cn.vite.dev/) | 快速热更新与打包 |
| 3D 渲染 | [Three.js 0.182](https://threejs.org/) | 圣诞树、粒子、Bloom |
| 手势识别 | [MediaPipe Tasks](https://ai.google.dev/edge/mediapipe) | HandLandmarker |
| UI | Tailwind utility classes | 无额外 CSS 预处理器 |

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

# 4. 导出单文件版本（dist-singlefile/index.html）
npm run build:single
```

> **环境要求**：Node.js 18+，现代浏览器（Chrome/Edge/Firefox/Safari）且允许摄像头权限。

---

## 📸 使用指引

1. **上传照片**  
   - 通过右上角按钮选择 `Folder` 或 `Files`  
   - 或在项目根目录创建 `images` 文件夹，放置 `1.jpg~30.jpg`
2. **隐私声明**  
   - 所有图片仅在本地浏览器通过 FileReader → Base64 读取，不会上传服务器  
   - 应用不会保存任何个人信息
3. **摄像头授权**  
   - 首次访问需允许摄像头用于手势识别  
   - 左下角调试面板会实时显示手势参数，方便校准
4. **快捷键**  
   - 按 `H` 可隐藏/显示上传控件、音乐播放器与摄像头窗口

---

## ✅ 单文件运行

无需服务器即可体验：

1. 执行 `npm run build:single`
2. 打开 `dist-singlefile/index.html`
3. 若浏览器阻止摄像头或本地读取，可通过 HTTP Server（如 `npx serve dist-singlefile`）访问

---

## ⚠️ 已知问题

- 个别照片在 Bloom 后期下略显高光，可根据需要调整 `src/three/core/PostProcessing.ts` 中的参数
- Tailwind 仅通过类名直接使用，如需完整 Tailwind 配置，请自行集成官方 CLI / PostCSS

---

## 🤝 参与贡献

欢迎 Issue / PR，一起丰富装饰物、手势互动或 UI 体验。如果加入自定义音乐、贴图，请确认素材版权。祝玩得开心，圣诞快乐！🎅
