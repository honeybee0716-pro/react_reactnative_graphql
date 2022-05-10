import {gql} from 'apollo-server';
import bcrypt from 'bcrypt';

import {enUS} from '../../../constants/en_us';
import {prismaContext} from '../../prismaContext';
import getUserByID from '../queries/getUserByID';

export const confirmForgotPasswordCodeSchema = gql`
  scalar JSON

  type confirmForgotPasscodeCodeResponse {
    message: String!
    status: String!
  }

  input confirmForgotPasscodeCodeInput {
    id: String
    code: Int
    newPassword: String
  }

  type Mutation {
    confirmForgotPasswordCode(
      input: confirmForgotPasscodeCodeInput
    ): confirmForgotPasscodeCodeResponse!
  }
`;

/* jscpd:ignore-start */
const confirmForgotPasswordCode = async (parent: null, args: any) => {
  const foundUser = await getUserByID(undefined, {input: {id: args.input.id}});

  if (!foundUser) {
    throw new Error(enUS('error.userNotFound'));
  }

  const {passwordResetCode, passwordResetCodeTimestamp} = foundUser.data;

  const timestampInMilliseconds = Date.parse(passwordResetCodeTimestamp);

  const isExpired = Date.now() - timestampInMilliseconds > 1000 * 60 * 10;

  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(args.input.newPassword, salt);

  if (args.input.code === passwordResetCode && !isExpired) {
    await prismaContext.prisma.user.update({
      where: {
        id: args.input.id,
      },
      data: {
        password: hashedPassword,
        passwordResetCode: null,
        passwordResetCodeTimestamp: null,
      },
    });

    return {
      message: 'Password was changed successfully.',
      status: 'success',
    };
  }

  return {
    message: 'Invalid or expired code.',
    status: 'error',
  };
};
/* jscpd:ignore-end */

export default confirmForgotPasswordCode;
