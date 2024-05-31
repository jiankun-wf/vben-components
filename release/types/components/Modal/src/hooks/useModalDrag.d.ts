import { Ref } from "vue";
export interface UseModalDragMoveContext {
    draggable: Ref<boolean>;
    destroyOnClose: Ref<boolean | undefined> | undefined;
    open: Ref<boolean>;
}
export declare function useModalDragMove(context: UseModalDragMoveContext): void;
