import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';

export const updateCustomerSchema = gql`
  scalar JSON

  type updateUserResponse {
    message: String!
    status: String!
  }

  input updateUserInput {
    firstName: String
    lastName: String
    email: String
    phoneNumber: String
    username: String
    password: String
    twitter: String
    facebook: String
    google: String
    github: String
    linkedin: String
    instagram: String
  }

  type Mutation {
    updateCustomer(input: updateUserInput): updateUserResponse!
  }
`;

const updateCustomer = async (parent: null, args: any, context: any) => {
  await prismaContext.prisma.customer.update({
    where: {
      id: context.user.id,
    },
    data: {
      ...args.input, // only graphql input fields will be allowed, so no real security concern here
    },
  });

  return {
    message: 'User updated successfully',
    status: 'success',
  };
};

export default updateCustomer;
