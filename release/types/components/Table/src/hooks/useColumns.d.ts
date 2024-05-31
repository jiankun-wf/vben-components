import type { BasicColumn, BasicTableProps, CellFormat, GetColumnsParams } from "../types/table";
import type { PaginationProps } from "../types/pagination";
import type { ComputedRef } from "vue";
import { ColumnType } from "ant-design-vue/es/table";
export declare function useColumns(propsRef: ComputedRef<BasicTableProps>, getPaginationRef: ComputedRef<boolean | PaginationProps>): {
    getColumnsRef: ComputedRef<BasicColumn[]>;
    getCacheColumns: () => BasicColumn[];
    getColumns: (opt?: GetColumnsParams) => BasicColumn[];
    setColumns: (columnList: Partial<BasicColumn>[] | (string | string[])[]) => void;
    setColumnWidth: (w: number, col: ColumnType<BasicColumn>) => void;
    getViewColumns: ComputedRef<any[]>;
    setCacheColumnsByField: (dataIndex: string | undefined, value: Partial<BasicColumn>) => void;
    setCacheColumns: (columns: BasicColumn[]) => void;
};
export declare function formatCell(text: string, format: CellFormat, record: Recordable, index: number): any;
