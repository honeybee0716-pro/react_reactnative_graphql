"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmForgotPasswordCodeSchema = void 0;
const apollo_server_1 = require("apollo-server");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prismaContext_1 = require("../../prismaContext");
const getUserByEmail_1 = __importDefault(require("../queries/getUserByEmail"));
exports.confirmForgotPasswordCodeSchema = (0, apollo_server_1.gql) `
  scalar JSON

  type confirmForgotPasscodeCodeResponse {
    message: String!
    status: String!
  }

  input confirmForgotPasscodeCodeInput {
    email: String
    code: Int
    newPassword: String
  }

  type Mutation {
    confirmForgotPasswordCode(
      input: confirmForgotPasscodeCodeInput
    ): confirmForgotPasscodeCodeResponse!
  }
`;
/* jscpd:ignore-start */
const confirmForgotPasswordCode = (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield (0, getUserByEmail_1.default)(undefined, {
        input: { email: args.input.email },
    });
    if (!foundUser) {
        throw new Error('Could not find that user.');
    }
    const { passwordResetCode, passwordResetCodeTimestamp } = foundUser.data;
    const timestampInMilliseconds = Date.parse(passwordResetCodeTimestamp);
    const isExpired = Date.now() - timestampInMilliseconds > 1000 * 60 * 10;
    const salt = yield bcrypt_1.default.genSalt(10);
    const hashedPassword = yield bcrypt_1.default.hash(args.input.newPassword, salt);
    if (args.input.code === passwordResetCode && !isExpired) {
        yield prismaContext_1.prismaContext.prisma.user.update({
            where: {
                email: args.input.email,
            },
            data: {
                password: hashedPassword,
                passwordResetCode: null,
                passwordResetCodeTimestamp: null,
            },
        });
        return {
            message: 'Password was changed successfully.',
            status: 'success',
        };
    }
    return {
        message: 'Invalid or expired code.',
        status: 'error',
    };
});
/* jscpd:ignore-end */
exports.default = confirmForgotPasswordCode;
//# sourceMappingURL=confirmForgotPasswordCode.js.map