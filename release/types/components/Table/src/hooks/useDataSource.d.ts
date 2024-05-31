import type { BasicTableProps, FetchParams, SorterResult } from "../types/table";
import type { PaginationProps } from "../types/pagination";
import { ComputedRef, Ref } from "vue";
import type { Key } from "ant-design-vue/lib/table/interface";
interface ActionType {
    getPaginationInfo: ComputedRef<boolean | PaginationProps>;
    setPagination: (info: Partial<PaginationProps>) => void;
    setLoading: (loading: boolean) => void;
    getFieldsValue: () => Recordable;
    clearSelectedRowKeys: () => void;
    tableData: Ref<Recordable[]>;
}
export declare function useDataSource(propsRef: ComputedRef<BasicTableProps>, { getPaginationInfo, setPagination, setLoading, getFieldsValue, clearSelectedRowKeys, tableData, }: ActionType, emit: EmitType): {
    getDataSourceRef: ComputedRef<Recordable<any>[]>;
    getDataSource: <T = Recordable<any>>() => T[];
    getRawDataSource: <T_1 = Recordable<any>>() => T_1;
    searchInfoRef: Ref<Recordable<any>>;
    getSearchInfo: <T_2 = Recordable<any>>() => T_2;
    getRowKey: ComputedRef<string | import("ant-design-vue/es/vc-table/interface").GetRowKey<any>>;
    setTableData: <T_3 = Recordable<any>>(values: T_3[]) => void;
    getAutoCreateKey: ComputedRef<boolean>;
    fetch: (opt?: FetchParams) => Promise<Recordable<any>[]>;
    reload: (opt?: FetchParams) => Promise<Recordable<any>[]>;
    updateTableData: (index: number, key: Key, value: any) => Promise<Recordable<any>>;
    updateTableDataRecord: (keyValue: Key, record: Recordable) => Recordable | undefined;
    deleteTableDataRecord: (keyValues: Key | Key[]) => void;
    insertTableDataRecord: (record: Recordable | Recordable[], index?: number) => Recordable[] | undefined;
    findTableDataRecord: (keyValue: Key) => any;
    handleTableChange: (pagination: PaginationProps, filters: Partial<Recordable<string[]>>, sorter: SorterResult) => void;
};
export {};
