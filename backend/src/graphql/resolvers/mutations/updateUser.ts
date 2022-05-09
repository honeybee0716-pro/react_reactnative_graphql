import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';

export const updateUserSchema = gql`
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
    updateUser(input: updateUserInput): updateUserResponse!
  }
`;

const updateUser = async (parent: null, args: any) => {
  await prismaContext.prisma.user.update({
    where: {
      id: '6e951574-a4bc-467c-b72f-ea269beadc71', // pull user id from auth context, not from args
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

export default updateUser;
