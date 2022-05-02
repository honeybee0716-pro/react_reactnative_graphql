import {context} from '../../context';

const getUser = (parent: any, args: any) => {
  const {id} = args;

  return context.prisma.user.findUnique({
    select: {id},
    where: {id},
    // include: { posts: true },
  });
};

export default getUser;
