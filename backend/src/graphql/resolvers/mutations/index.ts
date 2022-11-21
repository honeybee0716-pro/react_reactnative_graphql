import createBusiness from './createBusiness';
import createCustomer from './createCustomer';
import createCustomerWithBusiness from './createCustomerWithBusiness';
import forgotPassword from './forgotPassword';
import forgotPasswordCustomer from './forgotPasswordCustomer';
import confirmForgotPasswordCode from './confirmForgotPasswordCode';
import confirmForgotPasswordCodeCustomer from './confirmForgotPasswordCodeCustomer';
import changePassword from './changePassword';
import updateBusiness from './updateBusiness';
import updateCustomer from './updateCustomer';
import confirmEmailValidationCode from './confirmEmailValidationCode';
import confirmEmailValidationCodeCustomer from './confirmEmailValidationCodeCustomer';
import resendCode from './resendCode';
import resendCodeCustomer from './resendCodeCustomer';

const RootMutation = {
  createBusiness,
  createCustomer,
  createCustomerWithBusiness,
  forgotPassword,
  forgotPasswordCustomer,
  changePassword,
  updateBusiness,
  updateCustomer,
  confirmEmailValidationCode,
  confirmEmailValidationCodeCustomer,
  confirmForgotPasswordCode,
  confirmForgotPasswordCodeCustomer,
  resendCode,
  resendCodeCustomer,
};

export default RootMutation;
