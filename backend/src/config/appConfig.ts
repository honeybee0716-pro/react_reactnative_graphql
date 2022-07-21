const checkForErrorLoadingEnvVariable = (envVariableName: string): string => {
  const envVariable = process.env[envVariableName];

  if (!envVariable) {
    throw new Error(`Must configure ${envVariableName} environment variable.`);
  }

  return envVariable;
};

export const loadEnvironmentVariable = (key: string): string => {
  const envVariable = checkForErrorLoadingEnvVariable(key);

  return envVariable;
};

export const loadNumericEnvironmentVariable = (
  key: string,
  defaultValue: number,
): number => {
  const envVariable = process.env[key];

  return (envVariable && +envVariable) || defaultValue;
};

export interface IAppConfig {
  DATABASE_URL: string;
  NODE_ENV: string;
  JWT_SECRET: string;
  PORT: number;
  SENDGRID_API_KEY: string;
  STRIPE_SECRET_KEY: string;
  DOMAIN: string;
  PROTOCOL: string;
  EMAIL_FROM: string;
  SENTRY_DSN: string;
  TWILIO_ACCOUNT_SID: string;
  TWILIO_AUTH_TOKEN: string;
  TWILIO_PHONE_NUMBER: string;
  SLACK_WEBHOOK_URL: string;
  REDISCLOUD_URL: string;
  STRIPE_STANDARD_FLAT_PRICE_ID: string;
  STRIPE_STANDARD_METERED_PRICE_ID: string;
  STRIPE_TEMP_CUSTOM_PLAN_ID: string;
  STRIPE_SUCCESS_URL: string;
  STRIPE_CANCEL_URL: string;
  STRIPE_PAYMENT_METHOD_TYPES: string;
  SMTP_HOST: string;
  SMTP_SECURE: string;
  SMTP_PORT: string;
  SMTP_USER: string;
  SMTP_PASSWORD: string;
}

export const AppConfig: IAppConfig = {
  NODE_ENV: loadEnvironmentVariable('NODE_ENV'),
  PORT: loadNumericEnvironmentVariable('PORT', 6000),
  JWT_SECRET: loadEnvironmentVariable('JWT_SECRET'),
  SENDGRID_API_KEY: loadEnvironmentVariable('SENDGRID_API_KEY'),
  DATABASE_URL: loadEnvironmentVariable('DATABASE_URL'),
  STRIPE_SECRET_KEY: loadEnvironmentVariable('STRIPE_SECRET_KEY'),
  DOMAIN: loadEnvironmentVariable('DOMAIN'),
  PROTOCOL: loadEnvironmentVariable('PROTOCOL'),
  EMAIL_FROM: loadEnvironmentVariable('EMAIL_FROM'),
  SENTRY_DSN: loadEnvironmentVariable('SENTRY_DSN'),
  TWILIO_ACCOUNT_SID: loadEnvironmentVariable('TWILIO_ACCOUNT_SID'),
  TWILIO_AUTH_TOKEN: loadEnvironmentVariable('TWILIO_AUTH_TOKEN'),
  TWILIO_PHONE_NUMBER: loadEnvironmentVariable('TWILIO_PHONE_NUMBER'),
  SLACK_WEBHOOK_URL: loadEnvironmentVariable('SLACK_WEBHOOK_URL'),
  REDISCLOUD_URL: loadEnvironmentVariable('REDISCLOUD_URL'),
  STRIPE_STANDARD_FLAT_PRICE_ID: loadEnvironmentVariable(
    'STRIPE_STANDARD_FLAT_PRICE_ID',
  ),
  STRIPE_STANDARD_METERED_PRICE_ID: loadEnvironmentVariable(
    'STRIPE_STANDARD_METERED_PRICE_ID',
  ),
  STRIPE_TEMP_CUSTOM_PLAN_ID: loadEnvironmentVariable(
    'STRIPE_TEMP_CUSTOM_PLAN_ID',
  ),
  STRIPE_SUCCESS_URL: loadEnvironmentVariable('STRIPE_SUCCESS_URL'),
  STRIPE_CANCEL_URL: loadEnvironmentVariable('STRIPE_CANCEL_URL'),
  STRIPE_PAYMENT_METHOD_TYPES: loadEnvironmentVariable(
    'STRIPE_PAYMENT_METHOD_TYPES',
  ),
  SMTP_HOST: loadEnvironmentVariable('SMTP_HOST'),
  SMTP_SECURE: loadEnvironmentVariable('SMTP_SECURE'),
  SMTP_PORT: loadEnvironmentVariable('SMTP_PORT'),
  SMTP_USER: loadEnvironmentVariable('SMTP_USER'),
  SMTP_PASSWORD: loadEnvironmentVariable('SMTP_PASSWORD'),
};
