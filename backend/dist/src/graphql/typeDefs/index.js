"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = exports.typeDefs2 = void 0;
const apollo_server_1 = require("apollo-server");
const merge_1 = require("@graphql-tools/merge");
const createUser_1 = require("../resolvers/mutations/createUser");
const loginUserWithMagicLink_1 = require("../resolvers/queries/loginUserWithMagicLink");
const loginUserWithPassword_1 = require("../resolvers/queries/loginUserWithPassword");
exports.typeDefs2 = (0, apollo_server_1.gql) `
  scalar JSON

  type ResponseStatus {
    message: String!
    status: String!
  }

  type Query {
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
exports.typeDefs = (0, merge_1.mergeTypeDefs)([
    createUser_1.typeDef,
    loginUserWithMagicLink_1.typeDef,
    loginUserWithPassword_1.typeDef,
    exports.typeDefs2,
]);
//# sourceMappingURL=index.js.map