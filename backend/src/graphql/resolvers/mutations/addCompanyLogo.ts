import {ApolloError, gql} from 'apollo-server';
import {prismaContext} from '../../prismaContext';

export const addCompanyLogoSchema = gql`
  scalar JSON
  type addCompanyLogoResponse {
    message: String!
    status: String!
  }
  input addCompanyLogoInput {
    companyLogo: String!
  }
  type Mutation {
    addCompanyLogo(input: addCompanyLogoInput): addCompanyLogoResponse!
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const addCompanyLogo = async (parent: null, args: any, context: any, info: any) => {

  const {id: userID} = context.user;  
  
  // need to create stripeCustomer before db user because db user requires field stripeCustomerID
  const updatedLogoBusiness = await prismaContext.prisma.business.update({
    where:{id:userID},
    data: {
     companyLogo:args.input.companyLogo
    },
  });

  return {
    message: 'Product created successfully',
    status: 'success',
  };
};

export default addCompanyLogo;