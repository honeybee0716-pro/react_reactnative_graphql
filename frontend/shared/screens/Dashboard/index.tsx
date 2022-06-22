import {
  Box,
  Center,
  Hidden,
  Text,
  HStack,
  VStack,
  Input,
  Checkbox,
  Pressable,
  Avatar,
  Heading,
  Spinner
} from 'native-base'
import { theme } from 'shared/styles/theme'
import React, { Fragment, useState } from 'react'
import { Pagination } from 'swiper'
import DashboardLayout from 'shared/layouts/DashboardLayout.dev'
import IconDownload from 'shared/components/icons/IconDownload'
import IconCalendar from 'shared/components/icons/IconCalendar'
import IconMoreVertical from 'shared/components/icons/IconMoreVertical'
import IconChevronDown from 'shared/components/icons/IconChevronDown'
import IconPlus from 'shared/components/icons/IconPlus'
import IconFileText from 'shared/components/icons/IconFileText'
import IconSliders from 'shared/components/icons/IconSliders'
import IconTrashBin from 'shared/components/icons/IconTrashBin'
import IconUpload from 'shared/components/icons/IconUpload'
import IconTag from 'shared/components/icons/IconTag'
import IconFilter from 'shared/components/icons/IconFilter'
import IconList from 'shared/components/icons/IconList'
import IconGroup from 'shared/components/icons/IconGroup'
import IconSearch from 'shared/components/icons/IconSearch'
import { useRouter } from 'solito/router'
import { Link as SolitoLink } from 'solito/link'
import { gql, useQuery, useLazyQuery } from '@apollo/client'

const GET_USER_SUBSCRIPTION_DATA = gql`
  query GetUserSubscriptionData {
    getUserSubscriptionData {
      status
      message
      stripeCustomer
      isInTrial
      redirectToPricingPage
    }
  }
`

const SEARCH_FOR_LEADS = gql`
  query SearchForLeads($input: searchForLeadsInput) {
    searchForLeads(input: $input) {
      message
      status
      leads
    }
  }
`

const LoadingSpinner = () => {
  return (
    <HStack space={8} flex="1" justifyContent="center" alignItems="center">
      <Spinner size="lg" color={theme.colors.shared.brightBlue} />
    </HStack>
  )
}

export default function ManageLists() {
  const [finishedVerifyingAccess, setFinishedVerifyingAccess] =
    useState<boolean>(false)
  const firstName = React.useRef<any>()
  const lastName = React.useRef<any>()
  const companyName = React.useRef<any>()
  const jobTitle = React.useRef<any>()
  const { push } = useRouter()
  const {
    data: getUserSubscriptionDataResult,
    error: getUserSubscriptionDataError,
    loading: getUserSubscriptionDataLoading
  } = useQuery(GET_USER_SUBSCRIPTION_DATA, {
    fetchPolicy: 'network-only'
  })
  const [searchForLeads, { data, loading, error }] =
    useLazyQuery(SEARCH_FOR_LEADS)

  const handleSearch = async () => {
    await searchForLeads({
      fetchPolicy: 'network-only',
      variables: {
        input: {
          firstName: firstName?.current?.value,
          lastName: lastName?.current?.value,
          companyName: companyName?.current?.value,
          jobTitle: jobTitle?.current?.value
        }
      }
    })
  }

  const resetFilters = () => {
    firstName.current.value = ''
    lastName.current.value = ''
    companyName.current.value = ''
    jobTitle.current.value = ''
    handleSearch()
  }

  React.useEffect(() => {
    if (
      !!getUserSubscriptionDataError ||
      getUserSubscriptionDataResult?.getUserSubscriptionData
        ?.redirectToPricingPage
    ) {
      push('/pricing')
      return
    }

    if (
      getUserSubscriptionDataResult?.getUserSubscriptionData
        ?.redirectToPricingPage === false
    ) {
      setFinishedVerifyingAccess(true)
    }
  }, [getUserSubscriptionDataResult, getUserSubscriptionDataError])

  React.useEffect(() => {
    handleSearch()
  }, [])

  return (
    <>
      {loading ? <LoadingSpinner /> : null}
      {error ? <Heading>Error. Please try again.</Heading> : null}
      {data?.searchForLeads?.leads && finishedVerifyingAccess ? (
        <DashboardLayout>
          <Box flexDirection={{ base: 'column', lg: 'column' }}>
            <Box flex="1">
              <Box
                marginTop={{ base: '3', sm: '5' }}
                marginLeft={{ base: '3', sm: '5' }}
                marginRight={{ base: '3', sm: '5', lg: '5' }}
                marginBottom="5"
                paddingX={{ base: '4', sm: '5' }}
                paddingTop={{ base: '4', sm: '5' }}
                paddingBottom="4"
                borderTopRadius="2xl"
                borderBottomRadius="2xl"
                backgroundColor="white"
                borderWidth="1"
                borderColor={theme.colors.shared.softGray}
              >
                <HStack alignItems="center" marginBottom="4">
                  <Center
                    backgroundColor={theme.colors.shared.fireOrange_20}
                    paddingY="2"
                    paddingX="2"
                    borderRadius="lg"
                  >
                    <Box w="21px">
                      <IconFileText color={theme.colors.shared.fireOrange} />
                    </Box>
                  </Center>
                  <Text
                    flex="1"
                    marginLeft="3"
                    fontWeight="medium"
                    fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}
                  >
                    Website Visitors
                  </Text>
                  <Hidden till="sm">
                    <Pressable
                      backgroundColor={theme.colors.shared.blueGentianFlower}
                      borderRadius="md"
                      paddingX="3"
                      paddingY="2"
                      _hover={{
                        backgroundColor: theme.colors.shared.brightBlue
                      }}
                      onPress={() => {
                        alert('The export feature is not available yet.')
                      }}
                    >
                      <HStack alignItems="center" space="3">
                        <Box w="20px">
                          <IconUpload color="white" />
                        </Box>
                        <Text color="white" fontSize="xs" fontWeight="medium">
                          Export
                        </Text>
                      </HStack>
                    </Pressable>
                  </Hidden>
                  <Hidden from="sm">
                    <Pressable
                      backgroundColor="white"
                      borderWidth="1"
                      borderColor={theme.colors.shared.black_20}
                      borderRadius="md"
                      p="0.4rem"
                    >
                      <Box w="16px">
                        <IconPlus />
                      </Box>
                    </Pressable>
                  </Hidden>
                </HStack>
                {/* Manage Lists */}
                <Hidden till="sm">
                  <Box>
                    <HStack
                      paddingX="3"
                      paddingY="3"
                      borderBottomWidth="1"
                      borderBottomColor={theme.colors.shared.softGray}
                    >
                      <Box w="5%">{/* Avatar */}</Box>
                      <Box w="12%">
                        <Text fontSize="sm" fontWeight="medium">
                          Name
                        </Text>
                      </Box>
                      <Box w="27%">
                        <Text fontSize="sm" fontWeight="medium">
                          Job Title
                        </Text>
                      </Box>
                      <Box w="20%">
                        <Text fontSize="sm" fontWeight="medium">
                          Company Name
                        </Text>
                      </Box>
                      <Box w="20.5%">
                        <Text fontSize="sm" fontWeight="medium">
                          Email
                        </Text>
                      </Box>
                      <Box w="12.5%">
                        <Text fontSize="sm" fontWeight="medium">
                          Phone Number
                        </Text>
                      </Box>
                      <Box w="16%">
                        <Text fontSize="sm" fontWeight="medium">
                          Export
                        </Text>
                      </Box>
                    </HStack>
                    {data?.searchForLeads?.leads?.map((l, i) => (
                      <Pressable
                        display="flex"
                        flexDirection="row"
                        key={i}
                        marginTop="3"
                        borderWidth="1"
                        borderColor={theme.colors.shared.softGray}
                        borderRadius="md"
                        paddingX="3"
                        paddingY="3"
                        alignItems="center"
                        backgroundColor={theme.colors.shared.aliceBlue}
                        _hover={{
                          backgroundColor: theme.colors.shared.softerGray
                        }}
                        onPress={() => push(`/lead/${l.id}`)}
                      >
                        <Box w="5%">
                          <Avatar
                            source={{
                              uri: l.profileImageURL
                            }}
                          >
                            {`${l.firstName?.charAt(0) || ''}${
                              l.lastName?.charAt(0) || ''
                            }`}
                          </Avatar>
                        </Box>
                        <Box w="12%">
                          <Text
                            fontSize="sm"
                            fontWeight="medium"
                            isTruncated
                            maxW="145"
                          >
                            {`${l.firstName} ${l.lastName}`}
                          </Text>
                        </Box>
                        <Box w="27%">
                          <Text
                            fontSize="sm"
                            fontWeight="medium"
                            isTruncated
                            maxW="315"
                          >
                            {l.title}
                          </Text>
                        </Box>
                        <Box w="20%">
                          <Text
                            fontSize="sm"
                            fontWeight="medium"
                            isTruncated
                            maxW="240"
                          >
                            {l.companyName}
                          </Text>
                        </Box>
                        <Box w="20.5%">
                          <Text
                            fontSize="sm"
                            fontWeight="medium"
                            isTruncated
                            maxW="250"
                          >
                            {l.email || 'Unknown'}
                          </Text>
                        </Box>
                        <Box w="13.5%">
                          <Text
                            fontSize="sm"
                            fontWeight="medium"
                            isTruncated
                            maxW="150"
                          >
                            {l.phone || 'Unknown'}
                          </Text>
                        </Box>
                        <Box w="15%">
                          <Checkbox value="" />
                        </Box>
                      </Pressable>
                    ))}
                  </Box>
                </Hidden>
                <Hidden from="sm">
                  <VStack space="3">
                    {[...Array(3)].map((_, i) => (
                      <Fragment key={i}>
                        <Box>
                          <HStack
                            alignItems="center"
                            backgroundColor={theme.colors.shared.aliceBlue}
                            borderWidth="1"
                            borderColor={theme.colors.shared.softGray}
                            borderTopRadius="xl"
                            paddingX="4"
                            paddingY="3"
                          >
                            <Text flex="1" fontSize="15px" fontWeight="medium">
                              SEO Agencies
                            </Text>
                            <Text fontSize="sm" fontWeight="medium">
                              4.0GB
                            </Text>
                          </HStack>
                          <HStack
                            alignItems="center"
                            backgroundColor={theme.colors.shared.aliceBlue}
                            borderWidth="1"
                            borderTopWidth="0"
                            borderColor={theme.colors.shared.softGray}
                            borderBottomRadius="xl"
                            paddingX="4"
                            paddingY="3"
                          >
                            <Text flex="1" fontSize="13px" fontWeight="medium">
                              28 March 2022
                            </Text>
                            <HStack space="2">
                              <Box>
                                <Pressable
                                  backgroundColor="white"
                                  borderWidth="1"
                                  borderColor={theme.colors.shared.soft4Gray}
                                  borderRadius="md"
                                  p={{ base: '6px', sm: '0.3rem' }}
                                  _hover={{
                                    backgroundColor:
                                      theme.colors.shared.softerGray
                                  }}
                                >
                                  <Box w="16px">
                                    <IconTrashBin
                                      color={theme.colors.shared.redText}
                                    />
                                  </Box>
                                </Pressable>
                              </Box>
                              <Box>
                                <Pressable
                                  backgroundColor="white"
                                  borderWidth="1"
                                  borderColor={theme.colors.shared.soft4Gray}
                                  borderRadius="md"
                                  p={{ base: '6px', sm: '0.3rem' }}
                                  _hover={{
                                    backgroundColor:
                                      theme.colors.shared.softerGray
                                  }}
                                >
                                  <Box w="16px">
                                    <IconDownload />
                                  </Box>
                                </Pressable>
                              </Box>
                            </HStack>
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
                >
                  <Box>
                    <Text
                      fontWeight="medium"
                      fontSize={{ base: '13px', sm: 'sm' }}
                    >
                      Page 1 of 3
                    </Text>
                  </Box>
                  <HStack>
                    <Pressable
                      backgroundColor="white"
                      borderWidth="1"
                      borderColor={theme.colors.shared.softer3Gray}
                      borderLeftRadius="lg"
                      p="2"
                      _hover={{
                        backgroundColor: theme.colors.shared.softerGray
                      }}
                    >
                      <Box w="16px">
                        <IconChevronDown rotation={270} />
                      </Box>
                    </Pressable>

                    <Pressable
                      backgroundColor="white"
                      borderWidth="1"
                      borderColor={theme.colors.shared.softer3Gray}
                      borderRightRadius="lg"
                      p="2"
                      _hover={{
                        backgroundColor: theme.colors.shared.softerGray
                      }}
                    >
                      <Box w="16px">
                        <IconChevronDown rotation={90} />
                      </Box>
                    </Pressable>
                  </HStack>
                </HStack>
              </Box>
            </Box>
          </Box>
        </DashboardLayout>
      ) : null}
    </>
  )
}
