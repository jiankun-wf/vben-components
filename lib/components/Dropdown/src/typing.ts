export interface DropMenu {
  onClick?: Fn;
  to?: string;
  icon?: string;
  event: string | number;
  text: string;
  disabled?: boolean;
  divider?: boolean;
}

export interface DropdownMenuItem extends DropMenu {
  [key: string]: any;
}
