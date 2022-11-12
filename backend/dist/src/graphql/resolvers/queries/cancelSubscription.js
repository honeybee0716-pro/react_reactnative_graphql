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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelSubscriptionSchema = void 0;
const apollo_server_1 = require("apollo-server");
const stripe_1 = require("../../../utils/stripe");
const getUserSubscriptionData_1 = __importDefault(require("./getUserSubscriptionData"));
exports.cancelSubscriptionSchema = (0, apollo_server_1.gql) `
  scalar JSON

  type cancelSubscriptionResponse {
    message: String!
    status: String!
  }

  type Query {
    cancelSubscription: cancelSubscriptionResponse!
  }
`;
/* jscpd:ignore-start */
const cancelSubscription = (parent, args, context) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const subscriptionData = yield (0, getUserSubscriptionData_1.default)(null, null, context);
    const activeSubscriptionID = (_d = (_c = (_b = (_a = subscriptionData === null || subscriptionData === void 0 ? void 0 : subscriptionData.stripeCustomer) === null || _a === void 0 ? void 0 : _a.subscriptions) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.find((d) => d.status === 'active')) === null || _d === void 0 ? void 0 : _d.id;
    if (!activeSubscriptionID) {
        return {
            message: 'Could not find that subscription.',
            status: 'failed',
        };
    }
    const cancelled = yield stripe_1.stripe.subscriptions.del(activeSubscriptionID);
    if (cancelled) {
        return {
            message: 'Subscription cancelled.',
            status: 'success',
        };
    }
    return {
        message: 'There was an error.',
        status: 'failed',
    };
});
/* jscpd:ignore-end */
exports.default = cancelSubscription;
//# sourceMappingURL=cancelSubscription.js.map