"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootQuery = void 0;
const getUserByID_1 = __importDefault(require("./getUserByID"));
const getUserByEmail_1 = __importDefault(require("./getUserByEmail"));
const verifyUser_1 = __importDefault(require("./verifyUser"));
const loginUserWithPassword_1 = __importDefault(require("./loginUserWithPassword"));
const loginUserWithMagicLink_1 = __importDefault(require("./loginUserWithMagicLink"));
const getUserStripeInfo_1 = __importDefault(require("./getUserStripeInfo"));
exports.RootQuery = {
    getUserByID: getUserByID_1.default,
    getUserByEmail: getUserByEmail_1.default,
    loginUserWithPassword: loginUserWithPassword_1.default,
    loginUserWithMagicLink: loginUserWithMagicLink_1.default,
    verifyUser: verifyUser_1.default,
    getUserStripeInfo: getUserStripeInfo_1.default,
};
exports.default = exports.RootQuery;
//# sourceMappingURL=index.js.map