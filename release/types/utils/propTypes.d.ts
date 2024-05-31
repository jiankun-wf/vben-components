import { CSSProperties, VNodeChild } from 'vue';
import { VueTypeValidableDef, VueTypesInterface } from 'vue-types';
export type VueNode = VNodeChild | JSX.Element;
type PropTypes = VueTypesInterface & {
    readonly style: VueTypeValidableDef<CSSProperties>;
    readonly VNodeChild: VueTypeValidableDef<VueNode>;
};
declare const newPropTypes: PropTypes;
declare class propTypes extends newPropTypes {
    static get style(): VueTypeValidableDef<any>;
    static get VNodeChild(): VueTypeValidableDef<any>;
}
export { propTypes };
