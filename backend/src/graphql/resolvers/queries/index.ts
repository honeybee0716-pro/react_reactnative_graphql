import getUser from './getUser';
import loginUserWithPassword from './loginUserWithPassword';
import loginUserWithMagicLink from './loginUserWithMagicLink';
import signOut from './signOut';

export const RootQuery = {
  getUser,
  loginUserWithPassword,
  loginUserWithMagicLink,
  signOut,
};

export default RootQuery;
