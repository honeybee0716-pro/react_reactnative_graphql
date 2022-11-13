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
exports.getStripeCustomerPortalSchema = void 0;
const apollo_server_1 = require("apollo-server");
const stripe_1 = require("../../../utils/stripe");
exports.getStripeCustomerPortalSchema = (0, apollo_server_1.gql) `
  scalar JSON

  type getStripeCustomerPortalResponse {
    message: String!
    status: String!
    link: String
  }

  type Query {
    getStripeCustomerPortal: getStripeCustomerPortalResponse!
  }
`;
/* jscpd:ignore-start */
const getStripeCustomerPortal = (parent, args, context) => __awaiter(void 0, void 0, void 0, function* () {
    const { user } = context;
    console.log('getStripeCustomerPortal', {
        user,
    });
    const session = yield stripe_1.stripe.billingPortal.sessions.create({
        customer: user.stripeCustomerID,
        return_url: process.env.STRIPE_MANAGE_BILLING_CANCEL_URL,
    });
    console.log('createStripeCheckoutPage', {
        sessionURL: session.url,
    });
    return {
        message: 'Stripe customer portal link created.',
        status: 'success',
        link: session.url,
    };
});
/* jscpd:ignore-end */
exports.default = getStripeCustomerPortal;
//# sourceMappingURL=getStripeCustomerPortal.js.map