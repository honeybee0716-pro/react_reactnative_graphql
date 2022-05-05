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
};
//# sourceMappingURL=appConfig.js.map