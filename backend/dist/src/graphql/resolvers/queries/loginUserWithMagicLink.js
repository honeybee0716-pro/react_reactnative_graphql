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
exports.loginUserWithMagicLinkSchema = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const apollo_server_1 = require("apollo-server");
const prismaContext_1 = require("../../prismaContext");
const sendgrid_1 = require("../../../utils/sendgrid");
exports.loginUserWithMagicLinkSchema = (0, apollo_server_1.gql) `
  scalar JSON

  input loginUserWithMagicLinkInput {
    email: String!
  }

  type loginUserWithMagicLinkResponse {
    jwt: String!
    message: String!
    status: String!
  }

  type Query {
    loginUserWithMagicLink(
      input: loginUserWithMagicLinkInput
    ): loginUserWithMagicLinkResponse!
  }
`;
const loginUserWithMagicLink = (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield prismaContext_1.prismaContext.prisma.user.findUnique({
        select: {
            id: true,
            password: true,
        },
        where: {
            email: args.input.email,
        },
    });
    const message = 'If there is an account with that email, you will receive a login link in your email.';
    if (!foundUser) {
        return {
            message,
            status: 'success',
        };
    }
    const token = jsonwebtoken_1.default.sign({ id: foundUser.id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    });
    yield (0, sendgrid_1.sendEmail)({
        to: args.input.email,
        subject: 'Here is your magic login link.',
        html: `<a href="${process.env.PROTOCOL}://${process.env.DOMAIN}/login?token=${token}">Login</a>`,
        text: `Here is your magic login link: ${process.env.PROTOCOL}://${process.env.DOMAIN}/login?token=${token}`,
    });
    return {
        message,
        status: 'success',
    };
});
exports.default = loginUserWithMagicLink;
//# sourceMappingURL=loginUserWithMagicLink.js.map