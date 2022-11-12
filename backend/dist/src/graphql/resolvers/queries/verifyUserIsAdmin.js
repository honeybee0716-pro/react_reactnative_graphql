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
exports.verifyUserIsAdminSchema = void 0;
const apollo_server_1 = require("apollo-server");
exports.verifyUserIsAdminSchema = (0, apollo_server_1.gql) `
  scalar JSON

  type verifyUserIsAdminResponse {
    message: String!
    status: String!
    isAdmin: Boolean!
  }

  type Query {
    verifyUserIsAdmin: verifyUserIsAdminResponse!
  }
`;
/* jscpd:ignore-start */
const verifyUserIsAdmin = (parent, args, context) => __awaiter(void 0, void 0, void 0, function* () {
    const { user } = context;
    const { role } = user;
    const isAdmin = role === 'ADMIN';
    console.log('verifyUserIsAdmin', {
        userID: user.id,
        role,
        isAdmin,
    });
    return {
        message: 'Determined if user is an admin or not.',
        status: 'success',
        isAdmin,
    };
});
/* jscpd:ignore-end */
exports.default = verifyUserIsAdmin;
//# sourceMappingURL=verifyUserIsAdmin.js.map