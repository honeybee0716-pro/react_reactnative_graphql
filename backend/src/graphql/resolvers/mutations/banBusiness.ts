import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';

export const banBusinessSchema = gql`
  scalar JSON

  type banUserResponse {
    message: String!
    status: String!
  }

  input banUserInput {
    userID: String
  }

  type Mutation {
    banBusiness(input: banUserInput): banUserResponse!
  }
`;

const banBusiness = async (parent: null, args: any) => {
  await prismaContext.prisma.business.update({
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

export default banBusiness;
