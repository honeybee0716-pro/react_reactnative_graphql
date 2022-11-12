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
exports.resendCodeSchema = void 0;
const apollo_server_1 = require("apollo-server");
const prismaContext_1 = require("../../prismaContext");
const generateRandomNumber_1 = require("../../../utils/generateRandomNumber");
// import {sendEmail} from '../../../utils/sendgrid';
const nodemailer_1 = require("../../../utils/nodemailer");
exports.resendCodeSchema = (0, apollo_server_1.gql) `
  scalar JSON

  type resendCodeResponse {
    message: String!
    status: String!
  }

  type Mutation {
    resendCode: resendCodeResponse!
  }
`;
const resendCode = (parent, args, context) => __awaiter(void 0, void 0, void 0, function* () {
    const { user } = context;
    const verifyEmailCode = (0, generateRandomNumber_1.generateRandomNumber)();
    yield prismaContext_1.prismaContext.prisma.user.update({
        where: {
            email: user.email,
        },
        data: {
            verifyEmailCode,
            verifyEmailCodeTimestamp: new Date(),
        },
    });
    // await sendEmail({
    //   to: user.email,
    //   subject: 'Verification Code',
    //   text: `Please use this code to verify your account: ${verifyEmailCode}`,
    //   html: `
    //       <p>
    //         Please use this code to verify your account: ${verifyEmailCode}
    //       </p>
    //     `,
    // });
    yield nodemailer_1.nodemailer.sendMail({
        from: '"SaleSpin Alerts" <alerts@salespin.co>',
        to: user.email,
        subject: 'Verification Code',
        text: `Please use this code to verify your account: ${verifyEmailCode}`,
        html: `<p>Please use this code to verify your account: ${verifyEmailCode}</p>`, // html body
    });
    return {
        message: 'The code has been sent to your email.',
        status: 'success',
    };
});
exports.default = resendCode;
//# sourceMappingURL=resendCode.js.map