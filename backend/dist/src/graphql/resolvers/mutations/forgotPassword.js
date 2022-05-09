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
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgotPasswordSchema = void 0;
const apollo_server_1 = require("apollo-server");
const prismaContext_1 = require("../../prismaContext");
const generateRandomNumber_1 = require("../../../utils/generateRandomNumber");
const sendgrid_1 = require("../../../utils/sendgrid");
exports.forgotPasswordSchema = (0, apollo_server_1.gql) `
  scalar JSON

  input forgotPasswordInput {
    email: String!
  }

  type forgotPasswordResponse {
    message: String!
    status: String!
  }

  type Mutation {
    forgotPassword(input: forgotPasswordInput): forgotPasswordResponse!
  }
`;
const forgotPassword = (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = args.input;
    const passwordResetCode = (0, generateRandomNumber_1.generateRandomNumber)();
    yield prismaContext_1.prismaContext.prisma.user.update({
        where: {
            email,
        },
        data: {
            passwordResetCode,
        },
    });
    yield (0, sendgrid_1.sendEmail)({
        to: email,
        subject: 'Password Reset',
        text: `You have requested to reset your password. Please click here to reset your password: ${process.env.FRONTEND_URL}/reset-password?code=${passwordResetCode}.`,
        html: `
      <p>
        You have requested to reset your password.
      </p>
      <p>
        <a href="${process.env.FRONTEND_URL}/reset-password?code=${passwordResetCode}">Please here to reset your password</a>
      </p>
    `,
    });
    return {
        message: 'If there is a user with this email, there will be a link to reset your password in your email inbox.',
        status: 'success',
    };
});
exports.default = forgotPassword;
//# sourceMappingURL=forgotPassword.js.map