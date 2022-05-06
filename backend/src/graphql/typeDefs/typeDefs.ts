import {gql} from 'apollo-server';

export const typeDefs = gql`
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
