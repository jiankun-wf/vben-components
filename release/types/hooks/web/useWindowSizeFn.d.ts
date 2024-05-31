interface UseWindowSizeOptions {
    wait?: number;
    once?: boolean;
    immediate?: boolean;
    listenerOptions?: AddEventListenerOptions | boolean;
}
declare function useWindowSizeFn(fn: AnyFunction, options?: UseWindowSizeOptions): {
    start: () => void;
    stop: () => void;
};
export { useWindowSizeFn, type UseWindowSizeOptions };
