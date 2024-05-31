import type { Component } from "vue";
import type { ComponentType } from "./types/componentType";
declare const componentMap: Map<ComponentType, Component>;
export declare function add(compName: ComponentType, component: Component): void;
export declare function del(compName: ComponentType): void;
export { componentMap };
