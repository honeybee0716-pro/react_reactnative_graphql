import {mergeTypeDefs} from '@graphql-tools/merge';

import {createBusinessSchema} from '../resolvers/mutations/createBusiness';
import {createCustomerSchema} from '../resolvers/mutations/createCustomer';
import {forgotPasswordSchema} from '../resolvers/mutations/forgotPassword';
import {forgotPasswordCustomerSchema} from '../resolvers/mutations/forgotPasswordCustomer';
import {confirmForgotPasswordCodeSchema} from '../resolvers/mutations/confirmForgotPasswordCode';
import {confirmForgotPasswordCodeCustomerSchema} from '../resolvers/mutations/confirmForgotPasswordCodeCustomer';
import {updateBusinessSchema} from '../resolvers/mutations/updateBusiness';
import {updateCustomerSchema} from '../resolvers/mutations/updateCustomer';
import {changePasswordSchema} from '../resolvers/mutations/changePassword';
import {getBusinessByIDSchema} from '../resolvers/queries/getBusinessByID';
import {getCustomerByIDSchema} from '../resolvers/queries/getCustomerByID';
import {getBusinessByEmailSchema} from '../resolvers/queries/getBusinessByEmail';
import {getCustomerByEmailSchema} from '../resolvers/queries/getCustomerByEmail';
import {verifyBusinessSchema} from '../resolvers/queries/verifyBusiness';
import {verifyCustomerSchema} from '../resolvers/queries/verifyCustomer';
import {loginBusinessWithMagicLinkSchema} from '../resolvers/queries/loginBusinessWithMagicLink';
import {loginCustomerWithMagicLinkSchema} from '../resolvers/queries/loginCustomerWithMagicLink';
import {loginBusinessWithPasswordSchema} from '../resolvers/queries/loginBusinessWithPassword';
import {loginCustomerWithPasswordSchema} from '../resolvers/queries/loginCustomerWithPassword';
import {banBusinessSchema} from '../resolvers/mutations/banBusiness';
import {banCustomerSchema} from '../resolvers/mutations/banCustomer';
import {getBusinessStripeInfoSchema} from '../resolvers/queries/getBusinessStripeInfo';
import {confirmEmailValidationCodeSchema} from '../resolvers/mutations/confirmEmailValidationCode';
import {confirmEmailValidationCodeCustomerSchema} from '../resolvers/mutations/confirmEmailValidationCodeCustomer';
import {createStripeCheckoutPageSchema} from '../resolvers/queries/createStripeCheckoutPage';
import {cancelSubscriptionSchema} from '../resolvers/queries/cancelSubscription';
import {getBusinessSubscriptionDataSchema} from '../resolvers/queries/getBusinessSubscriptionData';
import {resendCodeSchema} from '../resolvers/mutations/resendCode';
import {resendCodeCustomerSchema} from '../resolvers/mutations/resendCodeCustomer';
import {getStripeCustomerPortalSchema} from '../resolvers/queries/getStripeCustomerPortal';
import {verifyBusinessIsAdminSchema} from '../resolvers/queries/verifyBusinessIsAdmin';
import {verifyCustomerIsAdminSchema} from '../resolvers/queries/verifyCustomerIsAdmin';

import {sharedSchema} from './shared';

export const typeDefs = mergeTypeDefs([
  sharedSchema,
  createBusinessSchema,
  createCustomerSchema,
  loginBusinessWithMagicLinkSchema,
  loginCustomerWithMagicLinkSchema,
  loginBusinessWithPasswordSchema,
  loginCustomerWithPasswordSchema,
  getBusinessByIDSchema,
  getCustomerByIDSchema,
  getBusinessByEmailSchema,
  getCustomerByEmailSchema,
  changePasswordSchema,
  verifyBusinessSchema,
  verifyCustomerSchema,
  forgotPasswordSchema,
  forgotPasswordCustomerSchema,
  confirmForgotPasswordCodeSchema,
  confirmForgotPasswordCodeCustomerSchema,
  updateBusinessSchema,
  updateCustomerSchema,
  banBusinessSchema,
  banCustomerSchema,
  getBusinessStripeInfoSchema,
  confirmEmailValidationCodeSchema,
  confirmEmailValidationCodeCustomerSchema,
  createStripeCheckoutPageSchema,
  getBusinessSubscriptionDataSchema,
  cancelSubscriptionSchema,
  resendCodeSchema,
  resendCodeCustomerSchema,
  getStripeCustomerPortalSchema,
  verifyBusinessIsAdminSchema,
  verifyCustomerIsAdminSchema,
]) as any;
