import type { Ref } from 'vue';
import type { FormProps, FormSchemaInner as FormSchema } from '../types/form';
export declare function useItemLabelWidth(schemaItemRef: Ref<FormSchema>, propsRef: Ref<FormProps>): import("vue").ComputedRef<{
    labelCol: Partial<import("vue").ExtractPropTypes<{
        span: (StringConstructor | NumberConstructor)[];
        order: (StringConstructor | NumberConstructor)[];
        offset: (StringConstructor | NumberConstructor)[];
        push: (StringConstructor | NumberConstructor)[];
        pull: (StringConstructor | NumberConstructor)[];
        xs: {
            type: import("vue").PropType<string | number | import("ant-design-vue/lib/grid/Col").ColSize>;
            default: string | number | import("ant-design-vue/lib/grid/Col").ColSize;
        };
        sm: {
            type: import("vue").PropType<string | number | import("ant-design-vue/lib/grid/Col").ColSize>;
            default: string | number | import("ant-design-vue/lib/grid/Col").ColSize;
        };
        md: {
            type: import("vue").PropType<string | number | import("ant-design-vue/lib/grid/Col").ColSize>;
            default: string | number | import("ant-design-vue/lib/grid/Col").ColSize;
        };
        lg: {
            type: import("vue").PropType<string | number | import("ant-design-vue/lib/grid/Col").ColSize>;
            default: string | number | import("ant-design-vue/lib/grid/Col").ColSize;
        };
        xl: {
            type: import("vue").PropType<string | number | import("ant-design-vue/lib/grid/Col").ColSize>;
            default: string | number | import("ant-design-vue/lib/grid/Col").ColSize;
        };
        xxl: {
            type: import("vue").PropType<string | number | import("ant-design-vue/lib/grid/Col").ColSize>;
            default: string | number | import("ant-design-vue/lib/grid/Col").ColSize;
        };
        prefixCls: StringConstructor;
        flex: (StringConstructor | NumberConstructor)[];
    }>> & import("vue").HTMLAttributes;
    wrapperCol: Partial<import("vue").ExtractPropTypes<{
        span: (StringConstructor | NumberConstructor)[];
        order: (StringConstructor | NumberConstructor)[];
        offset: (StringConstructor | NumberConstructor)[];
        push: (StringConstructor | NumberConstructor)[];
        pull: (StringConstructor | NumberConstructor)[];
        xs: {
            type: import("vue").PropType<string | number | import("ant-design-vue/lib/grid/Col").ColSize>;
            default: string | number | import("ant-design-vue/lib/grid/Col").ColSize;
        };
        sm: {
            type: import("vue").PropType<string | number | import("ant-design-vue/lib/grid/Col").ColSize>;
            default: string | number | import("ant-design-vue/lib/grid/Col").ColSize;
        };
        md: {
            type: import("vue").PropType<string | number | import("ant-design-vue/lib/grid/Col").ColSize>;
            default: string | number | import("ant-design-vue/lib/grid/Col").ColSize;
        };
        lg: {
            type: import("vue").PropType<string | number | import("ant-design-vue/lib/grid/Col").ColSize>;
            default: string | number | import("ant-design-vue/lib/grid/Col").ColSize;
        };
        xl: {
            type: import("vue").PropType<string | number | import("ant-design-vue/lib/grid/Col").ColSize>;
            default: string | number | import("ant-design-vue/lib/grid/Col").ColSize;
        };
        xxl: {
            type: import("vue").PropType<string | number | import("ant-design-vue/lib/grid/Col").ColSize>;
            default: string | number | import("ant-design-vue/lib/grid/Col").ColSize;
        };
        prefixCls: StringConstructor;
        flex: (StringConstructor | NumberConstructor)[];
    }>>;
} | {
    labelCol: {
        xs?: import("ant-design-vue/lib/grid/Col").ColSize | (string | number) | {
            span: string | number;
            offset: string | number;
        };
        sm?: import("ant-design-vue/lib/grid/Col").ColSize | (string | number) | {
            span: string | number;
            offset: string | number;
        };
        md?: import("ant-design-vue/lib/grid/Col").ColSize | (string | number) | {
            span: string | number;
            offset: string | number;
        };
        lg?: import("ant-design-vue/lib/grid/Col").ColSize | (string | number) | {
            span: string | number;
            offset: string | number;
        };
        xl?: import("ant-design-vue/lib/grid/Col").ColSize | (string | number) | {
            span: string | number;
            offset: string | number;
        };
        xxl?: import("ant-design-vue/lib/grid/Col").ColSize | (string | number) | {
            span: string | number;
            offset: string | number;
        };
        span?: string | number;
        order?: string | number;
        offset?: string | number;
        push?: string | number;
        pull?: string | number;
        prefixCls?: string;
        flex?: string | number;
        innerHTML?: string;
        class?: any;
        style: any;
        accesskey?: string;
        contenteditable?: (boolean | "true" | "false") | "inherit" | "plaintext-only";
        contextmenu?: string;
        dir?: string;
        draggable?: boolean | "true" | "false";
        hidden?: "" | "hidden" | (boolean | "true" | "false") | "until-found";
        id?: string;
        inert?: boolean | "true" | "false";
        lang?: string;
        placeholder?: string;
        spellcheck?: boolean | "true" | "false";
        tabindex?: string | number;
        title?: string;
        translate?: "yes" | "no";
        radiogroup?: string;
        role?: string;
        about?: string;
        datatype?: string;
        inlist?: any;
        prefix?: string;
        property?: string;
        resource?: string;
        typeof?: string;
        vocab?: string;
        autocapitalize?: string;
        autocorrect?: string;
        autosave?: string;
        color?: string;
        itemprop?: string;
        itemscope?: boolean | "true" | "false";
        itemtype?: string;
        itemid?: string;
        itemref?: string;
        results?: string | number;
        security?: string;
        unselectable?: "on" | "off";
        inputmode?: "search" | "text" | "url" | "email" | "tel" | "none" | "numeric" | "decimal";
        is?: string;
        'aria-activedescendant'?: string;
        'aria-atomic'?: boolean | "true" | "false";
        'aria-autocomplete'?: "inline" | "none" | "list" | "both";
        'aria-busy'?: boolean | "true" | "false";
        'aria-checked'?: (boolean | "true" | "false") | "mixed";
        'aria-colcount'?: string | number;
        'aria-colindex'?: string | number;
        'aria-colspan'?: string | number;
        'aria-controls'?: string;
        'aria-current'?: "page" | "time" | "date" | (boolean | "true" | "false") | "step" | "location";
        'aria-describedby'?: string;
        'aria-details'?: string;
        'aria-disabled'?: boolean | "true" | "false";
        'aria-dropeffect'?: "link" | "copy" | "none" | "execute" | "move" | "popup";
        'aria-errormessage'?: string;
        'aria-expanded'?: boolean | "true" | "false";
        'aria-flowto'?: string;
        'aria-grabbed'?: boolean | "true" | "false";
        'aria-haspopup'?: "dialog" | "menu" | (boolean | "true" | "false") | "listbox" | "tree" | "grid";
        'aria-hidden'?: boolean | "true" | "false";
        'aria-invalid'?: (boolean | "true" | "false") | "grammar" | "spelling";
        'aria-keyshortcuts'?: string;
        'aria-label'?: string;
        'aria-labelledby'?: string;
        'aria-level'?: string | number;
        'aria-live'?: "off" | "assertive" | "polite";
        'aria-modal'?: boolean | "true" | "false";
        'aria-multiline'?: boolean | "true" | "false";
        'aria-multiselectable'?: boolean | "true" | "false";
        'aria-orientation'?: "vertical" | "horizontal";
        'aria-owns'?: string;
        'aria-placeholder'?: string;
        'aria-posinset'?: string | number;
        'aria-pressed'?: (boolean | "true" | "false") | "mixed";
        'aria-readonly'?: boolean | "true" | "false";
        'aria-relevant'?: "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals";
        'aria-required'?: boolean | "true" | "false";
        'aria-roledescription'?: string;
        'aria-rowcount'?: string | number;
        'aria-rowindex'?: string | number;
        'aria-rowspan'?: string | number;
        'aria-selected'?: boolean | "true" | "false";
        'aria-setsize'?: string | number;
        'aria-sort'?: "none" | "ascending" | "descending" | "other";
        'aria-valuemax'?: string | number;
        'aria-valuemin'?: string | number;
        'aria-valuenow'?: string | number;
        'aria-valuetext'?: string;
        onCopy?: (payload: ClipboardEvent) => void;
        onCut?: (payload: ClipboardEvent) => void;
        onPaste?: (payload: ClipboardEvent) => void;
        onCompositionend?: (payload: CompositionEvent) => void;
        onCompositionstart?: (payload: CompositionEvent) => void;
        onCompositionupdate?: (payload: CompositionEvent) => void;
        onDrag?: (payload: DragEvent) => void;
        onDragend?: (payload: DragEvent) => void;
        onDragenter?: (payload: DragEvent) => void;
        onDragexit?: (payload: DragEvent) => void;
        onDragleave?: (payload: DragEvent) => void;
        onDragover?: (payload: DragEvent) => void;
        onDragstart?: (payload: DragEvent) => void;
        onDrop?: (payload: DragEvent) => void;
        onFocus?: (payload: FocusEvent) => void;
        onFocusin?: (payload: FocusEvent) => void;
        onFocusout?: (payload: FocusEvent) => void;
        onBlur?: (payload: FocusEvent) => void;
        onChange?: (payload: Event) => void;
        onBeforeinput?: (payload: Event) => void;
        onInput?: (payload: Event) => void;
        onReset?: (payload: Event) => void;
        onSubmit?: (payload: Event) => void;
        onInvalid?: (payload: Event) => void;
        onLoad?: (payload: Event) => void;
        onError?: (payload: Event) => void;
        onKeydown?: (payload: KeyboardEvent) => void;
        onKeypress?: (payload: KeyboardEvent) => void;
        onKeyup?: (payload: KeyboardEvent) => void;
        onAuxclick?: (payload: MouseEvent) => void;
        onClick?: (payload: MouseEvent) => void;
        onContextmenu?: (payload: MouseEvent) => void;
        onDblclick?: (payload: MouseEvent) => void;
        onMousedown?: (payload: MouseEvent) => void;
        onMouseenter?: (payload: MouseEvent) => void;
        onMouseleave?: (payload: MouseEvent) => void;
        onMousemove?: (payload: MouseEvent) => void;
        onMouseout?: (payload: MouseEvent) => void;
        onMouseover?: (payload: MouseEvent) => void;
        onMouseup?: (payload: MouseEvent) => void;
        onAbort?: (payload: Event) => void;
        onCanplay?: (payload: Event) => void;
        onCanplaythrough?: (payload: Event) => void;
        onDurationchange?: (payload: Event) => void;
        onEmptied?: (payload: Event) => void;
        onEncrypted?: (payload: Event) => void;
        onEnded?: (payload: Event) => void;
        onLoadeddata?: (payload: Event) => void;
        onLoadedmetadata?: (payload: Event) => void;
        onLoadstart?: (payload: Event) => void;
        onPause?: (payload: Event) => void;
        onPlay?: (payload: Event) => void;
        onPlaying?: (payload: Event) => void;
        onProgress?: (payload: Event) => void;
        onRatechange?: (payload: Event) => void;
        onSeeked?: (payload: Event) => void;
        onSeeking?: (payload: Event) => void;
        onStalled?: (payload: Event) => void;
        onSuspend?: (payload: Event) => void;
        onTimeupdate?: (payload: Event) => void;
        onVolumechange?: (payload: Event) => void;
        onWaiting?: (payload: Event) => void;
        onSelect?: (payload: Event) => void;
        onScroll?: (payload: Event) => void;
        onScrollend?: (payload: Event) => void;
        onTouchcancel?: (payload: TouchEvent) => void;
        onTouchend?: (payload: TouchEvent) => void;
        onTouchmove?: (payload: TouchEvent) => void;
        onTouchstart?: (payload: TouchEvent) => void;
        onPointerdown?: (payload: PointerEvent) => void;
        onPointermove?: (payload: PointerEvent) => void;
        onPointerup?: (payload: PointerEvent) => void;
        onPointercancel?: (payload: PointerEvent) => void;
        onPointerenter?: (payload: PointerEvent) => void;
        onPointerleave?: (payload: PointerEvent) => void;
        onPointerover?: (payload: PointerEvent) => void;
        onPointerout?: (payload: PointerEvent) => void;
        onWheel?: (payload: WheelEvent) => void;
        onAnimationstart?: (payload: AnimationEvent) => void;
        onAnimationend?: (payload: AnimationEvent) => void;
        onAnimationiteration?: (payload: AnimationEvent) => void;
        onTransitionend?: (payload: TransitionEvent) => void;
        onTransitionstart?: (payload: TransitionEvent) => void;
    };
    wrapperCol: {
        xs?: import("ant-design-vue/lib/grid/Col").ColSize | (string | number) | {
            span: string | number;
            offset: string | number;
        };
        sm?: import("ant-design-vue/lib/grid/Col").ColSize | (string | number) | {
            span: string | number;
            offset: string | number;
        };
        md?: import("ant-design-vue/lib/grid/Col").ColSize | (string | number) | {
            span: string | number;
            offset: string | number;
        };
        lg?: import("ant-design-vue/lib/grid/Col").ColSize | (string | number) | {
            span: string | number;
            offset: string | number;
        };
        xl?: import("ant-design-vue/lib/grid/Col").ColSize | (string | number) | {
            span: string | number;
            offset: string | number;
        };
        xxl?: import("ant-design-vue/lib/grid/Col").ColSize | (string | number) | {
            span: string | number;
            offset: string | number;
        };
        span?: string | number;
        order?: string | number;
        offset?: string | number;
        push?: string | number;
        pull?: string | number;
        prefixCls?: string;
        flex?: string | number;
        style: any;
    };
}>;