/**
 * @description: base64 to blob
 */
export declare function dataURLtoBlob(base64Buf: string): Blob;
/**
 * img url to base64
 * @param url
 */
export declare function urlToBase64(url: string, mineType?: string): Promise<string>;
