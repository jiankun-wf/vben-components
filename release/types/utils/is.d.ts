export { isArguments, isArrayBuffer, isArrayLike, isArrayLikeObject, isBuffer, isBoolean, isDate, isElement, isEmpty, isEqual, isEqualWith, isError, isFunction, isFinite, isLength, isMap, isMatch, isMatchWith, isNative, isNil, isNumber, isNull, isObjectLike, isPlainObject, isRegExp, isSafeInteger, isSet, isString, isSymbol, isTypedArray, isUndefined, isWeakMap, isWeakSet, } from 'lodash-es';
export declare function is(val: unknown, type: string): boolean;
export declare function isDef<T = unknown>(val?: T): val is T;
export declare function isObject(val: any): val is Record<any, any>;
export declare function isArray(val: any): val is Array<any>;
export declare function isWindow(val: any): val is Window;
export declare const isServer: boolean;
export declare const isClient: boolean;
export declare function isHttpUrl(path: string): boolean;
export declare function isPascalCase(str: string): boolean;