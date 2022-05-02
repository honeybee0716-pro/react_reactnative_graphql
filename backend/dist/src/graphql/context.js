"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.context = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({
    datasources: {
        db: {
            url: 'postgresql://joey:Password123@localhost/joey',
        },
    },
});
exports.context = {
    prisma,
};
//# sourceMappingURL=context.js.map