import {gql} from 'apollo-server';

export const verifyBusinessIsAdminSchema = gql`
  scalar JSON

  type verifyUserIsAdminResponse {
    message: String!
    status: String!
    isAdmin: Boolean!
  }

  type Query {
    verifyBusinessIsAdmin: verifyUserIsAdminResponse!
  }
`;

/* jscpd:ignore-start */
const verifyBusinessIsAdmin = async (parent: any, args: any, context: any) => {
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

export default verifyBusinessIsAdmin;
