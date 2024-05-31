interface UseAttrsOptions {
    excludeListeners?: boolean;
    excludeKeys?: string[];
    excludeDefaultKeys?: boolean;
}
declare function useAttrs(options?: UseAttrsOptions): Recordable<any>;
export { useAttrs, type UseAttrsOptions };
