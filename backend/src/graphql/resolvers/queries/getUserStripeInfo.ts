import {gql} from 'apollo-server';

import {stripe} from '../../../utils/stripe';
import {getUserByID} from '../../../utils/getUserByID';
import {enUS} from '../../../constants/en_us';

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
  const foundUser = await getUserByID(id);

  if (!foundUser) {
    throw new Error(enUS['error.userNotFound']);
  }

  const stripeCustomer = await stripe.customers.retrieve(
    foundUser.stripeCustomerID,
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
