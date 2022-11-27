import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';
import {generateRandomNumber} from '../../../utils/generateRandomNumber';
// import {sendEmail} from '../../../utils/sendgrid';
import {nodemailer} from '../../../utils/nodemailer';

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

  const user = await prismaContext.prisma.business.findFirst({
    where: {
      email,
    },
  });

  if (user) {
    await prismaContext.prisma.business.update({
      where: {
        email,
      },
      data: {
        passwordResetCode,
        passwordResetCodeTimestamp: new Date(),
      },
    });

    // await sendEmail({
    //   to: email,
    //   subject: 'Password Reset',
    //   text: `Please use this code to reset your password: ${passwordResetCode}`,
    //   html: `
    //     <p>
    //       Please use this code to reset your password: ${passwordResetCode}
    //     </p>
    //   `,
    // });

    await nodemailer.sendMail({
      from: '"SaleSpin Alerts" <alerts@salespin.co>', // sender address
      to: email, // list of receivers
      subject: 'Password Reset',
      text: `Please use this code to reset your password: ${passwordResetCode}`,
      html: `
      <p>
        Please use this code to reset your password: ${passwordResetCode}
      </p>
    `,
    });
  }

  return {
    message:
      'If there is a user with this email, there will be a link to reset your password in your email inbox.',
    status: 'success',
  };
};

export default forgotPassword;
