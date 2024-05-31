import BasicForm from "./src/BasicForm.vue";
export type * from "./src/types/form";
export type * from "./src/types/formItem";
export { useComponentRegister as formComponentRegister } from "./src/hooks/useComponentRegister";
export { useForm } from "./src/hooks/useForm";
export { add as formComponentAdd, del as formComponentDel, } from "./src/componentMap";
export { BasicForm };
