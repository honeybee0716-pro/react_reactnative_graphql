import {mergeTypeDefs} from '@graphql-tools/merge';

import {createUserSchema} from '../resolvers/mutations/createUser';
import {forgotPasswordSchema} from '../resolvers/mutations/forgotPassword';
import {confirmForgotPasswordCodeSchema} from '../resolvers/mutations/confirmForgotPasswordCode';
import {updateUserSchema} from '../resolvers/mutations/updateUser';
import {changePasswordSchema} from '../resolvers/mutations/changePassword';
import {getUserByIDSchema} from '../resolvers/queries/getUserByID';
import {getUserByEmailSchema} from '../resolvers/queries/getUserByEmail';
import {verifyUserSchema} from '../resolvers/queries/verifyUser';
import {loginUserWithMagicLinkSchema} from '../resolvers/queries/loginUserWithMagicLink';
import {loginUserWithPasswordSchema} from '../resolvers/queries/loginUserWithPassword';
import {banUserSchema} from '../resolvers/mutations/banUser';
import {getUserStripeInfoSchema} from '../resolvers/queries/getUserStripeInfo';
import {confirmEmailValidationCodeSchema} from '../resolvers/mutations/confirmEmailValidationCode';
import {createStripeCheckoutPageSchema} from '../resolvers/queries/createStripeCheckoutPage';
import {cancelSubscriptionSchema} from '../resolvers/queries/cancelSubscription';
import {getUserSubscriptionDataSchema} from '../resolvers/queries/getUserSubscriptionData';
import {resendCodeSchema} from '../resolvers/mutations/resendCode';
import {getStripeCustomerPortalSchema} from '../resolvers/queries/getStripeCustomerPortal';
import {verifyUserIsAdminSchema} from '../resolvers/queries/verifyUserIsAdmin';

import {sharedSchema} from './shared';

export const typeDefs = mergeTypeDefs([
  sharedSchema,
  createUserSchema,
  loginUserWithMagicLinkSchema,
  loginUserWithPasswordSchema,
  getUserByIDSchema,
  getUserByEmailSchema,
  changePasswordSchema,
  verifyUserSchema,
  forgotPasswordSchema,
  confirmForgotPasswordCodeSchema,
  updateUserSchema,
  banUserSchema,
  getUserStripeInfoSchema,
  confirmEmailValidationCodeSchema,
  createStripeCheckoutPageSchema,
  getUserSubscriptionDataSchema,
  cancelSubscriptionSchema,
  resendCodeSchema,
  getStripeCustomerPortalSchema,
  verifyUserIsAdminSchema,
]) as any;
