import React from 'react'
import {
  StatusBar,
  Box,
  Hidden,
  Text,
  HStack,
  VStack,
  Button,
  Pressable,
  Tooltip,
  useToast
} from 'native-base'
import { theme } from 'shared/styles/theme'
import { Dimensions } from 'react-native'
import { Fragment, useState } from 'react'
import DashboardLayout from 'shared/layouts/DashboardLayout'
import IconCheck from 'shared/components/icons/IconCheck'
import IconInfo from 'shared/components/icons/IconInfo'
import IconLine from 'shared/components/icons/IconLine'
import { gql, useLazyQuery } from '@apollo/client'
import { useRouteAuthentication } from '../../hooks/useRouteAuthentication/useRouteAuthentication'

const { width, height } = Dimensions.get('window')

const GET_USER_SUBSCRIPTION_DATA = gql`
  query Query {
    getUserSubscriptionData {
      message
      status
      stripeCustomer
      activeSubscription
      remainingCredits
      isInTrial
      redirectToPricingPage
      redirectToOTPPage
      isCustomPlan
    }
  }
`

const GET_STRIPE_CHECKOUT_LINK = gql`
  query CreateStripeCheckoutPage($input: createStripeCheckoutPageInput) {
    createStripeCheckoutPage(input: $input) {
      message
      status
      link
    }
  }
`

export default function PricingPage() {
  useRouteAuthentication()

  const toast = useToast()

  const [createStripeCheckoutPage, { loading }] = useLazyQuery(
    GET_STRIPE_CHECKOUT_LINK
  )
  const [getUserSubscriptionData, { data }] = useLazyQuery(
    GET_USER_SUBSCRIPTION_DATA,
    {
      fetchPolicy: 'network-only'
    }
  )

  const [listFeature, setListFeature] = useState<any>([
    {
      feature: 'Visitors identified',
      standard: '300',
      custom: 'Visitors identified',
      tooltip: "Visitors of your website whos identity we've revealed to you."
    }
  ])

  const handleStandardPlanPress = async () => {
    getUserSubscriptionData({
      fetchPolicy: 'network-only',
      onCompleted: async ({ getUserSubscriptionData }) => {
        console.log({ getUserSubscriptionData })
        if (getUserSubscriptionData.activeSubscription) {
          toast.show({
            description:
              'Please cancel your current subscription before switching plans.'
          })
          return
        }

        createStripeCheckoutPage({
          variables: {
            input: {
              plan: 'Standard'
            }
          },
          onCompleted: async ({ createStripeCheckoutPage }) => {
            document.location = createStripeCheckoutPage.link

            return
          },
          onError: (error) => {
            toast.show({
              description: `There was an error: ${error}`
            })
          }
        })
      },
      onError: (error) => {
        toast.show({
          description: `There was an error: ${error}`
        })
      }
    })
  }

  const handleContactUsPress = () => {
    window.open('https://clienteye.com/contact', '_blank')
  }

  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <Box
        safeAreaTop
        _light={{ bg: 'primary.900' }}
        _dark={{ bg: 'coolGray.900' }}
      />

      {/* <LandingPageTopNavigation /> */}

      <DashboardLayout>
        <Box position="relative">
          <VStack
            zIndex={2}
            alignItems="center"
            marginTop={{ base: '12', lg: '12' }}
          >
            <Text
              fontSize={{ base: '28px', sm: '35px', lg: '45px' }}
              fontWeight="semibold"
              textAlign="center"
            >
              Simplified pricing.
            </Text>
          </VStack>

          <Hidden till="md">
            <Box
              zIndex={2}
              paddingX={{ base: '0', lg: '12' }}
              marginTop={{ base: '16', lg: '16' }}
            >
              <Box
                backgroundColor={{ base: 'none', lg: '#00000004' }}
                borderRadius="15px"
                paddingX={{ base: '10', lg: '16' }}
                paddingY={{ base: '10', lg: '16' }}
              >
                <HStack>
                  <VStack
                    w={{ base: '33%', lg: '33%' }}
                    paddingTop="8"
                    paddingBottom="6"
                  />
                  <VStack
                    w={{ base: '33%', lg: '33%' }}
                    borderWidth="1"
                    borderBottomWidth="0"
                    borderColor={theme.colors.shared.black_9}
                    backgroundColor={theme.colors.shared.white_60}
                    borderTopRadius="15px"
                    paddingTop="8"
                    paddingBottom="6"
                  >
                    <VStack alignItems="center">
                      <Text
                        fontSize="15px"
                        fontWeight="semibold"
                        color={theme.colors.shared.orange}
                      >
                        Standard
                      </Text>
                      <Text fontSize="13px" fontWeight="medium">
                        For small businesses
                      </Text>
                      <HStack alignItems="start">
                        <Text fontSize="20px" fontWeight="medium">
                          $
                        </Text>
                        <Text fontSize="48px" fontWeight="medium">
                          500
                          <Text fontSize="16px" fontWeight="light">
                            USD
                          </Text>
                        </Text>
                      </HStack>
                      <Text fontSize="sm">Per month</Text>
                    </VStack>
                  </VStack>
                  <VStack
                    w={{ base: '33%', lg: '33%' }}
                    paddingTop="8"
                    paddingBottom="6"
                  >
                    <VStack alignItems="center">
                      <Text
                        fontSize="15px"
                        fontWeight="semibold"
                        color={theme.colors.shared.pink}
                      >
                        Custom
                      </Text>
                      <Text fontSize="13px" fontWeight="medium">
                        For enterprise businesses
                      </Text>
                    </VStack>
                  </VStack>
                </HStack>
                <HStack>
                  <VStack w={{ base: '33%', lg: '33%' }}>
                    <Text
                      fontSize={{ base: 'sm', lg: 'md' }}
                      fontWeight="semibold"
                      color={theme.colors.shared.gray}
                    >
                      Features
                    </Text>
                  </VStack>
                  <VStack
                    w={{ base: '33%', lg: '33%' }}
                    borderWidth="1"
                    borderBottomWidth="0"
                    borderTopWidth="0"
                    borderColor={theme.colors.shared.black_9}
                    backgroundColor={theme.colors.shared.white_60}
                  ></VStack>
                  <VStack w={{ base: '33%', lg: '33%' }}></VStack>
                  <VStack w={{ base: '33%', lg: '33%' }}></VStack>
                </HStack>
                {listFeature.map((item1, i) => (
                  <Fragment key={`feature${i}`}>
                    <HStack
                      borderBottomWidth="1"
                      borderBottomColor={theme.colors.shared.soft4Gray_65}
                    >
                      <VStack w={{ base: '33%', lg: '33%' }} paddingY="4">
                        <HStack
                          alignItems="center"
                          paddingRight={{ base: '0', lg: '24' }}
                        >
                          <Text
                            marginRight="10px"
                            fontSize={{ base: 'md', lg: 'xl' }}
                            fontWeight="medium"
                          >
                            {item1.feature}
                          </Text>
                          <Tooltip label={item1.tooltip}>
                            <Box w="20px">
                              <IconInfo color={theme.colors.shared.gray} />
                            </Box>
                          </Tooltip>
                        </HStack>
                      </VStack>
                      <VStack
                        w={{ base: '33%', lg: '33%' }}
                        borderWidth="1"
                        borderBottomWidth="0"
                        borderTopWidth="0"
                        borderColor={theme.colors.shared.black_9}
                        backgroundColor={theme.colors.shared.white_60}
                        paddingY="4"
                      >
                        <HStack
                          justifyContent="center"
                          alignItems="center"
                          h="full"
                        >
                          {item1.standard === true ||
                          item1.standard === false ? (
                            <Box w="20px">
                              <IconCheck color={theme.colors.shared.green4} />
                            </Box>
                          ) : (
                            <Box>
                              <Text
                                fontSize={{ base: 'sm', lg: 'md' }}
                                fontWeight="semibold"
                                color={theme.colors.shared.gray}
                              >
                                {item1.standard}
                              </Text>
                            </Box>
                          )}
                        </HStack>
                      </VStack>
                      <VStack w={{ base: '33%', lg: '33%' }} paddingY="4">
                        <HStack
                          justifyContent="center"
                          alignItems="center"
                          h="full"
                        >
                          {item1.custom === true || item1.custom === false ? (
                            <Box w="20px">
                              <IconCheck color={theme.colors.shared.green4} />
                            </Box>
                          ) : (
                            <Box>
                              <Text
                                fontSize={{ base: 'sm', lg: 'md' }}
                                fontWeight="semibold"
                                color={theme.colors.shared.gray}
                              >
                                Custom
                              </Text>
                            </Box>
                          )}
                        </HStack>
                      </VStack>
                    </HStack>
                  </Fragment>
                ))}
                <HStack>
                  <VStack w={{ base: '33%', lg: '33%' }} paddingY="6"></VStack>
                  <VStack
                    w={{ base: '33%', lg: '33%' }}
                    paddingY="6"
                    borderWidth="1"
                    borderTopWidth="0"
                    borderBottomRadius="15px"
                    borderColor={theme.colors.shared.black_9}
                    backgroundColor={theme.colors.shared.white_60}
                  >
                    <HStack
                      justifyContent="center"
                      alignItems="center"
                      h="full"
                    >
                      <Pressable
                        onPress={handleStandardPlanPress}
                        backgroundColor={theme.colors.shared.clientEyePrimary}
                        borderRadius="full"
                        paddingX="7"
                        paddingY="3"
                        _hover={{
                          backgroundColor:
                            theme.colors.shared.clientEyeSecondary
                        }}
                      >
                        <HStack alignItems="center">
                          <Text
                            color="white"
                            fontSize="15px"
                            fontWeight="medium"
                          >
                            Get started
                          </Text>
                        </HStack>
                      </Pressable>
                    </HStack>
                  </VStack>
                  <VStack w={{ base: '33%', lg: '33%' }} paddingY="6">
                    <HStack
                      justifyContent="center"
                      alignItems="center"
                      h="full"
                    >
                      <Pressable
                        borderRadius="full"
                        paddingX="7"
                        paddingY="3"
                        backgroundColor={theme.colors.shared.clientEyePrimary}
                        _hover={{
                          backgroundColor:
                            theme.colors.shared.clientEyeSecondary
                        }}
                        onPress={handleContactUsPress}
                      >
                        <HStack alignItems="center">
                          <Text
                            color="white"
                            fontSize="15px"
                            fontWeight="medium"
                          >
                            Contact us
                          </Text>
                        </HStack>
                      </Pressable>
                    </HStack>
                  </VStack>
                </HStack>
              </Box>
            </Box>
          </Hidden>

          <Hidden from="md">
            <Box zIndex={2} paddingX="5" marginTop="20">
              <VStack space="12">
                <Box
                  backgroundColor="white"
                  borderWidth="1"
                  borderColor={theme.colors.shared.black_15}
                  borderRadius="15px"
                  paddingY="6"
                  paddingX="6"
                >
                  <HStack alignItems="center" justifyContent="space-between">
                    <Box>
                      <HStack alignItems="start">
                        <Text fontSize="20px" fontWeight="medium">
                          $
                        </Text>
                        <Text fontSize="48px" fontWeight="medium">
                          500&nbsp;
                        </Text>
                      </HStack>
                      <Text fontSize="sm">Per month</Text>
                    </Box>
                    <Box>
                      <Text
                        fontSize="15px"
                        fontWeight="semibold"
                        color={theme.colors.shared.orange}
                      >
                        Standard
                      </Text>
                      <Text fontSize="13px" fontWeight="medium">
                        For small businesses
                      </Text>
                    </Box>
                  </HStack>
                  <Box
                    borderBottomWidth="1"
                    borderBottomColor={theme.colors.shared.black_10}
                    marginTop="2"
                  ></Box>
                  <VStack space="7" marginTop="7">
                    {listFeature.map((feature_item, i) => (
                      <Fragment key={`featuremobilepremium${i}`}>
                        <HStack
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Text fontSize="15px" fontWeight="medium">
                            {feature_item.feature}
                          </Text>
                          {feature_item.standard ? (
                            <Box>
                              <Text
                                fontSize={{ base: 'sm', lg: 'md' }}
                                fontWeight="semibold"
                                color={theme.colors.shared.gray}
                              >
                                {feature_item.standard}
                              </Text>
                            </Box>
                          ) : (
                            <Box w="18px">
                              <IconLine />
                            </Box>
                          )}
                        </HStack>
                      </Fragment>
                    ))}
                  </VStack>
                </Box>
                <Box
                  backgroundColor="white"
                  borderWidth="1"
                  borderColor={theme.colors.shared.black_15}
                  borderRadius="15px"
                  paddingY="6"
                  paddingX="6"
                >
                  <HStack alignItems="center" justifyContent="space-between">
                    <Box>
                      <Text
                        fontSize="15px"
                        fontWeight="semibold"
                        color={theme.colors.shared.pink}
                      >
                        Custom
                      </Text>
                      <Text fontSize="13px" fontWeight="medium">
                        For enterprise businesses
                      </Text>
                    </Box>
                  </HStack>
                  <Box
                    borderBottomWidth="1"
                    borderBottomColor={theme.colors.shared.black_10}
                    marginTop="2"
                  ></Box>
                  <VStack space="7" marginTop="7">
                    {listFeature.map((feature_item, i) => (
                      <Fragment key={`featuremobileunlimited${i}`}>
                        <HStack
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Text fontSize="15px" fontWeight="medium">
                            {feature_item.custom}
                          </Text>
                          {feature_item.custom ? (
                            <Box>
                              <Text
                                fontSize={{ base: 'sm', lg: 'md' }}
                                fontWeight="semibold"
                                color={theme.colors.shared.gray}
                              >
                                Custom
                              </Text>
                            </Box>
                          ) : (
                            <Box w="18px">
                              <IconLine />
                            </Box>
                          )}
                        </HStack>
                      </Fragment>
                    ))}
                  </VStack>
                  <Button
                    p="0"
                    marginTop="10"
                    borderRadius="full"
                    backgroundColor={theme.colors.shared.clientEyePrimary}
                    _hover={{
                      backgroundColor: theme.colors.shared.clientEyeSecondary,
                      _text: {
                        color: 'white'
                      }
                    }}
                    _text={{
                      paddingX: '7',
                      paddingY: '3',
                      color: 'white',
                      fontSize: '15px',
                      fontWeight: 'medium'
                    }}
                  >
                    Contact Us
                  </Button>
                </Box>
              </VStack>
            </Box>
          </Hidden>
        </Box>
      </DashboardLayout>
    </>
  )
}
