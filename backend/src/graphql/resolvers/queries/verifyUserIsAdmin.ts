import {gql} from 'apollo-server';

export const verifyUserIsAdminSchema = gql`
  scalar JSON

  type verifyUserIsAdminResponse {
    message: String!
    status: String!
    isAdmin: Boolean!
  }

  type Query {
    verifyUserIsAdmin: verifyUserIsAdminResponse!
  }
`;

/* jscpd:ignore-start */
const verifyUserIsAdmin = async (parent: any, args: any, context: any) => {
  const {user} = context;
  const {role} = user;

  const isAdmin = role === 'ADMIN';

  console.log('verifyUserIsAdmin', {
    userID: user.id,
    role,
    isAdmin,
  });

  return {
    message: 'Determined if user is an admin or not.',
    status: 'success',
    isAdmin,
  };
};
/* jscpd:ignore-end */

export default verifyUserIsAdmin;
