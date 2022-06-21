import {gql} from 'apollo-server';
import {ObjectID} from 'bson';

import {prismaContext} from '../../prismaContext';

export const getLeadByIDSchema = gql`
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
const getLeadByID = async (parent: any, args: any, context: any) => {
  const {id} = args.input;
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
  };
};
/* jscpd:ignore-end */

export default getLeadByID;
