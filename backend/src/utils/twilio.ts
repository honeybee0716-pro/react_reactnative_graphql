import twilio from 'twilio';

const client = twilio(
  <string>process.env.TWILIO_ACCOUNT_SID,
  <string>process.env.TWILIO_AUTH_TOKEN,
);

export const sendTextMessage = async (to: string, body: string) => {
  await client.messages.create({
    body,
    from: <string>process.env.TWILIO_PHONE_NUMBER,
    to,
  });
};

export const exampleTWIML = '<Response><Say>Hello World</Say></Response>';

export const sendRobotCall = async (
  to: string,
  twiml: string = exampleTWIML,
) => {
  await client.calls.create({
    twiml,
    from: <string>process.env.TWILIO_PHONE_NUMBER,
    to,
  });
};
