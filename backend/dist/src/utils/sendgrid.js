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
exports.sendEmail = void 0;
const mail_1 = __importDefault(require("@sendgrid/mail"));
if (!process.env.SENDGRID_API_KEY) {
    throw new Error('SENDGRID_API_KEY is not set');
}
mail_1.default.setApiKey(process.env.SENDGRID_API_KEY);
const sendEmail = ({ to, subject, body }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mail_1.default.send({
            to: 'joeyfenny@gmail.com',
            from: 'joey@outsmarted.io',
            subject: 'Please verify your new account.',
            text: 'Your code is 123456.',
            html: '<strong>Your code is 123456.</strong>',
        });
    }
    catch (error) {
        console.error(error);
    }
});
exports.sendEmail = sendEmail;
//# sourceMappingURL=sendgrid.js.map