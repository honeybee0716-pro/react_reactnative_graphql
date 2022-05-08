import {gql} from 'apollo-server';

export const completeForgotPasswordSchema = gql`
  scalar JSON

  type completeForgotPasswordResponse {
    message: String!
    status: String!
  }

  input completeForgotPasswordInput {
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
    completeForgotPassword(
      input: completeForgotPasswordInput
    ): completeForgotPasswordResponse!
  }
`;

/* eslint-disable @typescript-eslint/no-unused-vars */
export default async function (parent: null, args: any) {
  return true;
}
