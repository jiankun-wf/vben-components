import "virtual:uno.css";
import "@/styles/index.less";
import "ant-design-vue/dist/reset.css";

export {
  BasicForm,
  formComponentRegister,
  formComponentDel,
  useForm,
} from "./components/Form";

export type { FormProps, FormActionType } from "./components/Form";

export {
  BasicTable,
  useTable,
  TableAction,
  TableImg,
} from "./components/Table";

export type {
  BasicTableProps,
  FormSchema,
  ActionItem as TableActionItem,
  BasicColumn,
} from "./components/Table";

export { BasicModal, useModal, useModalInner } from "./components/Modal";

export { PageWrapper as BasicPage } from "./components/Page";

// 定义入口
export { default as App } from "@/components/AppContext/index.vue";
export { initializeConfiguration } from "@/entry";
export { router } from "@/router";
export { store } from "@/store";

export { changeSetting } from "@/settings/requestSetting";

export { registerEnvVariable } from "@/settings/envSettings";
