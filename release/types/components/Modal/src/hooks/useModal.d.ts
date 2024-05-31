import type { UseModalReturnType, UseModalInnerReturnType } from '../typing';
/**
 * @description: Applicable to independent modal and call outside
 */
export declare function useModal(): UseModalReturnType;
export declare const useModalInner: (callbackFn?: Fn) => UseModalInnerReturnType;
