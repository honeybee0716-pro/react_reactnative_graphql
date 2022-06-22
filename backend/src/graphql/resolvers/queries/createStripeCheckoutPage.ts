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

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price:
          plan === 'Starter'
            ? 'price_1L9j1oGK5hA8adsFmXeE5kHe'
            : 'price_1L9j2NGK5hA8adsF7eB1NXZI',
        quantity: 1,
      },
    ],
    mode: 'subscription',
    client_reference_id: user.stripeCustomerID,
    customer: user.stripeCustomerID,
    success_url: `http://localhost:3000/stripe-success`,
    cancel_url: `http://localhost:3000/pricing`,
    payment_method_types: ['card', 'us_bank_account'],
  });

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
