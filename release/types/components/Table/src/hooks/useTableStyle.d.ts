import type { ComputedRef } from 'vue';
import type { BasicTableProps, TableCustomRecord } from '../types/table';
export declare function useTableStyle(propsRef: ComputedRef<BasicTableProps>, prefixCls: string): {
    getRowClassName: (record: TableCustomRecord, index: number) => string;
};
