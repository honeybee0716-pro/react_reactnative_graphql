import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';

export const searchForLeadsSchema = gql`
  scalar JSON

  type searchForLeadsResponse {
    message: String!
    status: String!
    leads: JSON
    count: Int!
  }

  input searchForLeadsInput {
    firstName: String
    lastName: String
    companyName: String
    jobTitle: String
    sortBy: String!
    cursor: String
  }

  type Query {
    searchForLeads(input: searchForLeadsInput): searchForLeadsResponse!
  }
`;

/* jscpd:ignore-start */
const searchForLeads = async (parent: any, args: any, context: any) => {
  const {id: userID} = context.user;

  const {firstName, lastName, companyName, jobTitle, sortBy, cursor} =
    args.input;

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

  query.orderBy = sortBy === 'date' ? {dateAdded: 'desc'} : {firstName: 'asc'};

  if (cursor) {
    query.skip = 1;
    query.cursor = {
      id: cursor,
    };
  }

  query.take = 1;

  const countQuery = {
    ...query,
  };

  delete countQuery.take;
  delete countQuery.skip;
  delete countQuery.cursor;
  delete countQuery.orderBy;

  // move to more efficient query when this github issue is resolved
  // https://github.com/prisma/prisma/discussions/3087
  // eslint-disable-next-line prefer-const
  let [leads, count] = await prismaContext.prisma.$transaction([
    prismaContext.prisma.lead.findMany(query),
    prismaContext.prisma.lead.count(countQuery),
  ]);

  leads = leads.map((l) => ({
    ...l,
    fullName: `${l.firstName} ${l.lastName}`,
  }));

  return {
    message: 'Retrieved user leads.',
    status: 'success',
    leads,
    count,
  };
};
/* jscpd:ignore-end */

export default searchForLeads;
