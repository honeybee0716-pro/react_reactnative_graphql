var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jwt from 'jsonwebtoken';
import { gql } from 'apollo-server';
import { sendEmail } from '../../../utils/sendgrid';
import getUserByEmail from './getUserByEmail';
export const loginUserWithMagicLinkSchema = gql `
  scalar JSON

  input loginUserWithMagicLinkInput {
    email: String!
  }

  type Query {
    loginUserWithMagicLink(
      input: loginUserWithMagicLinkInput
    ): loginUserResponse!
  }
`;
const loginUserWithMagicLink = (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield getUserByEmail(undefined, { email: args.input.email });
    const message = 'If there is an account with that email, you will receive a login link in your email.';
    if (!foundUser) {
        return {
            message,
            status: 'success',
        };
    }
    const token = jwt.sign({ id: foundUser.data.id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    });
    yield sendEmail({
        to: args.input.email,
        subject: 'Here is your magic login link.',
        html: `<a href="${process.env.PROTOCOL}://${process.env.DOMAIN}/login?token=${token}">Login</a>`,
        text: `Here is your magic login link: ${process.env.PROTOCOL}://${process.env.DOMAIN}/login?token=${token}`,
    });
    return {
        message,
        status: 'success',
    };
});
export default loginUserWithMagicLink;
//# sourceMappingURL=loginUserWithMagicLink.js.map