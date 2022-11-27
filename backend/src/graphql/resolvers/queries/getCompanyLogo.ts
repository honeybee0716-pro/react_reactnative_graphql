import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';

export const getCompanyLogoSchema = gql`
  scalar JSON

  type getCompanyLogoResponse {
    message: String!
    status: String!
    companyLogo: String
  }

  type Query {
    getCompanyLogo: getCompanyLogoResponse!
  }
`;

/* jscpd:ignore-start */
const getCompanyLogo = async (parent: any, args: any, context: any) => {
  const {id: userID} = context.user;

  const dataBusiness = await prismaContext.prisma.business.findUnique({
    where: {
      id: userID,
    },
  });

  return {
    message: 'Retrieved company logo',
    status: 'success',
    companyLogo: dataBusiness?.companyLogo,
  };
};
/* jscpd:ignore-end */

export default getCompanyLogo;
