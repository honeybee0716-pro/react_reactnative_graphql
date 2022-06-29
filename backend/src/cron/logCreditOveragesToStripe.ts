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

  for (const {userID, id} of leads) {
    try {
      const user = await getUserByID(undefined, {
        input: {
          id: userID,
        },
      });

      const {stripeCustomer} = await getUserSubscriptionData(
        undefined,
        undefined,
        {user: user.data},
      );

      const {subscriptions} = stripeCustomer;
      const subscriptionItemID = subscriptions?.data[0]?.items?.data[0]?.id;

      if (!subscriptionItemID) {
        return;
      }

      await stripe.subscriptionItems.createUsageRecord(subscriptionItemID, {
        quantity: 1,
        timestamp: Math.round(new Date().getTime() / 1000),
        action: 'increment',
      });

      await prismaContext.prisma.lead.update({
        where: {
          id,
        },
        data: {
          stripeUsageLoggedAt: new Date(),
        },
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log({error});
    }
  }
};

logCreditOveragesToStripe();

export default logCreditOveragesToStripe;
