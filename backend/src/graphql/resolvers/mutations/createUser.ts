import bcrypt from 'bcrypt';

import {context} from '../../context';
import {sendEmail} from '../../../utils/sendgrid';

const createUser = async (parent: null, args: any) => {
  const foundUser = await context.prisma.user.findUnique({
    select: {
      id: true,
    },
    where: {
      email: args.input.email,
    },
  });

  if (foundUser) {
    return {
      message:
        'An account with this email already exists. Please sign in instead.',
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

  return {
    message: 'User created successfully',
    status: 'success',
  };
};

export default createUser;