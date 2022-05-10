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
export const updateUserSchema = gql `
  scalar JSON

  type updateUserResponse {
    message: String!
    status: String!
  }

  input updateUserInput {
    firstName: String
    lastName: String
    email: String
    phoneNumber: String
    username: String
    password: String
    twitter: String
    facebook: String
    google: String
    github: String
    linkedin: String
    instagram: String
  }

  type Mutation {
    updateUser(input: updateUserInput): updateUserResponse!
  }
`;
const updateUser = (parent, args, context) => __awaiter(void 0, void 0, void 0, function* () {
    yield prismaContext.prisma.user.update({
        where: {
            id: context.user.id,
        },
        data: Object.assign({}, args.input),
    });
    return {
        message: 'User updated successfully',
        status: 'success',
    };
});
export default updateUser;
//# sourceMappingURL=updateUser.js.map