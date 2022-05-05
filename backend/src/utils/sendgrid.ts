import sgMail from '@sendgrid/mail';

sgMail.setApiKey(<string>process.env.SENDGRID_API_KEY);

interface ISendEmail {
  to: string;
  subject: string;
  body: string;
}

export const sendEmail = async ({to, subject, body}: ISendEmail) => {
  try {
    await sgMail.send({
      to,
      from: 'joey@outsmarted.io', // Sender must be verified in SendGrid
      subject,
      text: body,
      html: `<strong>${body}</strong>`,
    });
  } catch (error: any) {
    console.error(error);
  }
};
