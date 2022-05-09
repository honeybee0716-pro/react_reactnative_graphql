import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';

export const banUserSchema = gql`
  scalar JSON

  type banUserResponse {
    message: String!
    status: String!
  }

  input banUserInput {
    userID: String
  }

  type Mutation {
    banUser(input: banUserInput): banUserResponse!
  }
`;

const banUser = async (parent: null, args: any) => {
  await prismaContext.prisma.user.update({
    where: {
      id: args.input.userID,
    },
    data: {
      bannedAt: new Date(),
    },
  });

  return {
    message: 'User banned successfully.',
    status: 'success',
  };
};

export default banUser;
