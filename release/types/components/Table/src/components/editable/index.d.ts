import type { BasicColumn } from '@/components/Table/src/types/table';
import { Ref } from 'vue';
interface Params {
    text: string;
    record: Recordable;
    index: number;
}
export declare function renderEditCell(column: BasicColumn): ({ text: value, record, index }: Params) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>;
export type EditRecordRow<T = Recordable> = Partial<{
    onEdit: (editable: boolean, submit?: boolean) => Promise<boolean>;
    onValid: () => Promise<boolean>;
    editable: boolean;
    onCancel: Fn;
    onSubmit: Fn;
    submitCbs: Fn[];
    cancelCbs: Fn[];
    validCbs: Fn[];
    editValueRefs: Recordable<Ref>;
} & T>;
export {};
