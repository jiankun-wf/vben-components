# Vben-admin 公共组件提取

## 导出内容！

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

export { Dropdown, type DropdownMenuItem } from "./components/Dropdown";

export { BasicDrawer, useDrawer, useDrawerInner } from "./components/Drawer";

export { BasicMenu } from "./components/Menu";

export { Description } from "./components/Description";

export {
  destroyContextMenu,
  createContextMenu,
  type ContextMenuItem,
  type CreateContextOptions,
} from "./components/ContextMenu";

export { Loading } from "./components/Loading";

export { Scrollbar } from "./components/Scrollbar";

export { ClickOutSide } from "./components/ClickOutSide";

export { useGlobSetting } from "./hooks/setting";
```
