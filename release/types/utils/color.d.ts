/**
 * 判断是否 十六进制颜色值.
 * 输入形式可为 #fff000 #f00
 *
 * @param   String  color   十六进制颜色值
 * @return  Boolean
 */
export declare function isHexColor(color: string): boolean;
/**
 * RGB 颜色值转换为 十六进制颜色值.
 * r, g, 和 b 需要在 [0, 255] 范围内
 *
 * @return  String          类似#ff00ff
 * @param r
 * @param g
 * @param b
 */
export declare function rgbToHex(r: number, g: number, b: number): string;
/**
 * Transform a HEX color to its RGB representation
 * @param {string} hex The color to transform
 * @returns The RGB representation of the passed color
 */
export declare function hexToRGB(hex: string): string;
export declare function colorIsDark(color: string): boolean;
/**
 * Darkens a HEX color given the passed percentage
 * @param {string} color The color to process
 * @param {number} amount The amount to change the color by
 * @returns {string} The HEX representation of the processed color
 */
export declare function darken(color: string, amount: number): string;
/**
 * Lightens a 6 char HEX color according to the passed percentage
 * @param {string} color The color to change
 * @param {number} amount The amount to change the color by
 * @returns {string} The processed color represented as HEX
 */
export declare function lighten(color: string, amount: number): string;
/**
 * Determines what the best text color is (black or white) based con the contrast with the background
 * @param hexColor - Last selected color by the user
 */
export declare function calculateBestTextColor(hexColor: string): "#000000" | "#FFFFFF";
