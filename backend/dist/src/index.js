"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupServer = exports.prisma = void 0;
/* eslint-disable no-console */
const apollo_server_1 = require("apollo-server");
const schema_1 = require("@graphql-tools/schema");
const client_1 = require("@prisma/client");
const graphql_middleware_1 = require("graphql-middleware");
const graphql_shield_1 = require("graphql-shield");
const Sentry = __importStar(require("@sentry/node"));
require("@sentry/tracing");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const en_us_1 = require("./constants/en_us");
const index_1 = require("./graphql/typeDefs/index");
const resolvers_1 = require("./graphql/resolvers");
const appConfig_1 = require("./config/appConfig");
const getUserByID_1 = __importDefault(require("./graphql/resolvers/queries/getUserByID"));
if (process.env.NODE_ENV !== 'localhost') {
    Sentry.init({
        dsn: process.env.SENTRY_DSN,
        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
    });
}
exports.prisma = new client_1.PrismaClient();
const createContext = ({ req }) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { headers } = req;
    const providedJWT = (_a = headers === null || headers === void 0 ? void 0 : headers.authorization) === null || _a === void 0 ? void 0 : _a.split('Bearer ')[1];
    let decodedJWT;
    if (!providedJWT) {
        return {
            ipAddress: req.ip,
            req,
        };
    }
    try {
        decodedJWT = jsonwebtoken_1.default.verify(providedJWT, process.env.JWT_SECRET);
        if (!decodedJWT.id) {
            throw new Error(en_us_1.enUS['error.invalidJWT']);
        }
    }
    catch (err) {
        throw new Error(en_us_1.enUS['error.invalidJWT']);
    }
    const user = yield (0, getUserByID_1.default)(undefined, { id: decodedJWT.id });
    if (!user) {
        throw new Error(en_us_1.enUS['error.invalidJWT']);
    }
    return {
        user: user.data,
        ipAddress: req.ip,
        req,
    };
});
// const any = rule()(async (parent, args, context) => true);
const isAuthenticated = (0, graphql_shield_1.rule)()((parent, args, context) => __awaiter(void 0, void 0, void 0, function* () { return !!context.user; }));
const isNotAuthenticated = (0, graphql_shield_1.rule)()((parent, args, context) => __awaiter(void 0, void 0, void 0, function* () { return !context.user; }));
const isAdmin = (0, graphql_shield_1.rule)()((parent, args, context) => __awaiter(void 0, void 0, void 0, function* () { return context.user.role === 'ADMIN'; }));
const permissions = (0, graphql_shield_1.shield)({
    Query: {
        getUserByID: isAuthenticated,
        getUserByEmail: isAuthenticated,
        loginUserWithPassword: isNotAuthenticated,
        loginUserWithMagicLink: isNotAuthenticated,
        verifyUser: isAuthenticated,
    },
    Mutation: {
        changePassword: isAuthenticated,
        completeForgotPassword: isNotAuthenticated,
        createUser: isNotAuthenticated,
        forgotPassword: isNotAuthenticated,
        updateUser: isAuthenticated,
        banUser: isAdmin,
        confirmEmailValidationCode: isNotAuthenticated,
    },
}, {
    fallbackError: en_us_1.enUS['error.notAuthorized'],
    allowExternalErrors: process.env.NODE_ENV === 'localhost',
});
const schema = (0, graphql_middleware_1.applyMiddleware)((0, schema_1.makeExecutableSchema)({
    typeDefs: index_1.typeDefs,
    resolvers: resolvers_1.resolvers,
}), permissions);
const setupServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const { PORT, NODE_ENV, CORS_ORIGIN } = appConfig_1.AppConfig;
    const server = new apollo_server_1.ApolloServer({
        schema: (0, graphql_middleware_1.applyMiddleware)(schema, permissions),
        context: createContext,
        introspection: true,
        cors: {
            origin: NODE_ENV === 'localhost'
                ? [CORS_ORIGIN, 'https://studio.apollographql.com']
                : CORS_ORIGIN,
            credentials: true,
        },
    });
    const { url } = yield server.listen({ port: PORT });
    console.log(`Server is running at ${url}`);
    console.log(`GraphQL Playground is available at http://localhost:${PORT}/graphql`);
    try {
        yield exports.prisma.$connect();
        yield exports.prisma.prismaInfo.deleteMany();
        yield exports.prisma.prismaInfo.create({
            data: {
                prismaIsConnected: true,
            },
        });
        const prismaInfo = yield exports.prisma.prismaInfo.findFirst({
            where: { prismaIsConnected: true },
        });
        if ((prismaInfo === null || prismaInfo === void 0 ? void 0 : prismaInfo.prismaIsConnected) === true) {
            console.log('Prisma is connected.');
        }
        else {
            throw new Error('prismaIsConnected did not return true.');
        }
    }
    catch (e) {
        console.log(`Prisma not connected: ${e}`);
    }
});
exports.setupServer = setupServer;
(0, exports.setupServer)();
//# sourceMappingURL=index.js.map