import type { ComponentType } from "../../types/componentType";
export interface ComponentProps {
    component: ComponentType;
    rule: boolean;
    popoverVisible: boolean;
    ruleMessage: string;
    getPopupContainer?: Fn;
}
export declare const CellComponent: ({ component, rule, ruleMessage, popoverVisible, getPopupContainer, }: ComponentProps, { attrs }: {
    attrs: any;
}) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>;
