import type { Ref } from 'vue';
export declare function useScroll(refEl: Ref<Element | Window | null>, options?: {
    wait?: number;
    leading?: boolean;
    trailing?: boolean;
}): {
    refX: Ref<number>;
    refY: Ref<number>;
    stop: () => void;
};
