import type { ComputedRef, Ref } from "vue";
import type { BasicTableProps } from "../types/table";
export declare function useTableFooter(propsRef: ComputedRef<BasicTableProps>, scrollRef: ComputedRef<BasicTableProps["scroll"]>, tableElRef: Ref<ComponentRef>, getDataSourceRef: ComputedRef<Recordable>): {
    getFooterProps: ComputedRef<Recordable<any>>;
};
