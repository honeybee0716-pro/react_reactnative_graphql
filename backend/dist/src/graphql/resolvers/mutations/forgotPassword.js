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
import { prismaContext } from '../../prismaContext';
import { generateRandomNumber } from '../../../utils/generateRandomNumber';
import { sendEmail } from '../../../utils/sendgrid';
export const forgotPasswordSchema = gql `
  scalar JSON

  input forgotPasswordInput {
    email: String!
  }

  type forgotPasswordResponse {
    message: String!
    status: String!
  }

  type Mutation {
    forgotPassword(input: forgotPasswordInput): forgotPasswordResponse!
  }
`;
const forgotPassword = (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = args.input;
    const passwordResetCode = generateRandomNumber();
    yield prismaContext.prisma.user.update({
        where: {
            email,
        },
        data: {
            passwordResetCode,
            passwordResetCodeTimestamp: new Date(),
        },
    });
    yield sendEmail({
        to: email,
        subject: 'Password Reset',
        text: `You have requested to reset your password. Please click here to reset your password: ${process.env.PROTOCOL}://${process.env.DOMAIN}/reset-password?code=${passwordResetCode}.`,
        html: `
      <p>
        You have requested to reset your password.
      </p>
      <p>
        <a href="${process.env.PROTOCOL}://${process.env.DOMAIN}/reset-password?code=${passwordResetCode}">Please here to reset your password</a>
      </p>
    `,
    });
    return {
        message: 'If there is a user with this email, there will be a link to reset your password in your email inbox.',
        status: 'success',
    };
});
export default forgotPassword;
//# sourceMappingURL=forgotPassword.js.map