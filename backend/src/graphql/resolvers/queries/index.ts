import getUser from './getUser';
import verifyUser from './verifyUser';
import loginUserWithPassword from './loginUserWithPassword';
import loginUserWithMagicLink from './loginUserWithMagicLink';

export const RootQuery = {
  getUser,
  loginUserWithPassword,
  loginUserWithMagicLink,
  verifyUser,
};

export default RootQuery;
