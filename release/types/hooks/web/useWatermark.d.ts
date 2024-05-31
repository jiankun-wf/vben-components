import { Ref } from 'vue';
type UseWatermarkRes = {
    setWatermark: (str: string) => void;
    clear: () => void;
    clearAll: () => void;
    waterMarkOptions?: waterMarkOptionsType;
    obInstance?: MutationObserver;
    targetElement?: HTMLElement;
    parentElement?: HTMLElement;
};
type waterMarkOptionsType = {
    fontSize?: number;
    fontColor?: string;
    fontFamily?: string;
    textAlign?: CanvasTextAlign;
    textBaseline?: CanvasTextBaseline;
    rotate?: number;
};
export declare function useWatermark(appendEl?: Ref<HTMLElement | null>, waterMarkOptions?: waterMarkOptionsType): UseWatermarkRes;
export {};
