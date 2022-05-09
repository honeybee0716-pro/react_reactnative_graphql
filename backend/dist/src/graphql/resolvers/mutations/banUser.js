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
exports.banUserSchema = void 0;
const apollo_server_1 = require("apollo-server");
const prismaContext_1 = require("../../prismaContext");
exports.banUserSchema = (0, apollo_server_1.gql) `
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
    yield prismaContext_1.prismaContext.prisma.user.update({
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
exports.default = banUser;
//# sourceMappingURL=banUser.js.map