import {gql} from 'apollo-server';

export const verifyCustomerSchema = gql`
  scalar JSON

  type verifyUserResponse {
    message: String!
    status: String!
  }

  input verifyUserInput {
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

  type Query {
    verifyCustomer(input: verifyUserInput): verifyUserResponse!
  }
`;

export default async function (parent: null, args: any) {
  return true;
}
