import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { visualizer } from "rollup-plugin-visualizer";

import { resolve } from "path";

const pathResolve = (path: string, lib = true) =>
  resolve(`${process.cwd()}`, lib ? "lib" : "", path);

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isBuild = command === "build";

  return {
    plugins: [
      vue(),
      vueJsx(),
      isBuild &&
        visualizer({
          gzipSize: true,
          brotliSize: true,
          emitFile: false,
          filename: "analyse.html", //分析图生成的文件名
          open: true, //如果存在本地服务端口，将在打包后自动展示
        }),
    ],
    resolve: {
      alias: [
        // @/xxxx => src/xxxx
        {
          find: /@\//,
          replacement: pathResolve("") + "/",
        },
        // #/xxxx => types/xxxx
        {
          find: /#\//,
          replacement: pathResolve("types", false) + "/",
        },
      ],
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${pathResolve(
              "styles/var.less"
            )}";`,
          },
          javascriptEnabled: true,
        },
      },
    },
  };
});
