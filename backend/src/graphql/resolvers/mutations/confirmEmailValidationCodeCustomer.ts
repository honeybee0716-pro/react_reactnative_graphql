import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';
import getCustomerByID from '../queries/getCustomerByID';

export const confirmEmailValidationCodeCustomerSchema = gql`
  scalar JSON

  type confirmEmailValidationCodeResponse {
    message: String!
    status: String!
  }

  input confirmEmailValidationCodeInput {
    id: String
    code: Int
  }

  type Mutation {
    confirmEmailValidationCodeCustomer(
      input: confirmEmailValidationCodeInput
    ): confirmEmailValidationCodeResponse!
  }
`;

/* jscpd:ignore-start */
const confirmEmailValidationCodeCustomer = async (
  parent: null,
  args: any,
  context: any,
) => {
  const foundUser = await getCustomerByID(undefined, {
    input: {id: context.user.id},
  });

  if (!foundUser) {
    throw new Error('Could not find that user.');
  }

  const {verifyEmailCode, verifyEmailCodeTimestamp} = foundUser.data;

  const timestampInMilliseconds = Date.parse(verifyEmailCodeTimestamp);

  const isExpired = Date.now() - timestampInMilliseconds > 1000 * 60 * 100;

  if (args.input.code === verifyEmailCode && !isExpired) {
    await prismaContext.prisma.customer.update({
      where: {
        id: context.user.id,
      },
      data: {
        emailIsVerified: true,
        verifyEmailCode: null,
        verifyEmailCodeTimestamp: null,
      },
    });

    return {
      message: 'User successfully verified.',
      status: 'success',
    };
  }

  return {
    message: 'Invalid or expired code.',
    status: 'error',
  };
};
/* jscpd:ignore-end */

export default confirmEmailValidationCodeCustomer;
