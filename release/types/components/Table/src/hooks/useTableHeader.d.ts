import type { ComputedRef, Slots } from "vue";
import type { BasicTableProps, InnerHandlers, InnerMethods } from "../types/table";
export declare function useTableHeader(propsRef: ComputedRef<BasicTableProps>, slots: Slots, handlers: InnerHandlers, methods: InnerMethods): {
    getHeaderProps: ComputedRef<Recordable<any>>;
};
