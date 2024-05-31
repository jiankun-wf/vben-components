import type { Component } from 'vue';
import type { ComponentType } from './types';
declare const componentMap: Map<string | number, Component>;
export declare function add<T extends string, R extends Component>(compName: ComponentType | T, component: R): void;
export declare function del<T extends string>(compName: ComponentType | T): void;
export { componentMap };
