import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import { resolve } from "path";

const pathResolve = (path: string, lib = true) =>
  resolve(`${process.cwd()}`, lib ? "lib" : "", path);

export default defineConfig({
  plugins: [vue(), vueJsx()],
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
      fileName: () => "index.js",
      name: "GenericComponents",
      formats: ["cjs"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    outDir: "release/cjs",
  },
});
