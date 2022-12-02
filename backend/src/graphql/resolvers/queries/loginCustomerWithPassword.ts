import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {gql} from 'apollo-server';


import getUserByEmail from './getCustomerByEmail';

export const loginCustomerWithPasswordSchema = gql`
  scalar JSON

  input loginCustomerWithPasswordInput {
    email: String!
    password: String!
    businessId: String!
  }

  type Query {
    loginCustomerWithPassword(input: loginCustomerWithPasswordInput): loginUserResponse!
  }
`;

const loginCustomerWithPassword = async (parent: null, args: any) => {

  
  const formattedEmail = args.input.email.toLowerCase().trim();

  const foundUser = await getUserByEmail(undefined, {
    input: {email: formattedEmail,businessId:args.input.businessId},
  });
  
  if (!foundUser) {
    return {
      jwt: "",
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
      message: 'User logged in here.',
      status: 'success',
      verified:foundUser.data.emailIsVerified
    };
  }

  return {
    jwt:"",
    message: 'There was an issue with your login.',
    status: 'failed',
  };
};

export default loginCustomerWithPassword;
