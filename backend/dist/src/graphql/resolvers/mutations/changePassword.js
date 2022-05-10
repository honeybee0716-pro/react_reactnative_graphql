import { gql } from 'apollo-server';
export const changePasswordSchema = gql `
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
export default changePassword;
//# sourceMappingURL=changePassword.js.map