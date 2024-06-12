// AES 加密
import { encrypt, decrypt } from "crypto-js/aes";
import Pkcs7 from "crypto-js/pad-pkcs7";
import ECB from "crypto-js/mode-ecb";
import UTF8 from "crypto-js/enc-utf8";
import HEX from "crypto-js/enc-hex";
import Base64 from "crypto-js/enc-base64";
import { apiCipher } from "@/settings/encryptionSetting";

// AES 加密
export const encryptByAES = (cipherText: string) => {
  return encrypt(UTF8.parse(cipherText), HEX.parse(apiCipher.key), {
    mode: ECB,
    padding: Pkcs7,
  }).toString();
};
// 解密
export const decryptByAES = (text: string) => {
  return decrypt(Base64.stringify(HEX.parse(text)), HEX.parse(apiCipher.key), {
    mode: ECB,
    padding: Pkcs7,
  })
    .toString(UTF8)
    .toString();
};
