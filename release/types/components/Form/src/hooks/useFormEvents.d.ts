import type { ComputedRef, Ref } from "vue";
import type { FormProps, FormSchemaInner as FormSchema, FormActionType } from "../types/form";
import type { NamePath } from "ant-design-vue/lib/form/interface";
interface UseFormActionContext {
    emit: EmitType;
    getProps: ComputedRef<FormProps>;
    getSchema: ComputedRef<FormSchema[]>;
    formModel: Recordable;
    defaultValueRef: Ref<Recordable>;
    formElRef: Ref<FormActionType>;
    schemaRef: Ref<FormSchema[]>;
    handleFormValues: Fn;
}
export declare function useFormEvents({ emit, getProps, formModel, getSchema, defaultValueRef, formElRef, schemaRef, handleFormValues, }: UseFormActionContext): {
    handleSubmit: (e?: Event) => Promise<void>;
    clearValidate: (name?: string | string[]) => Promise<void>;
    validate: (nameList?: NamePath[] | false | undefined) => Promise<any>;
    validateFields: (nameList?: NamePath[] | undefined) => Promise<any>;
    getFieldsValue: () => Recordable;
    updateSchema: (data: Partial<FormSchema> | Partial<FormSchema>[]) => Promise<void>;
    resetSchema: (data: Partial<FormSchema> | Partial<FormSchema>[]) => Promise<void>;
    appendSchemaByField: (schema: FormSchema | FormSchema[], prefixField?: string, first?: boolean) => Promise<void>;
    removeSchemaByField: (fields: string | string[]) => Promise<void>;
    resetFields: () => Promise<void>;
    setFieldsValue: (values: Recordable) => Promise<void>;
    scrollToField: (name: NamePath, options?: ScrollOptions | undefined) => Promise<void>;
    resetDefaultField: (nameList?: NamePath[]) => void;
};
export {};
