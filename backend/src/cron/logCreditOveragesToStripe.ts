/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import {prismaContext} from '../graphql/prismaContext';
import {stripe} from '../utils/stripe';
import getUserByID from '../graphql/resolvers/queries/getUserByID';
import getUserSubscriptionData from '../graphql/resolvers/queries/getUserSubscriptionData';

const logCreditOveragesToStripe = async () => {
  const leads = await prismaContext.prisma.lead.findMany({
    where: {
      stripeUsageLoggedAt: {
        isSet: false,
      },
    },
  });

  console.log({leads});

  for (const {userID, id} of leads) {
    try {
      const user = await getUserByID(undefined, {
        input: {
          id: userID,
        },
      });

      console.log({user});

      const {stripeCustomer} = await getUserSubscriptionData(
        undefined,
        undefined,
        {user: user.data},
      );

      console.log({stripeCustomer});

      const {subscriptions} = stripeCustomer;

      const subscription = subscriptions?.data[0]?.items?.data.find(
        (item) => item.plan.tiers_mode === 'graduated',
      );

      console.log({subscription});

      if (!subscription) {
        return;
      }

      const subscriptionID = subscription?.id;

      console.log({
        subscriptionID,
      });

      if (!subscriptionID) {
        return;
      }

      const usageRecord = await stripe.subscriptionItems.createUsageRecord(
        subscriptionID,
        {
          quantity: 1,
          timestamp: Math.round(new Date().getTime() / 1000),
          action: 'increment',
        },
        {
          idempotencyKey: id,
        },
      );

      console.log({usageRecord});

      const update = await prismaContext.prisma.lead.update({
        where: {
          id,
        },
        data: {
          stripeUsageLoggedAt: new Date(),
        },
      });

      console.log({update});
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log({error});
    }
  }
};

logCreditOveragesToStripe();

export default logCreditOveragesToStripe;
