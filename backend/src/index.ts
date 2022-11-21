/* eslint-disable no-console */
import {ApolloServer, AuthenticationError} from 'apollo-server-express';
import express from 'express';
import {makeExecutableSchema} from '@graphql-tools/schema';
import {PrismaClient} from '@prisma/client';
import {applyMiddleware} from 'graphql-middleware';
import {rule, shield} from 'graphql-shield';
import * as Sentry from '@sentry/node';
import '@sentry/tracing';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import open from 'open';
// import {createClient} from 'redis';

import {typeDefs} from './graphql/typeDefs/index';
import {resolvers} from './graphql/resolvers';
import getBusinessByID from './graphql/resolvers/queries/getBusinessByID';
import getCustomerByID from './graphql/resolvers/queries/getCustomerByID';

if (process.env.NODE_ENV !== 'localhost') {
  Sentry.init({
    dsn: <string>process.env.SENTRY_DSN,
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

  const errorMessage = 'The provided JSON Web Token is not valid.';

  try {
    decodedJWT = jwt.verify(providedJWT, <string>process.env.JWT_SECRET);

    if (!decodedJWT.id) {
      throw new AuthenticationError(errorMessage);
    }
  } catch (err) {
    throw new AuthenticationError(errorMessage);
  }
  
  let user = await getBusinessByID(undefined, {input: {id: decodedJWT.id}}).then(res=>{return res}).catch(err=>
    {
      console.log(err)
      return null
  });

  if(user==null)
  {
    user = await getCustomerByID(undefined, {input: {id: decodedJWT.id}}).then(res=>res).catch(err=>
      {
        console.log(err)
        return null
    });
  
  }

  if(user==null)
  {
    throw new AuthenticationError("request not susccessful");
  }

  /*try{
  let user = await getBusinessByID(undefined, {input: {id: decodedJWT.id}});

  if (!user) {
    user = await getCustomerByID(undefined, {input: {id: decodedJWT.id}});
    if(!user)
        throw new AuthenticationError(errorMessage);
  }
}catch(err){
  console.log("error here:",err)
  user = await getCustomerByID(undefined, {input: {id: decodedJWT.id}});
}*/

  return {
    user: user?.data,
    ipAddress: req.ip,
    req,
  };
};

const any = rule()(async () => true);

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
      getBusinessByID: isAuthenticated,
      getCustomerByID: isAuthenticated,
      getBusinessByEmail: isAuthenticated,
      getCustomerByEmail: isAuthenticated,
      loginBusinessWithPassword: any,
      loginCustomerWithPassword: any,
      loginBusinessWithMagicLink: any,
      loginCustomerWithMagicLink: any,
      verifyBusiness: isAuthenticated,
      verifyCustomer: isAuthenticated,
      createStripeCheckoutPage: isAuthenticated,
      getBusinessSubscriptionData: isAuthenticated,
      cancelSubscription: isAuthenticated,
      getBusinessDetails:isAuthenticated,
      getCustomerDetails:isAuthenticated,
      getCustomerDetailsBusiness:isAuthenticated,
      //createCustomerWithBusiness: isAuthenticated,
    },
    Mutation: {
      changePassword: isAuthenticated,
      confirmForgotPasswordCode: isNotAuthenticated,
      confirmForgotPasswordCodeCustomer: isNotAuthenticated,
      createBusiness: isNotAuthenticated,
      createCustomer: isNotAuthenticated,
      createCustomerWithBusiness: isAuthenticated,
      forgotPassword: isNotAuthenticated,
      forgotPasswordCustomer: isNotAuthenticated,
      updateBusiness: isAuthenticated,
      updateCustomer: isAuthenticated,
      banBusiness: isAdmin,
      banCustomer: isAdmin,
      confirmEmailValidationCode: isAuthenticated,
      confirmEmailValidationCodeCustomer: isAuthenticated,
      resendCode: isAuthenticated,
      resendCodeCustomer: isAuthenticated,
    },
  },
  {
    fallbackError:
      'You are not authorized to perform this action. Maybe try logging out and then logging back in.',
    allowExternalErrors: true,
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
  const server = new ApolloServer({
    schema: applyMiddleware(schema, permissions),
    context: createContext,
    introspection: true,
  });

  const app = express();

  const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };
  app.use(cors(corsOptions));

  await server.start();

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

  await app.listen({port: process.env.PORT}, () => {
    console.log(
      `🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`,
    );
    if (process.env.NODE_ENV === 'localhost') {
      open(`http://localhost:${process.env.PORT}${server.graphqlPath}`);
    }
  });

  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

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

    // await redis.connect();
  } catch (e) {
    console.log(`Prisma not connected: ${e}`);
  }
};

setupServer();
