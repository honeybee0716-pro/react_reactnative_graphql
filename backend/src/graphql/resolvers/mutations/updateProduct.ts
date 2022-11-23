import {ApolloError, gql} from 'apollo-server';
import {prismaContext} from '../../prismaContext';

export const updateProductSchema = gql`
  scalar JSON

  type updateProductResponse {
    message: String!
    status: String!
  }

  input updateProductInput {
    id: String!
    name: String
    price: Float
    description: String
  }

  type Mutation {
    updateProduct(input: updateProductInput): updateProductResponse!
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const updateProduct = async (parent: null, args: any, context: any, info: any) => {
 
  const updatedProduct = await prismaContext.prisma.product.update({
    where:{id:args.input.id},
    data: {
      name:args.input.name,
      price:args.input.price,
      description:args.input.description
    },
  });

  return {
    message: 'Product updated successfully',
    status: 'success',
  };
};

export default updateProduct;
