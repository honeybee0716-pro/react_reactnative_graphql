import createUser from './createUser';
import verifyUser from './verifyUser';
import forgotPassword from './forgotPassword';
import completeForgotPassword from './completeForgotPassword';
import changePassword from './changePassword';
import updateUser from './updateUser';

const RootMutation = {
  createUser,
  verifyUser,
  forgotPassword,
  completeForgotPassword,
  changePassword,
  updateUser,
};

export default RootMutation;
