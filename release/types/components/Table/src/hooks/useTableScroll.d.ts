import type { BasicTableProps, TableRowSelection, BasicColumn } from "../types/table";
import { Ref, ComputedRef } from "vue";
export declare function useTableScroll(propsRef: ComputedRef<BasicTableProps>, tableElRef: Ref<ComponentRef>, columnsRef: ComputedRef<BasicColumn[]>, rowSelectionRef: ComputedRef<TableRowSelection | null>, getDataSourceRef: ComputedRef<Recordable[]>, wrapRef: Ref<HTMLElement | null>, formRef: Ref<ComponentRef>): {
    getScrollRef: ComputedRef<{
        x?: string | number | true;
        y?: string | number;
    } & {
        scrollToFirstRowOnChange?: boolean;
    }>;
    redoHeight: () => void;
};
