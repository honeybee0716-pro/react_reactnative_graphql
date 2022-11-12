import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';

export const getUserLeadsSchema = gql`
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
const getUserLeads = async (parent: any, args: any, context: any) => {
  {/*const {id: userID} = context.user;

  const leads = await prismaContext.prisma.lead.findMany({
    where: {
      userID,
    },
  });

  return {
    message: 'Retrieved user leads',
    status: 'success',
    leads,
  };*/}
  return {};
};
/* jscpd:ignore-end */

export default getUserLeads;
