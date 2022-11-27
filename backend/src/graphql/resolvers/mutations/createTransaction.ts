import {gql} from 'apollo-server';
import {prismaContext} from '../../prismaContext';

export const createTransactionSchema = gql`
  scalar JSON

  type createTransactionResponse {
    message: String!
    status: String!
  }

  input createTransactionInput {
    purchaseAmount: Float!
  }

  type Mutation {
    createTransaction(input: createTransactionInput): createTransactionResponse!
  }
`;

/* jscpd:ignore-start */
const createTransaction = async (
  parent: any,
  args: any,
  context: any,
) => {
  const {id: userID} = context.user;

  const dataTransactions = await prismaContext.prisma.transaction.create({
    data: {
      purchaseAmount:args.input.purchaseAmount,  
      businessId: userID,
    },
  });

  return {
    message: 'transaction created successfully.',
    status: 'success',
  };
};
/* jscpd:ignore-end */

export default createTransaction;
