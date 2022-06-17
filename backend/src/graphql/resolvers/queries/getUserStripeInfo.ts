import {gql} from 'apollo-server';

import {stripe} from '../../../utils/stripe';

import getUserByID from './getUserByID';

export const getUserStripeInfoSchema = gql`
  scalar JSON

  input getUserStripeInfoInput {
    id: String!
  }

  type getUserStripeInfoResponse {
    message: String!
    status: String!
    data: JSON
  }

  type Query {
    getUserStripeInfo(input: getUserStripeInfoInput): getUserStripeInfoResponse!
  }
`;

const getUserStripeInfo = async (parent: any, args: any) => {
  const {id} = args.input;
  const foundUser = await getUserByID(undefined, {
    id,
  });

  const stripeCustomer = await stripe.customers.retrieve(
    foundUser.data.stripeCustomerID,
  );

  if (!stripeCustomer) {
    return {
      status: 'failed',
      message: 'Could not find that user.',
      data: null,
    };
  }

  return {
    message: 'User was found.',
    status: 'success',
    data: stripeCustomer,
  };
};

export default getUserStripeInfo;
