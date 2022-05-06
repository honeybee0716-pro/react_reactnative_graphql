import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

export interface Context {
  prisma: PrismaClient;
  // req: any; // HTTP request carrying the `Authorization` header https://github.dev/prisma/prisma-examples/blob/8483e776539a08a4a6d077cbca0d28ab6404c2b5/typescript/graphql-auth/prisma/seed.ts#L1
}

export const prismaContext: Context = {
  prisma,
};
