import { SorterResult } from "./types/table";
export declare const ROW_KEY = "key";
export declare const PAGE_SIZE_OPTIONS: string[];
export declare const PAGE_SIZE = 10;
export declare const FETCH_SETTING: {
    pageField: string;
    sizeField: string;
    listField: string;
    totalField: string;
};
export declare const DEFAULT_SIZE = "middle";
export declare const DEFAULT_SORT_FN: (sortInfo: SorterResult) => {
    field: string;
    order: import("./types/table").SortOrder;
} | {
    field?: undefined;
    order?: undefined;
};
export declare const DEFAULT_FILTER_FN: (data: Partial<Recordable<string[]>>) => Partial<Recordable<string[]>>;
export declare const DEFAULT_ALIGN = "center";
export declare const INDEX_COLUMN_FLAG = "INDEX";
export declare const ACTION_COLUMN_FLAG = "ACTION";
export declare const PageWrapperFixedHeightKey = "PageWrapperFixedHeight";
export declare const footerHeight = 75;
export declare const layoutMultipleHeadePlaceholderTime = 0.6;
