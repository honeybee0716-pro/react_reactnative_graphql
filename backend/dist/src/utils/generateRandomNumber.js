"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomNumber = void 0;
const generateRandomNumber = () => {
    const max = 999999;
    const min = 100000;
    const randomNumber = Math.trunc(Math.random() * (max - min) + min);
    return randomNumber;
};
exports.generateRandomNumber = generateRandomNumber;
//# sourceMappingURL=generateRandomNumber.js.map