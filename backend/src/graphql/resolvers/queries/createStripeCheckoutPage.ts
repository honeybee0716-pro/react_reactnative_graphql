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

  // eslint-disable-next-line camelcase
  const line_items =
    plan === 'tempCustom'
      ? [
          {
            price: process.env.STRIPE_TEMP_CUSTOM_PLAN_ID,
            quantity: 1,
          },
        ]
      : [
          {
            price: process.env.STRIPE_STANDARD_METERED_PRICE_ID,
          },
          {
            price: process.env.STRIPE_STANDARD_FLAT_PRICE_ID,
            quantity: 1,
          },
        ];

  const data: any = {
    mode: 'subscription',
    line_items,
    client_reference_id: user.stripeCustomerID,
    customer: user.stripeCustomerID,
    success_url: <string>process.env.STRIPE_SUCCESS_URL,
    cancel_url: <string>process.env.STRIPE_CANCEL_URL,
    payment_method_types: ['card'],
  };

  if (plan === 'tempCustom') {
    data.subscription_data = {
      trial_period_days: 90,
    };
  }

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
