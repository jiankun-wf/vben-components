import type { Ref } from "vue";
import type { BasicTableProps, TableActionType } from "../types/table";
import { ComputedRef } from "vue";
type Instance = TableActionType & {
    wrapRef: Ref<Nullable<HTMLElement>>;
    getBindValues: ComputedRef<Recordable>;
};
type RetInstance = Omit<Instance, "getBindValues"> & {
    getBindValues: ComputedRef<BasicTableProps>;
};
export declare function createTableContext(instance: Instance): void;
export declare function useTableContext(): RetInstance;
export {};
