"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_1 = require("apollo-server");
exports.typeDefs = (0, apollo_server_1.gql) `
  scalar JSON

  type ResponseStatus {
    message: String!
    status: String!
  }

  input LoginUserInput {
    email: String!
    password: String!
  }

  type LoginUserResponse {
    jwt: String!
    message: String!
    status: String!
  }

  type Query {
    loginUser(input: LoginUserInput): LoginUserResponse!
    getUser: ResponseStatus!
    signOut: ResponseStatus!
  }

  input CreateUserInput {
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
    createUser(input: CreateUserInput): ResponseStatus!
    verifyUser(input: Boolean!): ResponseStatus!
    forgotPassword(email: Boolean!): ResponseStatus!
    completeForgotPassword(input: Boolean!): ResponseStatus!
    changePassword(input: Boolean!): ResponseStatus!
    updateUser(input: Boolean!): ResponseStatus!
  }
`;
//# sourceMappingURL=typeDefs.js.map