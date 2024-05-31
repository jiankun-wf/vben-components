import type { BasicTableProps } from './types/table';
export declare function parseRowKey<RecordType = any>(rowKey: BasicTableProps['rowKey'], record: RecordType, autoCreateKey?: boolean): number | string;
export declare function parseRowKeyValue<RecordType = any>(rowKey: BasicTableProps['rowKey'], record: RecordType, autoCreateKey?: boolean): number | string;
