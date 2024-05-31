import type { Directive } from 'vue';
import './index.less';
export interface RippleOptions {
    event: string;
    transition: number;
}
export interface RippleProto {
    background?: string;
    zIndex?: string;
}
export type EventType = Event & MouseEvent & TouchEvent;
declare const RippleDirective: Directive & RippleProto;
export default RippleDirective;
