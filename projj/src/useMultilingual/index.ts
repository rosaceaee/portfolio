// import STRING_ESSETS from "../constants/lang";
import AHH from "./type";

export type LanguageType = "ko" | "en" | "ja";

// export type StringEssetType = Record<number, Record<LanguageType, number>>;

export interface strr {
  [key: string]: () => any; // ⭐⭐⭐ index signature
}

//export default function useMultilingual(lang: LanguageType) {
//  return (key: keyof typeof STRING_ESSETS) => {
//   return STRING_ESSETS[key][lang];
// };

export default function useMultilingual(lang: LanguageType) {
  return (key: keyof typeof AHH) => {
    return AHH[key][lang];
  };
}

//const test = JSON.stringify(STRING_ESSETS);

// console.log(typeof STRING_ESSETS);
// return (key: keyof typeof STRING_ESSETS) => {
// return STRING_ESSETS[key][lang];
// };
