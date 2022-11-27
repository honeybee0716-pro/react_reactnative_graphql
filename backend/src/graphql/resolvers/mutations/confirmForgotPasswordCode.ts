import {gql} from 'apollo-server';
import bcrypt from 'bcrypt';

import {prismaContext} from '../../prismaContext';
import getUserByEmail from '../queries/getBusinessByEmail';

export const confirmForgotPasswordCodeSchema = gql`
  scalar JSON

  type confirmForgotPasscodeCodeResponse {
    message: String!
    status: String!
  }

  input confirmForgotPasscodeCodeInput {
    email: String
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
  const foundUser = await getUserByEmail(undefined, {
    input: {email: args.input.email},
  });

  if (!foundUser) {
    throw new Error('Could not find that user.');
  }

  const {passwordResetCode, passwordResetCodeTimestamp} = foundUser.data;

  const timestampInMilliseconds = Date.parse(passwordResetCodeTimestamp);

  const isExpired = Date.now() - timestampInMilliseconds > 1000 * 60 * 10;

  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(args.input.newPassword, salt);

  if (args.input.code === passwordResetCode && !isExpired) {
    await prismaContext.prisma.business.update({
      where: {
        email: args.input.email,
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
