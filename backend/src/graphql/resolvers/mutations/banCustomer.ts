import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';

export const banCustomerSchema = gql`
  scalar JSON

  type banUserResponse {
    message: String!
    status: String!
  }

  input banUserInput {
    userID: String
  }

  type Mutation {
    banCustomer(input: banUserInput): banUserResponse!
  }
`;

const banCustomer = async (parent: null, args: any) => {
  await prismaContext.prisma.customer.update({
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

export default banCustomer;
