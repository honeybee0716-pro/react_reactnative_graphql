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

  const {firstName, lastName, companyName, jobTitle} = args.input;

  const query: any = {
    where: {
      userID,
    },
  };

  if (firstName) {
    query.where.firstName = {
      contains: firstName,
      mode: 'insensitive',
    };
  }

  if (lastName) {
    query.where.lastName = {
      contains: lastName,
      mode: 'insensitive',
    };
  }

  if (companyName) {
    query.where.companyName = {
      contains: companyName,
      mode: 'insensitive',
    };
  }

  if (jobTitle) {
    query.where.title = {
      contains: jobTitle,
      mode: 'insensitive',
    };
  }

  query.orderBy = {profileImageURL: 'desc'};

  let leads = await prismaContext.prisma.lead.findMany(query);

  leads = leads.map((l) => ({
    ...l,
    fullName: `${l.firstName} ${l.lastName}`,
  }));

  return {
    message: 'Retrieved user leads.',
    status: 'success',
    leads,
  };
};
/* jscpd:ignore-end */

export default searchForLeads;
