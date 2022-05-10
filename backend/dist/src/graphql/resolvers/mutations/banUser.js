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
export const banUserSchema = gql `
  scalar JSON

  type banUserResponse {
    message: String!
    status: String!
  }

  input banUserInput {
    userID: String
  }

  type Mutation {
    banUser(input: banUserInput): banUserResponse!
  }
`;
const banUser = (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
    yield prismaContext.prisma.user.update({
        where: {
            id: args.input.userID,
        },
        data: {
            bannedAt: new Date(),
        },
    });
    return {
        message: 'User banned successfully.',
        status: 'success',
    };
});
export default banUser;
//# sourceMappingURL=banUser.js.map