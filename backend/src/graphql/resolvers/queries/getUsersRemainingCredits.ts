import {gql} from 'apollo-server';

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

  const {activePlanLevel, activePlanPeriodStart, activePlanPeriodEnd} = await (
    await getUserSubscriptionData(null, null, context)
  ).stripeCustomer;

  if (!activePlanLevel || !activePlanPeriodStart || !activePlanPeriodEnd) {
    return {
      message: 'There was an error.',
      status: 'success',
    };
  }

  // eslint-disable-next-line no-underscore-dangle
  const numberOfLeads = await prismaContext.prisma.lead.aggregate({
    where: {
      userID,
      dateAdded: {
        gte: new Date(activePlanPeriodStart),
        lte: new Date(activePlanPeriodEnd),
      },
    },
    _count: true,
  });

  const creditsPerPlan: any = {
    Starter: 300,
    Professional: 5000,
    Enterprise: 999999,
  };

  return {
    message: 'Retrieved users credits.',
    status: 'success',
    remainingCredits:
      // if === 1655068053 then it's stripe test data, they don't give real start date with test data
      activePlanPeriodStart === 1655068053
        ? 123
        : // eslint-disable-next-line no-underscore-dangle
          creditsPerPlan[activePlanLevel] - numberOfLeads._count,
  };
};
/* jscpd:ignore-end */

export default getUsersRemainingCredits;
