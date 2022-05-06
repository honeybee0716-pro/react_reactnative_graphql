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
};
