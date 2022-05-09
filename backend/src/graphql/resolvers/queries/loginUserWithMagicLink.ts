import jwt from 'jsonwebtoken';
import {gql} from 'apollo-server';

import {sendEmail} from '../../../utils/sendgrid';

import getUserByEmail from './getUserByEmail';

export const loginUserWithMagicLinkSchema = gql`
  scalar JSON

  input loginUserWithMagicLinkInput {
    email: String!
  }

  type Query {
    loginUserWithMagicLink(
      input: loginUserWithMagicLinkInput
    ): loginUserResponse!
  }
`;

const loginUserWithMagicLink = async (parent: null, args: any) => {
  const foundUser = await getUserByEmail(undefined, {email: args.input.email});

  const message =
    'If there is an account with that email, you will receive a login link in your email.';

  if (!foundUser) {
    return {
      message,
      status: 'success',
    };
  }

  const token = jwt.sign(
    {id: foundUser.data.id},
    <string>process.env.JWT_SECRET,
    {
      expiresIn: '1d',
    },
  );

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
