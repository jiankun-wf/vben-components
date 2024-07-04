import { defineConfig } from "vite";
import { createPlugins } from "./build/plugins";
import { resolve } from "path";

const pathResolve = (path: string, lib = true) =>
  resolve(`${process.cwd()}`, lib ? "src" : "", path);

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isBuild = command === "build";
  const plugins = createPlugins({
    isBuild,
    root: "./",
    compress: "gzip",
    enableAnalyze: false,
  });
  return {
    plugins: plugins,
    server: {
      proxy: {
        "/basic-api": {
          target: "http://fwh.system.geetype.cn",
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/basic-api`), ""),
          // only https
          // secure: false
        },
      },
    },
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
