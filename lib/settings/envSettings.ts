export const envs = [
  { key: "VITE_GLOB_APP_TITLE", value: "title" },
  { key: "VITE_GLOB_API_URL", value: "apiUrl" },
  { key: "VITE_GLOB_API_URL_PREFIX", value: "urlPrefix" },
  { key: "VITE_GLOB_APP_SHORT_TITLE", value: "shortName" },
];

export const registerEnvVariable = (name: string, value: string) => {
  const i = envs.find((e) => e.key === name);

  if (i) {
    i.key = name;
    i.value = value;
  } else {
    envs.push({ key: name, value: value });
  }
};
