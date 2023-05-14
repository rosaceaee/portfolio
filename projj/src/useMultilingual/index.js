"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import STRING_ESSETS from "../constants/lang";
var type_1 = require("./type");
//export default function useMultilingual(lang: LanguageType) {
//  return (key: keyof typeof STRING_ESSETS) => {
//   return STRING_ESSETS[key][lang];
// };
function useMultilingual(lang) {
    return function (key) {
        return type_1.default[key][lang];
    };
}
exports.default = useMultilingual;
//const test = JSON.stringify(STRING_ESSETS);
// console.log(typeof STRING_ESSETS);
// return (key: keyof typeof STRING_ESSETS) => {
// return STRING_ESSETS[key][lang];
// };
