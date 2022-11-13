"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootQuery = void 0;
const getUserByID_1 = __importDefault(require("./getUserByID"));
const getUserByEmail_1 = __importDefault(require("./getUserByEmail"));
const verifyUser_1 = __importDefault(require("./verifyUser"));
const loginUserWithPassword_1 = __importDefault(require("./loginUserWithPassword"));
const loginUserWithMagicLink_1 = __importDefault(require("./loginUserWithMagicLink"));
const getUserStripeInfo_1 = __importDefault(require("./getUserStripeInfo"));
const createStripeCheckoutPage_1 = __importDefault(require("./createStripeCheckoutPage"));
const getUserSubscriptionData_1 = __importDefault(require("./getUserSubscriptionData"));
const cancelSubscription_1 = __importDefault(require("./cancelSubscription"));
const getStripeCustomerPortal_1 = __importDefault(require("./getStripeCustomerPortal"));
const verifyUserIsAdmin_1 = __importDefault(require("./verifyUserIsAdmin"));
exports.RootQuery = {
    getUserByID: getUserByID_1.default,
    getUserByEmail: getUserByEmail_1.default,
    loginUserWithPassword: loginUserWithPassword_1.default,
    loginUserWithMagicLink: loginUserWithMagicLink_1.default,
    verifyUser: verifyUser_1.default,
    getUserStripeInfo: getUserStripeInfo_1.default,
    createStripeCheckoutPage: createStripeCheckoutPage_1.default,
    getUserSubscriptionData: getUserSubscriptionData_1.default,
    cancelSubscription: cancelSubscription_1.default,
    getStripeCustomerPortal: getStripeCustomerPortal_1.default,
    verifyUserIsAdmin: verifyUserIsAdmin_1.default,
};
exports.default = exports.RootQuery;
//# sourceMappingURL=index.js.map