"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prismaContext_1 = require("../../prismaContext");
const getUser = (parent, args) => {
    const { id } = args;
    return prismaContext_1.prismaContext.prisma.user.findUnique({
        select: { id },
        where: { id },
        // include: { posts: true },
    });
};
exports.default = getUser;
//# sourceMappingURL=getUser.js.map