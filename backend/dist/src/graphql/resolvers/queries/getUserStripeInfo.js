var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { gql } from 'apollo-server';
import { stripe } from '../../../utils/stripe';
import { enUS } from '../../../constants/en_us';
import getUserByID from './getUserByID';
export const getUserStripeInfoSchema = gql `
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
    const foundUser = yield getUserByID(undefined, {
        id,
    });
    const stripeCustomer = yield stripe.customers.retrieve(foundUser.data.stripeCustomerID);
    if (!stripeCustomer) {
        return {
            status: 'failed',
            message: enUS['error.userNotFound'],
            data: null,
        };
    }
    return {
        message: enUS['success.userWasFound'],
        status: 'success',
        data: stripeCustomer,
    };
});
export default getUserStripeInfo;
//# sourceMappingURL=getUserStripeInfo.js.map