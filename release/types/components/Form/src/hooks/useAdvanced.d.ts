import type { AdvanceState } from '../types/hooks';
import { ComputedRef, Ref } from 'vue';
import type { FormProps, FormSchemaInner as FormSchema } from '../types/form';
interface UseAdvancedContext {
    advanceState: AdvanceState;
    emit: EmitType;
    getProps: ComputedRef<FormProps>;
    getSchema: ComputedRef<FormSchema[]>;
    formModel: Recordable;
    defaultValueRef: Ref<Recordable>;
}
export default function ({ advanceState, emit, getProps, getSchema, formModel, defaultValueRef, }: UseAdvancedContext): {
    handleToggleAdvanced: () => void;
    fieldsIsAdvancedMap: import("vue").ShallowReactive<Recordable<any>>;
};
export {};
