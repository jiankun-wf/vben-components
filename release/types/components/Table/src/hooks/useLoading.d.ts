import { ComputedRef } from 'vue';
import type { BasicTableProps } from '../types/table';
export declare function useLoading(props: ComputedRef<BasicTableProps>): {
    getLoading: ComputedRef<boolean>;
    setLoading: (loading: boolean) => void;
};
