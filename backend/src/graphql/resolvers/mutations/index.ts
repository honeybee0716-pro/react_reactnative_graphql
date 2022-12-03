import createBusiness from './createBusiness';
import createCustomer from './createCustomer';
import createCustomerWithBusiness from './createCustomerWithBusiness';
import createProduct from './createProduct';
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
import deleteProduct from './deleteProduct';
import updateProduct from './updateProduct';
import createTransaction from './createTransaction';
import addCompanyLogo from './addCompanyLogo';
import sendMessageToUsers from './sendMessageToUsers';
import setIntegrationSettings from './setIntegrationSettings';
import addTiers from './addTiers';

const RootMutation = {
  createBusiness,
  createCustomer,
  createCustomerWithBusiness,
  createProduct,
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
  deleteProduct,
  updateProduct,
  createTransaction,
  addCompanyLogo,
  sendMessageToUsers,
  setIntegrationSettings,
  addTiers
};

export default RootMutation;
