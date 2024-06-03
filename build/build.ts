import { build } from "vite";
import path from "path";
import { writePackageJson, writeReadme } from "./realsejson.ts";
const start = async () => {
  await build({
    configFile: path.resolve(process.cwd(), "build", "vite.build.ts"),
  });

  const updateType = process.argv[2];

  writePackageJson(updateType as "main" | "second" | "smaller");
  writeReadme();
};

void start();
