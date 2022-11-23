import {ApolloError, gql} from 'apollo-server';
import {prismaContext} from '../../prismaContext';

export const deleteProductSchema = gql`
  scalar JSON

  type deleteProductResponse {
    message: String!
    status: String!
  }

  input deleteProductInput {
    id: String!
  }

  type Mutation {
    deleteProduct(input: deleteProductInput): deleteProductResponse!
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const deleteProduct = async (parent: null, args: any, context: any, info: any) => {
 
  const deletedProduct = await prismaContext.prisma.product.update({
    where:{id:args.input.id},
    data: {
      isDeleted:true 
    },
  });

  return {
    message: 'Product deleted successfully',
    status: 'success',
  };
};

export default deleteProduct;
