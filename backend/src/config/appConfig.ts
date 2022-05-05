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
}

export const AppConfig: IAppConfig = {
  NODE_ENV: loadEnvironmentVariable('NODE_ENV'),
  PORT: loadNumericEnvironmentVariable('PORT', 6000),
  JWT_SECRET: loadEnvironmentVariable('JWT_SECRET'),
  CORS_ORIGIN: loadEnvironmentVariable('CORS_ORIGIN'),
  SENDGRID_API_KEY: loadEnvironmentVariable('SENDGRID_API_KEY'),
  DATABASE_URL: loadEnvironmentVariable('DATABASE_URL'),
};
