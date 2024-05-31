import type { FormProps, UseFormReturnType } from "../types/form";
import type { NamePath } from "ant-design-vue/lib/form/interface";
import type { DynamicProps } from "#/utils";
export declare type ValidateFields = (nameList?: NamePath[]) => Promise<Recordable>;
type Props = Partial<DynamicProps<FormProps>>;
export declare function useForm(props?: Props): UseFormReturnType;
export {};
