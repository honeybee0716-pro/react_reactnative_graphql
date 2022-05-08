import jwt from 'jsonwebtoken';
import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';
import {sendEmail} from '../../../utils/sendgrid';

export const loginUserWithMagicLinkSchema = gql`
  scalar JSON

  input loginUserWithMagicLinkInput {
    email: String!
  }

  type loginUserWithMagicLinkResponse {
    jwt: String!
    message: String!
    status: String!
  }

  type Query {
    loginUserWithMagicLink(
      input: loginUserWithMagicLinkInput
    ): loginUserWithMagicLinkResponse!
  }
`;

const loginUserWithMagicLink = async (parent: null, args: any) => {
  const foundUser = await prismaContext.prisma.user.findUnique({
    select: {
      id: true,
      password: true,
    },
    where: {
      email: args.input.email,
    },
  });

  const message =
    'If there is an account with that email, you will receive a login link in your email.';

  if (!foundUser) {
    return {
      message,
      status: 'success',
    };
  }

  const token = jwt.sign({id: foundUser.id}, <string>process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  await sendEmail({
    to: args.input.email,
    subject: 'Here is your magic login link.',
    html: `<a href="${process.env.PROTOCOL}://${process.env.DOMAIN}/login?token=${token}">Login</a>`,
    text: `Here is your magic login link: ${process.env.PROTOCOL}://${process.env.DOMAIN}/login?token=${token}`,
  });

  return {
    message,
    status: 'success',
  };
};

export default loginUserWithMagicLink;
