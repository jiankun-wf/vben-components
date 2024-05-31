import type { VNodeChild } from "vue";
import type { PaginationProps } from "./pagination";
import type { FormProps } from "@/components/Form";
import type { TableRowSelection as ITableRowSelection, Key } from "ant-design-vue/lib/table/interface";
import type { ColumnProps } from "ant-design-vue/lib/table";
import { ComponentType } from "./componentType";
import { VueNode } from "@/utils/propTypes";
import { FixedType } from "ant-design-vue/es/vc-table/interface";
import AntDesignVueTable from "ant-design-vue/es/table";
export declare type SortOrder = "ascend" | "descend";
export interface TableCurrentDataSource<T = Recordable> {
    currentDataSource: T[];
}
export interface TableRowSelection<T = any> extends ITableRowSelection {
    /**
     * Callback executed when selected rows change
     * @param selectedRowKeys 已选的 keyValues
     * @param selectedRows 已选的 records
     * @param isClickCustomRow 是否是点击行触发（反之，就是点击checkbox/radiobox）
     * @returns void
     */
    onChange?: (selectedRowKeys: Key[], selectedRows: T[], isClickCustomRow?: boolean) => void;
    /**
     * Callback executed when select/deselect one row
     * @type Function
     */
    onSelect?: (record: T, selected: boolean, selectedRows: Object[], nativeEvent: Event) => any;
    /**
     * Callback executed when select/deselect all rows
     * @type Function
     */
    onSelectAll?: (selected: boolean, selectedRows: T[], changeRows: T[]) => any;
    /**
     * Callback executed when row selection is inverted
     * @type Function
     */
    onSelectInvert?: (selectedRows: Key[]) => any;
}
export interface TableCustomRecord<T> {
    record?: T;
    index?: number;
}
export interface ExpandedRowRenderRecord<T> extends TableCustomRecord<T> {
    indent?: number;
    expanded?: boolean;
}
export interface ColumnFilterItem {
    text?: string;
    value?: string;
    children?: any;
}
export interface TableCustomRecord<T = Recordable> {
    record?: T;
    index?: number;
}
export interface SorterResult {
    column: ColumnProps;
    order: SortOrder;
    field: string;
    columnKey: string;
}
export interface FetchParams {
    searchInfo?: Recordable;
    page?: number;
    sortInfo?: Recordable;
    filterInfo?: Recordable;
}
export interface GetColumnsParams {
    ignoreIndex?: boolean;
    ignoreAction?: boolean;
    sort?: boolean;
}
export type SizeType = "default" | "middle" | "small" | "large";
export interface TableActionType {
    reload: (opt?: FetchParams) => Promise<Recordable<any>[] | undefined>;
    setSelectedRows: (rows: Recordable[]) => void;
    getSelectRows: <T = Recordable>() => T[];
    clearSelectedRowKeys: () => void;
    expandAll: () => void;
    collapseAll: () => void;
    expandRows: (keyValues: Key[]) => void;
    collapseRows: (keyValues: Key[]) => void;
    scrollTo: (pos: string) => void;
    getSelectRowKeys: () => Key[];
    deleteSelectRowByKey: (keyValue: Key) => void;
    setPagination: (info: Partial<PaginationProps>) => void;
    setTableData: <T = Recordable>(values: T[]) => void;
    updateTableDataRecord: (keyValue: Key, record: Recordable) => Recordable | void;
    deleteTableDataRecord: (keyValues: Key | Key[]) => void;
    insertTableDataRecord: (record: Recordable | Recordable[], index?: number) => Recordable[] | void;
    findTableDataRecord: (keyValue: Key) => Recordable | void;
    getColumns: (opt?: GetColumnsParams) => BasicColumn[];
    setColumns: (columns: BasicColumn[] | string[]) => void;
    getDataSource: <T = Recordable>() => T[];
    getRawDataSource: <T = Recordable>() => T;
    getSearchInfo: <T = Recordable>() => T;
    setLoading: (loading: boolean) => void;
    setProps: (props: Partial<BasicTableProps>) => void;
    redoHeight: () => void;
    setSelectedRowKeys: (keyValues: Key[]) => void;
    getPaginationRef: () => PaginationProps | boolean;
    getSize: () => SizeType;
    getRowSelection: () => TableRowSelection<Recordable>;
    getCacheColumns: () => BasicColumn[];
    emit?: EmitType;
    updateTableData: (index: number, key: string, value: any) => Recordable;
    setShowPagination: (show: boolean) => Promise<void>;
    getShowPagination: () => boolean;
    setCacheColumnsByField?: (dataIndex: string | undefined, value: BasicColumn) => void;
    setCacheColumns?: (columns: BasicColumn[]) => void;
}
export interface FetchSetting {
    pageField: string;
    sizeField: string;
    listField: string;
    totalField: string;
}
export interface TableSetting {
    redo?: boolean;
    size?: boolean;
    setting?: boolean;
    settingCache?: boolean;
    fullScreen?: boolean;
}
export interface BasicTableProps<T = any> {
    clickToRowSelect?: boolean;
    isTreeTable?: boolean;
    accordion?: boolean;
    sortFn?: (sortInfo: SorterResult) => any;
    filterFn?: (data: Partial<Recordable<string[]>>) => any;
    inset?: boolean;
    showTableSetting?: boolean;
    tableSetting?: TableSetting;
    striped?: boolean;
    autoCreateKey?: boolean;
    summaryFunc?: (...arg: any) => Recordable[];
    summaryData?: Recordable[];
    showSummary?: boolean;
    canColDrag?: boolean;
    api?: (...arg: any) => Promise<any>;
    beforeFetch?: Fn;
    afterFetch?: Fn;
    handleSearchInfoFn?: Fn;
    fetchSetting?: Partial<FetchSetting>;
    immediate?: boolean;
    emptyDataIsShowTable?: boolean;
    searchInfo?: Recordable;
    defSort?: Recordable;
    useSearchForm?: boolean;
    formConfig?: Partial<FormProps>;
    columns: BasicColumn[];
    showIndexColumn?: boolean;
    indexColumnProps?: BasicColumn;
    actionColumn?: BasicColumn;
    ellipsis?: boolean;
    isCanResizeParent?: boolean;
    canResize?: boolean;
    resizeHeightOffset?: number;
    clearSelectOnPageChange?: boolean;
    rowKey?: InstanceType<typeof AntDesignVueTable>["$props"]["rowKey"];
    dataSource?: Recordable[];
    titleHelpMessage?: string | string[];
    maxHeight?: number;
    bordered?: boolean;
    pagination?: PaginationProps | boolean;
    loading?: boolean;
    /**
     * The column contains children to display
     * @default 'children'
     * @type string | string[]
     */
    childrenColumnName?: string;
    /**
     * Override default table elements
     * @type object
     */
    components?: object;
    /**
     * Expand all rows initially
     * @default false
     * @type boolean
     */
    defaultExpandAllRows?: boolean;
    /**
     * Initial expanded row keys
     * @type string[]
     */
    defaultExpandedRowKeys?: string[];
    /**
     * Current expanded row keys
     * @type string[]
     */
    expandedRowKeys?: string[];
    /**
     * Expanded container render for each row
     * @type Function
     */
    expandedRowRender?: (record?: ExpandedRowRenderRecord<T>) => VNodeChild | JSX.Element;
    /**
     * Customize row expand Icon.
     * @type Function | VNodeChild
     */
    expandIcon?: Function | VNodeChild | JSX.Element;
    /**
     * Whether to expand row by clicking anywhere in the whole row
     * @default false
     * @type boolean
     */
    expandRowByClick?: boolean;
    /**
     * The index of `expandIcon` which column will be inserted when `expandIconAsCell` is false. default 0
     */
    expandIconColumnIndex?: number;
    /**
     * Table footer renderer
     * @type Function | VNodeChild
     */
    footer?: Function | VNodeChild | JSX.Element;
    /**
     * Indent size in pixels of tree data
     * @default 15
     * @type number
     */
    indentSize?: number;
    /**
     * i18n text including filter, sort, empty text, etc
     * @default { filterConfirm: 'Ok', filterReset: 'Reset', emptyText: 'No Data' }
     * @type object
     */
    locale?: object;
    /**
     * Row's className
     * @type Function
     */
    rowClassName?: (record: TableCustomRecord<T>, index: number) => string;
    /**
     * Row selection config
     * @type object
     */
    rowSelection?: TableRowSelection;
    /**
     * Show table selection bar（显示多选状态栏）
     * @type boolean
     */
    showSelectionBar?: boolean;
    /**
     * Set horizontal or vertical scrolling, can also be used to specify the width and height of the scroll area.
     * It is recommended to set a number for x, if you want to set it to true,
     * you need to add style .ant-table td { white-space: nowrap; }.
     * @type object
     */
    scroll?: InstanceType<typeof AntDesignVueTable>["$props"]["scroll"];
    /**
     * Whether to show table header
     * @default true
     * @type boolean
     */
    showHeader?: boolean;
    /**
     * Size of table
     * @default 'default'
     * @type string
     */
    size?: SizeType;
    /**
     * Table title renderer
     * @type Function | ScopedSlot
     */
    title?: VNodeChild | JSX.Element | string | ((data: Recordable) => string);
    /**
     * Set props on per header row
     * @type Function
     */
    customHeaderRow?: (column: ColumnProps, index: number) => object;
    /**
     * Set props on per row
     * @type Function
     */
    customRow?: (record: T, index: number) => object;
    /**
     * `table-layout` attribute of table element
     * `fixed` when header/columns are fixed, or using `column.ellipsis`
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout
     * @version 1.5.0
     */
    tableLayout?: "auto" | "fixed" | string;
    /**
     * the render container of dropdowns in table
     * @param triggerNode
     * @version 1.5.0
     */
    getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;
    /**
     * Data can be changed again before rendering.
     * The default configuration of general user empty data.
     * You can configured globally through [ConfigProvider](https://antdv.com/components/config-provider-cn/)
     *
     * @version 1.5.4
     */
    transformCellText?: Function;
    /**
     * Callback executed before editable cell submit value, not for row-editor
     *
     * The cell will not submit data while callback return false
     */
    beforeEditSubmit?: (data: {
        record: Recordable;
        index: number;
        key: Key;
        value: any;
    }) => Promise<any>;
    /**
     * Callback executed when pagination, filters or sorter is changed
     * @param pagination
     * @param filters
     * @param sorter
     * @param currentDataSource
     */
    onChange?: (pagination: any, filters: any, sorter: any, extra: any) => void;
    /**
     * Callback executed when the row expand icon is clicked
     *
     * @param expanded
     * @param record
     */
    onExpand?: (expanded: boolean, record: T) => void;
    /**
     * Callback executed when the expanded rows change
     * @param expandedRows
     */
    onExpandedRowsChange?: (expandedRows: string[] | number[]) => void;
    onColumnsChange?: (data: ColumnChangeParam[]) => void;
}
export type CellFormat = string | ((text: string, record: Recordable, index: number) => string | number) | Map<string | number, any>;
export interface BasicColumn extends ColumnProps<Recordable> {
    children?: BasicColumn[];
    filters?: {
        text: string;
        value: string;
        children?: unknown[] | (((props: Record<string, unknown>) => unknown[]) & (() => unknown[]) & (() => unknown[]));
    }[];
    flag?: "INDEX" | "DEFAULT" | "CHECKBOX" | "RADIO" | "ACTION";
    customTitle?: VueNode;
    slots?: Recordable;
    customHeaderRender?: (column: BasicColumn) => string | VNodeChild | JSX.Element;
    defaultHidden?: boolean;
    helpMessage?: string | string[] | VNodeChild | JSX.Element;
    format?: CellFormat;
    edit?: boolean;
    editRow?: boolean;
    editable?: boolean;
    editComponent?: ComponentType;
    editComponentProps?: ((opt: {
        text: string | number | boolean | Recordable;
        record: Recordable;
        column: BasicColumn;
        index: number;
    }) => Recordable) | Recordable;
    editRule?: boolean | ((text: string, record: Recordable) => Promise<string>);
    editValueMap?: (value: any) => string;
    onEditRow?: () => void;
    ifShow?: boolean | ((column: BasicColumn) => boolean);
    editRender?: (opt: {
        text: string | number | boolean | Recordable;
        record: Recordable;
        column: BasicColumn;
        index: number;
        currentValue: string | number | boolean | Recordable;
    }) => VNodeChild | JSX.Element;
    editDynamicDisabled?: boolean | ((record: Recordable) => boolean);
}
export type ColumnChangeParam = {
    dataIndex: string;
    fixed: boolean | "left" | "right" | undefined;
    visible: boolean;
};
export interface InnerHandlers {
    onColumnsChange: (data: ColumnChangeParam[]) => void;
}
export interface InnerMethods {
    clearSelectedRowKeys: TableActionType["clearSelectedRowKeys"];
    getSelectRowKeys: TableActionType["getSelectRowKeys"];
}
export interface ColumnOptionsType {
    value: string;
    label: string;
    column: {
        defaultHidden?: boolean;
    };
    fixed?: FixedType;
}
