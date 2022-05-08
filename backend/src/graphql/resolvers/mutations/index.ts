import createUser from './createUser';
import forgotPassword from './forgotPassword';
import completeForgotPassword from './completeForgotPassword';
import changePassword from './changePassword';
import updateUser from './updateUser';

const RootMutation = {
  createUser,
  forgotPassword,
  completeForgotPassword,
  changePassword,
  updateUser,
};

export default RootMutation;
