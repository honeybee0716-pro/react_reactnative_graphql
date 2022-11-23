import {ApolloError, gql} from 'apollo-server';
import {prismaContext} from '../../prismaContext';

export const createProductSchema = gql`
  scalar JSON

  type createProductResponse {
    message: String!
    status: String!
  }

  input createProductInput {
    Name: String!
    Price: Float!
    Description: String!
    Img: String!
  }

  type Mutation {
    createProduct(input: createProductInput): createProductResponse!
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createProduct = async (parent: null, args: any, context: any, info: any) => {

  const {id: userID} = context.user;  
  
  // need to create stripeCustomer before db user because db user requires field stripeCustomerID
  const createdProduct = await prismaContext.prisma.product.create({
    data: {
      name:args.input.Name,
      price:args.input.Price,
      description:args.input.Description,
      img:args.input.Img,
      businessId:userID,
      isDeleted:false 
    },
  });

  return {
    message: 'Product created successfully',
    status: 'success',
  };
};

export default createProduct;
