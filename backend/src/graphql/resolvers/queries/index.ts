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
};

export default RootQuery;
