"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfig = exports.loadNumericEnvironmentVariable = exports.loadEnvironmentVariable = void 0;
const checkForErrorLoadingEnvVariable = (envVariableName) => {
    const envVariable = process.env[envVariableName];
    if (!envVariable) {
        throw new Error(`Must configure ${envVariableName} environment variable.`);
    }
    return envVariable;
};
const loadEnvironmentVariable = (key) => {
    const envVariable = checkForErrorLoadingEnvVariable(key);
    return envVariable;
};
exports.loadEnvironmentVariable = loadEnvironmentVariable;
const loadNumericEnvironmentVariable = (key, defaultValue) => {
    const envVariable = process.env[key];
    return (envVariable && +envVariable) || defaultValue;
};
exports.loadNumericEnvironmentVariable = loadNumericEnvironmentVariable;
exports.AppConfig = {
    NODE_ENV: (0, exports.loadEnvironmentVariable)('NODE_ENV'),
    PORT: (0, exports.loadNumericEnvironmentVariable)('PORT', 6000),
    JWT_SECRET: (0, exports.loadEnvironmentVariable)('JWT_SECRET'),
    CORS_ORIGIN: (0, exports.loadEnvironmentVariable)('CORS_ORIGIN'),
    SENDGRID_API_KEY: (0, exports.loadEnvironmentVariable)('SENDGRID_API_KEY'),
    DATABASE_URL: (0, exports.loadEnvironmentVariable)('DATABASE_URL'),
    STRIPE_SECRET_KEY: (0, exports.loadEnvironmentVariable)('STRIPE_SECRET_KEY'),
    DOMAIN: (0, exports.loadEnvironmentVariable)('DOMAIN'),
    PROTOCOL: (0, exports.loadEnvironmentVariable)('PROTOCOL'),
    EMAIL_FROM: (0, exports.loadEnvironmentVariable)('EMAIL_FROM'),
    SENTRY_DSN: (0, exports.loadEnvironmentVariable)('SENTRY_DSN'),
    TWILIO_ACCOUNT_SID: (0, exports.loadEnvironmentVariable)('TWILIO_ACCOUNT_SID'),
    TWILIO_AUTH_TOKEN: (0, exports.loadEnvironmentVariable)('TWILIO_AUTH_TOKEN'),
    TWILIO_PHONE_NUMBER: (0, exports.loadEnvironmentVariable)('TWILIO_PHONE_NUMBER'),
};
//# sourceMappingURL=appConfig.js.map