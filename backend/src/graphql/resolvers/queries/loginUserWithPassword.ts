import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {gql} from 'apollo-server';

import getUserByEmail from './getUserByEmail';

export const loginUserWithPasswordSchema = gql`
  scalar JSON

  input loginUserWithPasswordInput {
    email: String!
    password: String!
  }

  type Query {
    loginUserWithPassword(input: loginUserWithPasswordInput): loginUserResponse!
  }
`;

const loginUserWithPassword = async (parent: null, args: any) => {
  const formattedEmail = args.input.email.toLowerCase().trim();

  console.log('loginUserWithPassword init');
  const foundUser = await getUserByEmail(undefined, {
    input: {email: formattedEmail},
  });
  console.log('loginUserWithPassword', {foundUser});

  if (!foundUser) {
    return {
      message: 'There was an issue with your login.',
      status: 'failed',
    };
  }

  const passwordMatches = await bcrypt.compare(
    args.input.password,
    foundUser.data.password,
  );

  if (passwordMatches) {
    const token = jwt.sign(
      {id: foundUser.data.id},
      <string>process.env.JWT_SECRET,
      {
        expiresIn: '7d',
      },
    );

    return {
      jwt: token,
      message: 'User logged in.',
      status: 'success',
    };
  }

  return {
    message: 'There was an issue with your login.',
    status: 'failed',
  };
};

export default loginUserWithPassword;
