import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import {prismaContext} from '../../prismaContext';

const loginUserWithPassword = async (parent: null, args: any) => {
  const foundUser = await prismaContext.prisma.user.findUnique({
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
    const token = jwt.sign({id: foundUser.id}, <string>process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

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
