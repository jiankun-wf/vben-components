import type { ComputedRef } from 'vue';
import type { BasicTableProps } from '../types/table';
import type { Key } from 'ant-design-vue/lib/table/interface';
interface Options {
    setSelectedRowKeys: (keyValues: Key[]) => void;
    getSelectRowKeys: () => Key[];
    clearSelectedRowKeys: () => void;
    emit: EmitType;
    getAutoCreateKey: ComputedRef<boolean | undefined>;
}
export declare function useCustomRow(propsRef: ComputedRef<BasicTableProps>, { setSelectedRowKeys, getSelectRowKeys, getAutoCreateKey, clearSelectedRowKeys, emit }: Options): {
    customRow: (record: Recordable, index: number) => {
        onClick: (e: Event) => void;
        onDblclick: (event: Event) => void;
        onContextmenu: (event: Event) => void;
        onMouseenter: (event: Event) => void;
        onMouseleave: (event: Event) => void;
    };
};
export {};
