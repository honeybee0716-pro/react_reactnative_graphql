const checkForErrorLoadingEnvVariable = (envVariableName) => {
    const envVariable = process.env[envVariableName];
    if (!envVariable) {
        throw new Error(`Must configure ${envVariableName} environment variable.`);
    }
    return envVariable;
};
export const loadEnvironmentVariable = (key) => {
    const envVariable = checkForErrorLoadingEnvVariable(key);
    return envVariable;
};
export const loadNumericEnvironmentVariable = (key, defaultValue) => {
    const envVariable = process.env[key];
    return (envVariable && +envVariable) || defaultValue;
};
export const AppConfig = {
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
//# sourceMappingURL=appConfig.js.map