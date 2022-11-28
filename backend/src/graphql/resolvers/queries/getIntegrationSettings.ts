import {ApolloError, gql} from 'apollo-server';
import {prismaContext} from '../../prismaContext';

export const getIntegrationSettingsSchema = gql`
  scalar JSON

  type getIntegrationSettingsResponse {
    message: String!
    status: String!
    lineAPIKey: String
    shopeeAPIKey: String
    lazadaAPIKey: String
  }

  type Query {
    getIntegrationSettings: getIntegrationSettingsResponse!
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getIntegrationSettings = async (
  parent: null,
  args: any,
  context: any,
  info: any,
) => {
  const {id: userID} = context.user;
  const foundIntegration =
    await prismaContext.prisma.integrationSettings.findUnique({
      where: {
        businessId: userID,
      },
    });

  return {
    message: 'integration get successfully',
    status: 'success',
    lineAPIKey: foundIntegration?.lineAPIKey
      ? foundIntegration.lineAPIKey
      : null,
    shopeeAPIKey: foundIntegration?.shopeeAPIKey
      ? foundIntegration.shopeeAPIKey
      : null,
    lazadaAPIKey: foundIntegration?.lazadaAPIKey
      ? foundIntegration.lazadaAPIKey
      : null,
  };
};

export default getIntegrationSettings;
