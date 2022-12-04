import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';

export const getPointsSchema = gql`
  scalar JSON
  type getPointsResponse {
    message: String!
    status: String!
    points: Int!
    color: String!
  }
  type Query {
    getPoints: getPointsResponse!
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getPoints = async (parent: null, args: any, context: any, info: any) => {
  const {id: userID} = context.user;

  const dataCustomer = await prismaContext.prisma.customer.findUnique({
    where: {
      id: userID,
    },
  });

  let rcolor = '#0000FF';

  const alreadyTier = await prismaContext.prisma.tiers.findMany({
    select: {
      id: true,
      rangeStart: true,
      rangeEnd: true,
      color: true,
    },
    where: {
      businessId: dataCustomer?.businessId ? dataCustomer.businessId : '',
    },
  });

  if (alreadyTier && dataCustomer?.points) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < alreadyTier.length; i++) {
      if (
        dataCustomer?.points >= alreadyTier[i].rangeStart &&
        dataCustomer?.points <= alreadyTier[i].rangeEnd
      ) {
        rcolor = alreadyTier[i].color;
        break;
      }
    }
  }

  return {
    message: 'customer points get successfully',
    status: 'success',
    points: dataCustomer?.points ? dataCustomer?.points : 0,
    color: rcolor,
  };
};

export default getPoints;
