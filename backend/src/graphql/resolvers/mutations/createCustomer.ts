import bcrypt from 'bcrypt';
import {ApolloError, gql} from 'apollo-server';
import jwt from 'jsonwebtoken';

import {nodemailer} from '../../../utils/nodemailer';
import {stripe} from '../../../utils/stripe';
import {prismaContext} from '../../prismaContext';
import {generateRandomNumber} from '../../../utils/generateRandomNumber';
import {validateEmail} from '../../../utils/validateEmail';

export const createCustomerSchema = gql`
  scalar JSON

  type createUserResponse {
    message: String!
    status: String!
    jwt: String
  }

  input createUserInput {
    firstName: String!
    lastName: String!
    companyName: String!
    email: String!
    password: String!
  }

  type Mutation {
    createCustomer(input: createUserInput): createUserResponse!
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createCustomer = async (parent: null, args: any, context: any) => {
  const formattedEmail = args.input.email.toLowerCase().trim();
  const cname = args.input.companyName.trim();

  const validateEmailResponse = await validateEmail(formattedEmail);
  if (!validateEmailResponse.result) {
    throw new ApolloError(validateEmailResponse.message);
  }

  if (cname === '') {
    throw new ApolloError('kindly provide a company name');
  }

  const foundEmail = await prismaContext.prisma.customer.findUnique({
    select: {
      id: true,
    },
    where: {
      email: formattedEmail,
    },
  });

  if (foundEmail) {
    return {
      message:
        'An account with this email already exists here. Please sign in instead.',
      status: 'failed',
    };
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(args.input.password, salt);

  const verifyEmailCode = generateRandomNumber();

  // create stripe customer
  const stripeCustomer = await stripe.customers.create({
    email: formattedEmail,
    name: `${args.input.firstName} ${args.input.lastName}`,
    balance: 0,
    metadata: {
      firstName: args.input.firstName,
      lastName: args.input.lastName,
      phoneNumber: args.input.phoneNumber,
      companyName: args.input.companyName,
      accountType: 'customer',
    },
  });

  // need to create stripeCustomer before db user because db user requires field stripeCustomerID
  const createdUser = await prismaContext.prisma.customer.create({
    data: {
      ...args.input,
      password: hashedPassword,
      verifyEmailCode,
      verifyEmailCodeTimestamp: new Date(),
      stripeCustomerID: stripeCustomer.id,
      createdIPAddress: context.ipAddress,
    },
  });

  // update stripeCustomer with userID
  await stripe.customers.update(stripeCustomer.id, {
    metadata: {userID: createdUser.id},
  });

  await nodemailer.sendMail({
    from: process.env.EMAIL_FROM,
    to: formattedEmail,
    subject: 'Please verify your email.',
    text: `Please use this code to verify your account: ${verifyEmailCode}`,
    html: `
      <p>
        You've just signed up for an account on ${process.env.PROTOCOL}://${process.env.DOMAIN}.
      </p>
      <p>
        Please use this code to verify your account: ${verifyEmailCode}
      </p>
    `,
  });

  const token = jwt.sign({id: createdUser.id}, <string>process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  return {
    jwt: token,
    message: 'User created successfully',
    status: 'success',
  };
};

export default createCustomer;
