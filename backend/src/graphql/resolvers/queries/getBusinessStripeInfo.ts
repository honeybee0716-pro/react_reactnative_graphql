import {gql} from 'apollo-server';

import {stripe} from '../../../utils/stripe';

import getBusinessByID from './getBusinessByID';

export const getBusinessStripeInfoSchema = gql`
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
    getBusinessStripeInfo(input: getUserStripeInfoInput): getUserStripeInfoResponse!
  }
`;

const getBusinessStripeInfo = async (parent: any, args: any) => {
  const {id} = args.input;
  const foundUser = await getBusinessByID(undefined, {
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

export default getBusinessStripeInfo;
