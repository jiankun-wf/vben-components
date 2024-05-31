import type { BasicTableProps, TableActionType } from "../types/table";
import type { FormActionType } from "@/components/Form";
import type { ComputedRef, Ref } from "vue";
type UseTableMethod = TableActionType & {
    getForm: () => FormActionType;
};
export declare function useTable(tableProps?: Partial<{
    [P in keyof BasicTableProps]: Ref<BasicTableProps[P]> | BasicTableProps[P] | ComputedRef<BasicTableProps[P]>;
}>): [
    (instance: TableActionType, formInstance: UseTableMethod) => void,
    TableActionType & {
        getForm: () => FormActionType;
    }
];
export {};
