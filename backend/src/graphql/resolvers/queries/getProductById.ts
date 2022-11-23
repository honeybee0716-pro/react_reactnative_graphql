import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';

export const getProductByIdSchema = gql`
  scalar JSON
  type getProductByIdResponse {
    message: String!
    status: String!
    dataProduct: JSON
  }

  input getProductByIdInput {
    id: String!
  }

  type Query {
    getProductById(input: getProductByIdInput): getProductByIdResponse!
  }
`;

/* jscpd:ignore-start */
const getProductById = async (parent: any, args: any, context: any) => {

  const dataProduct = await prismaContext.prisma.product.findUnique({
    where: {
      id:args.input.id
    },
  });

  return {
    message: 'Retrieved product detail where business',
    status: 'success',
    dataProduct,
  };
};
/* jscpd:ignore-end */

export default getProductById;