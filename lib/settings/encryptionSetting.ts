import { isDevMode } from "@/utils/env";

// System default cache time, in seconds
export const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7;

// aes encryption key
export const cacheCipher = {
  key: "zgX733rHICYCeohZ",
  iv: "iZKYisu%67JvBI2G",
};

// aes encryption key
export const apiCipher = {
  key: "0da46ebec2c8da583dc157f03ad02667",
};

export const SHOULD_ENABLE_STORAGE_ENCRYPTION = !isDevMode();
