var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
export const sendEmail = ({ to, subject, text, html }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sgMail.send({
            to,
            from: process.env.EMAIL_FROM,
            subject,
            text,
            html,
        });
    }
    catch (error) {
        console.error(error);
    }
});
//# sourceMappingURL=sendgrid.js.map