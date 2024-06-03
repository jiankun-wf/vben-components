/**
 * Independent time operation tool to facilitate subsequent switch to dayjs
 */
import dayjs from 'dayjs';
export declare function formatToDateTime(date?: dayjs.ConfigType, format?: string): string;
export declare function formatToDate(date?: dayjs.ConfigType, format?: string): string;
export declare const dateUtil: typeof dayjs;
