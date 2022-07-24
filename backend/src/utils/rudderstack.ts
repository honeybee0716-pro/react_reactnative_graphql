import Analytics from '@rudderstack/rudder-sdk-node';

export const rudderstack = new Analytics(
  process.env.RUDDERSTACK_ID || '', // will never be undefined due to our config verifier in appConfig but || '' stops the linter from complaining
  process.env.RUDDERSTACK_DATAPLANE || '',
);
