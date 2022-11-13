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
exports.createUserSchema = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const apollo_server_1 = require("apollo-server");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// import {sendEmail} from '../../../utils/sendgrid';
const isemail_1 = __importDefault(require("isemail"));
const nodemailer_1 = require("../../../utils/nodemailer");
const stripe_1 = require("../../../utils/stripe");
const prismaContext_1 = require("../../prismaContext");
const generateRandomNumber_1 = require("../../../utils/generateRandomNumber");
exports.createUserSchema = (0, apollo_server_1.gql) `
  scalar JSON

  type createUserResponse {
    message: String!
    status: String!
    jwt: String
  }

  input createUserInput {
    firstName: String!
    lastName: String!
    companyName: String!
    email: String!
    password: String!
  }

  type Mutation {
    createUser(input: createUserInput): createUserResponse!
  }
`;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createUser = (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
    const formattedEmail = args.input.email.toLowerCase().trim();
    const cname = args.input.companyName.trim();
    const validEmail = isemail_1.default.validate(formattedEmail);
    if (cname === "") {
        throw new apollo_server_1.ApolloError('kindly provide a company name');
    }
    if (!validEmail) {
        throw new apollo_server_1.ApolloError('That does not appear to be a valid email address.');
    }
    const foundEmail = yield prismaContext_1.prismaContext.prisma.user.findUnique({
        select: {
            id: true,
        },
        where: {
            email: formattedEmail,
        },
    });
    if (foundEmail) {
        return {
            message: 'An account with this email already exists here. Please sign in instead.',
            status: 'failed',
        };
    }
    const salt = yield bcrypt_1.default.genSalt(10);
    const hashedPassword = yield bcrypt_1.default.hash(args.input.password, salt);
    const verifyEmailCode = (0, generateRandomNumber_1.generateRandomNumber)();
    // create stripe customer
    const stripeCustomer = yield stripe_1.stripe.customers.create({
        email: formattedEmail,
        name: `${args.input.firstName} ${args.input.lastName}`,
        balance: 0,
        metadata: {
            firstName: args.input.firstName,
            lastName: args.input.lastName,
            phoneNumber: args.input.phoneNumber,
            companyName: args.input.companyName,
        },
    });
    // need to create stripeCustomer before db user because db user requires field stripeCustomerID
    const createdUser = yield prismaContext_1.prismaContext.prisma.user.create({
        data: Object.assign(Object.assign({}, args.input), { password: hashedPassword, verifyEmailCode, verifyEmailCodeTimestamp: new Date(), stripeCustomerID: stripeCustomer.id, createdIPAddress: context.ipAddress }),
    });
    // update stripeCustomer with userID
    yield stripe_1.stripe.customers.update(stripeCustomer.id, {
        metadata: { userID: createdUser.id },
    });
    // await sendEmail({
    //   to: args.input.email,
    //   subject: 'Please verify your email.',
    //   text: `Please use this code to verify your account: ${verifyEmailCode}`,
    // html: `
    //   <p>
    //     You've just signed up for an account on ${process.env.PROTOCOL}://${process.env.DOMAIN}.
    //   </p>
    //   <p>
    //     Please use this code to verify your account: ${verifyEmailCode}
    //   </p>
    // `,
    // });
    if (process.env.NODE_ENV === "production") {
        yield nodemailer_1.nodemailer.sendMail({
            from: '"SaaS Template Alerts" <alerts@saastemplates.io>',
            to: formattedEmail,
            subject: 'Please verify your email.',
            text: `Please use this code to verify your account: ${verifyEmailCode}`,
            html: `
      <p>
        You've just signed up for an account on ${process.env.PROTOCOL}://${process.env.DOMAIN}.
      </p>
      <p>
        Please use this code to verify your account: ${verifyEmailCode}
      </p>
    `,
        });
    }
    const token = jsonwebtoken_1.default.sign({ id: createdUser.id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    });
    //token
    return {
        jwt: token,
        message: 'User created successfully',
        status: 'success',
    };
});
exports.default = createUser;
//# sourceMappingURL=createUser.js.map