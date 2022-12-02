import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';

export const getProductDetailsBusinessSchema = gql`
  scalar JSON
  type getProductDetailsBusinessResponse {
    message: String!
    status: String!
    dataProducts: [JSON]
  }
  type Query {
    getProductDetailsBusiness: getProductDetailsBusinessResponse!
  }
`;

/* jscpd:ignore-start */
const getProductDetailsBusiness = async (
  parent: any,
  args: any,
  context: any,
) => {
  const {id: userID} = context.user;

  const dataProducts = await prismaContext.prisma.product.findMany({
    where: {
      businessId: userID,
    },
  });

  return {
    message: 'Retrieved product details.',
    status: 'success',
    dataProducts,
  };
};
/* jscpd:ignore-end */

export default getProductDetailsBusiness;
