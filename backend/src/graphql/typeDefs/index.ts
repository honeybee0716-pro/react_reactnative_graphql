import {mergeTypeDefs} from '@graphql-tools/merge';

import {createUserSchema} from '../resolvers/mutations/createUser';
import {forgotPasswordSchema} from '../resolvers/mutations/forgotPassword';
import {completeForgotPasswordSchema} from '../resolvers/mutations/completeForgotPassword';
import {updateUserSchema} from '../resolvers/mutations/updateUser';
import {changePasswordSchema} from '../resolvers/mutations/changePassword';
import {getUserSchema} from '../resolvers/queries/getUser';
import {verifyUserSchema} from '../resolvers/queries/verifyUser';
import {loginUserWithMagicLinkSchema} from '../resolvers/queries/loginUserWithMagicLink';
import {loginUserWithPasswordSchema} from '../resolvers/queries/loginUserWithPassword';

export const typeDefs = mergeTypeDefs([
  createUserSchema,
  loginUserWithMagicLinkSchema,
  loginUserWithPasswordSchema,
  getUserSchema,
  changePasswordSchema,
  verifyUserSchema,
  forgotPasswordSchema,
  completeForgotPasswordSchema,
  updateUserSchema,
]) as any;
