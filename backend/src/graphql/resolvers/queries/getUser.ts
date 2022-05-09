import {gql} from 'apollo-server';

import {getUserByID} from '../../../utils/getUserByID';

export const getUserSchema = gql`
  scalar JSON

  input getUserInput {
    id: String!
  }

  type getUserResponse {
    message: String!
    status: String!
    data: JSON
  }

  type Query {
    getUser(input: getUserInput): getUserResponse!
  }
`;

const getUser = async (parent: any, {id}: any) => {
  const foundUser = await getUserByID(id);

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

export default getUser;
