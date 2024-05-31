// import { lowerFirst } from 'lodash-es';
export function useDesign(scope: string) {
  // const $style = cssModule ? useCssModule() : {};

  // const style: Record<string, string> = {};
  // if (cssModule) {
  //   Object.keys($style).forEach((key) => {
  //     // const moduleCls = $style[key];
  //     const k = key.replace(new RegExp(`^${values.prefixCls}-?`, 'ig'), '');
  //     style[lowerFirst(k)] = $style[key];
  //   });
  // }

  const baseName = "generic";

  return {
    // prefixCls: computed(() => `${values.prefixCls}-${scope}`),
    prefixCls: `${baseName}-${scope}`,
    prefixVar: baseName,
    // style,
  };
}
