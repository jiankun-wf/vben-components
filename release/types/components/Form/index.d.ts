export type * from "./src/types/form";
export type * from "./src/types/formItem";
export { useComponentRegister as formComponentRegister } from "./src/hooks/useComponentRegister";
export { useForm } from "./src/hooks/useForm";
export { add as formComponentAdd, del as formComponentDel, } from "./src/componentMap";
export declare const BasicForm: import("@/utils").WithInstall<import("vue").ComponentOptions>;
