import { ComputedRef } from "vue";
import { sizeEnum, screenEnum } from "@/enums/breakPoint";
export interface CreateCallbackParams {
    screen: ComputedRef<sizeEnum | undefined>;
    width: ComputedRef<number>;
    realWidth: ComputedRef<number>;
    screenEnum: typeof screenEnum;
    screenMap: Map<sizeEnum, number>;
    sizeEnum: typeof sizeEnum;
}
export declare function useBreakpoint(): {
    screenRef: ComputedRef<sizeEnum>;
    widthRef: ComputedRef<number>;
    screenEnum: typeof screenEnum;
    realWidthRef: ComputedRef<number>;
};
export declare function createBreakpointListen(fn?: (opt: CreateCallbackParams) => void): {
    screenRef: ComputedRef<sizeEnum>;
    screenEnum: typeof screenEnum;
    widthRef: ComputedRef<number>;
    realWidthRef: ComputedRef<number>;
};
