# Vben-admin 公共组件提取

## 导入内容！

1. BasicForm 多功能表单
2. BasicTable 多功能表格
3. BasicModal 多功能弹框
4. BasicPage 页面基本结构组件

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

export { PageWrapper as BasicPage } from "./components/Page";
```
