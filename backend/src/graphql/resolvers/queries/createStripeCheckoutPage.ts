import {gql} from 'apollo-server';

import {stripe} from '../../../utils/stripe';

export const createStripeCheckoutPageSchema = gql`
  scalar JSON

  input createStripeCheckoutPageInput {
    plan: String!
  }

  type createStripeCheckoutPageResponse {
    message: String!
    status: String!
    link: String
  }

  type Query {
    createStripeCheckoutPage(
      input: createStripeCheckoutPageInput
    ): createStripeCheckoutPageResponse!
  }
`;

/* jscpd:ignore-start */
const createStripeCheckoutPage = async (
  parent: any,
  args: any,
  context: any,
) => {
  const {plan} = args.input;
  const {user} = context;

  console.log('createStripeCheckoutPage', {
    user,
    plan,
  });

  const data: any = {
    mode: 'subscription',
    line_items: [
      {
        price: process.env.STRIPE_STANDARD_METERED_PRICE_ID,
      },
      {
        price: process.env.STRIPE_STANDARD_FLAT_PRICE_ID,
        quantity: 1,
      },
    ],
    client_reference_id: user.stripeCustomerID,
    customer: user.stripeCustomerID,
    success_url: <string>process.env.STRIPE_SUCCESS_URL,
    cancel_url: <string>process.env.STRIPE_CANCEL_URL,
    payment_method_types: ['card'],
  };

  const session = await stripe.checkout.sessions.create(data);

  console.log('createStripeCheckoutPage', {
    userID: user.id,
    sessionURL: session.url,
  });

  return {
    message: 'Stripe checkout link created.',
    status: 'success',
    link: session.url,
  };
};
/* jscpd:ignore-end */

export default createStripeCheckoutPage;
