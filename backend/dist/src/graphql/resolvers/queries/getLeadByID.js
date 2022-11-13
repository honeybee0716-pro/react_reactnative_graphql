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
exports.getLeadByIDSchema = void 0;
const apollo_server_1 = require("apollo-server");
exports.getLeadByIDSchema = (0, apollo_server_1.gql) `
  scalar JSON

  input getLeadByIDInput {
    id: String!
  }

  type getLeadByIDResponse {
    message: String!
    status: String!
    lead: JSON
  }

  type Query {
    getLeadByID(input: getLeadByIDInput): getLeadByIDResponse!
  }
`;
/* jscpd:ignore-start */
const getLeadByID = (parent, args, context) => __awaiter(void 0, void 0, void 0, function* () {
    { /*const {id} = args.input;
    const {user} = context;
  
    const lead = await prismaContext.prisma.lead.findFirst({
      where: {
        id,
        userID: user.id,
      },
    });
  
    if (!lead) {
      throw new Error('Lead not found.');
    }
  
  console.log({lead});
  
    return {
      message: 'Lead found',
      status: 'success',
      lead,
    };*/
    }
    return {};
});
/* jscpd:ignore-end */
exports.default = getLeadByID;
//# sourceMappingURL=getLeadByID.js.map