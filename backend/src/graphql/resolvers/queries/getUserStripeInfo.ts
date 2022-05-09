import {gql} from 'apollo-server';

import {stripe} from '../../../utils/stripe';
import {getUserByID} from '../../../utils/getUserByID';

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
  const {id} = args;

  const foundUser = await getUserByID(id);

  const stripeCustomer = await stripe.customers.retrieve(
    foundUser.stripeCustomerID,
  );

  if (!stripeCustomer) {
    return {
      status: 'failed',
      message: 'Stripe customer was not found.',
      data: null,
    };
  }

  return {
    message: 'Stripe customer was found.',
    status: 'success',
    data: stripeCustomer,
  };
};

export default getUserStripeInfo;
