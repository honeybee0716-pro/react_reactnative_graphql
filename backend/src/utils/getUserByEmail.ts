import {prismaContext} from '../graphql/prismaContext';

export const getUserByEmail = async (email: string) => {
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
