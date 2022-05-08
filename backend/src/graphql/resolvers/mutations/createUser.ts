import bcrypt from 'bcrypt';
import {gql} from 'apollo-server';

import {sendEmail} from '../../../utils/sendgrid';
import {stripe} from '../../../utils/stripe';
import {prismaContext} from '../../prismaContext';

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
    phoneNumber: String!
    username: String!
    password: String!
    createdIPAddress: String!
    twitter: String
    facebook: String
    google: String
    github: String
    linkedin: String
    instagram: String
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

  const foundUsername = await prismaContext.prisma.user.findUnique({
    select: {
      id: true,
    },
    where: {
      username: args.input.username.toLowerCase().trim(),
    },
  });

  if (foundUsername) {
    return {
      message:
        'An account with this username already exists. Please sign in instead.',
      status: 'failed',
    };
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(args.input.password, salt);

  const createdUser = await prismaContext.prisma.user.create({
    data: {
      ...args.input,
      password: hashedPassword,
      createdIPAddress: context.ipAddress,
    },
  });

  // send sendgrid transactional email
  await sendEmail({
    to: args.input.email,
    subject: 'Login link',
    html: `<strong>You have successfully signed up.</strong>`,
    text: `You have successfully signed up.`,
  });

  // create stripe customer
  await stripe.customers.create({
    email: args.input.email,
    name: `${args.input.firstName} ${args.input.lastName}`,
    balance: 0,
    metadata: {
      userID: createdUser.id,
      firstName: args.input.firstName,
      lastName: args.input.lastName,
      phoneNumber: args.input.phoneNumber,
      username: args.input.username,
      createdIPAddress: context.ipAddress,
    },
  });

  return {
    message: 'User created successfully',
    status: 'success',
  };
};

export default createUser;
