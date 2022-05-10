import createUser from './createUser';
import forgotPassword from './forgotPassword';
import completeForgotPassword from './completeForgotPassword';
import changePassword from './changePassword';
import updateUser from './updateUser';
import confirmEmailValidationCode from './confirmEmailValidationCode';

const RootMutation = {
  createUser,
  forgotPassword,
  completeForgotPassword,
  changePassword,
  updateUser,
  confirmEmailValidationCode,
};

export default RootMutation;
