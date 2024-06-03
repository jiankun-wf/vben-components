import type { Ref } from "vue";
import type { Options } from "sortablejs";
export declare function useSortable(el?: HTMLElement | Ref<HTMLElement | undefined>, options?: Options): {
    initSortable: () => void;
};
