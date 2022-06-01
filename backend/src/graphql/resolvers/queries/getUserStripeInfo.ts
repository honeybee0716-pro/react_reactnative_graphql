import {gql} from 'apollo-server';

import {stripe} from '../../../utils/stripe';
import {enUS} from '../../../constants/enUS';

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
      message: enUS['error.userNotFound'],
      data: null,
    };
  }

  return {
    message: enUS['success.userWasFound'],
    status: 'success',
    data: stripeCustomer,
  };
};

export default getUserStripeInfo;
