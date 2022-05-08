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
const sendgrid_1 = require("../../../utils/sendgrid");
const stripe_1 = require("../../../utils/stripe");
const prismaContext_1 = require("../../prismaContext");
exports.createUserSchema = (0, apollo_server_1.gql) `
  scalar JSON

  type createUserResponse {
    message: String!
    status: String!
  }

  input createUserInput {
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: String!
    username: String!
    password: String!
    createdIPAddress: String!
    twitter: String
    facebook: String
    google: String
    github: String
    linkedin: String
    instagram: String
  }

  type Mutation {
    createUser(input: createUserInput): createUserResponse!
  }
`;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createUser = (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
    const foundEmail = yield prismaContext_1.prismaContext.prisma.user.findUnique({
        select: {
            id: true,
        },
        where: {
            email: args.input.email.toLowerCase().trim(),
        },
    });
    if (foundEmail) {
        return {
            message: 'An account with this email already exists. Please sign in instead.',
            status: 'failed',
        };
    }
    const foundUsername = yield prismaContext_1.prismaContext.prisma.user.findUnique({
        select: {
            id: true,
        },
        where: {
            username: args.input.username.toLowerCase().trim(),
        },
    });
    if (foundUsername) {
        return {
            message: 'An account with this username already exists. Please sign in instead.',
            status: 'failed',
        };
    }
    const salt = yield bcrypt_1.default.genSalt(10);
    const hashedPassword = yield bcrypt_1.default.hash(args.input.password, salt);
    const createdUser = yield prismaContext_1.prismaContext.prisma.user.create({
        data: Object.assign(Object.assign({}, args.input), { password: hashedPassword, createdIPAddress: context.ipAddress }),
    });
    // send sendgrid transactional email
    yield (0, sendgrid_1.sendEmail)({
        to: args.input.email,
        subject: 'Login link',
        html: `<strong>You have successfully signed up.</strong>`,
        text: `You have successfully signed up.`,
    });
    // create stripe customer
    yield stripe_1.stripe.customers.create({
        email: args.input.email,
        name: `${args.input.firstName} ${args.input.lastName}`,
        balance: 0,
        metadata: {
            userID: createdUser.id,
            firstName: args.input.firstName,
            lastName: args.input.lastName,
            phoneNumber: args.input.phoneNumber,
            username: args.input.username,
            createdIPAddress: context.ipAddress,
        },
    });
    return {
        message: 'User created successfully',
        status: 'success',
    };
});
exports.default = createUser;
//# sourceMappingURL=createUser.js.map