/**
 * 引入 CSS 样式
 */
import "./assets/fonts.css";
import "./style.css";

/**
 * 引入 Vue 并创建 Vue 实例
 */
import { createApp, defineAsyncComponent } from "vue";
import LoadingSpinner from "./components/LoadingSpinner.vue";

const AsyncApp = defineAsyncComponent({
    loader: () => import("./App.vue"),
    loadingComponent: LoadingSpinner,
    delay: 0,
    suspensible: false,
});

createApp(AsyncApp).mount("#app");
