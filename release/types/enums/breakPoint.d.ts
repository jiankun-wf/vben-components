export declare enum sizeEnum {
    XS = "XS",
    SM = "SM",
    MD = "MD",
    LG = "LG",
    XL = "XL",
    XXL = "XXL"
}
export declare enum screenEnum {
    XS = 320,
    SM = 640,
    MD = 768,
    LG = 960,
    XL = 1280,
    XXL = 1536
}
declare const screenMap: Map<sizeEnum, number>;
export { screenMap };
