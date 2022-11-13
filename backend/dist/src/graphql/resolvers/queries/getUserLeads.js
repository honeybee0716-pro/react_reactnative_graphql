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
exports.getUserLeadsSchema = void 0;
const apollo_server_1 = require("apollo-server");
exports.getUserLeadsSchema = (0, apollo_server_1.gql) `
  scalar JSON

  type getUserLeadsResponse {
    message: String!
    status: String!
    leads: JSON
  }

  type Query {
    getUserLeads: getUserLeadsResponse!
  }
`;
/* jscpd:ignore-start */
const getUserLeads = (parent, args, context) => __awaiter(void 0, void 0, void 0, function* () {
    { /*const {id: userID} = context.user;
  
    const leads = await prismaContext.prisma.lead.findMany({
      where: {
        userID,
      },
    });
  
    return {
      message: 'Retrieved user leads',
      status: 'success',
      leads,
    };*/
    }
    return {};
});
/* jscpd:ignore-end */
exports.default = getUserLeads;
//# sourceMappingURL=getUserLeads.js.map