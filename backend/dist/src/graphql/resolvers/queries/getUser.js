"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserSchema = void 0;
const apollo_server_1 = require("apollo-server");
const prismaContext_1 = require("../../prismaContext");
exports.getUserSchema = (0, apollo_server_1.gql) `
  scalar JSON

  input getUserInput {
    email: String!
  }

  type getUserResponse {
    message: String!
    status: String!
    data: JSON
  }

  type Query {
    getUser(input: getUserInput): getUserResponse!
  }
`;
const getUser = (parent, args) => {
    const { id } = args;
    const user = prismaContext_1.prismaContext.prisma.user.findUnique({
        where: { id },
    });
    if (!user) {
        return {
            message: 'User not found',
            status: 'error',
            Data: null,
        };
    }
    return {
        message: 'User found',
        status: 'success',
        Data: user,
    };
};
exports.default = getUser;
//# sourceMappingURL=getUser.js.map