interface TreeHelperConfig {
    id: string;
    children: string;
    pid: string;
}
export declare function listToTree<T = any>(list: any[], config?: Partial<TreeHelperConfig>): T[];
export declare function treeToList<T = any>(tree: any, config?: Partial<TreeHelperConfig>): T;
export declare function findNode<T = any>(tree: any, func: Fn, config?: Partial<TreeHelperConfig>): T | null;
export declare function findNodeAll<T = any>(tree: any, func: Fn, config?: Partial<TreeHelperConfig>): T[];
export declare function findPath<T = any>(tree: any, func: Fn, config?: Partial<TreeHelperConfig>): T | T[] | null;
export declare function findPathAll(tree: any, func: Fn, config?: Partial<TreeHelperConfig>): any[];
export declare function filter<T = any>(tree: T[], func: (n: T) => boolean, config?: Partial<TreeHelperConfig>): T[];
export declare function forEach<T = any>(tree: T[], func: (n: T) => any, config?: Partial<TreeHelperConfig>): void;
/**
 * @description: Extract tree specified structure
 * @description: 提取树指定结构
 */
export declare function treeMap<T = any>(treeData: T[], opt: {
    children?: string;
    conversion: Fn;
}): T[];
/**
 * @description: Extract tree specified structure
 * @description: 提取树指定结构
 */
export declare function treeMapEach(data: any, { children, conversion }: {
    children?: string;
    conversion: Fn;
}): any;
/**
 * 递归遍历树结构
 * @param treeDatas 树
 * @param callBack 回调
 * @param parentNode 父节点
 */
export declare function eachTree(treeDatas: any[], callBack: Fn, parentNode?: {}): void;
export {};
