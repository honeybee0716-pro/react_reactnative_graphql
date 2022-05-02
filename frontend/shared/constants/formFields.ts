// import {colors} from '../assets/theme';

const formFields: any = {
  join: {
    header: 'Join',
    submit: {
      label: 'Join',
      //   color: colors.C116FFF,
    },
    routes: [
      {
        label: 'Already have an account?',
        path: '/login',
      },
    ],
    inputs: [
      {
        type: 'text',
        inputLabel: 'First Name',
        placeholder: 'First Name',
      },
      {
        type: 'text',
        inputLabel: 'Last Name',
        placeholder: 'Last Name',
      },
      {
        type: 'text',
        inputLabel: 'Username',
        placeholder: 'Username',
      },
      {
        type: 'text',
        inputLabel: 'Email',
        placeholder: 'Email',
      },
      {
        type: 'password',
        inputLabel: 'Password',
        placeholder: 'Password',
      },
      {
        type: 'password',
        inputLabel: 'Confirm Password',
        placeholder: 'Confirm Password',
      },
    ],
  },
  login: {
    header: 'Login',
    submit: {
      label: 'Login',
      //   color: colors.C116FFF,
    },
    routes: [
      {
        label: `Don't have an account?`,
        path: '/join',
      },
      {
        label: `Forgot Password`,
        path: '/forgot-password',
      },
    ],
    inputs: [
      {
        type: 'text',
        inputLabel: 'Email',
        placeholder: 'Email',
      },
      {
        type: 'password',
        inputLabel: 'Password',
        placeholder: 'Password',
      },
    ],
  },
  forgotPassword: {
    header: 'Forgot Password',
    submit: {
      label: 'Send Reset Code',
      //   color: colors.C116FFF,
    },
    routes: [
      {
        label: `Login`,
        path: '/login',
      },
      {
        label: `Create an account`,
        path: '/join',
      },
    ],
    inputs: [
      {
        type: 'text',
        inputLabel: 'Email',
        placeholder: 'you@domain.com',
      },
    ],
  },
  add: {
    header: 'Add a listing',
    submit: {
      label: 'Submit to waitlist',
      //   color: colors.C116FFF,
    },
    routes: [],
    inputs: [
      {
        type: 'text',
        inputLabel: 'Name',
        placeholder: 'Apple',
      },
      {
        type: 'text',
        inputLabel: 'Custom URL Route',
        placeholder: '/apple',
      },
    ],
  },
  account: {
    header: 'Edit Account',
    submit: {
      label: 'Submit Edit',
      //   color: colors.C116FFF,
    },
    routes: [],
    inputs: [
      {
        type: 'text',
        inputLabel: 'First Name',
        placeholder: 'First Name',
      },
      {
        type: 'text',
        inputLabel: 'Last Name',
        placeholder: 'Last Name',
      },
      {
        type: 'text',
        inputLabel: 'Username',
        placeholder: 'Username',
      },
      {
        type: 'text',
        inputLabel: 'Email',
        placeholder: 'Email',
      },
      {
        type: 'password',
        inputLabel: 'Old Password',
        placeholder: 'Old Password',
      },
      {
        type: 'password',
        inputLabel: 'New Password',
        placeholder: 'New Password',
      },
      {
        type: 'password',
        inputLabel: 'Confirm New Password',
        placeholder: 'Confirm New Password',
      },
    ],
  },
};

export default formFields;
