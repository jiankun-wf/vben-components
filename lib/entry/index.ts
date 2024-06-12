import { setupRouter, router } from "@/router";
import { setupStore } from "@/store";
import { initAppConfigStore } from "./initConfig";
import { App } from "vue";
import { setupRouterGuard } from "@/router/guard";
import { setupErrorHandle } from "@/logics/error-handle";
import { setupGlobDirectives } from "@/directives";

export const initializeConfiguration = async (app: App) => {
  setupStore(app);

  setupRouter(app);

  setupGlobDirectives(app);

  setupRouterGuard(router);

  initAppConfigStore();

  setupErrorHandle(app);

  await router.isReady();
};
