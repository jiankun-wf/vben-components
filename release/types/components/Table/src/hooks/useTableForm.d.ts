import type { ComputedRef, Slots } from "vue";
import type { BasicTableProps, FetchParams } from "../types/table";
import type { FormProps } from "@/components/Form";
export declare function useTableForm(propsRef: ComputedRef<BasicTableProps>, slots: Slots, fetch: (opt?: FetchParams | undefined) => Promise<Recordable<any>[] | undefined>, getLoading: ComputedRef<boolean | undefined>): {
    getFormProps: ComputedRef<Partial<FormProps>>;
    replaceFormSlotKey: (key: string) => string;
    getFormSlotKeys: ComputedRef<string[]>;
    handleSearchInfoChange: (info: Recordable) => void;
};
