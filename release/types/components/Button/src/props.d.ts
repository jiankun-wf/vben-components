export declare const buttonProps: {
    color: {
        type: PropType<"" | "success" | "warning" | "error" | "primary">;
        validator: (v: any) => boolean;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
    /**
     * Text before icon.
     */
    preIcon: {
        type: StringConstructor;
    };
    /**
     * Text after icon.
     */
    postIcon: {
        type: StringConstructor;
    };
    /**
     * preIcon and postIcon icon size.
     * @default: 14
     */
    iconSize: {
        type: NumberConstructor;
        default: number;
    };
    onClick: {
        type: PropType<(() => any) | (() => any)[]>;
        default: any;
    };
    text: {
        type: StringConstructor;
    };
};
