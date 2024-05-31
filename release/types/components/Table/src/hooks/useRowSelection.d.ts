import type { BasicTableProps, TableRowSelection } from "../types/table";
import { ComputedRef, Ref } from "vue";
import type { Key } from "ant-design-vue/lib/table/interface";
export declare function useRowSelection(propsRef: ComputedRef<BasicTableProps>, tableData: Ref<Recordable[]>, emit: EmitType): {
    getRowSelection: () => TableRowSelection<any>;
    getRowSelectionRef: ComputedRef<TableRowSelection<any>>;
    getSelectRows: <T = Recordable<any>>() => T[];
    getSelectRowKeys: () => Key[];
    setSelectedRowKeys: (keyValues?: Key[]) => void;
    clearSelectedRowKeys: () => void;
    deleteSelectRowByKey: (key: Key) => void;
    setSelectedRows: (rows: Recordable[]) => void;
};
