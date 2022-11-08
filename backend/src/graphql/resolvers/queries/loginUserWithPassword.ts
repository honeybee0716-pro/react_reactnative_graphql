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
  
  if (!foundUser) {
    return {
      message: 'There was an issue with your login.',
      status: 'failed',
    };
  }

  console.log('loginUserWithPassword', foundUser.data.emailIsVerified);

  

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
      message: 'User logged in here.',
      status: 'success',
      verified:foundUser.data.emailIsVerified
    };
  }

  return {
    message: 'There was an issue with your login.',
    status: 'failed',
  };
};

export default loginUserWithPassword;
