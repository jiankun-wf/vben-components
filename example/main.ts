import { createApp } from "vue";
import "../release/assets/style.css";

import { App, initializeConfiguration } from "../lib/index";
const startApp = async () => {
  const app = createApp(App);

  await initializeConfiguration(app);

  app.mount("#app");
};

startApp();
