"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const merge_1 = require("@graphql-tools/merge");
const createUser_1 = require("../resolvers/mutations/createUser");
const forgotPassword_1 = require("../resolvers/mutations/forgotPassword");
const completeForgotPassword_1 = require("../resolvers/mutations/completeForgotPassword");
const updateUser_1 = require("../resolvers/mutations/updateUser");
const changePassword_1 = require("../resolvers/mutations/changePassword");
const getUser_1 = require("../resolvers/queries/getUser");
const verifyUser_1 = require("../resolvers/queries/verifyUser");
const loginUserWithMagicLink_1 = require("../resolvers/queries/loginUserWithMagicLink");
const loginUserWithPassword_1 = require("../resolvers/queries/loginUserWithPassword");
const banUser_1 = require("../resolvers/mutations/banUser");
exports.typeDefs = (0, merge_1.mergeTypeDefs)([
    createUser_1.createUserSchema,
    loginUserWithMagicLink_1.loginUserWithMagicLinkSchema,
    loginUserWithPassword_1.loginUserWithPasswordSchema,
    getUser_1.getUserSchema,
    changePassword_1.changePasswordSchema,
    verifyUser_1.verifyUserSchema,
    forgotPassword_1.forgotPasswordSchema,
    completeForgotPassword_1.completeForgotPasswordSchema,
    updateUser_1.updateUserSchema,
    banUser_1.banUserSchema,
]);
//# sourceMappingURL=index.js.map