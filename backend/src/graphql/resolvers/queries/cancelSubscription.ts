import {gql} from 'apollo-server';

import {stripe} from '../../../utils/stripe';

import getUserSubscriptionData from './getUserSubscriptionData';

export const cancelSubscriptionSchema = gql`
  scalar JSON

  type cancelSubscriptionResponse {
    message: String!
    status: String!
  }

  type Query {
    cancelSubscription: cancelSubscriptionResponse!
  }
`;

/* jscpd:ignore-start */
const cancelSubscription = async (parent: any, args: any, context: any) => {
  const subscriptionData = await getUserSubscriptionData(null, null, context);

  const activeSubscriptionID =
    subscriptionData?.stripeCustomer?.subscriptions?.data?.find(
      (d: any) => d.status === 'active',
    )?.id;

  if (!activeSubscriptionID) {
    return {
      message: 'Could not find that subscription.',
      status: 'failed',
    };
  }

  const cancelled = await stripe.subscriptions.del(activeSubscriptionID);

  if (cancelled) {
    return {
      message: 'Subscription cancelled.',
      status: 'success',
    };
  }

  return {
    message: 'There was an error.',
    status: 'failed',
  };
};
/* jscpd:ignore-end */

export default cancelSubscription;
