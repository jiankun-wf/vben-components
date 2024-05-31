/**
 * Download online pictures
 * @param url
 * @param filename
 * @param mime
 * @param bom
 */
export declare function downloadByOnlineUrl(url: string, filename: string, mime?: string, bom?: BlobPart): void;
/**
 * Download pictures based on base64
 * @param buf
 * @param filename
 * @param mime
 * @param bom
 */
export declare function downloadByBase64(buf: string, filename: string, mime?: string, bom?: BlobPart): void;
/**
 * Download according to the background interface file stream
 * @param {*} data
 * @param {*} filename
 * @param {*} mime
 * @param {*} bom
 */
export declare function downloadByData(data: BlobPart, filename: string, mime?: string, bom?: BlobPart): void;
/**
 * Download file according to file address
 * @param {*} sUrl
 */
export declare function downloadByUrl({ url, target, fileName, }: {
    url: string;
    target?: TargetContext;
    fileName?: string;
}): boolean;
