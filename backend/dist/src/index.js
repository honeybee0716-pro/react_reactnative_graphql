var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable no-console */
import { ApolloServer } from 'apollo-server';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { PrismaClient } from '@prisma/client';
import { applyMiddleware } from 'graphql-middleware';
import { rule, shield } from 'graphql-shield';
import * as Sentry from '@sentry/node';
import '@sentry/tracing';
import jwt from 'jsonwebtoken';
import { createClient } from 'redis';
import { enUS } from './constants/en_us';
import { typeDefs } from './graphql/typeDefs/index';
import { resolvers } from './graphql/resolvers';
import { AppConfig } from './config/appConfig';
import getUserByID from './graphql/resolvers/queries/getUserByID';
if (process.env.NODE_ENV !== 'localhost') {
    Sentry.init({
        dsn: process.env.SENTRY_DSN,
        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
    });
}
export const redis = createClient({
    url: process.env.REDIS_URL,
});
redis.on('error', (err) => console.log('Redis Client Error', err));
export const prisma = new PrismaClient();
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
        decodedJWT = jwt.verify(providedJWT, process.env.JWT_SECRET);
        if (!decodedJWT.id) {
            throw new Error(enUS['error.invalidJWT']);
        }
    }
    catch (err) {
        throw new Error(enUS['error.invalidJWT']);
    }
    const user = yield getUserByID(undefined, { id: decodedJWT.id });
    if (!user) {
        throw new Error(enUS['error.invalidJWT']);
    }
    return {
        user: user.data,
        ipAddress: req.ip,
        req,
    };
});
// const any = rule()(async (parent, args, context) => true);
const isAuthenticated = rule()((parent, args, context) => __awaiter(void 0, void 0, void 0, function* () { return !!context.user; }));
const isNotAuthenticated = rule()((parent, args, context) => __awaiter(void 0, void 0, void 0, function* () { return !context.user; }));
const isAdmin = rule()((parent, args, context) => __awaiter(void 0, void 0, void 0, function* () { return context.user.role === 'ADMIN'; }));
const permissions = shield({
    Query: {
        getUserByID: isAuthenticated,
        getUserByEmail: isAuthenticated,
        loginUserWithPassword: isNotAuthenticated,
        loginUserWithMagicLink: isNotAuthenticated,
        verifyUser: isAuthenticated,
    },
    Mutation: {
        changePassword: isAuthenticated,
        confirmForgotPasswordCode: isNotAuthenticated,
        createUser: isNotAuthenticated,
        forgotPassword: isNotAuthenticated,
        updateUser: isAuthenticated,
        banUser: isAdmin,
        confirmEmailValidationCode: isNotAuthenticated,
    },
}, {
    fallbackError: enUS['error.notAuthorized'],
    allowExternalErrors: process.env.NODE_ENV === 'localhost',
});
const schema = applyMiddleware(makeExecutableSchema({
    typeDefs,
    resolvers,
}), permissions);
export const setupServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const { PORT, NODE_ENV, CORS_ORIGIN } = AppConfig;
    const server = new ApolloServer({
        schema: applyMiddleware(schema, permissions),
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
        yield prisma.$connect();
        yield prisma.prismaInfo.deleteMany();
        yield prisma.prismaInfo.create({
            data: {
                prismaIsConnected: true,
            },
        });
        const prismaInfo = yield prisma.prismaInfo.findFirst({
            where: { prismaIsConnected: true },
        });
        if ((prismaInfo === null || prismaInfo === void 0 ? void 0 : prismaInfo.prismaIsConnected) === true) {
            console.log('Prisma is connected.');
        }
        else {
            throw new Error('prismaIsConnected did not return true.');
        }
        yield redis.connect();
        yield redis.set('key', 'value');
        const value = yield redis.get('key');
    }
    catch (e) {
        console.log(`Prisma not connected: ${e}`);
    }
});
setupServer();
//# sourceMappingURL=index.js.map