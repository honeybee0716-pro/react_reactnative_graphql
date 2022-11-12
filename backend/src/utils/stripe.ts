import Stripe from 'stripe';

export const stripe = new Stripe(<string>process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});
