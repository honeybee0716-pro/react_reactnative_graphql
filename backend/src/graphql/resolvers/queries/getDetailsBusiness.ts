import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';

export const getDetailsBusinessSchema = gql`
  scalar JSON

  type getDetailsBusinessResponse {
    message: String!
    status: String!
    noTransactions: Int
    noCustomers: Int
  }

  type Query {
    getDetailsBusiness: getDetailsBusinessResponse!
  }
`;

/* jscpd:ignore-start */
const getDetailsBusiness = async (parent: any, args: any, context: any) => {
  const {id: userID} = context.user;


  try{
  const dataBusiness = await prismaContext.prisma.customer.findMany({
    where: {
      businessId: userID,
    },
  });

  const dataTransactions = await prismaContext.prisma.transaction.findMany({
    where: {
      businessId: userID,
    },
  });


  return {
    message: 'Retrieved Business details',
    status: 'success',
    noCustomers:dataBusiness?dataBusiness.length:0,
    noTransactions:dataTransactions?dataTransactions.length:0
  };
}
catch(err){
  return {
    message: 'Retrieved Business details',
    status: 'success',
    noCustomers:0,
    noTransactions:0
  };
}
};
/* jscpd:ignore-end */

export default getDetailsBusiness;
