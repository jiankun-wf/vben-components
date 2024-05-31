/**
 * 在 OnMounted 或者 OnActivated 时触发
 * @param hook 任何函数（包括异步函数）
 */
declare function onMountedOrActivated(hook: AnyFunction): void;
export { onMountedOrActivated };
