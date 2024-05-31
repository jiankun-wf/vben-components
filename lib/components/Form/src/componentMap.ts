import type { Component } from 'vue';
import type { ComponentType } from './types';

/**
 * Component list, register here to setting it in the form
 */
import { Input } from 'ant-design-vue';

const componentMap = new Map<ComponentType | string, Component>();

export function add<T extends string, R extends Component>(
  compName: ComponentType | T,
  component: R,
) {
  componentMap.set(compName, component);
}

export function del<T extends string>(compName: ComponentType | T) {
  componentMap.delete(compName);
}

add('Input', Input);

export { componentMap };
