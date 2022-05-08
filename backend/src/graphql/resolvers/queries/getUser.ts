import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';

export const getUserSchema = gql`
  scalar JSON

  input getUserInput {
    email: String!
  }

  type getUserResponse {
    jwt: String!
    message: String!
    status: String!
  }

  type Query {
    getUser(input: getUserInput): getUserResponse!
  }
`;

const getUser = (parent: any, args: any) => {
  const {id} = args;

  return prismaContext.prisma.user.findUnique({
    select: {id},
    where: {id},
    // include: { posts: true },
  });
};

export default getUser;
