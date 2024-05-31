import type { PropType, CSSProperties } from "vue";
import type { ModalWrapperProps } from "./typing";
export declare const modalProps: {
    open: {
        type: BooleanConstructor;
    };
    scrollTop: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: NumberConstructor;
    };
    minHeight: {
        type: NumberConstructor;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    centered: {
        type: BooleanConstructor;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    closeFunc: PropType<() => Promise<boolean>>;
};
export declare const basicProps: {
    open: {
        type: BooleanConstructor;
    };
    scrollTop: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: NumberConstructor;
    };
    minHeight: {
        type: NumberConstructor;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    centered: {
        type: BooleanConstructor;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    closeFunc: PropType<() => Promise<boolean>>;
} & {
    defaultFullscreen: {
        type: BooleanConstructor;
    };
    canFullscreen: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrapperFooterOffset: {
        type: NumberConstructor;
        default: number;
    };
    helpMessage: PropType<string | string[]>;
    useWrapper: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
    };
    loadingTip: {
        type: StringConstructor;
    };
    /**
     * @description: Show close button
     */
    showCancelBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description: Show confirmation button
     */
    showOkBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrapperProps: PropType<Partial<ModalWrapperProps>>;
    afterClose: PropType<() => Promise<VueNode>>;
    bodyStyle: PropType<CSSProperties>;
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIcon: PropType<VueNode>;
    confirmLoading: {
        type: BooleanConstructor;
    };
    destroyOnClose: {
        type: BooleanConstructor;
    };
    footer: PropType<VueNode>;
    getContainer: PropType<() => any>;
    mask: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskClosable: {
        type: BooleanConstructor;
        default: boolean;
    };
    keyboard: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskStyle: PropType<CSSProperties>;
    okType: {
        type: StringConstructor;
        default: string;
    };
    okButtonProps: {
        type: PropType<Partial<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            type: PropType<import("ant-design-vue/es/button/buttonTypes").ButtonType>;
            htmlType: {
                type: PropType<import("ant-design-vue/es/button/buttonTypes").ButtonHTMLType>;
                default: string;
            };
            shape: {
                type: PropType<import("ant-design-vue/es/button/buttonTypes").ButtonShape>;
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
                default: any; /**
                 * @description: Show confirmation button
                 */
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
        }>>>;
    };
    cancelButtonProps: {
        type: PropType<Partial<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            type: PropType<import("ant-design-vue/es/button/buttonTypes").ButtonType>;
            htmlType: {
                type: PropType<import("ant-design-vue/es/button/buttonTypes").ButtonHTMLType>;
                default: string;
            };
            shape: {
                type: PropType<import("ant-design-vue/es/button/buttonTypes").ButtonShape>;
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
                default: any; /**
                 * @description: Show confirmation button
                 */
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
        }>>>;
    };
    title: {
        type: StringConstructor;
    };
    open: {
        type: BooleanConstructor;
    };
    width: PropType<string | number>;
    wrapClassName: {
        type: StringConstructor;
    };
    zIndex: {
        type: NumberConstructor;
    };
};
