import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';

export const searchForLeadsSchema = gql`
  scalar JSON

  type searchForLeadsResponse {
    message: String!
    status: String!
    leads: JSON
  }

  input searchForLeadsInput {
    firstName: String
    lastName: String
    companyName: String
    jobTitle: String
  }

  type Query {
    searchForLeads(input: searchForLeadsInput): searchForLeadsResponse!
  }
`;

/* jscpd:ignore-start */
const searchForLeads = async (parent: any, args: any, context: any) => {
  const {id: userID} = context.user;

  console.log({args});

  const {firstName, lastName, companyName, jobTitle} = args.input;

  const query: any = {
    where: {
      userID,
    },
  };

  if (firstName) {
    query.where.firstName = firstName;
  }

  if (lastName) {
    query.where.lastName = lastName;
  }

  if (companyName) {
    query.where.companyName = companyName;
  }

  if (jobTitle) {
    query.where.jobTitle = jobTitle;
  }

  const leads = await prismaContext.prisma.lead.findMany(query);

  return {
    message: 'Retrieved user leads.',
    status: 'success',
    leads,
  };
};
/* jscpd:ignore-end */

export default searchForLeads;
