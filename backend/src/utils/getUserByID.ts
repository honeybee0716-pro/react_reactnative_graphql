import {prismaContext} from '../graphql/prismaContext';

export const getUserByID = async (id: string) => {
  return prismaContext.prisma.user.findUnique({
    where: {
      id,
    },
  });
};
