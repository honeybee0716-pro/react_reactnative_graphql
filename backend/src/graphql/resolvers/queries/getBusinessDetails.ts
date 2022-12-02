import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';

export const getBusinessDetailsSchema = gql`
  scalar JSON

  type getUserLeadsResponse {
    message: String!
    status: String!
    dataBusiness: JSON
  }

  type Query {
    getBusinessDetails: getUserLeadsResponse!
  }
`;

/* jscpd:ignore-start */
const getBusinessDetails = async (parent: any, args: any, context: any) => {
  const {id: userID} = context.user;

  const dataBusiness = await prismaContext.prisma.business.findUnique({
    where: {
      id: userID,
    },
  });

  return {
    message: 'Retrieved business details',
    status: 'success',
    dataBusiness,
  };
};
/* jscpd:ignore-end */

export default getBusinessDetails;
