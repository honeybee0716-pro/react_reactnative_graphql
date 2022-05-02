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
  env: string;
  description: string;
  port: number;
  JWTSecret: string;
  nodeEnv: string;
  corsOrigin: string;
}

export const AppConfig: IAppConfig = {
  env: loadEnvironmentVariable('NODE_ENV'),
  description: 'Cantaloupe Payments Backend API',
  port: loadNumericEnvironmentVariable('PORT', 6000),
  JWTSecret: loadEnvironmentVariable('JWT_SECRET'),
  nodeEnv: loadEnvironmentVariable('NODE_ENV'),
  corsOrigin: loadEnvironmentVariable('CORS_ORIGIN'),
};
