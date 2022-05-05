/* eslint-disable no-console */
import {ApolloServer} from 'apollo-server';
import {makeExecutableSchema} from '@graphql-tools/schema';
import {PrismaClient} from '@prisma/client';
import {applyMiddleware} from 'graphql-middleware';
import {rule, shield, not} from 'graphql-shield';

import {typeDefs} from './graphql/typeDefs/typeDefs';
import {resolvers} from './graphql/resolvers';
import {AppConfig} from './config/appConfig';

// add prisma to the NodeJS global type
interface CustomNodeJsGlobal extends NodeJS.Global {
  prisma: PrismaClient;
}

// Prevent multiple instances of Prisma Client in development
declare const global: CustomNodeJsGlobal;

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'localhost') global.prisma = prisma;

const createContext = ({req}: any) => {
  const {headers} = req;
  const auth = headers;
  // parse Auth header and parse it / check for validity / get auth state from it

  // put the auth info into context
  return {auth};
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
  },
  {
    fallbackError: 'Not authorized',
    allowExternalErrors: true, // false on prod
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
  const {port, nodeEnv, corsOrigin} = AppConfig;

  const server = new ApolloServer({
    schema: applyMiddleware(schema, permissions),
    context: createContext,
    introspection: true,
    cors: {
      origin:
        nodeEnv === 'localhost'
          ? [corsOrigin, 'https://studio.apollographql.com']
          : corsOrigin,
      credentials: true,
    },
  });

  const {url} = await server.listen({port});

  console.log(`Server is running at ${url}`);
  console.log(
    `GraphQL Playground is available at http://localhost:${port}/graphql`,
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
