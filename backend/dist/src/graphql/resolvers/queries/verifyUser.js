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
exports.verifyUserSchema = void 0;
const apollo_server_1 = require("apollo-server");
exports.verifyUserSchema = (0, apollo_server_1.gql) `
  scalar JSON

  type verifyUserResponse {
    message: String!
    status: String!
  }

  input verifyUserInput {
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: String!
    username: String!
    password: String!
    createdIPAddress: String!
    twitter: String
    facebook: String
    google: String
    github: String
    linkedin: String
    instagram: String
  }

  type Query {
    verifyUser(input: verifyUserInput): verifyUserResponse!
  }
`;
function default_1(parent, args) {
    return __awaiter(this, void 0, void 0, function* () {
        return true;
    });
}
exports.default = default_1;
//# sourceMappingURL=verifyUser.js.map