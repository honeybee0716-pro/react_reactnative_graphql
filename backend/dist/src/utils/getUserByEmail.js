"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByEmail = void 0;
const prismaContext_1 = require("../graphql/prismaContext");
const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return prismaContext_1.prismaContext.prisma.user.findUnique({
        select: {
            id: true,
            password: true,
        },
        where: {
            email,
        },
    });
});
exports.getUserByEmail = getUserByEmail;
//# sourceMappingURL=getUserByEmail.js.map