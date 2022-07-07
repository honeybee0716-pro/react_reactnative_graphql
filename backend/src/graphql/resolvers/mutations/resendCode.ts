import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';
import {generateRandomNumber} from '../../../utils/generateRandomNumber';
import {sendEmail} from '../../../utils/sendgrid';

export const resendCodeSchema = gql`
  scalar JSON

  type resendCodeResponse {
    message: String!
    status: String!
  }

  type Mutation {
    resendCode: resendCodeResponse!
  }
`;

const resendCode = async (parent: any, args: any, context: any) => {
  const {user} = context;

  const verifyEmailCode = generateRandomNumber();

  await prismaContext.prisma.user.update({
    where: {
      email: user.email,
    },
    data: {
      verifyEmailCode,
      verifyEmailCodeTimestamp: new Date(),
    },
  });

  await sendEmail({
    to: user.email,
    subject: 'Verification Code',
    text: `Please use this code to verify your account: ${verifyEmailCode}`,
    html: `
        <p>
          Please use this code to verify your account: ${verifyEmailCode}
        </p>
      `,
  });

  return {
    message: 'The code has been sent to your email.',
    status: 'success',
  };
};

export default resendCode;
