import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { visualizer } from "rollup-plugin-visualizer";

import { resolve } from "path";

const pathResolve = (path: string, lib = true) =>
  resolve(`${process.cwd()}`, lib ? "lib" : "", path);

export default defineConfig(({ command }) => {
  const isBuild = command === "build";
  return {
    plugins: [
      vue(),
      vueJsx(),
      isBuild &&
        visualizer({
          filename: "stats.html",
          gzipSize: true,
          emitFile: true,
          open: true,
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

    build: {
      lib: {
        entry: "lib/index.ts",
        name: "GenericComponents",
        formats: ["es", "cjs", "iife"],
      },
      rollupOptions: {
        external: ["vue"],
        output: {
          globals: {
            vue: "Vue",
          },
          entryFileNames: "[format]/index.js",
          chunkFileNames: "[format]/[name].js",
          assetFileNames: "assets/[name].[ext]",
        },
      },
      outDir: "release",
    },
  };
});
