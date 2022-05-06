import {prismaContext} from '../../prismaContext';

const getUser = (parent: any, args: any) => {
  const {id} = args;

  return prismaContext.prisma.user.findUnique({
    select: {id},
    where: {id},
    // include: { posts: true },
  });
};

export default getUser;
