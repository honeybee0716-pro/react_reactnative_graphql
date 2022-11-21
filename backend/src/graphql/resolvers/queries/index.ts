import getBusinessByID from './getBusinessByID';
import getCustomerByID from './getCustomerByID';
import getBusinessByEmail from './getBusinessByEmail';
import getCustomerByEmail from './getCustomerByEmail';
import verifyBusiness from './verifyBusiness';
import verifyCustomer from './verifyCustomer';
import loginBusinessWithPassword from './loginBusinessWithPassword';
import loginCustomerWithPassword from './loginCustomerWithPassword';
import loginBusinessWithMagicLink from './loginBusinessWithMagicLink';
import loginCustomerWithMagicLink from './loginCustomerWithMagicLink';
import getBusinessStripeInfo from './getBusinessStripeInfo';
import createStripeCheckoutPage from './createStripeCheckoutPage';
import getBusinessSubscriptionData from './getBusinessSubscriptionData';
import cancelSubscription from './cancelSubscription';
import getStripeCustomerPortal from './getStripeCustomerPortal';
import verifyBusinessIsAdmin from './verifyBusinessIsAdmin';
import verifyCustomerIsAdmin from './verifyCustomerIsAdmin';
import getBusinessDetails from './getBusinessDetails';
import getCustomerDetails from './getCustomerDetails';
import getCustomerDetailsBusiness from './getCustomerDetailsBusiness';

export const RootQuery = {
  getBusinessByID,
  getCustomerByID,
  getBusinessByEmail,
  getCustomerByEmail,
  loginBusinessWithPassword,
  loginCustomerWithPassword,
  loginBusinessWithMagicLink,
  loginCustomerWithMagicLink,
  verifyBusiness,
  verifyCustomer,
  getBusinessStripeInfo,
  createStripeCheckoutPage,
  getBusinessSubscriptionData,
  cancelSubscription,
  getStripeCustomerPortal,
  verifyBusinessIsAdmin,
  verifyCustomerIsAdmin,
  getBusinessDetails,
  getCustomerDetails,
  getCustomerDetailsBusiness
};

export default RootQuery;
