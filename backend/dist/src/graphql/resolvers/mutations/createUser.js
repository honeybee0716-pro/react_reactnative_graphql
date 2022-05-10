var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import bcrypt from 'bcrypt';
import { gql } from 'apollo-server';
import { sendEmail } from '../../../utils/sendgrid';
import { stripe } from '../../../utils/stripe';
import { prismaContext } from '../../prismaContext';
import { generateRandomNumber } from '../../../utils/generateRandomNumber';
export const createUserSchema = gql `
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
    const foundEmail = yield prismaContext.prisma.user.findUnique({
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
    const foundUsername = yield prismaContext.prisma.user.findUnique({
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
    const salt = yield bcrypt.genSalt(10);
    const hashedPassword = yield bcrypt.hash(args.input.password, salt);
    const verifyEmailCode = generateRandomNumber();
    // create stripe customer
    const stripeCustomer = yield stripe.customers.create({
        email: args.input.email,
        name: `${args.input.firstName} ${args.input.lastName}`,
        balance: 0,
        metadata: {
            firstName: args.input.firstName,
            lastName: args.input.lastName,
            phoneNumber: args.input.phoneNumber,
            username: args.input.username,
            createdIPAddress: context.ipAddress,
        },
    });
    // need to create stripeCustomer before db user because db user requires field stripeCustomerID
    const createdUser = yield prismaContext.prisma.user.create({
        data: Object.assign(Object.assign({}, args.input), { password: hashedPassword, createdIPAddress: context.ipAddress, verifyEmailCode, verifyEmailCodeTimestamp: new Date(), stripeCustomerID: stripeCustomer.id }),
    });
    // update stripeCustomer with userID
    yield stripe.customers.update(stripeCustomer.id, {
        metadata: { userID: createdUser.id },
    });
    yield sendEmail({
        to: args.input.email,
        subject: 'Please verify your email.',
        text: `You've just signed up for an account on ${process.env.PROTOCOL}://${process.env.DOMAIN}. Please click here to verify your email: ${process.env.PROTOCOL}://${process.env.DOMAIN}/verify-email?code=${verifyEmailCode}.`,
        html: `
      <p>
        You've just signed up for an account on ${process.env.PROTOCOL}://${process.env.DOMAIN}.
      </p>
      <p>
        <a href="${process.env.PROTOCOL}://${process.env.DOMAIN}/verify-email?code=${verifyEmailCode}">Please here to verify your email</a>
      </p>
    `,
    });
    return {
        message: 'User created successfully',
        status: 'success',
    };
});
export default createUser;
//# sourceMappingURL=createUser.js.map