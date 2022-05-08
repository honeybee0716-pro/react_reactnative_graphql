/* eslint-disable no-console */
import {ApolloServer} from 'apollo-server';
import {makeExecutableSchema} from '@graphql-tools/schema';
import {PrismaClient} from '@prisma/client';
import {applyMiddleware} from 'graphql-middleware';
import {rule, shield, not} from 'graphql-shield';
import * as Sentry from '@sentry/node';
import '@sentry/tracing';

import {typeDefs} from './graphql/typeDefs/index';
import {resolvers} from './graphql/resolvers';
import {AppConfig} from './config/appConfig';

if (process.env.NODE_ENV !== 'localhost') {
  Sentry.init({
    dsn: <string>process.env.SENTRY_DSN,
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}

export const prisma = new PrismaClient();

const createContext = ({req}: any) => {
  const {headers} = req;
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

const isAuthenticated = rule()(
  async (parent, args, context, info) => context.user !== null,
);

const isNotAuthenticated = rule()(async (parent, args, context, info) => {
  return true;
});

// const isAdmin = rule({cache: 'contextual'})(
//   async (parent, args, context, info) => context.user.role === 'admin',
// );

const permissions = shield(
  {
    Query: {
      getUser: isAuthenticated,
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
    },
  },
  {
    fallbackError: 'Not authorized',
    allowExternalErrors: process.env.NODE_ENV === 'localhost',
  },
);

const schema = applyMiddleware(
  makeExecutableSchema({
    typeDefs,
    resolvers,
  }),
  permissions,
);

export const setupServer = async () => {
  const {PORT, NODE_ENV, CORS_ORIGIN} = AppConfig;

  const server = new ApolloServer({
    schema: applyMiddleware(schema, permissions),
    context: createContext,
    introspection: true,
    cors: {
      origin:
        NODE_ENV === 'localhost'
          ? [CORS_ORIGIN, 'https://studio.apollographql.com']
          : CORS_ORIGIN,
      credentials: true,
    },
  });

  const {url} = await server.listen({port: PORT});

  console.log(`Server is running at ${url}`);
  console.log(
    `GraphQL Playground is available at http://localhost:${PORT}/graphql`,
  );

  try {
    await prisma.$connect();
    await prisma.prismaInfo.deleteMany();

    await prisma.prismaInfo.create({
      data: {
        prismaIsConnected: true,
      },
    });

    const prismaInfo = await prisma.prismaInfo.findFirst({
      where: {prismaIsConnected: true},
    });

    if (prismaInfo?.prismaIsConnected === true) {
      console.log('Prisma is connected.');
    } else {
      throw new Error('prismaIsConnected did not return true.');
    }
  } catch (e) {
    console.log(`Prisma not connected: ${e}`);
  }
};

setupServer();
