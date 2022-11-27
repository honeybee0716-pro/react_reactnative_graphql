import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';

export const getCustomerDetailsSchema = gql`
  scalar JSON

  type getUserLeadsResponse {
    message: String!
    status: String!
    dataBusiness: JSON
  }

  type Query {
    getCustomerDetails: getUserLeadsResponse!
  }
`;

/* jscpd:ignore-start */
const getCustomerDetails = async (parent: any, args: any, context: any) => {
  const {id: userID} = context.user;


  const dataBusiness = await prismaContext.prisma.customer.findUnique({
    where: {
      id:userID,
    },
  });

  return {
    message: 'Retrieved customer details',
    status: 'success',
    dataBusiness,
  };
};
/* jscpd:ignore-end */

export default getCustomerDetails;
