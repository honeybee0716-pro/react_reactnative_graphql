import {gql} from 'apollo-server';
import {prismaContext} from '../../prismaContext';

export const getAllTransactionsSchema = gql`
  scalar JSON

  type getAllTransactionsResponse {
    message: String!
    status: String!
    dataTransactions: [JSON]
  }

  type Query {
    getAllTransactions: getAllTransactionsResponse!
  }
`;

/* jscpd:ignore-start */
const getAllTransactions = async (
  parent: any,
  args: any,
  context: any,
) => {
  const {id: userID} = context.user;

  // TODO: Limit to 100 customers and add pagination
  const dataTransactions = await prismaContext.prisma.transaction.findMany({
    where: {
      businessId: userID,
    },
  });

  return {
    message: 'Retrieved transaction details.',
    status: 'success',
    dataTransactions,
  };
};
/* jscpd:ignore-end */

export default getAllTransactions;
