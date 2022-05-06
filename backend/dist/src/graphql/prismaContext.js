"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaContext = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL,
        },
    },
});
exports.prismaContext = {
    prisma,
};
//# sourceMappingURL=prismaContext.js.map