"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const logCreditOveragesToStripe = () => __awaiter(void 0, void 0, void 0, function* () {
    { /*const leads = await prismaContext.prisma.lead.findMany({
      where: {
        stripeUsageLoggedAt: {
          isSet: false,
        },
        noSubscriptionFoundForStripeUsage: {
          isSet: false,
        },
      },
    });*/
    }
    //console.log({leads});
    { /*for (const {userID, id} of leads) {
      try {
        const user = await getUserByID(undefined, {
          input: {
            id: userID,
          },
        });
  
        console.log({user});
        if (!user) {
          continue;
        }
  
        const {stripeCustomer} = await getUserSubscriptionData(
          undefined,
          undefined,
          {user: user.data},
        );
  
        console.log({stripeCustomer});
        if (!stripeCustomer) {
          continue;
        }
  
        const {subscriptions} = stripeCustomer;
  
        const subscription = subscriptions?.data[0]?.items?.data.find(
          (item) => item.plan.tiers_mode === 'graduated',
        );
  
        console.log({subscription});
        if (!subscription) {
          await prismaContext.prisma.lead.update({
            where: {
              id,
            },
            data: {
              noSubscriptionFoundForStripeUsage: new Date(),
            },
          });
          continue;
        }
  
        const subscriptionID = subscription?.id;
  
        console.log({subscriptionID});
        if (!subscriptionID) {
          continue;
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
        if (!usageRecord) {
          continue;
        }
  
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
    }*/
    }
});
logCreditOveragesToStripe();
exports.default = logCreditOveragesToStripe;
//# sourceMappingURL=logCreditOveragesToStripe.js.map