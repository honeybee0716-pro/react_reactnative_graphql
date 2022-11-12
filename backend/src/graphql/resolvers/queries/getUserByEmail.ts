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

/* jscpd:ignore-start */
const getUserByEmail = async (parent: any, args: any) => {
  const {email} = args.input;

  const foundUser = await prismaContext.prisma.user.findUnique({
    where: {
      email: email.toLowerCase().trim(),
    },
  });

  if (!foundUser) {
    throw new Error('User not found.');
  }

  const user: any = {...foundUser};

  return {
    message: 'User found',
    status: 'success',
    data: user,
  };
};
/* jscpd:ignore-end */

export default getUserByEmail;
