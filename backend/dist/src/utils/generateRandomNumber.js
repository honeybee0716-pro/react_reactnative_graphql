"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatorRandomSixDigitNumber = void 0;
const generatorRandomSixDigitNumber = () => {
    const max = 999999;
    const min = 100000;
    const randomNumber = Math.trunc(Math.random() * (max - min) + min);
    return randomNumber;
};
exports.generatorRandomSixDigitNumber = generatorRandomSixDigitNumber;
//# sourceMappingURL=generateRandomNumber.js.map