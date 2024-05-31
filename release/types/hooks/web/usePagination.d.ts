import type { Ref } from 'vue';
export declare function usePagination<T = any>(list: Ref<T[]>, pageSize: number): {
    setCurrentPage: (page: number) => void;
    getTotal: import("vue").ComputedRef<number>;
    setPageSize: (pageSize: number) => void;
    getPaginationList: import("vue").ComputedRef<T[]>;
};
