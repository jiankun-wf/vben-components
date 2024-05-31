interface ScriptOptions {
    src: string;
}
export declare function useScript(opts: ScriptOptions): {
    isLoading: import("vue").Ref<boolean>;
    error: import("vue").Ref<boolean>;
    success: import("vue").Ref<boolean>;
    toPromise: () => Promise<unknown>;
};
export {};
