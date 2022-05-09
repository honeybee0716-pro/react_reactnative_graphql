import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';
import {generateRandomNumber} from '../../../utils/generateRandomNumber';
import {sendEmail} from '../../../utils/sendgrid';

export const forgotPasswordSchema = gql`
  scalar JSON

  input forgotPasswordInput {
    email: String!
  }

  type forgotPasswordResponse {
    message: String!
    status: String!
  }

  type Mutation {
    forgotPassword(input: forgotPasswordInput): forgotPasswordResponse!
  }
`;

const forgotPassword = async (parent: any, args: any) => {
  const {email} = args.input;

  const passwordResetCode = generateRandomNumber();

  await prismaContext.prisma.user.update({
    where: {
      email,
    },
    data: {
      passwordResetCode,
      passwordResetCodeTimestamp: new Date(),
    },
  });

  await sendEmail({
    to: email,
    subject: 'Password Reset',
    text: `You have requested to reset your password. Please click here to reset your password: ${process.env.PROTOCOL}://${process.env.DOMAIN}/reset-password?code=${passwordResetCode}.`,
    html: `
      <p>
        You have requested to reset your password.
      </p>
      <p>
        <a href="${process.env.PROTOCOL}://${process.env.DOMAIN}/reset-password?code=${passwordResetCode}">Please here to reset your password</a>
      </p>
    `,
  });

  return {
    message:
      'If there is a user with this email, there will be a link to reset your password in your email inbox.',
    status: 'success',
  };
};

export default forgotPassword;
