import {gql} from 'apollo-server';

export const forgotPasswordSchema = gql`
  scalar JSON

  type loginUserResponse {
    jwt: String!
    message: String!
    status: String!
  }
`;
