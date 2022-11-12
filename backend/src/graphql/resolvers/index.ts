import GraphQLJSON from 'graphql-type-json';

import RootQueries from './queries';
import RootMutations from './mutations';

export const resolvers = {
  Query: RootQueries,
  Mutation: RootMutations,
  JSON: GraphQLJSON,
};
