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
exports.loginUserWithPasswordSchema = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const apollo_server_1 = require("apollo-server");
const getUserByEmail_1 = __importDefault(require("./getUserByEmail"));
exports.loginUserWithPasswordSchema = (0, apollo_server_1.gql) `
  scalar JSON

  input loginUserWithPasswordInput {
    email: String!
    password: String!
  }

  type Query {
    loginUserWithPassword(input: loginUserWithPasswordInput): loginUserResponse!
  }
`;
const loginUserWithPassword = (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
    const formattedEmail = args.input.email.toLowerCase().trim();
    console.log('loginUserWithPassword init');
    const foundUser = yield (0, getUserByEmail_1.default)(undefined, {
        input: { email: formattedEmail },
    });
    if (!foundUser) {
        return {
            jwt: "",
            message: 'There was an issue with your login.',
            status: 'failed',
        };
    }
    console.log('loginUserWithPassword', foundUser.data.emailIsVerified);
    const passwordMatches = yield bcrypt_1.default.compare(args.input.password, foundUser.data.password);
    if (passwordMatches) {
        const token = jsonwebtoken_1.default.sign({ id: foundUser.data.id }, process.env.JWT_SECRET, {
            expiresIn: '7d',
        });
        return {
            jwt: token,
            message: 'User logged in here.',
            status: 'success',
            verified: foundUser.data.emailIsVerified
        };
    }
    return {
        jwt: "",
        message: 'There was an issue with your login.',
        status: 'failed',
    };
});
exports.default = loginUserWithPassword;
//# sourceMappingURL=loginUserWithPassword.js.map