import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import { resolve } from "path";

const pathResolve = (path: string, lib = true) =>
  resolve(`${process.cwd()}`, lib ? "lib" : "", path);

// https://vitejs.dev/config/
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
});
