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
exports.typeDef = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const apollo_server_1 = require("apollo-server");
const prismaContext_1 = require("../../prismaContext");
exports.typeDef = (0, apollo_server_1.gql) `
  scalar JSON

  input LoginUserWithPasswordInput {
    email: String!
    password: String!
  }

  type LoginUserWithPasswordResponse {
    jwt: String!
    message: String!
    status: String!
  }

  type Query {
    loginUserWithPassword(
      input: LoginUserWithPasswordInput
    ): LoginUserWithPasswordResponse!
  }
`;
const loginUserWithPassword = (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield prismaContext_1.prismaContext.prisma.user.findUnique({
        select: {
            id: true,
            password: true,
        },
        where: {
            email: args.input.email,
        },
    });
    if (!foundUser) {
        return {
            message: 'There was an issue with your login.',
            status: 'failed',
        };
    }
    const passwordMatches = yield bcrypt_1.default.compare(args.input.password, foundUser.password);
    if (passwordMatches) {
        const token = jsonwebtoken_1.default.sign({ id: foundUser.id }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });
        return {
            jwt: token,
            message: 'User logged in.',
            status: 'success',
        };
    }
    return {
        message: 'There was an issue with your login.',
        status: 'failed',
    };
});
exports.default = loginUserWithPassword;
//# sourceMappingURL=loginUserWithPassword.js.map