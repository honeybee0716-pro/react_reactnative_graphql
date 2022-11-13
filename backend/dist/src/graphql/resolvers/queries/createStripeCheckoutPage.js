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
exports.createStripeCheckoutPageSchema = void 0;
const apollo_server_1 = require("apollo-server");
const stripe_1 = require("../../../utils/stripe");
exports.createStripeCheckoutPageSchema = (0, apollo_server_1.gql) `
  scalar JSON

  input createStripeCheckoutPageInput {
    plan: String!
  }

  type createStripeCheckoutPageResponse {
    message: String!
    status: String!
    link: String
  }

  type Query {
    createStripeCheckoutPage(
      input: createStripeCheckoutPageInput
    ): createStripeCheckoutPageResponse!
  }
`;
/* jscpd:ignore-start */
const createStripeCheckoutPage = (parent, args, context) => __awaiter(void 0, void 0, void 0, function* () {
    const { plan } = args.input;
    const { user } = context;
    console.log('createStripeCheckoutPage', {
        user,
        plan,
    });
    const data = {
        mode: 'subscription',
        line_items: [
            {
                price: process.env.STRIPE_STANDARD_METERED_PRICE_ID,
            },
            {
                price: process.env.STRIPE_STANDARD_FLAT_PRICE_ID,
                quantity: 1,
            },
        ],
        client_reference_id: user.stripeCustomerID,
        customer: user.stripeCustomerID,
        success_url: process.env.STRIPE_SUCCESS_URL,
        cancel_url: process.env.STRIPE_CANCEL_URL,
        payment_method_types: ['card'],
    };
    const session = yield stripe_1.stripe.checkout.sessions.create(data);
    console.log('createStripeCheckoutPage', {
        userID: user.id,
        sessionURL: session.url,
    });
    return {
        message: 'Stripe checkout link created.',
        status: 'success',
        link: session.url,
    };
});
/* jscpd:ignore-end */
exports.default = createStripeCheckoutPage;
//# sourceMappingURL=createStripeCheckoutPage.js.map