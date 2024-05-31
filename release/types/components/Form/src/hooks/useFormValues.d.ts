import type { Ref, ComputedRef } from "vue";
import type { FormProps, FormSchemaInner as FormSchema } from "../types/form";
interface UseFormValuesContext {
    defaultValueRef: Ref<any>;
    getSchema: ComputedRef<FormSchema[]>;
    getProps: ComputedRef<FormProps>;
    formModel: Recordable;
}
export declare function useFormValues({ defaultValueRef, getSchema, formModel, getProps, }: UseFormValuesContext): {
    handleFormValues: (values: Recordable) => Recordable<any>;
    initDefault: () => void;
};
export {};
