import type { PropType } from "vue";
import type { PaginationProps } from "./types/pagination";
import type { BasicColumn, FetchSetting, TableSetting, SorterResult, TableCustomRecord, TableRowSelection, SizeType } from "./types/table";
import type { FormProps } from "@/components/Form";
import type { Key } from "ant-design-vue/lib/table/interface";
export declare const basicProps: {
    clickToRowSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    isTreeTable: BooleanConstructor;
    tableSetting: {
        type: PropType<TableSetting>;
        default: () => {
            redo: boolean;
            size: boolean;
            setting: boolean;
        };
    };
    inset: BooleanConstructor;
    sortFn: {
        type: PropType<(sortInfo: SorterResult) => any>;
        default: (sortInfo: SorterResult) => {
            field: string;
            order: import("./types/table").SortOrder;
        } | {
            field?: undefined;
            order?: undefined;
        };
    };
    filterFn: {
        type: PropType<(data: Partial<Recordable<string[]>>) => any>;
        default: (data: Partial<Recordable<string[]>>) => Partial<Recordable<string[]>>;
    };
    showTableSetting: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    autoCreateKey: {
        type: BooleanConstructor;
        default: boolean;
    };
    striped: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSummary: BooleanConstructor;
    summaryFunc: {
        type: PropType<(...arg: any[]) => any[]>;
        default: any;
    };
    summaryData: {
        type: PropType<Recordable<any>[]>;
        default: any;
    };
    indentSize: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    canColDrag: {
        type: BooleanConstructor;
        default: boolean;
    };
    api: {
        type: PropType<(...arg: any[]) => Promise<any>>;
        default: any;
    };
    beforeFetch: {
        type: PropType<Fn<any, any>>;
        default: any;
    };
    afterFetch: {
        type: PropType<Fn<any, any>>;
        default: any;
    };
    handleSearchInfoFn: {
        type: PropType<Fn<any, any>>;
        default: any;
    };
    fetchSetting: {
        type: PropType<FetchSetting>;
        default: () => {
            pageField: string;
            sizeField: string;
            listField: string;
            totalField: string;
        };
    };
    immediate: {
        type: BooleanConstructor;
        default: boolean;
    };
    emptyDataIsShowTable: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchInfo: {
        type: PropType<Recordable<any>>;
        default: any;
    };
    defSort: {
        type: PropType<Recordable<any>>;
        default: any;
    };
    useSearchForm: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    formConfig: {
        type: PropType<Partial<FormProps>>;
        default: any;
    };
    columns: {
        type: PropType<BasicColumn[]>;
        default: () => any[];
    };
    showIndexColumn: {
        type: BooleanConstructor;
        default: boolean;
    };
    indexColumnProps: {
        type: PropType<BasicColumn>;
        default: any;
    };
    actionColumn: {
        type: PropType<BasicColumn>;
        default: any;
    };
    ellipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    isCanResizeParent: {
        type: BooleanConstructor;
        default: boolean;
    };
    canResize: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearSelectOnPageChange: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    resizeHeightOffset: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    rowSelection: {
        type: PropType<TableRowSelection<any>>;
        default: any;
    };
    showSelectionBar: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    title: {
        type: PropType<string | ((data: Recordable) => string)>;
        default: any;
    };
    titleHelpMessage: {
        type: PropType<string | string[]>;
    };
    maxHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    dataSource: {
        type: PropType<Recordable<any>[]>;
        default: any;
    };
    rowKey: {
        type: PropType<string | import("ant-design-vue/es/vc-table/interface").GetRowKey<any>>;
        default: string;
    };
    bordered: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    pagination: {
        type: PropType<boolean | PaginationProps>;
        default: any;
    };
    loading: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    rowClassName: {
        type: PropType<(record: TableCustomRecord<any>, index: number) => string>;
    };
    scroll: {
        type: PropType<PropType<{
            x?: string | number | true;
            y?: string | number;
        } & {
            scrollToFirstRowOnChange?: boolean;
        }>>;
    };
    beforeEditSubmit: {
        type: PropType<(data: {
            record: Recordable;
            index: number;
            key: Key;
            value: any;
        }) => Promise<any>>;
    };
    size: {
        type: PropType<SizeType>;
        default: string;
    };
};
