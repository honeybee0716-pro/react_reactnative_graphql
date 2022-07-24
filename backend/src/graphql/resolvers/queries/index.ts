import getUserByID from './getUserByID';
import getUserByEmail from './getUserByEmail';
import verifyUser from './verifyUser';
import loginUserWithPassword from './loginUserWithPassword';
import loginUserWithMagicLink from './loginUserWithMagicLink';
import getUserStripeInfo from './getUserStripeInfo';
import getUserLeads from './getUserLeads';
import getLeadByID from './getLeadByID';
import createStripeCheckoutPage from './createStripeCheckoutPage';
import getUserSubscriptionData from './getUserSubscriptionData';
import cancelSubscription from './cancelSubscription';
import getUsersRemainingCredits from './getUsersRemainingCredits';
import searchForLeads from './searchForLeads';
import getStripeCustomerPortal from './getStripeCustomerPortal';
import verifyUserIsAdmin from './verifyUserIsAdmin';

export const RootQuery = {
  getUserByID,
  getUserByEmail,
  loginUserWithPassword,
  loginUserWithMagicLink,
  verifyUser,
  getUserStripeInfo,
  getUserLeads,
  getLeadByID,
  createStripeCheckoutPage,
  getUserSubscriptionData,
  cancelSubscription,
  getUsersRemainingCredits,
  searchForLeads,
  getStripeCustomerPortal,
  verifyUserIsAdmin,
};

export default RootQuery;
