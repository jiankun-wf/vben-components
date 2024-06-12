import { build } from "vite";
import path from "path";
import { writePackageJson, writeReadme } from "./realsejson.ts";
const start = async () => {
  await build({
    configFile: path.resolve(process.cwd(), "build", "vite.build.ts"),
  });

  const updateType = process.argv[2];

  // main-大版本更新 x.0.0, second-小版本更新 1.x.0, smaller-细微更新 1.0.x
  writePackageJson(updateType as "main" | "second" | "smaller");
  writeReadme();
};

void start();

console.log(import.meta);
