import {prismaContext} from '../graphql/prismaContext';

export const getUserByID = async (id: string) => {
  const foundUser = await prismaContext.prisma.user.findUnique({
    where: {
      id,
    },
  });

  return foundUser;
};
