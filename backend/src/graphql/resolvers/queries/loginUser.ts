import bcrypt from 'bcrypt';

import {context} from '../../context';

const loginUser = async (parent: null, args: any) => {
  const foundUser = await context.prisma.user.findUnique({
    select: {
      id: true,
      password: true,
    },
    where: {
      email: args.input.email,
    },
  });

  if (!foundUser) {
    return {
      message: 'There was an issue with your login.',
      status: 'failed',
    };
  }

  const passwordMatches = await bcrypt.compare(
    args.input.password,
    foundUser.password,
  );

  if (passwordMatches) {
    return {
      id: foundUser.id,
      message: 'User logged in.',
      status: 'success',
    };
  }

  return {
    message: 'There was an issue with your login.',
    status: 'failed',
  };
};

export default loginUser;
