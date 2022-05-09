import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';

export const getUserByEmailSchema = gql`
  scalar JSON

  input getUserByEmailInput {
    id: String!
  }

  type getUserByEmailResponse {
    message: String!
    status: String!
    data: JSON
  }

  type Query {
    getUserByEmail(input: getUserByEmailInput): getUserByEmailResponse!
  }
`;

const getUserByEmail = async (parent: any, args: any) => {
  const {email} = args.input;

  const foundUser = await prismaContext.prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!foundUser) {
    throw new Error('User not found.');
  }

  const user: any = {...foundUser};

  delete user.password;

  return {
    message: 'User found',
    status: 'success',
    data: user,
  };
};

export default getUserByEmail;
