import sgMail from '@sendgrid/mail';

sgMail.setApiKey(<string>process.env.SENDGRID_API_KEY);

interface ISendEmail {
  to: string;
  subject: string;
  text: string;
  html: string;
}

export const sendEmail = async ({to, subject, text, html}: ISendEmail) => {
  try {
    await sgMail.send({
      to,
      from: <string>process.env.EMAIL_FROM, // Sender must be verified in SendGrid
      subject,
      text,
      html,
    });
  } catch (error: any) {
    console.error(error);
  }
};
