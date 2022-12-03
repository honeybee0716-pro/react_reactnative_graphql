import {ApolloError, gql} from 'apollo-server';
import {prismaContext} from '../../prismaContext';

export const getTiersSchema = gql`
  scalar JSON
  type getTiersResponse {
    message: String!
    status: String!
    tiersData: [JSON]
  }
  type Query {
    getTiers: getTiersResponse!
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getTiers = async (
  parent: null,
  args: any,
  context: any,
  info: any,
) => {
  const {id: userID} = context.user;

 
  const tiersData = await prismaContext.prisma.tiers.findMany({
      where: {
        businessId: userID,
      },
  });

  return {
    message: 'Tiers get successfully',
    status: 'success',
    tiersData
  };
};

export default getTiers;