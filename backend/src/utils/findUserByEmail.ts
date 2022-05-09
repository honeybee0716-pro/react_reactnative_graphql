import {prismaContext} from '../graphql/prismaContext';

export const findUserByEmail = async (email: string) => {
  return prismaContext.prisma.user.findUnique({
    select: {
      id: true,
      password: true,
    },
    where: {
      email,
    },
  });
};
