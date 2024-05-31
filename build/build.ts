import { build } from "vite";
import path from "path";

console.log(import.meta.dirname);
const start = () => {
  build({
    configFile: path.resolve(process.cwd(), "build", "vite.build-es.ts"),
  });

  build({
    configFile: path.resolve(process.cwd(), "build", "vite.build-cjs.ts"),
  });

  build({
    configFile: path.resolve(process.cwd(), "build", "vite.build-umd.ts"),
  });
};

void start();
