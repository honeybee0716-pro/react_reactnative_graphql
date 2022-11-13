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
exports.getUserSubscriptionDataSchema = void 0;
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
const apollo_server_1 = require("apollo-server");
const stripe_1 = require("../../../utils/stripe");
exports.getUserSubscriptionDataSchema = (0, apollo_server_1.gql) `
  scalar JSON

  type getUserSubscriptionDataResponse {
    message: String!
    status: String!
    stripeCustomer: JSON
    activeSubscription: JSON
    remainingCredits: Int!
    isInTrial: Boolean!
    redirectToPricingPage: Boolean!
    redirectToOTPPage: Boolean!
    isCustomPlan: Boolean!
    userInternalID: String!
    userEmail: String!
  }

  type Query {
    getUserSubscriptionData: getUserSubscriptionDataResponse!
  }
`;
/* jscpd:ignore-start */
const getUserSubscriptionData = (parent, args, context) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const { user } = context;
    const stripeCustomer = yield stripe_1.stripe.customers.retrieve(user.stripeCustomerID, {
        expand: ['subscriptions', 'cash_balance'],
    });
    const activeSubscription = (_c = (_b = (_a = stripeCustomer === null || stripeCustomer === void 0 ? void 0 : stripeCustomer.subscriptions) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.map((subscription) => {
        return Object.assign(Object.assign({}, subscription), { cycleStartAt: new Date(subscription.current_period_start * 1000), cycleEndAt: new Date(subscription.current_period_end * 1000), isActive: subscription.status === 'active' });
    }).filter((subscription) => subscription.isActive)) === null || _c === void 0 ? void 0 : _c[0];
    let isInTrial = true;
    if (activeSubscription) {
        isInTrial = false;
    }
    const { firstLeadReceivedAt } = user;
    if (firstLeadReceivedAt) {
        const currentDate = new Date();
        const msBetweenDates = Math.abs(firstLeadReceivedAt.getTime() - currentDate.getTime());
        const daysBetweenDates = msBetweenDates / (24 * 60 * 60 * 1000);
        if (daysBetweenDates > 30) {
            isInTrial = false;
        }
    }
    const redirectToPricingPage = !isInTrial && !activeSubscription;
    const data = {
        isInTrial,
        redirectToPricingPage,
        redirectToOTPPage: user.emailIsVerified !== true,
        stripeCustomer,
        activeSubscription,
    };
    data.isCustomPlan = false;
    data.userInternalID = user.id;
    data.userEmail = user.email;
    return Object.assign(Object.assign({}, data), { message: 'Subscription data retrieved.', status: 'success' });
});
/* jscpd:ignore-end */
exports.default = getUserSubscriptionData;
//# sourceMappingURL=getUserSubscriptionData.js.map