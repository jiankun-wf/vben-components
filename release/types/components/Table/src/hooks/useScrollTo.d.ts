import type { ComputedRef, Ref } from "vue";
export declare function useTableScrollTo(tableElRef: Ref<ComponentRef>, getDataSourceRef: ComputedRef<Recordable[]>): {
    scrollTo: (pos: string) => void;
};
