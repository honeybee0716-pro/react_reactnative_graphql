import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';
import {generateRandomNumber} from '../../../utils/generateRandomNumber';
// import {sendEmail} from '../../../utils/sendgrid';
import {nodemailer} from '../../../utils/nodemailer';

export const resendCodeCustomerSchema = gql`
  scalar JSON

  type resendCodeResponse {
    message: String!
    status: String!
  }

  type Mutation {
    resendCodeCustomer: resendCodeResponse!
  }
`;

const resendCodeCustomer = async (parent: any, args: any, context: any) => {
  const {user} = context;

  const verifyEmailCode = generateRandomNumber();

  await prismaContext.prisma.customer.update({
    where: {
      email: user.email,
    },
    data: {
      verifyEmailCode,
      verifyEmailCodeTimestamp: new Date(),
    },
  });

  // await sendEmail({
  //   to: user.email,
  //   subject: 'Verification Code',
  //   text: `Please use this code to verify your account: ${verifyEmailCode}`,
  //   html: `
  //       <p>
  //         Please use this code to verify your account: ${verifyEmailCode}
  //       </p>
  //     `,
  // });

  await nodemailer.sendMail({
    from: '"SaleSpin Alerts" <alerts@salespin.co>', // sender address
    to: user.email, // list of receivers
    subject: 'Verification Code', // Subject line
    text: `Please use this code to verify your account: ${verifyEmailCode}`, // plain text body
    html: `<p>Please use this code to verify your account: ${verifyEmailCode}</p>`, // html body
  });

  return {
    message: 'The code has been sent to your email.',
    status: 'success',
  };
};

export default resendCodeCustomer;
