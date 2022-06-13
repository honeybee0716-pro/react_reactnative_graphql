import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';
import {stripe} from '../../../utils/stripe';

export const getUserSubscriptionDataSchema = gql`
  scalar JSON

  type getUserSubscriptionDataResponse {
    message: String!
    status: String!
    stripeCustomer: JSON
  }

  type Query {
    getUserSubscriptionData: getUserSubscriptionDataResponse!
  }
`;

/* jscpd:ignore-start */
const getUserSubscriptionData = async (
  parent: any,
  args: any,
  context: any,
) => {
  const {id} = context.user;

  const foundUser = await prismaContext.prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!foundUser) {
    throw new Error('User not found.');
  }

  const stripeCustomer: any = await stripe.customers.retrieve(
    foundUser.stripeCustomerID,
    {
      expand: ['subscriptions', 'cash_balance'],
    },
  );

  const plans: any = {
    prod_LrRvQPWmU3idFM: 'Starter',
    prod_LrRwWBSaXy5leE: 'Professional',
  };

  const activePlan = stripeCustomer?.subscriptions?.data?.find(
    (d: any) => d.status === 'active',
  );

  const activePlanLevel = plans[activePlan?.plan?.product];
  const activePlanPeriodStart = activePlan.current_period_start;
  const activePlanPeriodEnd = activePlan.current_period_end;

  return {
    message: 'Subscription data retrieved.',
    status: 'success',
    stripeCustomer: {
      ...stripeCustomer,
      activePlanLevel,
      activePlanPeriodStart,
      activePlanPeriodEnd,
    },
  };
};
/* jscpd:ignore-end */

export default getUserSubscriptionData;
