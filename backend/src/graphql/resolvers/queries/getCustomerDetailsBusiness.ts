import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';

export const getCustomerDetailsBusinessSchema = gql`
  scalar JSON

  type getCustomerDetailsBusinessResponse {
    message: String!
    status: String!
    dataBusiness: [JSON]
  }

  type Query {
    getCustomerDetailsBusiness: getCustomerDetailsBusinessResponse!
  }
`;

/* jscpd:ignore-start */
const getCustomerDetailsBusiness = async (
  parent: any,
  args: any,
  context: any,
) => {
  const {id: userID} = context.user;

  // TODO: Limit to 100 customers and add pagination
  const dataBusiness = await prismaContext.prisma.customer.findMany({
    where: {
      businessId: userID,
    },
  });

  return {
    message: 'Retrieved customer details.',
    status: 'success',
    dataBusiness,
  };
};
/* jscpd:ignore-end */

export default getCustomerDetailsBusiness;
