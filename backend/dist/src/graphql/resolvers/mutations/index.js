"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createUser_1 = __importDefault(require("./createUser"));
const verifyUser_1 = __importDefault(require("./verifyUser"));
const forgotPassword_1 = __importDefault(require("./forgotPassword"));
const completeForgotPassword_1 = __importDefault(require("./completeForgotPassword"));
const changePassword_1 = __importDefault(require("./changePassword"));
const updateUser_1 = __importDefault(require("./updateUser"));
const RootMutation = {
    createUser: createUser_1.default,
    verifyUser: verifyUser_1.default,
    forgotPassword: forgotPassword_1.default,
    completeForgotPassword: completeForgotPassword_1.default,
    changePassword: changePassword_1.default,
    updateUser: updateUser_1.default,
};
exports.default = RootMutation;
//# sourceMappingURL=index.js.map