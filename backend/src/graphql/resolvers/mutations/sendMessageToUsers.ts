import {ApolloError, gql} from 'apollo-server';
import {prismaContext} from '../../prismaContext';

export const sendMessageToUsersSchema = gql`
  scalar JSON

  type sendMessageToUsersResponse {
    message: String!
    status: String!
    users: [String]
  }

  input sendMessageToUsersInput {
    msg: String!
    users: [String]
  }

  type Mutation {
    sendMessageToUsers(
      input: sendMessageToUsersInput
    ): sendMessageToUsersResponse!
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sendMessageToUsers = async (
  parent: null,
  args: any,
  context: any,
  info: any,
) => {
  const {id: userID} = context.user;

  return {
    message: 'message sent successfully',
    status: 'success',
    users: args.input.users,
  };
};

export default sendMessageToUsers;
