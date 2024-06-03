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
