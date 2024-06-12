import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { type PluginOption } from "vite";
import DevTools from "vite-plugin-vue-devtools";
import UnoCSS from "unocss/vite";

// import { createAppConfigPlugin } from "./appConfig";
import { configCompressPlugin } from "./compress";
import { configHtmlPlugin } from "./html";
import { configVisualizerConfig } from "./visualizer";

interface Options {
  isBuild: boolean;
  root: string;
  compress: string;
  enableMock?: boolean;
  enableAnalyze?: boolean;
}

function createPlugins({
  isBuild,
  root,
  compress,
  enableAnalyze,
}: Options) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue(),
    vueJsx(),
    UnoCSS(),
  ];

  // const appConfigPlugin = await createAppConfigPlugin({ root, isBuild });
  // vitePlugins.push(appConfigPlugin);

  vitePlugins.push(DevTools());

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin({ isBuild }));

  // The following plugins only work in the production environment
  if (isBuild) {
    // rollup-plugin-gzip
    vitePlugins.push(
      configCompressPlugin({
        compress,
      })
    );
  }

  // rollup-plugin-visualizer
  if (enableAnalyze) {
    vitePlugins.push(configVisualizerConfig());
  }

  return vitePlugins;
}

export { createPlugins };
