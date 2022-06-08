import bcrypt from 'bcrypt';
import {gql} from 'apollo-server';

import {sendEmail} from '../../../utils/sendgrid';
import {stripe} from '../../../utils/stripe';
import {prismaContext} from '../../prismaContext';
import {generateRandomNumber} from '../../../utils/generateRandomNumber';

export const createUserSchema = gql`
  scalar JSON

  type createUserResponse {
    message: String!
    status: String!
  }

  input createUserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    createdIPAddress: String!
  }

  type Mutation {
    createUser(input: createUserInput): createUserResponse!
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createUser = async (parent: null, args: any, context: any, info: any) => {
  const foundEmail = await prismaContext.prisma.user.findUnique({
    select: {
      id: true,
    },
    where: {
      email: args.input.email.toLowerCase().trim(),
    },
  });

  if (foundEmail) {
    return {
      message:
        'An account with this email already exists. Please sign in instead.',
      status: 'failed',
    };
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(args.input.password, salt);

  const verifyEmailCode = generateRandomNumber();

  // create stripe customer
  const stripeCustomer = await stripe.customers.create({
    email: args.input.email,
    name: `${args.input.firstName} ${args.input.lastName}`,
    balance: 0,
    metadata: {
      firstName: args.input.firstName,
      lastName: args.input.lastName,
      phoneNumber: args.input.phoneNumber,
      createdIPAddress: context.ipAddress,
    },
  });

  // need to create stripeCustomer before db user because db user requires field stripeCustomerID
  const createdUser = await prismaContext.prisma.user.create({
    data: {
      ...args.input,
      password: hashedPassword,
      createdIPAddress: context.ipAddress,
      verifyEmailCode,
      verifyEmailCodeTimestamp: new Date(),
      stripeCustomerID: stripeCustomer.id,
    },
  });

  // update stripeCustomer with userID
  await stripe.customers.update(stripeCustomer.id, {
    metadata: {userID: createdUser.id},
  });

  await sendEmail({
    to: args.input.email,
    subject: 'Please verify your email.',
    text: `You've just signed up for an account on ${process.env.PROTOCOL}://${process.env.DOMAIN}. Please click here to verify your email: ${process.env.PROTOCOL}://${process.env.DOMAIN}/verify-email?code=${verifyEmailCode}.`,
    html: `
      <p>
        You've just signed up for an account on ${process.env.PROTOCOL}://${process.env.DOMAIN}.
      </p>
      <p>
        <a href="${process.env.PROTOCOL}://${process.env.DOMAIN}/verify-email?code=${verifyEmailCode}">Please here to verify your email</a>
      </p>
    `,
  });

  return {
    message: 'User created successfully',
    status: 'success',
  };
};

export default createUser;
