import {gql} from 'apollo-server';

export const forgotPasswordSchema = gql`
  scalar JSON

  input forgotPasswordInput {
    email: String!
  }

  type forgotPasswordResponse {
    jwt: String!
    message: String!
    status: String!
  }

  type Mutation {
    forgotPassword(input: forgotPasswordInput): forgotPasswordResponse!
  }
`;

export default async function (parent: null, args: any) {
  return true;
}
