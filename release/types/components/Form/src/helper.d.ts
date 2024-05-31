import type { Rule as ValidationRule } from "ant-design-vue/lib/form/interface";
import type { ComponentType } from "./types";
/**
 * @description: 生成placeholder
 */
export declare function createPlaceholderMessage(c: ComponentType): "" | "请输入" | "请选择";
export declare function setComponentRuleType(rule: ValidationRule, c: ComponentType, valueFormat: string): void;
export declare function processDateValue(attr: Recordable, component: string): void;
export declare const defaultValueComponents: string[];
/**
 * 时间字段
 */
export declare const dateItemType: string[];
export declare const NO_AUTO_LINK_COMPONENTS: ComponentType[];
export declare const simpleComponents: string[];
export declare function isIncludeSimpleComponents(c?: ComponentType): boolean;
