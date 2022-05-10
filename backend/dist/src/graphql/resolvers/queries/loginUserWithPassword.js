var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { gql } from 'apollo-server';
import getUserByEmail from './getUserByEmail';
export const loginUserWithPasswordSchema = gql `
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
    const foundUser = yield getUserByEmail(undefined, { email: args.input.email });
    if (!foundUser) {
        return {
            message: 'There was an issue with your login.',
            status: 'failed',
        };
    }
    const passwordMatches = yield bcrypt.compare(args.input.password, foundUser.data.password);
    if (passwordMatches) {
        const token = jwt.sign({ id: foundUser.data.id }, process.env.JWT_SECRET, {
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
export default loginUserWithPassword;
//# sourceMappingURL=loginUserWithPassword.js.map