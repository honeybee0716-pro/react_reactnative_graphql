var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { gql } from 'apollo-server';
import { prismaContext } from '../../prismaContext';
export const getUserByEmailSchema = gql `
  scalar JSON

  input getUserByEmailInput {
    id: String!
  }

  type getUserByEmailResponse {
    message: String!
    status: String!
    data: JSON
  }

  type Query {
    getUserByEmail(input: getUserByEmailInput): getUserByEmailResponse!
  }
`;
/* jscpd:ignore-start */
const getUserByEmail = (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = args.input;
    const foundUser = yield prismaContext.prisma.user.findUnique({
        where: {
            email,
        },
    });
    if (!foundUser) {
        throw new Error('User not found.');
    }
    const user = Object.assign({}, foundUser);
    delete user.password;
    return {
        message: 'User found',
        status: 'success',
        data: user,
    };
});
/* jscpd:ignore-end */
export default getUserByEmail;
//# sourceMappingURL=getUserByEmail.js.map