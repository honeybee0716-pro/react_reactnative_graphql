import {gql} from 'apollo-server';

export const updateUserSchema = gql`
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

/* eslint-disable @typescript-eslint/no-unused-vars */
export default async function (parent: null, args: any) {
  return true;
}
