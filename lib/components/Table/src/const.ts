import { SorterResult } from "./types/table";

export const ROW_KEY = "key";

// Optional display number per page;
export const PAGE_SIZE_OPTIONS = ["10", "50", "80", "100"];

// Number of items displayed per page
export const PAGE_SIZE = 10;

// Common interface field settings
export const FETCH_SETTING = {
  // The field name of the current page passed to the background
  pageField: "page",
  // The number field name of each page displayed in the background
  sizeField: "pageSize",
  // Field name of the form data returned by the interface
  listField: "items",
  // Total number of tables returned by the interface field name
  totalField: "total",
};

// Default Size
export const DEFAULT_SIZE = "middle";

// Configure general sort function
export const DEFAULT_SORT_FN = (sortInfo: SorterResult) => {
  const { field, order } = sortInfo;
  if (field && order) {
    return {
      // The sort field passed to the backend you
      field,
      // Sorting method passed to the background asc/desc
      order,
    };
  } else {
    return {};
  }
};

export const DEFAULT_FILTER_FN = (data: Partial<Recordable<string[]>>) => {
  return data;
};

//  Default layout of table cells
export const DEFAULT_ALIGN = "center";

export const INDEX_COLUMN_FLAG = "INDEX";

export const ACTION_COLUMN_FLAG = "ACTION";

export const PageWrapperFixedHeightKey = "PageWrapperFixedHeight";

// 页脚固定高度
export const footerHeight = 75;

// .@{namespace}-layout-multiple-header__placeholder
// 全屏页头动画时长
export const layoutMultipleHeadePlaceholderTime = 0.6;
