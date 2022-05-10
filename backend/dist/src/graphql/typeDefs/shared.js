import { gql } from 'apollo-server';
export const sharedSchema = gql `
  scalar JSON

  type loginUserResponse {
    jwt: String!
    message: String!
    status: String!
  }
`;
//# sourceMappingURL=shared.js.map