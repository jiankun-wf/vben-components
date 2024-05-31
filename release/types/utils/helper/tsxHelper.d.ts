import { Slots } from 'vue';
import { RenderOpts } from '@/components/Form';
/**
 * @description:  Get slot to prevent empty error
 */
export declare function getSlot(slots: Slots, slot?: string, data?: any, opts?: RenderOpts): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[];
/**
 * extends slots
 * @param slots
 * @param excludeKeys
 */
export declare function extendSlots(slots: Slots, excludeKeys?: string[]): any;
