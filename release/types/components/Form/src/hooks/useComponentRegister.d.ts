import type { ComponentType } from "../types";
import type { Component } from "vue";
export declare function useComponentRegister<T extends string, R extends Component>(c: ComponentType | T, comp: R): void;
