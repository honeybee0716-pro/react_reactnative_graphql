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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const context_1 = require("../../context");
const createUser = (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield context_1.context.prisma.user.findUnique({
        select: {
            id: true,
        },
        where: {
            email: args.input.email,
        },
    });
    if (foundUser) {
        return {
            message: 'An account with this email already exists. Please sign in instead.',
            status: 'failed',
        };
    }
    const salt = yield bcrypt_1.default.genSalt(10);
    const hashedPassword = yield bcrypt_1.default.hash(args.input.password, salt);
    yield context_1.context.prisma.user.create({
        data: Object.assign(Object.assign({}, args.input), { password: hashedPassword }),
    });
    return {
        message: 'User created successfully',
        status: 'success',
    };
});
exports.default = createUser;
//# sourceMappingURL=createUser.js.map