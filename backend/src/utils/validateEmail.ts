import isEmail from 'isemail';
import axios from 'axios';

export const validateEmail = async (email: string) => {
  const validEmail1 = isEmail.validate(email);

  if (!validEmail1) {
    return {
      result: false,
      message: 'There was an error verifying your email address.',
    };
  }

  // use a third party tool to verify email is real before trying to send code
  // because if we send code to invalid emails our email sender score will lower
  let validEmail2 = false;
  try {
    const domain = email.split('@')[1];
    const response = await axios.request({
      method: 'GET',
      url: 'https://mailcheck.p.rapidapi.com/',
      params: {domain},
      headers: {
        'X-RapidAPI-Key': '129e5fcf56msh328dd54bccb067ep1daca2jsnbed98574db36',
        'X-RapidAPI-Host': 'mailcheck.p.rapidapi.com',
      },
    });
    // eslint-disable-next-line no-console
    console.log(`emailVerifyResult for ${domain}`, response?.data);
    if (response.data.block !== true) {
      // if false, means email verifier is recommending we allow this email
      validEmail2 = true;
    }
  } catch (error) {
    return {
      result: false,
      message: 'There was an error verifying your email address.',
    };
  }

  if (!validEmail2) {
    return {
      result: false,
      message:
        'Our system flagged this as not a real email. Your emails DNS settings may be wrong or we may have made a mistake. Please try another email or contact support.',
    };
  }

  return {
    result: true,
    message: 'This email looks valid.',
  };
};
