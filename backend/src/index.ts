/* eslint-disable no-console */
import {ApolloServer} from 'apollo-server';
import {makeExecutableSchema} from '@graphql-tools/schema';
import {PrismaClient} from '@prisma/client';
import {applyMiddleware} from 'graphql-middleware';
import {rule, shield, not} from 'graphql-shield';
import * as Sentry from '@sentry/node';
import '@sentry/tracing';
import jwt from 'jsonwebtoken';

import {typeDefs} from './graphql/typeDefs/index';
import {resolvers} from './graphql/resolvers';
import {AppConfig} from './config/appConfig';
import getUser from './graphql/resolvers/queries/getUser';

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

const createContext = async ({req}: any) => {
  const {headers} = req;

  const providedJWT = headers?.authorization?.split('Bearer ')[1];
  let decodedJWT: any;

  if (!providedJWT) {
    return {
      ipAddress: req.ip,
      req,
    };
  }

  try {
    decodedJWT = jwt.verify(providedJWT, <string>process.env.JWT_SECRET);

    if (!decodedJWT.id) {
      throw new Error('Invalid JWT');
    }
  } catch (err) {
    throw new Error('Invalid JWT');
  }

  const user = await getUser(undefined, {id: decodedJWT.id});

  if (!user) {
    throw new Error('Invalid JWT');
  }

  return {
    user: user.data,
    ipAddress: req.ip,
    req,
  };
};

// const any = rule()(async (parent, args, context) => true);

const isAuthenticated = rule()(async (parent, args, context) => !!context.user);

const isNotAuthenticated = rule()(
  async (parent, args, context) => !context.user,
);

const isAdmin = rule()(
  async (parent, args, context) => context.user.role === 'ADMIN',
);

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
      banUser: isAdmin,
    },
  },
  {
    fallbackError: 'You are not authorizationd to perform this action.',
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
