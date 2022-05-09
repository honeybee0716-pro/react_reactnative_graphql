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
exports.getUserStripeInfoSchema = void 0;
const apollo_server_1 = require("apollo-server");
const stripe_1 = require("../../../utils/stripe");
const en_us_1 = require("../../../constants/en_us");
const getUserByID_1 = __importDefault(require("./getUserByID"));
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
    const { id } = args.input;
    const foundUser = yield (0, getUserByID_1.default)(undefined, {
        id,
    });
    const stripeCustomer = yield stripe_1.stripe.customers.retrieve(foundUser.data.stripeCustomerID);
    if (!stripeCustomer) {
        return {
            status: 'failed',
            message: en_us_1.enUS['error.userNotFound'],
            data: null,
        };
    }
    return {
        message: en_us_1.enUS['success.userWasFound'],
        status: 'success',
        data: stripeCustomer,
    };
});
exports.default = getUserStripeInfo;
//# sourceMappingURL=getUserStripeInfo.js.map