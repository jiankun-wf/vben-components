import { createApp } from "vue";
import "vben-sys/assets/style.css";

import { App, initializeConfiguration } from "vben-sys";
const startApp = async () => {
  const app = createApp(App);

  await initializeConfiguration(app);

  app.mount("#app");
};

startApp();
