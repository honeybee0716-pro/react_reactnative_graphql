import {ApolloError, gql} from 'apollo-server';

import {stripe} from '../../../utils/stripe';
import {prismaContext} from '../../prismaContext';

import getUserSubscriptionData from './getUserSubscriptionData';

export const getUsersRemainingCreditsSchema = gql`
  scalar JSON

  type getUsersRemainingCreditsResponse {
    message: String!
    status: String!
    remainingCredits: Int
  }

  type Query {
    getUsersRemainingCredits: getUsersRemainingCreditsResponse!
  }
`;

/* jscpd:ignore-start */
const getUsersRemainingCredits = async (
  parent: any,
  args: any,
  context: any,
) => {
  const {id: userID} = context.user;

  const {activePlan, activePlanPeriodStart, activePlanPeriodEnd} = await (
    await getUserSubscriptionData(null, null, context)
  ).stripeCustomer;

  if (!activePlan || !activePlanPeriodStart || !activePlanPeriodEnd) {
    return {
      message: 'There was an error.',
      status: 'success',
    };
  }

  // eslint-disable-next-line no-underscore-dangle
  const {_count: numberOfLeadsUsed} = await prismaContext.prisma.lead.aggregate(
    {
      where: {
        userID,
        dateAdded: {
          gte: new Date(activePlanPeriodStart),
          lte: new Date(activePlanPeriodEnd),
        },
      },
      _count: true,
    },
  );

  if (!numberOfLeadsUsed && numberOfLeadsUsed !== 0) {
    throw new ApolloError(
      'There was an error fetching the number of leads used this month.',
    );
  }

  const productID = activePlan.plan.product;

  if (!productID) {
    throw new ApolloError('There was an issue with that Stripe product ID.');
  }

  const product: any = await stripe.products.retrieve(productID);

  if (!product) {
    throw new ApolloError('There was an issue fetching that Stripe product.');
  }

  const {monthlyCredits} = product?.metadata;

  if (!monthlyCredits) {
    throw new ApolloError(
      'Could not find monthlyCredits in the stripe products metadata',
    );
  }

  return {
    message: 'Retrieved users credits.',
    status: 'success',
    remainingCredits: monthlyCredits - numberOfLeadsUsed,
  };
};
/* jscpd:ignore-end */

export default getUsersRemainingCredits;
