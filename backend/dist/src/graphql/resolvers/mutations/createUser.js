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
const bcrypt_1 = __importDefault(require("bcrypt"));
const sendgrid_1 = require("../../../utils/sendgrid");
const stripe_1 = require("../../../utils/stripe");
const context_1 = require("../../context");
const createUser = (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
    const foundEmail = yield context_1.context.prisma.user.findUnique({
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
    const foundUsername = yield context_1.context.prisma.user.findUnique({
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
    const createdUser = yield context_1.context.prisma.user.create({
        data: Object.assign(Object.assign({}, args.input), { password: hashedPassword }),
    });
    // send sendgrid transactional email
    yield (0, sendgrid_1.sendEmail)({
        to: args.input.email,
        subject: 'Welcome to the GraphQL API',
        body: 'You have successfully signed up!',
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
            createdIPAddress: args.input.createdIPAddress,
        },
    });
    return {
        message: 'User created successfully',
        status: 'success',
    };
});
exports.default = createUser;
//# sourceMappingURL=createUser.js.map