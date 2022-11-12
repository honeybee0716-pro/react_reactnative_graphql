"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const schema_1 = require("@graphql-tools/schema");
const client_1 = require("@prisma/client");
const graphql_middleware_1 = require("graphql-middleware");
const graphql_shield_1 = require("graphql-shield");
const Sentry = __importStar(require("@sentry/node"));
require("@sentry/tracing");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cors_1 = __importDefault(require("cors"));
const open_1 = __importDefault(require("open"));
// import {createClient} from 'redis';
const index_1 = require("./graphql/typeDefs/index");
const resolvers_1 = require("./graphql/resolvers");
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
// export const redis = createClient({
//   url: <string>process.env.REDISCLOUD_URL,
// });
// redis.on('error', (err) => console.log('Redis Client Error', err));
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
    const errorMessage = 'The provided JSON Web Token is not valid.';
    try {
        decodedJWT = jsonwebtoken_1.default.verify(providedJWT, process.env.JWT_SECRET);
        if (!decodedJWT.id) {
            throw new apollo_server_express_1.AuthenticationError(errorMessage);
        }
    }
    catch (err) {
        throw new apollo_server_express_1.AuthenticationError(errorMessage);
    }
    const user = yield (0, getUserByID_1.default)(undefined, { input: { id: decodedJWT.id } });
    if (!user) {
        throw new apollo_server_express_1.AuthenticationError(errorMessage);
    }
    return {
        user: user.data,
        ipAddress: req.ip,
        req,
    };
});
const any = (0, graphql_shield_1.rule)()(() => __awaiter(void 0, void 0, void 0, function* () { return true; }));
const isAuthenticated = (0, graphql_shield_1.rule)()((parent, args, context) => __awaiter(void 0, void 0, void 0, function* () { return !!context.user; }));
const isNotAuthenticated = (0, graphql_shield_1.rule)()((parent, args, context) => __awaiter(void 0, void 0, void 0, function* () { return !context.user; }));
const isAdmin = (0, graphql_shield_1.rule)()((parent, args, context) => __awaiter(void 0, void 0, void 0, function* () { return context.user.role === 'ADMIN'; }));
const permissions = (0, graphql_shield_1.shield)({
    Query: {
        getLeadByID: isAuthenticated,
        getUserByID: isAuthenticated,
        getUsersRemainingCredits: isAuthenticated,
        getUserByEmail: isAuthenticated,
        loginUserWithPassword: any,
        loginUserWithMagicLink: any,
        verifyUser: isAuthenticated,
        getUserLeads: isAuthenticated,
        createStripeCheckoutPage: isAuthenticated,
        getUserSubscriptionData: isAuthenticated,
        cancelSubscription: isAuthenticated,
        searchForLeads: isAuthenticated,
    },
    Mutation: {
        changePassword: isAuthenticated,
        confirmForgotPasswordCode: isNotAuthenticated,
        createUser: isNotAuthenticated,
        forgotPassword: isNotAuthenticated,
        updateUser: isAuthenticated,
        banUser: isAdmin,
        confirmEmailValidationCode: isAuthenticated,
        resendCode: isAuthenticated,
    },
}, {
    fallbackError: 'You are not authorized to perform this action. Maybe try logging out and then logging back in.',
    allowExternalErrors: true,
});
const schema = (0, graphql_middleware_1.applyMiddleware)((0, schema_1.makeExecutableSchema)({
    typeDefs: index_1.typeDefs,
    resolvers: resolvers_1.resolvers,
}), permissions);
const setupServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const server = new apollo_server_express_1.ApolloServer({
        schema: (0, graphql_middleware_1.applyMiddleware)(schema, permissions),
        context: createContext,
        introspection: true,
    });
    const app = (0, express_1.default)();
    const corsOptions = {
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204,
    };
    app.use((0, cors_1.default)(corsOptions));
    yield server.start();
    server.applyMiddleware({
        app,
        cors: {
            origin: [
                'https://developmentsalespin.co',
                'https://www.development.salespin.co',
                'https://staging.salespin.co',
                'https://www.staging.salespin.co',
                'https://app.salespin.co',
                'https://www.app.salespin.co',
                'http://localhost:3000',
            ],
        },
    });
    yield app.listen({ port: process.env.PORT }, () => {
        console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`);
        if (process.env.NODE_ENV === 'localhost') {
            (0, open_1.default)(`http://localhost:${process.env.PORT}${server.graphqlPath}`);
        }
    });
    app.get('/', (req, res) => {
        res.send('Hello, World!');
    });
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
        // await redis.connect();
    }
    catch (e) {
        console.log(`Prisma not connected: ${e}`);
    }
});
exports.setupServer = setupServer;
(0, exports.setupServer)();
//# sourceMappingURL=index.js.map