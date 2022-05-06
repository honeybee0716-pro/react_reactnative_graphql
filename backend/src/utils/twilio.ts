import twilio from 'twilio';

const client = twilio(
  <string>process.env.TWILIO_ACCOUNT_SID,
  <string>process.env.TWILIO_AUTH_TOKEN,
);

export const sendTextMessage = async (to: string, body: string) => {
  await client.messages.create({
    body,
    from: <string>process.env.TWILIO_NUMBER,
    to,
  });
};
