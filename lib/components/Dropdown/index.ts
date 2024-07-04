import { withInstall } from "@/utils";
import dropdown from "./src/Dropdown.vue";

export type { DropdownMenuItem, DropMenu } from "./src/typing";
export const Dropdown = withInstall(dropdown);
