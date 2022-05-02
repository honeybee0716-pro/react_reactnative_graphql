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
    env: (0, exports.loadEnvironmentVariable)('NODE_ENV'),
    description: 'Cantaloupe Payments Backend API',
    port: (0, exports.loadNumericEnvironmentVariable)('PORT', 6000),
    JWTSecret: (0, exports.loadEnvironmentVariable)('JWT_SECRET'),
    nodeEnv: (0, exports.loadEnvironmentVariable)('NODE_ENV'),
    corsOrigin: (0, exports.loadEnvironmentVariable)('CORS_ORIGIN'),
};
//# sourceMappingURL=appConfig.js.map