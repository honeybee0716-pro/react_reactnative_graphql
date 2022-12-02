import {ApolloError, gql} from 'apollo-server';
import {prismaContext} from '../../prismaContext';

export const setIntegrationSettingsSchema = gql`
  scalar JSON
  type setIntegrationSettingsResponse {
    message: String!
    status: String!
  }
  input setIntegrationSettingsInput {
    lineAPIKey: String
    shopeeAPIKey: String
    lazadaAPIKey: String
  }
  type Mutation {
    setIntegrationSettings(
      input: setIntegrationSettingsInput
    ): setIntegrationSettingsResponse!
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const setIntegrationSettings = async (
  parent: null,
  args: any,
  context: any,
  info: any,
) => {
  const {id: userID} = context.user;
  const foundIntegration =
    await prismaContext.prisma.integrationSettings.findUnique({
      select: {
        id: true,
      },
      where: {
        businessId: userID,
      },
    });

  if (foundIntegration) {
    const updatedIntegration =
      await prismaContext.prisma.integrationSettings.update({
        where: {
          businessId: userID,
        },
        data: {
          ...args.input,
        },
      });
  } else {
    const createdIntegration =
      await prismaContext.prisma.integrationSettings.create({
        data: {
          ...args.input,
          businessId: userID,
        },
      });
  }

  return {
    message: 'integration set successfully',
    status: 'success',
  };
};

export default setIntegrationSettings;
