"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootQuery = void 0;
const getUser_1 = __importDefault(require("./getUser"));
const loginUserWithPassword_1 = __importDefault(require("./loginUserWithPassword"));
const loginUserWithMagicLink_1 = __importDefault(require("./loginUserWithMagicLink"));
const signOut_1 = __importDefault(require("./signOut"));
exports.RootQuery = {
    getUser: getUser_1.default,
    loginUserWithPassword: loginUserWithPassword_1.default,
    loginUserWithMagicLink: loginUserWithMagicLink_1.default,
    signOut: signOut_1.default,
};
exports.default = exports.RootQuery;
//# sourceMappingURL=index.js.map