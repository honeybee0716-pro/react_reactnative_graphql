import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL,
        },
    },
});
export const prismaContext = {
    prisma,
};
//# sourceMappingURL=prismaContext.js.map