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
export const getUserByIDSchema = gql `
  scalar JSON

  input getUserByIDInput {
    id: String!
  }

  type getUserByIDResponse {
    message: String!
    status: String!
    data: JSON
  }

  type Query {
    getUserByID(input: getUserByIDInput): getUserByIDResponse!
  }
`;
/* jscpd:ignore-start */
const getUserByID = (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = args.input;
    const foundUser = yield prismaContext.prisma.user.findUnique({
        where: {
            id,
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
export default getUserByID;
//# sourceMappingURL=getUserByID.js.map