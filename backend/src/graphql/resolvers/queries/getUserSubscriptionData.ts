import {gql} from 'apollo-server';

import {stripe} from '../../../utils/stripe';

export const getUserSubscriptionDataSchema = gql`
  scalar JSON

  type getUserSubscriptionDataResponse {
    message: String!
    status: String!
    stripeCustomer: JSON
    isInTrial: Boolean!
    redirectToPricingPage: Boolean!
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
  const {user} = context;

  // console.log('getUserSubscriptionData1', user);

  const stripeCustomer: any = await stripe.customers.retrieve(
    user.stripeCustomerID,
    {
      expand: ['subscriptions', 'cash_balance'],
    },
  );

  console.log('getUserSubscriptionData', stripeCustomer);

  const activePlan = stripeCustomer?.subscriptions?.data?.find(
    (d: any) => d.status === 'active',
  );

  const activePlanPeriodStart = new Date(
    activePlan?.current_period_start * 1000,
  );
  const activePlanPeriodEnd = new Date(activePlan?.current_period_end * 1000);

  const {firstLeadReceivedAt} = user;
  let isInTrial = false;

  if (!user.firstLeadReceivedAt) {
    isInTrial = true;
  }

  if (!isInTrial) {
    // https://bobbyhadz.com/blog/javascript-check-if-date-within-30-days
    const currentDate = new Date();
    const msBetweenDates = Math.abs(
      firstLeadReceivedAt.getTime() - currentDate.getTime(),
    );
    const daysBetweenDates = msBetweenDates / (24 * 60 * 60 * 1000);

    if (daysBetweenDates <= 30) {
      isInTrial = true;
    }
  }

  const redirectToPricingPage = !isInTrial && !activePlan;

  console.log('getUserSubscriptionData', {
    timestamp: new Date(),
    userID: user.id,
    redirectToPricingPage,
    isInTrial,
    activePlan,
  });

  const stripeCustomerNew = {
    ...stripeCustomer,
    activePlan,
    activePlanPeriodStart,
    activePlanPeriodEnd,
  };

  console.log({stripeCustomerNew});

  return {
    message: 'Subscription data retrieved.',
    status: 'success',
    isInTrial,
    redirectToPricingPage,
    stripeCustomer: stripeCustomerNew,
  };
};
/* jscpd:ignore-end */

export default getUserSubscriptionData;
