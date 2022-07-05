import {ApolloError, gql} from 'apollo-server';

import {stripe} from '../../../utils/stripe';
import {prismaContext} from '../../prismaContext';

// cant use because period: {start: null, end: null}
// const planData = activeSubscription.items.data.map((data) => {
//   return {
//     ...data,
//     metadata: data.metadata,
//     active: data.plan.active,
//     usageType: data.plan.usage_type,
//     subscriptionItemID: data.id,
//   };
// });

// const meteredPlan = planData.find((data) => data.usageType === 'metered');
// const usageRecordSummary =
//   await stripe.subscriptionItems.listUsageRecordSummaries(
//     meteredPlan.subscriptionItemID,
//   );

// console.log('usageRecordSummary', usageRecordSummary.data);

export const getUsersRemainingCreditsSchema = gql`
  scalar JSON

  type getUsersRemainingCreditsResponse {
    message: String!
    status: String!
    remainingCredits: Int
    isCustomPlan: Boolean
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
  const {isInTrial, activeSubscription} = args.input;
  const {user} = context;
  const {id: userID} = user;

  if (!activeSubscription && !isInTrial) {
    return {
      message:
        'Cannot get remaining credits for this user as they are not in a trial and not on an active plan.',
      status: 'success',
    };
  }

  if (isInTrial && !activeSubscription) {
    const {_count: trialLeadsUsed} = await prismaContext.prisma.lead.aggregate({
      where: {
        userID,
      },
      _count: true,
    });

    return {
      message: 'Retrieved users credits.',
      status: 'success',
      remainingCredits: 300 - trialLeadsUsed,
    };
  }

  // eslint-disable-next-line no-underscore-dangle
  const {_count: numberOfLeadsUsed} = await prismaContext.prisma.lead.aggregate(
    {
      where: {
        userID,
        dateAdded: {
          gte: new Date(activeSubscription.cycleStartAt),
          lte: new Date(activeSubscription.cycleEndAt),
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

  const productID = activeSubscription.items.data.find((item) => {
    return item.plan.usage_type === 'licensed';
  }).plan.product;

  if (!productID) {
    throw new ApolloError('There was an issue with that Stripe product ID.');
  }

  const product: any = await stripe.products.retrieve(productID);

  if (!product) {
    throw new ApolloError('There was an issue fetching that Stripe product.');
  }

  console.log({product});

  const {monthlyCredits, isCustomPlan} = product?.metadata;

  if (!monthlyCredits) {
    throw new ApolloError(
      'Could not find monthlyCredits in the stripe products metadata',
    );
  }

  console.log({monthlyCredits, isCustomPlan});

  return {
    message: 'Retrieved users credits.',
    status: 'success',
    remainingCredits: monthlyCredits - numberOfLeadsUsed,
    isCustomPlan: Boolean(isCustomPlan),
  };
};
/* jscpd:ignore-end */

export default getUsersRemainingCredits;
