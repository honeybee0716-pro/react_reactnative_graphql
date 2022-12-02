import {gql} from 'apollo-server';

import {prismaContext} from '../../prismaContext';

export const getBlogoTxtSchema = gql`
  scalar JSON

  type getBlogoTxtResponse {
    message: String!
    status: String!
    companyLogo: String
    companyName: String
  }

  input getBlogoTxtInput {
    id: String!
  }

  type Query {
    getBlogoTxt(input: getBlogoTxtInput): getBlogoTxtResponse!
  }
`;

/* jscpd:ignore-start */
const getBlogoTxt = async (parent: any, args: any, context: any) => {

  try{
  const dataBusiness = await prismaContext.prisma.business.findUnique({
    where: {
      id: args.input.id,
    },
  });

  return {
    message: 'Retrieved company logo/name',
    status: 'success',
    companyLogo: dataBusiness?.companyLogo,
    companyName:dataBusiness?.companyName,
  };
}catch(err)
{
  return {
    message: 'logo doesnot exist',
    status: 'failed',
    companyLogo: null,
    companyName:null,
  };
}
};
/* jscpd:ignore-end */

export default getBlogoTxt;
