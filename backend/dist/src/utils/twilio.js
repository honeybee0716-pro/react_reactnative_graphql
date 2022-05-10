var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import twilio from 'twilio';
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
export const sendTextMessage = (to, body) => __awaiter(void 0, void 0, void 0, function* () {
    yield client.messages.create({
        body,
        from: process.env.TWILIO_PHONE_NUMBER,
        to,
    });
});
export const exampleTWIML = '<Response><Say>Hello World</Say></Response>';
export const sendRobotCall = (to, twiml = exampleTWIML) => __awaiter(void 0, void 0, void 0, function* () {
    yield client.calls.create({
        twiml,
        from: process.env.TWILIO_PHONE_NUMBER,
        to,
    });
});
//# sourceMappingURL=twilio.js.map