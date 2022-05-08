"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = exports.typeDefs2 = void 0;
const apollo_server_1 = require("apollo-server");
const merge_1 = require("@graphql-tools/merge");
const createUser_1 = require("../resolvers/mutations/createUser");
exports.typeDefs2 = (0, apollo_server_1.gql) `
  scalar JSON

  type ResponseStatus {
    message: String!
    status: String!
  }

  input LoginUserWithPasswordInput {
    email: String!
    password: String!
  }

  input LoginUserWithMagicLinkInput {
    email: String!
  }

  type LoginUserResponse {
    jwt: String!
    message: String!
    status: String!
  }

  type Query {
    loginUserWithPassword(input: LoginUserWithPasswordInput): LoginUserResponse!
    loginUserWithMagicLink(
      input: LoginUserWithMagicLinkInput
    ): LoginUserResponse!
    getUser: ResponseStatus!
    signOut: ResponseStatus!
  }

  type Mutation {
    verifyUser(input: Boolean!): ResponseStatus!
    forgotPassword(email: Boolean!): ResponseStatus!
    completeForgotPassword(input: Boolean!): ResponseStatus!
    changePassword(input: Boolean!): ResponseStatus!
    updateUser(input: Boolean!): ResponseStatus!
  }
`;
exports.typeDefs = (0, merge_1.mergeTypeDefs)([createUser_1.typeDef, exports.typeDefs2]);
//# sourceMappingURL=typeDefs.js.map