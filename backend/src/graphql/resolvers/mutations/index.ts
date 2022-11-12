import createUser from './createUser';
import forgotPassword from './forgotPassword';
import confirmForgotPasswordCode from './confirmForgotPasswordCode';
import changePassword from './changePassword';
import updateUser from './updateUser';
import confirmEmailValidationCode from './confirmEmailValidationCode';
import resendCode from './resendCode';

const RootMutation = {
  createUser,
  forgotPassword,
  changePassword,
  updateUser,
  confirmEmailValidationCode,
  confirmForgotPasswordCode,
  resendCode,
};

export default RootMutation;
