"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("../../context");
const getUser = (parent, args) => {
    const { id } = args;
    return context_1.context.prisma.user.findUnique({
        select: { id },
        where: { id },
        // include: { posts: true },
    });
};
exports.default = getUser;
//# sourceMappingURL=getUser.js.map