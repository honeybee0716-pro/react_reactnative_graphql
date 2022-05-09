import getUser from './getUser';
import verifyUser from './verifyUser';
import loginUserWithPassword from './loginUserWithPassword';
import loginUserWithMagicLink from './loginUserWithMagicLink';
import getUserStripeInfo from './getUserStripeInfo';

export const RootQuery = {
  getUser,
  loginUserWithPassword,
  loginUserWithMagicLink,
  verifyUser,
  getUserStripeInfo,
};

export default RootQuery;
