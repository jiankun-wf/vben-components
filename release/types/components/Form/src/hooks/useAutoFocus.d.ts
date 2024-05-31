import type { ComputedRef, Ref } from 'vue';
import { type FormSchemaInner as FormSchema, type FormActionType, type FormProps } from '../types/form';
interface UseAutoFocusContext {
    getSchema: ComputedRef<FormSchema[]>;
    getProps: ComputedRef<FormProps>;
    isInitedDefault: Ref<boolean>;
    formElRef: Ref<FormActionType>;
}
export declare function useAutoFocus({ getSchema, getProps, formElRef, isInitedDefault, }: UseAutoFocusContext): Promise<void>;
export {};
