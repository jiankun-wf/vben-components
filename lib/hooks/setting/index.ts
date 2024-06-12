import type { GlobConfig } from "#/config";
import { envs } from "@/settings/envSettings";
import { getAppEnvConfig } from "@/utils/env";

export const useGlobSetting = (): Readonly<GlobConfig> => {
  const ENV = getAppEnvConfig();

  const glob: Recordable<string> = {};

  // Take global configuration
  envs.forEach(({ key, value }) => {
    glob[value] = ENV[key];
  });
  return glob as Readonly<GlobConfig>;
};
