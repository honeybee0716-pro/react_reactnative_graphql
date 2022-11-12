import {IncomingWebhook} from '@slack/webhook';

// Initialize
export const sendSlackMessage = (message: string) => {
  const webhook = new IncomingWebhook(<string>process.env.SLACK_WEBHOOK_URL);

  webhook.send(message);
};
