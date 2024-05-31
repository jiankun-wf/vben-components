import type { ComputedRef, Ref } from 'vue';
export interface PageContextProps {
    contentHeight: ComputedRef<number>;
    pageHeight: Ref<number>;
    setPageHeight: (height: number) => Promise<void>;
}
export declare function createPageContext(context: PageContextProps): {
    state: any;
};
export declare function usePageContext(): PageContextProps;
