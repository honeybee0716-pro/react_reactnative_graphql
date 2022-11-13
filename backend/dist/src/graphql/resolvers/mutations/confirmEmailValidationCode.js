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
exports.confirmEmailValidationCodeSchema = void 0;
const apollo_server_1 = require("apollo-server");
const prismaContext_1 = require("../../prismaContext");
const getUserByID_1 = __importDefault(require("../queries/getUserByID"));
exports.confirmEmailValidationCodeSchema = (0, apollo_server_1.gql) `
  scalar JSON

  type confirmEmailValidationCodeResponse {
    message: String!
    status: String!
  }

  input confirmEmailValidationCodeInput {
    id: String
    code: Int
  }

  type Mutation {
    confirmEmailValidationCode(
      input: confirmEmailValidationCodeInput
    ): confirmEmailValidationCodeResponse!
  }
`;
/* jscpd:ignore-start */
const confirmEmailValidationCode = (parent, args, context) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield (0, getUserByID_1.default)(undefined, {
        input: { id: context.user.id },
    });
    if (!foundUser) {
        throw new Error('Could not find that user.');
    }
    const { verifyEmailCode, verifyEmailCodeTimestamp } = foundUser.data;
    const timestampInMilliseconds = Date.parse(verifyEmailCodeTimestamp);
    const isExpired = Date.now() - timestampInMilliseconds > 1000 * 60 * 100;
    if (args.input.code === verifyEmailCode && !isExpired) {
        yield prismaContext_1.prismaContext.prisma.user.update({
            where: {
                id: context.user.id,
            },
            data: {
                emailIsVerified: true,
                verifyEmailCode: null,
                verifyEmailCodeTimestamp: null,
            },
        });
        return {
            message: 'User successfully verified.',
            status: 'success',
        };
    }
    return {
        message: 'Invalid or expired code.',
        status: 'error',
    };
});
/* jscpd:ignore-end */
exports.default = confirmEmailValidationCode;
//# sourceMappingURL=confirmEmailValidationCode.js.map