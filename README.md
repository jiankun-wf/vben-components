# Vben-admin 公共组件提取

## 导入内容！

1. BasicForm
2. BasicTable
3. BasicModal

```typescript
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
```
