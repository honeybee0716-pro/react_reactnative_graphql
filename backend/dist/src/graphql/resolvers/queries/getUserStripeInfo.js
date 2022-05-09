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
exports.getUserStripeInfoSchema = void 0;
const apollo_server_1 = require("apollo-server");
const stripe_1 = require("../../../utils/stripe");
const prismaContext_1 = require("../../prismaContext");
exports.getUserStripeInfoSchema = (0, apollo_server_1.gql) `
  scalar JSON

  input getUserStripeInfoInput {
    id: String!
  }

  type getUserStripeInfoResponse {
    message: String!
    status: String!
    data: JSON
  }

  type Query {
    getUserStripeInfo(input: getUserStripeInfoInput): getUserStripeInfoResponse!
  }
`;
const getUserStripeInfo = (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = args;
    const foundUser = yield prismaContext_1.prismaContext.prisma.user.findFirst({
        where: {
            id,
        },
    });
    if (!foundUser) {
        return {
            message: 'Stripe customer was not found.',
            status: 'failed',
            data: null,
        };
    }
    const stripeCustomer = yield stripe_1.stripe.customers.retrieve(foundUser.stripeCustomerID);
    if (!stripeCustomer) {
        return {
            status: 'failed',
            message: 'Stripe customer was not found.',
            data: null,
        };
    }
    return {
        message: 'Stripe customer was found.',
        status: 'success',
        data: stripeCustomer,
    };
});
exports.default = getUserStripeInfo;
//# sourceMappingURL=getUserStripeInfo.js.map