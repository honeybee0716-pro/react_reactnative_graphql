import { IncomingWebhook } from '@slack/webhook';
// Initialize
export const sendSlackMessage = (message) => {
    const webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL);
    webhook.send(message);
};
//# sourceMappingURL=slack.js.map