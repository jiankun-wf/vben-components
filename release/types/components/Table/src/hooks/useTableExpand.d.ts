import type { ComputedRef, Ref } from "vue";
import type { BasicTableProps } from "../types/table";
import type { Key } from "ant-design-vue/lib/table/interface";
export declare function useTableExpand(propsRef: ComputedRef<BasicTableProps>, tableData: Ref<Recordable[]>, emit: EmitType): {
    getExpandOption: ComputedRef<{
        expandedRowKeys?: undefined;
        onExpandedRowsChange?: undefined;
    } | {
        expandedRowKeys: Key[];
        onExpandedRowsChange: (keyValues: string[]) => void;
    }>;
    expandAll: () => void;
    collapseAll: () => void;
    expandRows: (keyValues: Key[]) => void;
    collapseRows: (keyValues: Key[]) => void;
    expandRowAccordion: (keyValue: Key) => void;
    handleTableExpand: (expanded: boolean, record: Recordable) => void;
};
