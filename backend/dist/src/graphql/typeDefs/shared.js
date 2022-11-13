"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharedSchema = void 0;
const apollo_server_1 = require("apollo-server");
exports.sharedSchema = (0, apollo_server_1.gql) `
  scalar JSON

  type loginUserResponse {
    jwt: String!
    message: String!
    status: String!
    verified:Boolean
  }
`;
//# sourceMappingURL=shared.js.map