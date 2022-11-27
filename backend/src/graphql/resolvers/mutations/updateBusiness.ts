import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';

export const updateBusinessSchema = gql`
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
    updateBusiness(input: updateUserInput): updateUserResponse!
  }
`;

const updateBusiness = async (parent: null, args: any, context: any) => {
  await prismaContext.prisma.business.update({
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

export default updateBusiness;
