import getUserByID from './getUserByID';
import getUserByEmail from './getUserByEmail';
import verifyUser from './verifyUser';
import loginUserWithPassword from './loginUserWithPassword';
import loginUserWithMagicLink from './loginUserWithMagicLink';
import getUserStripeInfo from './getUserStripeInfo';
import getUserLeads from './getUserLeads';

export const RootQuery = {
  getUserByID,
  getUserByEmail,
  loginUserWithPassword,
  loginUserWithMagicLink,
  verifyUser,
  getUserStripeInfo,
  getUserLeads,
};

export default RootQuery;
