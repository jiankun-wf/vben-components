import type { App, Component } from "vue";
export declare const noop: () => void;
/**
 * @description:  Set ui mount node
 */
export declare function getPopupContainer(node?: HTMLElement): HTMLElement;
/**
 * Add the object as a parameter to the URL
 * @param baseUrl url
 * @param obj
 * @returns {string}
 * eg:
 *  let obj = {a: '3', b: '4'}
 *  setObjToUrlParams('www.baidu.com', obj)
 *  ==>www.baidu.com?a=3&b=4
 */
export declare function setObjToUrlParams(baseUrl: string, obj: any): string;
/**
 * Recursively merge two objects.
 * 递归合并两个对象。
 *
 * @param source The source object to merge from. 要合并的源对象。
 * @param target The target object to merge into. 目标对象，合并后结果存放于此。
 * @param mergeArrays How to merge arrays. Default is "replace".
 *        如何合并数组。默认为replace。
 *        - "union": Union the arrays. 对数组执行并集操作。
 *        - "intersection": Intersect the arrays. 对数组执行交集操作。
 *        - "concat": Concatenate the arrays. 连接数组。
 *        - "replace": Replace the source array with the target array. 用目标数组替换源数组。
 * @returns The merged object. 合并后的对象。
 */
export declare function deepMerge<T extends object | null | undefined, U extends object | null | undefined>(source: T, target: U, mergeArrays?: "union" | "intersection" | "concat" | "replace"): T & U;
export declare function openWindow(url: string, opt?: {
    target?: TargetContext | string;
    noopener?: boolean;
    noreferrer?: boolean;
}): void;
export declare function getDynamicProps<T extends Record<string, unknown>, U>(props: T): Partial<U>;
type EventShim = {
    new (...args: any[]): {
        $props: {
            onClick?: (...args: any[]) => void;
        };
    };
};
export type WithInstall<T> = T & {
    install(app: App): void;
} & EventShim;
export type CustomComponent = Component & {
    displayName?: string;
};
export declare const withInstall: <T extends CustomComponent>(component: T, alias?: string) => WithInstall<T>;
export {};
