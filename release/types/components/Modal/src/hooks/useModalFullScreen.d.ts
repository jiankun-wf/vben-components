import { Ref } from 'vue';
export interface UseFullScreenContext {
    wrapClassName: Ref<string | undefined>;
    modalWrapperRef: Ref<ComponentRef>;
    extHeightRef: Ref<number>;
}
export declare function useFullScreen(context: UseFullScreenContext): {
    getWrapClassName: import("vue").ComputedRef<string>;
    handleFullScreen: (e: Event) => void;
    fullScreenRef: Ref<boolean>;
};
