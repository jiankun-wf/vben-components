import type { PaginationProps } from "../types/pagination";
import type { BasicTableProps } from "../types/table";
import { ComputedRef } from "vue";
export declare function usePagination(refProps: ComputedRef<BasicTableProps>): {
    getPagination: () => boolean | PaginationProps;
    getPaginationInfo: ComputedRef<boolean | PaginationProps>;
    setShowPagination: (flag: boolean) => Promise<void>;
    getShowPagination: () => boolean;
    setPagination: (info: Partial<PaginationProps>) => void;
};
