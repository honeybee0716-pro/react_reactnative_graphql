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
exports.updateUserSchema = void 0;
const apollo_server_1 = require("apollo-server");
const prismaContext_1 = require("../../prismaContext");
exports.updateUserSchema = (0, apollo_server_1.gql) `
  scalar JSON

  type updateUserResponse {
    message: String!
    status: String!
  }

  input updateUserInput {
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: String!
    username: String!
    password: String!
    createdIPAddress: String!
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
const updateUser = (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = args.input;
    const newData = Object.assign({}, args.input);
    delete newData.id;
    yield prismaContext_1.prismaContext.prisma.user.update({
        where: {
            id,
        },
        data: Object.assign({}, args.input),
    });
    return {
        message: 'User updated successfully',
        status: 'success',
    };
});
exports.default = updateUser;
//# sourceMappingURL=updateUser.js.map