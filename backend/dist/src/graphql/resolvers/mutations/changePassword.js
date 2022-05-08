"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePasswordSchema = void 0;
const apollo_server_1 = require("apollo-server");
exports.changePasswordSchema = (0, apollo_server_1.gql) `
  scalar JSON

  type changePasswordResponse {
    message: String!
    status: String!
  }

  input changePasswordInput {
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
    changePassword(input: changePasswordInput): changePasswordResponse!
  }
`;
const changePassword = (parent, args) => {
    const { newPassword } = args;
};
exports.default = changePassword;
//# sourceMappingURL=changePassword.js.map