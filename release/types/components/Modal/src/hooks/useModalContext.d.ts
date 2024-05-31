export interface ModalContextProps {
    redoModalHeight: () => void;
}
export declare function createModalContext(context: ModalContextProps): {
    state: any;
};
export declare function useModalContext(): ModalContextProps;
