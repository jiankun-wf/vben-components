import type { NamePath, RuleObject } from "ant-design-vue/lib/form/interface";
import type { VNode, CSSProperties } from "vue";
import type { ButtonProps as AntdButtonProps } from "ant-design-vue";
import type { FormItem } from "./formItem";
import type { ColEx, ComponentType, ComponentProps } from "./";
import type { TableActionType } from "@/components/Table/src/types/table";
import type { RowProps } from "ant-design-vue/lib/grid/Row";
export type FieldMapToTime = [
    string,
    [
        string,
        string
    ],
    (string | [string, string])?
][];
export type Rule = RuleObject & {
    trigger?: "blur" | "change" | ["change", "blur"];
};
export interface RenderCallbackParams {
    schema: FormSchemaInner;
    values: Recordable;
    model: Recordable;
    field: string;
}
export interface ButtonProps extends AntdButtonProps {
    text?: string;
}
export interface FormActionType {
    submit: () => Promise<void>;
    setFieldsValue: (values: Recordable) => Promise<void>;
    resetFields: () => Promise<void>;
    getFieldsValue: () => Recordable;
    clearValidate: (name?: string | string[]) => Promise<void>;
    updateSchema: (data: Partial<FormSchemaInner> | Partial<FormSchemaInner>[]) => Promise<void>;
    resetSchema: (data: Partial<FormSchemaInner> | Partial<FormSchemaInner>[]) => Promise<void>;
    setProps: (formProps: Partial<FormProps>) => Promise<void>;
    removeSchemaByField: (field: string | string[]) => Promise<void>;
    appendSchemaByField: (schema: FormSchemaInner | FormSchemaInner[], prefixField: string | undefined, first?: boolean | undefined) => Promise<void>;
    validateFields: (nameList?: NamePath[]) => Promise<any>;
    validate: <T = Recordable>(nameList?: NamePath[] | false) => Promise<T>;
    scrollToField: (name: NamePath, options?: ScrollOptions) => Promise<void>;
    resetDefaultField: (name?: NamePath[]) => void;
}
export type RegisterFn = (formInstance: FormActionType) => void;
export type UseFormReturnType = [RegisterFn, FormActionType];
export interface FormProps {
    name?: string;
    layout?: "vertical" | "inline" | "horizontal";
    model?: Recordable;
    labelWidth?: number | string;
    labelAlign?: "left" | "right";
    rowProps?: RowProps;
    submitOnReset?: boolean;
    submitOnChange?: boolean;
    labelCol?: Partial<ColEx>;
    wrapperCol?: Partial<ColEx>;
    baseRowStyle?: CSSProperties;
    baseColProps?: Partial<ColEx>;
    schemas?: FormSchema[];
    mergeDynamicData?: Recordable;
    compact?: boolean;
    emptySpan?: number | Partial<ColEx>;
    size?: "default" | "small" | "large";
    disabled?: boolean;
    readonly?: boolean;
    fieldMapToTime?: FieldMapToTime;
    autoSetPlaceHolder?: boolean;
    autoSubmitOnEnter?: boolean;
    rulesMessageJoinLabel?: boolean;
    showAdvancedButton?: boolean;
    autoFocusFirstItem?: boolean;
    autoAdvancedLine?: number;
    alwaysShowLines?: number;
    showActionButtonGroup?: boolean;
    resetButtonOptions?: Partial<ButtonProps>;
    submitButtonOptions?: Partial<ButtonProps>;
    actionColOptions?: Partial<ColEx>;
    showResetButton?: boolean;
    showSubmitButton?: boolean;
    resetFunc?: () => Promise<void>;
    submitFunc?: () => Promise<void>;
    transformDateFunc?: (date: any) => string;
    colon?: boolean;
}
export type RenderOpts = {
    disabled: boolean;
    [key: string]: any;
};
interface BaseFormSchema<T extends ComponentType = any> {
    field: string;
    fields?: string[];
    changeEvent?: string;
    valueField?: string;
    label?: string | VNode | ((renderCallbackParams: RenderCallbackParams) => string | VNode);
    subLabel?: string;
    helpMessage?: string | string[] | ((renderCallbackParams: RenderCallbackParams) => string | string[]);
    helpComponentProps?: Partial<HelpComponentProps>;
    labelWidth?: string | number;
    disabledLabelWidth?: boolean;
    componentProps?: ((opt: {
        schema: FormSchema;
        tableAction: TableActionType;
        formActionType: FormActionType;
        formModel: Recordable;
    }) => ComponentProps[T]) | ComponentProps[T];
    required?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean);
    suffix?: string | number | VNode | ((renderCallbackParams: RenderCallbackParams) => string | VNode | number);
    prefix?: string | number | VNode | ((renderCallbackParams: RenderCallbackParams) => string | VNode | number);
    rules?: Rule[];
    rulesMessageJoinLabel?: boolean;
    itemProps?: Partial<FormItem>;
    colProps?: Partial<ColEx>;
    defaultValue?: any;
    defaultValueObj?: {
        [key: string]: any;
    };
    isHandleDateDefaultValue?: boolean;
    isAdvanced?: boolean;
    span?: number;
    ifShow?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean);
    show?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean);
    render?: (renderCallbackParams: RenderCallbackParams, opts: RenderOpts) => VNode | VNode[] | string;
    renderColContent?: (renderCallbackParams: RenderCallbackParams, opts: RenderOpts) => VNode | VNode[] | string;
    renderComponentContent?: ((renderCallbackParams: RenderCallbackParams, opts: RenderOpts) => any) | VNode | VNode[] | string;
    colSlot?: string;
    dynamicDisabled?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean);
    dynamicReadonly?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean);
    dynamicRules?: (renderCallbackParams: RenderCallbackParams) => Rule[];
}
export interface ComponentFormSchema<T extends ComponentType = any> extends BaseFormSchema<T> {
    component: T;
}
export interface SlotFormSchema extends BaseFormSchema {
    slot: string;
}
type ComponentFormSchemaType<T extends ComponentType = ComponentType> = T extends any ? ComponentFormSchema<T> : never;
export type FormSchema = ComponentFormSchemaType | SlotFormSchema;
export type FormSchemaInner = Partial<ComponentFormSchema> & Partial<SlotFormSchema> & BaseFormSchema;
export declare function isSlotFormSchema(schema: FormSchemaInner): schema is SlotFormSchema;
export declare function isComponentFormSchema(schema: FormSchemaInner): schema is ComponentFormSchema;
export interface HelpComponentProps {
    maxWidth: string;
    showIndex: boolean;
    text: any;
    color: string;
    fontSize: string;
    icon: string;
    absolute: boolean;
    position: any;
}
export {};
