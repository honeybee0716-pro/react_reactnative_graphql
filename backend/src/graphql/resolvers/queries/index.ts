import getUserByID from './getUserByID';
import getUserByEmail from './getUserByEmail';
import verifyUser from './verifyUser';
import loginUserWithPassword from './loginUserWithPassword';
import loginUserWithMagicLink from './loginUserWithMagicLink';
import getUserStripeInfo from './getUserStripeInfo';
import createStripeCheckoutPage from './createStripeCheckoutPage';
import getUserSubscriptionData from './getUserSubscriptionData';
import cancelSubscription from './cancelSubscription';
import getStripeCustomerPortal from './getStripeCustomerPortal';
import verifyUserIsAdmin from './verifyUserIsAdmin';

export const RootQuery = {
  getUserByID,
  getUserByEmail,
  loginUserWithPassword,
  loginUserWithMagicLink,
  verifyUser,
  getUserStripeInfo,
  createStripeCheckoutPage,
  getUserSubscriptionData,
  cancelSubscription,
  getStripeCustomerPortal,
  verifyUserIsAdmin,
};

export default RootQuery;
