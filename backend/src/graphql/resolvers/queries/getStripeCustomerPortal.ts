import {gql} from 'apollo-server';

import {stripe} from '../../../utils/stripe';

export const getStripeCustomerPortalSchema = gql`
  scalar JSON

  type getStripeCustomerPortalResponse {
    message: String!
    status: String!
    link: String
  }

  type Query {
    getStripeCustomerPortal: getStripeCustomerPortalResponse!
  }
`;

/* jscpd:ignore-start */
const getStripeCustomerPortal = async (
  parent: any,
  args: any,
  context: any,
) => {
  const {user} = context;

  console.log('getStripeCustomerPortal', {
    user,
  });

  const session = await stripe.billingPortal.sessions.create({
    customer: user.stripeCustomerID,
    return_url: 'http://localhost:3000/home',
  });

  console.log('createStripeCheckoutPage', {
    sessionURL: session.url,
  });

  return {
    message: 'Stripe customer portal link created.',
    status: 'success',
    link: session.url,
  };
};
/* jscpd:ignore-end */

export default getStripeCustomerPortal;
