import {
  Box,
  Center,
  Hidden,
  Text,
  Image,
  HStack,
  VStack,
  Pressable,
  useToast
} from 'native-base'
import { theme } from 'shared/styles/theme'
import React, { Fragment, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import DashboardLayout from 'shared/layouts/DashboardLayout'
import IconDownload from 'shared/components/icons/IconDownload'
import IconMoreVertical from 'shared/components/icons/IconMoreVertical'
import IconCreditCard from 'shared/components/icons/IconCreditCard'
import IconLightcoin from 'shared/components/icons/IconLightcoin'
import IconNFC from 'shared/components/icons/IconNFC'
import IconMasterCard from 'shared/components/icons/IconMasterCard'
import IconPlus from 'shared/components/icons/IconPlus'
import { gql, useLazyQuery } from '@apollo/client'
import { useRouter } from 'solito/router'
import { Prompt } from '../../components/Prompt/Prompt'
import { useRecoilState } from 'recoil'
import { userSubscriptionDataState } from '../../state'

const CANCEL_SUBSCRIPTION = gql`
  query CancelSubscription {
    cancelSubscription {
      message
      status
    }
  }
`

const GET_STRIPE_CUSTOMER_PORTAL = gql`
  query GetStripeCustomerPortal {
    getStripeCustomerPortal {
      message
      status
      link
    }
  }
`

export default function Billing() {
  const { push } = useRouter()
  const toast = useToast()
  const [cancelSubscription, { loading }] = useLazyQuery(CANCEL_SUBSCRIPTION)
  const [getStripeCustomerPortal, { loading: loadingGetStripeCustomerPortal }] =
    useLazyQuery(GET_STRIPE_CUSTOMER_PORTAL)
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const [userSubscriptionData] = useRecoilState<any>(userSubscriptionDataState)

  const handleCancelSubscription = () => {
    setIsOpen(true)
  }

  const confirmCancelSubscription = () => {
    cancelSubscription({
      onCompleted: async ({ cancelSubscription }) => {
        if (cancelSubscription.status === 'success') {
          push('/goodbye')

          return
        }
      },
      onError: (error) => {
        toast.show({
          description: `There was an error: ${error}`
        })
      }
    })
  }

  const handleManageBillingPress = () => {
    getStripeCustomerPortal({
      onCompleted: async ({ getStripeCustomerPortal }) => {
        if (getStripeCustomerPortal.status === 'success') {
          document.location = getStripeCustomerPortal.link

          return
        }
      },
      onError: (error) => {
        toast.show({
          description: `There was an error: ${error}`
        })
      }
    })
  }

  return (
    <>
      {isOpen ? (
        <Prompt
          title="Cancel Subscription"
          description="This will take effect immediately. Are you sure you want to cancel your subscription?"
          cancelText="Nevermind"
          submitText="Confirm"
          onCancel={onClose}
          onSubmit={confirmCancelSubscription}
        />
      ) : null}
      <DashboardLayout>
        {userSubscriptionData ? (
          <>
            <Box flexDirection={{ base: 'column-reverse', lg: 'row' }}>
              {/* Billing information */}
              <Box flex="1">
                <Box
                  marginTop={{ base: '0', lg: '5' }}
                  marginLeft={{ base: '3', lg: '5' }}
                  marginRight={{ base: '3', lg: '0' }}
                  paddingX={{ base: '0', lg: '5' }}
                  paddingTop={{ base: '0', lg: '5' }}
                  paddingBottom={{ base: '0', lg: '4' }}
                  borderTopRadius={{ base: 'none', sm: '2xl' }}
                  borderBottomRadius={{ base: 'none', sm: '2xl', lg: 'none' }}
                  backgroundColor={{ base: 'none', lg: 'white' }}
                  borderWidth={{ base: '0', lg: '1' }}
                  borderBottomWidth={{ base: 'none', sm: '1', lg: '0' }}
                  borderColor={theme.colors.shared.softer3Gray}
                ></Box>
                {/* Saved Card for phone view */}
                <Hidden from="sm">
                  <Box flex="1" w={{ base: 'full', sm: 'auto' }}>
                    <Box
                      marginTop="3"
                      marginBottom="0"
                      marginLeft="3"
                      marginRight="3"
                    >
                      <Box
                        paddingX={{ base: '4', sm: '5' }}
                        paddingTop={{ base: '4', sm: '5' }}
                        paddingBottom="4"
                        borderRadius="2xl"
                        backgroundColor="white"
                        borderWidth="1"
                        borderColor={theme.colors.shared.softer3Gray}
                      >
                        <HStack alignItems="center">
                          <Center
                            backgroundColor={theme.colors.shared.green_10}
                            paddingY="2"
                            paddingX="2"
                            borderRadius="lg"
                          >
                            <Box w="18px">
                              <IconCreditCard
                                color={theme.colors.shared.green}
                              />
                            </Box>
                          </Center>
                          <Text
                            flex="1"
                            marginLeft="3"
                            fontWeight="medium"
                            fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}
                          >
                            Saved Cards
                          </Text>
                          <Pressable
                            borderWidth="1"
                            borderColor={theme.colors.shared.soft4Gray}
                            borderRadius="md"
                            p={{ base: '6px', sm: '0.3rem' }}
                          >
                            <Box w="16px">
                              <IconPlus />
                            </Box>
                          </Pressable>
                        </HStack>
                        <Box marginTop="5">
                          <Swiper
                            pagination={true}
                            modules={[Pagination]}
                            style={{ width: '100%', height: '100%' }}
                            spaceBetween={10}
                          >
                            {[...Array(3)].map((_, i) => (
                              <Fragment key={i}>
                                <SwiperSlide>
                                  <Box position="relative">
                                    <Image
                                      h="210px"
                                      borderRadius="xl"
                                      source={require('shared/assets/images/saved-card.png')}
                                    />
                                    <Box
                                      position="absolute"
                                      top="0"
                                      bottom="0"
                                      left="0"
                                      right="0"
                                      paddingTop="6"
                                      paddingBottom="3"
                                      paddingX="5"
                                      flexDirection="column"
                                    >
                                      <Box flex="1">
                                        <Box
                                          flexDirection="row"
                                          alignItems="center"
                                        >
                                          <Text
                                            flex="1"
                                            color="white"
                                            fontSize="md"
                                            fontWeight="bold"
                                            fontFamily="card_title"
                                          >
                                            Echo
                                          </Text>
                                          <Box w="22px">
                                            <IconLightcoin />
                                          </Box>
                                        </Box>
                                        <Box
                                          flexDirection="row"
                                          alignItems="center"
                                          marginTop="2.75rem"
                                        >
                                          <Text
                                            flex="1"
                                            color="white"
                                            fontSize="sm"
                                            fontWeight="extrabold"
                                            fontFamily="card"
                                          >
                                            4342 0873 4311 7322
                                          </Text>
                                          <Box w="24px">
                                            <IconNFC />
                                          </Box>
                                        </Box>
                                      </Box>
                                      <Box>
                                        <Text
                                          fontFamily="card_name"
                                          fontSize="2xs"
                                          fontWeight="medium"
                                        >
                                          N A M E
                                        </Text>
                                        <HStack
                                          alignItems="center"
                                          justifyContent="space-between"
                                        >
                                          <Text
                                            fontFamily="card"
                                            fontSize="sm"
                                            fontWeight="bold"
                                          >
                                            Alice Smith
                                          </Text>
                                          <Text
                                            fontFamily="card"
                                            fontSize="xs"
                                            fontWeight="semibold"
                                          >
                                            Exp 09/22
                                          </Text>
                                        </HStack>
                                      </Box>
                                    </Box>
                                  </Box>
                                </SwiperSlide>
                              </Fragment>
                            ))}
                          </Swiper>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Hidden>
                <Pressable
                  disabled={userSubscriptionData?.isInTrial}
                  onPress={handleCancelSubscription}
                >
                  <Box
                    marginBottom={{ base: '1', lg: '5' }}
                    marginLeft={{ base: '3', lg: '5' }}
                    marginTop={{ base: '1', lg: '0' }}
                    marginRight={{ base: '3', lg: '0' }}
                    paddingX={{ base: '4', sm: '5' }}
                    paddingTop={{ base: '1', sm: '1' }}
                    paddingBottom={{ base: '1', sm: '1' }}
                    borderBottomRadius="2xl"
                    borderTopRadius={{ base: '2xl', lg: 'none' }}
                    backgroundColor="white"
                    borderWidth="1"
                    borderTopWidth={{ base: '1', lg: '0' }}
                    borderColor={theme.colors.shared.softer3Gray}
                  >
                    <HStack alignItems="center" marginBottom="4">
                      <Text
                        flex="1"
                        marginLeft="3"
                        fontWeight="medium"
                        fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}
                      >
                        {userSubscriptionData?.isInTrial
                          ? 'You are on a free trial plan. You can upgrade your plan at anytime.'
                          : 'Cancel subscription.'}
                      </Text>
                      <Hidden from="sm">
                        <Box>
                          <Pressable
                            borderWidth="1"
                            borderColor={theme.colors.shared.soft4Gray}
                            borderRadius="md"
                            p={{ base: '6px', sm: '0.3rem' }}
                            _hover={{
                              backgroundColor: theme.colors.shared.softerGray
                            }}
                          >
                            <Box w="16px">
                              <IconMoreVertical />
                            </Box>
                          </Pressable>
                        </Box>
                      </Hidden>
                    </HStack>
                    {/* List recent top up phone */}
                    <Hidden from="sm">
                      <VStack space="3">
                        {[...Array(2)].map((_, i) => (
                          <Fragment key={i}>
                            <Box
                              backgroundColor={theme.colors.shared.aliceBlue}
                              borderWidth="1"
                              borderColor={theme.colors.shared.softGray}
                              borderRadius="md"
                              paddingX="4"
                              paddingY="3"
                            >
                              <Text fontSize="sm" fontWeight="medium">
                                Credits Topup
                              </Text>
                              <HStack
                                alignItems="center"
                                w="full"
                                marginTop="2"
                              >
                                <Box w="24.75px" marginRight="1">
                                  <IconMasterCard />
                                </Box>
                                <Text
                                  flex="1"
                                  fontSize="sm"
                                  fontWeight="medium"
                                >
                                  Mastercard - 7322
                                </Text>
                                <Text
                                  color={theme.colors.shared.green}
                                  fontSize="sm"
                                  fontWeight="semibold"
                                >
                                  +30000
                                </Text>
                              </HStack>
                              <HStack w="full" marginTop="2">
                                <Text
                                  flex="1"
                                  fontSize="sm"
                                  fontWeight="medium"
                                >
                                  25 April, 04:28 PM
                                </Text>
                                <Text
                                  color={theme.colors.shared.redText}
                                  fontSize="sm"
                                  fontWeight="semibold"
                                >
                                  $300.00
                                </Text>
                              </HStack>
                              <HStack>
                                <Pressable
                                  backgroundColor="white"
                                  borderWidth="1"
                                  borderRadius="md"
                                  paddingX="3"
                                  paddingY="2"
                                  borderColor={theme.colors.shared.softer3Gray}
                                  marginTop="3"
                                  _hover={{
                                    backgroundColor:
                                      theme.colors.shared.softerGray
                                  }}
                                >
                                  <HStack alignItems="center" space="3">
                                    <Box w="16px">
                                      <IconDownload />
                                    </Box>
                                    <Text fontSize="xs" fontWeight="medium">
                                      Download invoice
                                    </Text>
                                  </HStack>
                                </Pressable>
                              </HStack>
                            </Box>
                          </Fragment>
                        ))}
                      </VStack>
                    </Hidden>
                    <HStack
                      alignItems="center"
                      justifyContent="space-between"
                      marginTop={{ base: '4', sm: '5' }}
                    ></HStack>
                  </Box>
                </Pressable>
              </Box>
              <Box
                width={{ base: 'auto', lg: '20px' }}
                flexDirection={{ base: 'column', sm: 'row', lg: 'column' }}
              ></Box>
            </Box>
            {userSubscriptionData?.isCustomPlan !== true ? (
              <Box flexDirection={{ base: 'column-reverse', lg: 'row' }}>
                {/* Billing information */}
                <Box flex="1">
                  <Box
                    marginTop={{ base: '0', lg: '0' }}
                    marginLeft={{ base: '3', lg: '5' }}
                    marginRight={{ base: '3', lg: '0' }}
                    paddingX={{ base: '0', lg: '5' }}
                    paddingTop={{ base: '0', lg: '5' }}
                    paddingBottom={{ base: '0', lg: '4' }}
                    borderTopRadius={{ base: 'none', sm: '2xl' }}
                    borderBottomRadius={{ base: 'none', sm: '2xl', lg: 'none' }}
                    backgroundColor={{ base: 'none', lg: 'white' }}
                    borderWidth={{ base: '0', lg: '1' }}
                    borderBottomWidth={{ base: 'none', sm: '1', lg: '0' }}
                    borderColor={theme.colors.shared.softer3Gray}
                  ></Box>
                  <Pressable onPress={() => push('/pricing')}>
                    <Box
                      marginBottom={{ base: '1', lg: '5' }}
                      marginLeft={{ base: '3', lg: '5' }}
                      marginTop={{ base: '1', lg: '0' }}
                      marginRight={{ base: '3', lg: '0' }}
                      paddingX={{ base: '4', sm: '5' }}
                      paddingTop={{ base: '1', sm: '1' }}
                      paddingBottom={{ base: '1', sm: '1' }}
                      borderBottomRadius="2xl"
                      borderTopRadius={{ base: '2xl', lg: 'none' }}
                      backgroundColor="white"
                      borderWidth="1"
                      borderTopWidth={{ base: '1', lg: '0' }}
                      borderColor={theme.colors.shared.softer3Gray}
                    >
                      <HStack alignItems="center" marginBottom="4">
                        <Text
                          flex="1"
                          marginLeft="3"
                          fontWeight="medium"
                          fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}
                        >
                          View our pricing options.
                        </Text>
                        <Hidden from="sm">
                          <Box>
                            <Pressable
                              borderWidth="1"
                              borderColor={theme.colors.shared.soft4Gray}
                              borderRadius="md"
                              p={{ base: '6px', sm: '0.3rem' }}
                              _hover={{
                                backgroundColor: theme.colors.shared.softerGray
                              }}
                            >
                              <Box w="16px">
                                <IconMoreVertical />
                              </Box>
                            </Pressable>
                          </Box>
                        </Hidden>
                      </HStack>
                      <Hidden from="sm">
                        <VStack space="3">
                          {[...Array(2)].map((_, i) => (
                            <Fragment key={i}>
                              <Box
                                backgroundColor={theme.colors.shared.aliceBlue}
                                borderWidth="1"
                                borderColor={theme.colors.shared.softGray}
                                borderRadius="md"
                                paddingX="4"
                                paddingY="3"
                              >
                                <Text fontSize="sm" fontWeight="medium">
                                  Credits Topup
                                </Text>
                                <HStack
                                  alignItems="center"
                                  w="full"
                                  marginTop="2"
                                >
                                  <Box w="24.75px" marginRight="1">
                                    <IconMasterCard />
                                  </Box>
                                  <Text
                                    flex="1"
                                    fontSize="sm"
                                    fontWeight="medium"
                                  >
                                    Mastercard - 7322
                                  </Text>
                                  <Text
                                    color={theme.colors.shared.green}
                                    fontSize="sm"
                                    fontWeight="semibold"
                                  >
                                    +30000
                                  </Text>
                                </HStack>
                                <HStack w="full" marginTop="2">
                                  <Text
                                    flex="1"
                                    fontSize="sm"
                                    fontWeight="medium"
                                  >
                                    25 April, 04:28 PM
                                  </Text>
                                  <Text
                                    color={theme.colors.shared.redText}
                                    fontSize="sm"
                                    fontWeight="semibold"
                                  >
                                    $300.00
                                  </Text>
                                </HStack>
                                <HStack>
                                  <Pressable
                                    backgroundColor="white"
                                    borderWidth="1"
                                    borderRadius="md"
                                    paddingX="3"
                                    paddingY="2"
                                    borderColor={
                                      theme.colors.shared.softer3Gray
                                    }
                                    marginTop="3"
                                    _hover={{
                                      backgroundColor:
                                        theme.colors.shared.softerGray
                                    }}
                                  >
                                    <HStack alignItems="center" space="3">
                                      <Box w="16px">
                                        <IconDownload />
                                      </Box>
                                      <Text fontSize="xs" fontWeight="medium">
                                        Download invoice
                                      </Text>
                                    </HStack>
                                  </Pressable>
                                </HStack>
                              </Box>
                            </Fragment>
                          ))}
                        </VStack>
                      </Hidden>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between"
                        marginTop={{ base: '4', sm: '5' }}
                      ></HStack>
                    </Box>
                  </Pressable>
                </Box>
                <Box
                  width={{ base: 'auto', lg: '20px' }}
                  flexDirection={{ base: 'column', sm: 'row', lg: 'column' }}
                ></Box>
              </Box>
            ) : null}
            {userSubscriptionData?.isCustomPlan !== true ? (
              <Box flexDirection={{ base: 'column-reverse', lg: 'row' }}>
                {/* Billing information */}
                <Box flex="1">
                  <Box
                    marginTop={{ base: '0', lg: '0' }}
                    marginLeft={{ base: '3', lg: '5' }}
                    marginRight={{ base: '3', lg: '0' }}
                    paddingX={{ base: '0', lg: '5' }}
                    paddingTop={{ base: '0', lg: '5' }}
                    paddingBottom={{ base: '0', lg: '4' }}
                    borderTopRadius={{ base: 'none', sm: '2xl' }}
                    borderBottomRadius={{ base: 'none', sm: '2xl', lg: 'none' }}
                    backgroundColor={{ base: 'none', lg: 'white' }}
                    borderWidth={{ base: '0', lg: '1' }}
                    borderBottomWidth={{ base: 'none', sm: '1', lg: '0' }}
                    borderColor={theme.colors.shared.softer3Gray}
                  ></Box>
                  <Pressable onPress={handleManageBillingPress}>
                    <Box
                      marginBottom={{ base: '1', lg: '5' }}
                      marginLeft={{ base: '3', lg: '5' }}
                      marginTop={{ base: '1', lg: '0' }}
                      marginRight={{ base: '3', lg: '0' }}
                      paddingX={{ base: '4', sm: '5' }}
                      paddingTop={{ base: '1', sm: '1' }}
                      paddingBottom={{ base: '1', sm: '1' }}
                      borderBottomRadius="2xl"
                      borderTopRadius={{ base: '2xl', lg: 'none' }}
                      backgroundColor="white"
                      borderWidth="1"
                      borderTopWidth={{ base: '1', lg: '0' }}
                      borderColor={theme.colors.shared.softer3Gray}
                    >
                      <HStack alignItems="center" marginBottom="4">
                        <Text
                          flex="1"
                          marginLeft="3"
                          fontWeight="medium"
                          fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}
                        >
                          {loadingGetStripeCustomerPortal
                            ? 'Loading...'
                            : 'Manage billing account.'}
                        </Text>
                        <Hidden from="sm">
                          <Box>
                            <Pressable
                              borderWidth="1"
                              borderColor={theme.colors.shared.soft4Gray}
                              borderRadius="md"
                              p={{ base: '6px', sm: '0.3rem' }}
                              _hover={{
                                backgroundColor: theme.colors.shared.softerGray
                              }}
                            >
                              <Box w="16px">
                                <IconMoreVertical />
                              </Box>
                            </Pressable>
                          </Box>
                        </Hidden>
                      </HStack>
                      <HStack
                        alignItems="center"
                        justifyContent="space-between"
                        marginTop={{ base: '4', sm: '5' }}
                      ></HStack>
                    </Box>
                  </Pressable>
                </Box>
                <Box
                  width={{ base: 'auto', lg: '20px' }}
                  flexDirection={{ base: 'column', sm: 'row', lg: 'column' }}
                ></Box>
              </Box>
            ) : null}
          </>
        ) : null}
      </DashboardLayout>
    </>
  )
}
