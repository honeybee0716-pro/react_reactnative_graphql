import {prismaContext} from '../graphql/prismaContext';

export const getUserByID = async (id: string) => {
  const foundUser = prismaContext.prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!foundUser) {
    throw new Error('User not found');
  }
};
