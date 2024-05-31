import type { FunctionArgs } from '@vueuse/core';
export interface ViewportOffsetResult {
    /**
     * 元素左边距离 body 左边的距离（和 getBoundingClientRect 的 left 一样）
     */
    left: number;
    /**
     * 元素顶边距离 body 顶边的距离（和 getBoundingClientRect 的 top 一样）
     */
    top: number;
    /**
     * 元素右边距离 body 右边的距离
     */
    right: number;
    /**
     * 元素底边距离 body 底边的距离
     */
    bottom: number;
    /**
     * 内容宽度 + 计算后的 right
     */
    rightIncludeBody: number;
    /**
     * 内容高度 + 计算后的 bottom
     */
    bottomIncludeBody: number;
}
export declare function getBoundingClientRect(element: Element): DOMRect | number;
export declare function hasClass(el: Element, cls: string): boolean;
export declare function addClass(el: Element, cls: string): void;
export declare function removeClass(el: Element, cls: string): void;
/**
 * Get the left and top offset of the current element
 * left: the distance between the leftmost element and the left side of the document
 * top: the distance from the top of the element to the top of the document
 * right: the distance from the far right of the element to the right of the document
 * bottom: the distance from the bottom of the element to the bottom of the document
 * rightIncludeBody: the distance between the leftmost element and the right side of the document
 * bottomIncludeBody: the distance from the bottom of the element to the bottom of the document
 *
 * @description:
 */
export declare function getViewportOffset(element: Element): ViewportOffsetResult;
export declare function hackCss(attr: string, value: string): any;
export declare function on(element: Element | HTMLElement | Document | Window, event: string, handler: EventListenerOrEventListenerObject): void;
export declare function off(element: Element | HTMLElement | Document | Window, event: string, handler: Fn): void;
export declare function once(el: HTMLElement, event: string, fn: EventListener): void;
export declare function useRafThrottle<T extends FunctionArgs>(fn: T): T;
