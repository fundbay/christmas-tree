/**
 * 引入 CSS 样式
 */
import "./assets/fonts.css";
import "./style.css";

/**
 * 引入 Vue 并创建 Vue 实例
 */
import { createApp } from "vue";
import App from "./App.vue";
createApp(App).mount("#app");
