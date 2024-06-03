import { resolve } from "path";
import fs from "fs";

export const writePackageJson = (type: "main" | "second" | "smaller") => {
  const f = fs.readFileSync(resolve(process.cwd(), "package.json"), "utf-8");

  const info = JSON.parse(f.toString());

  const { version = "0.0.1" } = info;

  const [main, second, smaller] = version.split(".");

  switch (type) {
    case "main":
      info.version = `${Number(main) + 1}.0.0`;
      break;
    case "second":
      info.version = `${main}.${Number(second) + 1}.0`;
      break;
    case "smaller":
      info.version = `${main}.${second}.${Number(smaller) + 1}`;
      break;
  }

  fs.writeFileSync(
    resolve(process.cwd(), "package.json"),
    JSON.stringify(info, null, 2)
  );

  info.main = "cjs/index.js";
  info.module = "es/index.js";
  info.types = "types/index.d.ts";
  info.unpkg = "iife/index.js";

  fs.writeFileSync(
    resolve(process.cwd(), "release", "package.json"),
    JSON.stringify(info, null, 2)
  );
};

export const writeReadme = () => {
  const f = fs.readFileSync(resolve(process.cwd(), "README.md"), "utf-8");

  fs.writeFileSync(
    resolve(process.cwd(), "release", "README.md"),
    f.toString()
  );
};
