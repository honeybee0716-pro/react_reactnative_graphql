import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY is not set');
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

interface ISendEmail {
  to: string;
  subject: string;
  body: string;
}

export const sendEmail = async ({to, subject, body}: ISendEmail) => {
  try {
    await sgMail.send({
      to: 'joeyfenny@gmail.com',
      from: 'joey@outsmarted.io', // Sender must be verified in SendGrid
      subject: 'Please verify your new account.',
      text: 'Your code is 123456.',
      html: '<strong>Your code is 123456.</strong>',
    });
  } catch (error: any) {
    console.error(error);
  }
};
