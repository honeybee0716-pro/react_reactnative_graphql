import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';

export const getCustomerByIDSchema = gql`
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
    getCustomerByID(input: getUserByIDInput): getUserByIDResponse!
  }
`;

/* jscpd:ignore-start */
const getCustomerByID = async (parent: any, args: any) => {
  const {id} = args.input;

  const foundUser = await prismaContext.prisma.customer.findUnique({
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

export default getCustomerByID;
