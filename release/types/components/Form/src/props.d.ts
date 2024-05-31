import type { FieldMapToTime, FormSchema } from "./types/form";
import type { CSSProperties, PropType } from "vue";
import type { ColEx } from "./types";
import type { TableActionType } from "@/components/Table";
export declare const basicProps: {
    model: {
        type: PropType<Recordable<any>>;
        default: () => {};
    };
    labelWidth: {
        type: PropType<string | number>;
        default: number;
    };
    fieldMapToTime: {
        type: PropType<FieldMapToTime>;
        default: () => any[];
    };
    compact: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    schemas: {
        type: PropType<FormSchema[]>;
        default: () => any[];
    };
    mergeDynamicData: {
        type: PropType<Recordable<any>>;
        default: any;
    };
    baseRowStyle: {
        type: PropType<CSSProperties>;
    };
    baseColProps: {
        type: PropType<Partial<ColEx>>;
    };
    autoSetPlaceHolder: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    autoSubmitOnEnter: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    submitOnReset: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    submitOnChange: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    size: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    emptySpan: {
        type: PropType<number | Recordable<any>>;
        default: number;
    };
    showAdvancedButton: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    transformDateFunc: {
        type: PropType<Fn<any, any>>;
        default: (date: any) => any;
    };
    rulesMessageJoinLabel: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    autoAdvancedLine: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    alwaysShowLines: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    showActionButtonGroup: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    actionColOptions: PropType<Partial<ColEx>>;
    showResetButton: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    autoFocusFirstItem: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    resetButtonOptions: PropType<Partial<Partial<import("vue").ExtractPropTypes<{
        prefixCls: StringConstructor;
        type: PropType<import("ant-design-vue/es/button").ButtonType>;
        htmlType: {
            type: PropType<import("ant-design-vue/es/button/buttonTypes").ButtonHTMLType>;
            default: string;
        };
        shape: {
            type: PropType<import("ant-design-vue/es/button").ButtonShape>;
        };
        size: {
            type: PropType<import("ant-design-vue/es/button").ButtonSize>;
        };
        loading: {
            type: PropType<boolean | {
                delay?: number;
            }>;
            default: () => boolean | {
                delay?: number;
            };
        };
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        ghost: {
            type: BooleanConstructor;
            default: any;
        };
        block: {
            type: BooleanConstructor;
            default: any;
        };
        danger: {
            type: BooleanConstructor;
            default: any;
        };
        icon: import("vue-types").VueTypeValidableDef<any>;
        href: StringConstructor;
        target: StringConstructor;
        title: StringConstructor;
        onClick: {
            type: PropType<import("ant-design-vue/es/_util/EventInterface").MouseEventHandler | import("ant-design-vue/es/_util/EventInterface").MouseEventHandler[]>;
        };
        onMousedown: {
            type: PropType<import("ant-design-vue/es/_util/EventInterface").MouseEventHandler | import("ant-design-vue/es/_util/EventInterface").MouseEventHandler[]>;
        };
    }>>>>;
    showSubmitButton: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    submitButtonOptions: PropType<Partial<Partial<import("vue").ExtractPropTypes<{
        prefixCls: StringConstructor;
        type: PropType<import("ant-design-vue/es/button").ButtonType>;
        htmlType: {
            type: PropType<import("ant-design-vue/es/button/buttonTypes").ButtonHTMLType>;
            default: string;
        };
        shape: {
            type: PropType<import("ant-design-vue/es/button").ButtonShape>;
        };
        size: {
            type: PropType<import("ant-design-vue/es/button").ButtonSize>;
        };
        loading: {
            type: PropType<boolean | {
                delay?: number;
            }>;
            default: () => boolean | {
                delay?: number;
            };
        };
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        ghost: {
            type: BooleanConstructor;
            default: any;
        };
        block: {
            type: BooleanConstructor;
            default: any;
        };
        danger: {
            type: BooleanConstructor;
            default: any;
        };
        icon: import("vue-types").VueTypeValidableDef<any>;
        href: StringConstructor;
        target: StringConstructor;
        title: StringConstructor;
        onClick: {
            type: PropType<import("ant-design-vue/es/_util/EventInterface").MouseEventHandler | import("ant-design-vue/es/_util/EventInterface").MouseEventHandler[]>;
        };
        onMousedown: {
            type: PropType<import("ant-design-vue/es/_util/EventInterface").MouseEventHandler | import("ant-design-vue/es/_util/EventInterface").MouseEventHandler[]>;
        };
    }>>>>;
    resetFunc: PropType<() => Promise<void>>;
    submitFunc: PropType<() => Promise<void>>;
    hideRequiredMark: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    labelCol: PropType<Partial<ColEx>>;
    layout: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    tableAction: {
        type: PropType<TableActionType>;
    };
    wrapperCol: PropType<Partial<ColEx>>;
    colon: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    labelAlign: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    rowProps: PropType<Partial<import("vue").ExtractPropTypes<{
        align: {
            type: PropType<"middle" | "top" | "bottom" | "stretch" | {
                xs?: "middle" | "top" | "bottom" | "stretch";
                sm?: "middle" | "top" | "bottom" | "stretch";
                md?: "middle" | "top" | "bottom" | "stretch";
                lg?: "middle" | "top" | "bottom" | "stretch";
                xl?: "middle" | "top" | "bottom" | "stretch";
                xxl?: "middle" | "top" | "bottom" | "stretch";
            }>;
            default: "middle" | "top" | "bottom" | "stretch" | {
                xs?: "middle" | "top" | "bottom" | "stretch";
                sm?: "middle" | "top" | "bottom" | "stretch";
                md?: "middle" | "top" | "bottom" | "stretch";
                lg?: "middle" | "top" | "bottom" | "stretch";
                xl?: "middle" | "top" | "bottom" | "stretch";
                xxl?: "middle" | "top" | "bottom" | "stretch";
            };
        };
        justify: {
            type: PropType<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | {
                xs?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly";
                sm?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly";
                md?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly";
                lg?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly";
                xl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly";
                xxl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly";
            }>;
            default: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | {
                xs?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly";
                sm?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly";
                md?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly";
                lg?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly";
                xl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly";
                xxl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly";
            };
        };
        prefixCls: StringConstructor;
        gutter: {
            type: PropType<import("ant-design-vue/lib/grid/Row").Gutter | [import("ant-design-vue/lib/grid/Row").Gutter, import("ant-design-vue/lib/grid/Row").Gutter]>;
            default: import("ant-design-vue/lib/grid/Row").Gutter | [import("ant-design-vue/lib/grid/Row").Gutter, import("ant-design-vue/lib/grid/Row").Gutter];
        };
        wrap: {
            type: BooleanConstructor;
            default: any;
        };
    }>>>;
};
