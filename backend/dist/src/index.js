"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupServer = exports.prisma = void 0;
/* eslint-disable no-console */
const apollo_server_1 = require("apollo-server");
const schema_1 = require("@graphql-tools/schema");
const client_1 = require("@prisma/client");
const graphql_middleware_1 = require("graphql-middleware");
const graphql_shield_1 = require("graphql-shield");
const typeDefs_1 = require("./graphql/typeDefs/typeDefs");
const resolvers_1 = require("./graphql/resolvers");
const appConfig_1 = require("./config/appConfig");
exports.prisma = new client_1.PrismaClient();
const createContext = ({ req }) => {
    const { headers } = req;
    const auth = headers;
    // parse Auth header and parse it / check for validity / get auth state from it
    // put the auth info into context
    // const currentUser =
    // (req.headers.authorization &&
    //   (jwt.verify(
    //     req.headers.authorization,
    //     process.env.JWTSIGN
    //   ) as Context["currentUser"])) ||
    // null;
    return {
        auth,
        ipAddress: req.ip,
        req,
    };
};
const isAuthenticated = (0, graphql_shield_1.rule)()((parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () { return context.user !== null; }));
const isNotAuthenticated = (0, graphql_shield_1.rule)()((parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
    return true;
}));
// const isAdmin = rule({cache: 'contextual'})(
//   async (parent, args, context, info) => context.user.role === 'admin',
// );
const permissions = (0, graphql_shield_1.shield)({
    Query: {
        getUser: isAuthenticated,
        loginUser: isNotAuthenticated,
        signOut: isAuthenticated,
    },
    Mutation: {
        changePassword: isAuthenticated,
        completeForgotPassword: isNotAuthenticated,
        createUser: isNotAuthenticated,
        forgotPassword: isNotAuthenticated,
        updateUser: isAuthenticated,
        verifyUser: isAuthenticated,
    },
}, {
    fallbackError: 'Not authorized',
    allowExternalErrors: true, // false on prod
});
const schema = (0, graphql_middleware_1.applyMiddleware)((0, schema_1.makeExecutableSchema)({
    typeDefs: typeDefs_1.typeDefs,
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