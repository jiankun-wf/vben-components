import "virtual:uno.css";
import "./styles/index.less";
import "ant-design-vue/dist/reset.css";

// 定义入口
export { default as App } from "./components/AppContext/index.vue";
export { initializeConfiguration } from "./entry";
export { router } from "./router";
export { store } from "./store";

export { registerEnvVariable } from "./settings/envSettings";
