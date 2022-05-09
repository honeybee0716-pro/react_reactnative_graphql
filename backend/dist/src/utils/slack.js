"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSlackMessage = void 0;
const webhook_1 = require("@slack/webhook");
// Initialize
const sendSlackMessage = (message) => {
    const webhook = new webhook_1.IncomingWebhook(process.env.SLACK_WEBHOOK_URL);
    webhook.send(message);
};
exports.sendSlackMessage = sendSlackMessage;
//# sourceMappingURL=slack.js.map