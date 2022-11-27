import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';

export const getBusinessByIDSchema = gql`
  scalar JSON

  input getUserByIDInput {
    id: String!
  }

  type getUserByIDResponse {
    message: String!
    status: String!
    data: JSON
  }

  type Query {
    getBusinessByID(input: getUserByIDInput): getUserByIDResponse!
  }
`;

/* jscpd:ignore-start */
const getBusinessByID = async (parent: any, args: any) => {
  const {id} = args.input;

  const foundUser = await prismaContext.prisma.business.findUnique({
    where: {
      id,
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
/* jscpd:ignore-end */

export default getBusinessByID;
