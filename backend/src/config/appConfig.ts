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
  CORS_ORIGIN: string;
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
}

export const AppConfig: IAppConfig = {
  NODE_ENV: loadEnvironmentVariable('NODE_ENV'),
  PORT: loadNumericEnvironmentVariable('PORT', 6000),
  JWT_SECRET: loadEnvironmentVariable('JWT_SECRET'),
  CORS_ORIGIN: loadEnvironmentVariable('CORS_ORIGIN'),
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
};
