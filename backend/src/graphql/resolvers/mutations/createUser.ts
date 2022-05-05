import bcrypt from 'bcrypt';

import {context} from '../../context';
import {sendEmail} from '../../../utils/sendgrid';
import {stripe} from '../../../utils/stripe';

const createUser = async (parent: null, args: any) => {
  const foundEmail = await context.prisma.user.findUnique({
    select: {
      id: true,
    },
    where: {
      email: args.input.email,
    },
  });

  if (foundEmail) {
    return {
      message:
        'An account with this email already exists. Please sign in instead.',
      status: 'failed',
    };
  }

  const foundUsername = await context.prisma.user.findUnique({
    select: {
      id: true,
    },
    where: {
      username: args.input.username,
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

  await context.prisma.user.create({
    data: {
      ...args.input,
      password: hashedPassword,
    },
  });

  // send sendgrid transactional email
  await sendEmail({
    to: args.input.email,
    subject: 'Welcome to the GraphQL API',
    body: 'You have successfully signed up!',
  });

  // create stripe customer
  await stripe.customers.create({
    email: args.input.email,
    name: `${args.input.firstName} ${args.input.lastName}`,
    balance: 0,
    metadata: {
      firstName: args.input.firstName,
      lastName: args.input.lastName,
      phoneNumber: args.input.phoneNumber,
      username: args.input.username,
      createdIPAddress: args.input.createdIPAddress,
    },
  });

  return {
    message: 'User created successfully',
    status: 'success',
  };
};

export default createUser;
