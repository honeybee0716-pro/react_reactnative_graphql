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
  Spinner,
  Modal
} from 'native-base'
import { theme } from 'shared/styles/theme'
import React, { Fragment, useState } from 'react'
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
import { gql, useLazyQuery } from '@apollo/client'
import { CSVLink } from 'react-csv'
import { useRecoilState } from 'recoil'
import { userSubscriptionDataState } from '../../state'

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
  const [exportLeads, setExportLeads] = React.useState<any>([])
  const [leads, setLeads] = React.useState<any>([])
  const lastName = React.useRef<any>()
  const companyName = React.useRef<any>()
  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false)
  const jobTitle = React.useRef<any>()
  const { push } = useRouter()
  const [searchForLeads, { data, loading, error }] =
    useLazyQuery(SEARCH_FOR_LEADS)
  const [userSubscriptionData] = useRecoilState<any>(userSubscriptionDataState)

  const handleSearch = async () => {
    setModalIsOpen(false)
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

  const exportLead = (value, lead) => {
    setExportLeads((prevState) => {
      if (value) {
        return [...prevState, lead]
      } else {
        return prevState.filter((item) => item.id !== lead.id)
      }
    })
  }

  const exportAllLeads = (value) => {
    setExportLeads(value ? leads : [])
  }

  const handleFilterPress = () => {
    setModalIsOpen(true)
  }

  React.useEffect(() => {
    if (userSubscriptionData?.redirectToPricingPage) {
      push('/pricing')
    } else {
      setFinishedVerifyingAccess(true)
    }
  }, [userSubscriptionData])

  React.useEffect(() => {
    handleSearch()
  }, [])

  React.useEffect(() => {
    if (data?.searchForLeads?.leads) {
      setLeads(data.searchForLeads.leads)
    }
  }, [data])

  const enableExportButton = exportLeads.length

  const hideLeads =
    !userSubscriptionData?.activeSubscription &&
    !userSubscriptionData?.isInTrial

  return (
    <>
      <DashboardLayout>
        {loading ? <LoadingSpinner /> : null}
        {error ? <Heading>Error. Please try again.</Heading> : null}
        {data?.searchForLeads?.leads && finishedVerifyingAccess && true ? (
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
                    {hideLeads
                      ? "Your leads are hidden because you don't have an active subscription."
                      : 'Website Visitors'}
                  </Text>
                  <Modal
                    isOpen={modalIsOpen}
                    overlayVisible={true}
                    backdropVisible={true}
                    onClose={() => setModalIsOpen(false)}
                  >
                    <Hidden till="lg">
                      <Box>
                        <Box
                          marginX="5"
                          marginTop="5"
                          marginBottom={{ base: '0', lg: '5' }}
                          paddingX={{ base: '4', sm: '6' }}
                          paddingTop={{ base: '4', sm: '6' }}
                          paddingBottom="4"
                          borderRadius="2xl"
                          backgroundColor="white"
                          borderWidth="1"
                          borderColor={theme.colors.shared.softGray}
                        >
                          <HStack alignItems="center" marginBottom="6">
                            <Center
                              backgroundColor={
                                theme.colors.shared.fireOrange_20
                              }
                              paddingY="2"
                              paddingX="2"
                              borderRadius="lg"
                            >
                              <Box w="18px">
                                <IconSliders
                                  color={theme.colors.shared.fireOrange}
                                />
                              </Box>
                            </Center>
                            <HStack justifyContent="center" alignItems="center">
                              <Text
                                marginLeft="3"
                                fontWeight="medium"
                                fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}
                              >
                                Filters
                              </Text>
                              <Text
                                flex="1"
                                fontWeight="light"
                                fontSize="sm"
                                width="300px"
                                marginLeft="3"
                              >
                                (Showing{' '}
                                {data?.searchForLeads?.leads?.length || 0} of{' '}
                                {data?.searchForLeads?.leads.length || 0})
                              </Text>
                            </HStack>
                          </HStack>
                          <Text fontSize="sm" fontWeight="500" marginBottom="4">
                            Sort By:
                          </Text>
                          <HStack marginBottom="6">
                            <Pressable
                              flex="1"
                              borderWidth="1"
                              borderColor={theme.colors.shared.softGray}
                              borderLeftRadius="lg"
                              borderRightRadius="lg"
                              marginRight="2"
                              paddingY="0.35rem"
                              backgroundColor={theme.colors.shared.brightBlue}
                              _hover={{
                                backgroundColor:
                                  theme.colors.shared.blueGentianFlower
                              }}
                              onPress={() =>
                                alert('This feature is not active yet.')
                              }
                            >
                              <Text
                                fontSize="13px"
                                fontWeight="medium"
                                textAlign="center"
                                color="white"
                              >
                                Date
                              </Text>
                            </Pressable>
                            {/* <Box
                            flex="1"
                            borderTopWidth="1"
                            borderBottomWidth="1"
                            borderRightWidth="1"
                            borderColor={theme.colors.shared.softGray}
                            paddingY="0.35rem"
                          >
                            <Text
                              fontSize="13px"
                              fontWeight="medium"
                              textAlign="center"
                            >
                              Name
                            </Text>
                          </Box> */}
                            <Pressable
                              flex="1"
                              borderWidth="1"
                              borderColor={theme.colors.shared.softGray}
                              borderRightRadius="lg"
                              borderLeftRadius="lg"
                              marginLeft="2"
                              paddingY="0.35rem"
                              backgroundColor={theme.colors.shared.aliceBlue}
                              _hover={{
                                backgroundColor: theme.colors.shared.softerGray
                              }}
                              onPress={() =>
                                alert('This feature is not active yet.')
                              }
                            >
                              <Text
                                fontSize="13px"
                                fontWeight="medium"
                                textAlign="center"
                              >
                                Name
                              </Text>
                            </Pressable>
                          </HStack>
                          {/* <Text fontSize="sm" fontWeight="500" marginBottom="3">
                          Size :
                        </Text>
                        <HStack justifyContent="space-between">
                          <Text fontSize="xs" fontWeight="medium">
                            10 MB
                          </Text>
                          <Text fontSize="xs" fontWeight="medium">
                            2TB
                          </Text>
                        </HStack> */}
                          {/* <Slider
                          w="full"
                          marginBottom="5"
                          defaultValue={70}
                          minValue={0}
                          maxValue={100}
                          accessibilityLabel="hello world"
                          step={1}
                        >
                          <Slider.Track>
                            <Slider.FilledTrack
                              backgroundColor={theme.colors.shared.brightBlue}
                            />
                          </Slider.Track>
                          <Slider.Thumb
                            backgroundColor={theme.colors.shared.brightBlue}
                          />
                        </Slider> */}
                          <Text fontSize="sm" fontWeight="500" marginBottom="3">
                            Search for:
                          </Text>
                          <Box
                            flexDirection="row"
                            justifyContent="space-between"
                          >
                            <Box
                              flex="1"
                              position="relative"
                              marginBottom="3"
                              marginRight="2"
                            >
                              <Input
                                paddingLeft="3"
                                paddingRight="10"
                                paddingTop="0.6rem"
                                paddingBottom="0.6rem"
                                w="full"
                                borderRadius="lg"
                                borderWidth="1"
                                borderColor={theme.colors.shared.black_20}
                                backgroundColor={theme.colors.shared.soft6Gray}
                                fontSize="13px"
                                placeholder="First Name"
                                ref={firstName}
                              />
                            </Box>
                            <Box
                              flex="1"
                              position="relative"
                              marginBottom="3"
                              marginLeft="2"
                            >
                              <Input
                                paddingLeft="3"
                                paddingRight="10"
                                paddingTop="0.6rem"
                                paddingBottom="0.6rem"
                                w="full"
                                borderRadius="lg"
                                borderWidth="1"
                                borderColor={theme.colors.shared.black_20}
                                backgroundColor={theme.colors.shared.soft6Gray}
                                fontSize="13px"
                                placeholder="Last Name"
                                ref={lastName}
                              />
                            </Box>
                          </Box>
                          <Box
                            flexDirection="row"
                            justifyContent="space-between"
                          >
                            <Box
                              flex="1"
                              position="relative"
                              marginBottom="3"
                              marginRight="2"
                            >
                              <Input
                                paddingLeft="3"
                                paddingRight="10"
                                paddingTop="0.6rem"
                                paddingBottom="0.6rem"
                                w="full"
                                borderRadius="lg"
                                borderWidth="1"
                                borderColor={theme.colors.shared.black_20}
                                backgroundColor={theme.colors.shared.soft6Gray}
                                fontSize="13px"
                                placeholder="Company Name"
                                ref={companyName}
                              />
                            </Box>
                            <Box
                              flex="1"
                              position="relative"
                              marginBottom="3"
                              marginLeft="2"
                            >
                              <Input
                                paddingLeft="3"
                                paddingRight="10"
                                paddingTop="0.6rem"
                                paddingBottom="0.6rem"
                                w="full"
                                borderRadius="lg"
                                borderWidth="1"
                                borderColor={theme.colors.shared.black_20}
                                backgroundColor={theme.colors.shared.soft6Gray}
                                fontSize="13px"
                                placeholder="Job Title"
                                ref={jobTitle}
                              />
                            </Box>
                          </Box>
                          {/* <HStack flexWrap="wrap" marginBottom="5">
                          {[...Array(8)].map((_, i) => (
                            <Fragment key={i}>
                              <HStack
                                marginRight="3"
                                marginBottom="3"
                                paddingY="2"
                                paddingLeft="3"
                                paddingRight="2"
                                alignItems="center"
                                borderRadius="full"
                                borderWidth="1"
                                borderColor={theme.colors.shared.softGray}
                                backgroundColor={theme.colors.shared.aliceBlue}
                              >
                                <Text
                                  fontSize="13px"
                                  fontWeight="medium"
                                  marginRight="2"
                                >
                                  SEO {i}
                                </Text>
                                <Pressable>
                                  <Box w="18px">
                                    <IconX color="#545658" />
                                  </Box>
                                </Pressable>
                              </HStack>
                            </Fragment>
                          ))}
                        </HStack> */}
                          <Box
                            flexDirection="row"
                            justifyContent="space-between"
                          >
                            <Pressable
                              borderRadius="lg"
                              flex="1"
                              marginRight="2"
                              paddingY="2"
                              backgroundColor={theme.colors.shared.brightBlue}
                              _hover={{
                                backgroundColor:
                                  theme.colors.shared.blueGentianFlower
                              }}
                              onPress={handleSearch}
                            >
                              <Text
                                color="white"
                                fontSize="sm"
                                fontWeight="medium"
                                textAlign="center"
                              >
                                Apply Filters
                              </Text>
                            </Pressable>
                            <Pressable
                              backgroundColor={theme.colors.shared.aliceBlue}
                              borderWidth="1"
                              borderColor={theme.colors.shared.softGray}
                              borderRadius="lg"
                              flex="1"
                              marginLeft="2"
                              paddingY="2"
                              _hover={{
                                backgroundColor: theme.colors.shared.softerGray
                              }}
                              onPress={resetFilters}
                            >
                              <Text
                                color={theme.colors.shared.soft2Gray}
                                fontSize="sm"
                                fontWeight="medium"
                                textAlign="center"
                              >
                                Reset All
                              </Text>
                            </Pressable>
                          </Box>
                        </Box>
                        {/* <Box
                        marginX="5"
                        marginBottom="5"
                        marginTop="0"
                        paddingX={{ base: '4', sm: '6' }}
                        paddingTop={{ base: '4', sm: '6' }}
                        paddingBottom="4"
                        borderRadius="2xl"
                        backgroundColor="white"
                        borderWidth="1"
                        borderColor={theme.colors.shared.softGray}
                      >
                        <HStack alignItems="center" marginBottom="6">
                          <Center
                            backgroundColor={theme.colors.shared.green3_15}
                            paddingY="2"
                            paddingX="2"
                            borderRadius="lg"
                          >
                            <Box w="18px">
                              <IconClock color={theme.colors.shared.green2} />
                            </Box>
                          </Center>
                          <Text
                            flex="1"
                            marginLeft="3"
                            fontWeight="medium"
                            fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}
                          >
                            Recently Added
                          </Text>
                          <Pressable
                            borderWidth="1"
                            borderColor={theme.colors.shared.soft4Gray}
                            borderRadius="md"
                            p={{ base: '6px', sm: '0.4rem' }}
                          >
                            <Box w="16px">
                              <IconMoreVertical />
                            </Box>
                          </Pressable>
                        </HStack>
                        <HStack
                          marginBottom="3"
                          paddingY="2"
                          paddingLeft="3"
                          paddingRight="2"
                          alignItems="center"
                          borderRadius="lg"
                          borderWidth="1"
                          borderColor={theme.colors.shared.softGray}
                          backgroundColor={theme.colors.shared.aliceBlue}
                        >
                          <Text
                            flex="1"
                            fontSize="13px"
                            fontWeight="medium"
                            marginRight="2"
                          >
                            SEO Agencies
                          </Text>
                          <Box
                            backgroundColor="white"
                            borderRadius="lg"
                            borderWidth="1"
                            borderColor={theme.colors.shared.softGray}
                            paddingX="2"
                            paddingY="1"
                          >
                            <Text fontSize="11px" fontWeight="medium">
                              4.0GB
                            </Text>
                          </Box>
                        </HStack>
                        <HStack
                          marginBottom="3"
                          paddingY="2"
                          paddingLeft="3"
                          paddingRight="2"
                          alignItems="center"
                          borderRadius="lg"
                          borderWidth="1"
                          borderColor={theme.colors.shared.softGray}
                          backgroundColor={theme.colors.shared.aliceBlue}
                        >
                          <Text
                            flex="1"
                            fontSize="13px"
                            fontWeight="medium"
                            marginRight="2"
                          >
                            Advertisement Agencies
                          </Text>
                          <Box
                            backgroundColor="white"
                            borderRadius="lg"
                            borderWidth="1"
                            borderColor={theme.colors.shared.softGray}
                            paddingX="2"
                            paddingY="1"
                          >
                            <Text fontSize="11px" fontWeight="medium">
                              4.0GB
                            </Text>
                          </Box>
                        </HStack>
                      </Box> */}
                      </Box>
                    </Hidden>
                    <Hidden from="lg">
                      <Box width="full">
                        <Box
                          marginX={{ base: '3', sm: '5' }}
                          marginTop={{ base: '3', sm: '5' }}
                          marginBottom="0"
                          paddingX={{ base: '4', sm: '5' }}
                          paddingTop={{ base: '4', sm: '5' }}
                          paddingBottom="4"
                          borderTopRadius="2xl"
                          backgroundColor="white"
                          borderWidth="1"
                          borderBottomWidth={{ base: '0', sm: '1' }}
                          borderColor={theme.colors.shared.softGray}
                        >
                          <HStack alignItems="center" marginBottom="6">
                            <Center
                              backgroundColor={
                                theme.colors.shared.fireOrange_20
                              }
                              paddingY="2"
                              paddingX="2"
                              borderRadius="lg"
                            >
                              <Box w="18px">
                                <IconFilter
                                  color={theme.colors.shared.fireOrange}
                                />
                              </Box>
                            </Center>
                            <Text
                              flex="1"
                              marginLeft="3"
                              fontWeight="medium"
                              fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}
                            >
                              Filter Lists
                            </Text>
                            <Hidden from="lg">
                              <Pressable
                                borderWidth="1"
                                borderColor={theme.colors.shared.soft4Gray}
                                borderRadius="md"
                                p={{ base: '6px', sm: '0.4rem' }}
                              >
                                <Box w="16px">
                                  <IconMoreVertical />
                                </Box>
                              </Pressable>
                            </Hidden>
                          </HStack>
                          <HStack>
                            <HStack
                              flex="1"
                              space={{ base: '2', sm: '4' }}
                              justifyContent={{
                                base: 'space-between',
                                sm: 'unset'
                              }}
                              flexWrap="wrap"
                            >
                              <Pressable
                                flexDirection="row"
                                alignItems="center"
                                paddingY="2"
                                paddingX="2"
                                marginBottom={{ base: '2', sm: '0' }}
                                backgroundColor={{
                                  base: 'white',
                                  sm: theme.colors.shared.aliceBlue
                                }}
                                borderWidth="1"
                                borderColor={theme.colors.shared.softGray}
                                borderRadius="lg"
                              >
                                <Box
                                  w="18px"
                                  marginRight={{ base: '1', sm: '2' }}
                                >
                                  <IconSliders />
                                </Box>
                                <Text fontSize="13px" fontWeight="medium">
                                  Name
                                </Text>
                                <Box
                                  w="18px"
                                  marginLeft={{ base: '1', sm: '2' }}
                                >
                                  <IconChevronDown rotation={180} />
                                </Box>
                              </Pressable>
                              <Pressable
                                flexDirection="row"
                                alignItems="center"
                                paddingY="2"
                                paddingX="2"
                                marginBottom={{ base: '2', sm: '0' }}
                                backgroundColor={{
                                  base: 'white',
                                  sm: theme.colors.shared.aliceBlue
                                }}
                                borderWidth="1"
                                borderColor={theme.colors.shared.softGray}
                                borderRadius="lg"
                              >
                                <Box
                                  w="20px"
                                  marginRight={{ base: '1', sm: '2' }}
                                >
                                  <IconCalendar />
                                </Box>
                                <Text fontSize="13px" fontWeight="medium">
                                  This Month
                                </Text>
                                <Box
                                  w="18px"
                                  marginLeft={{ base: '1', sm: '2' }}
                                >
                                  <IconChevronDown rotation={180} />
                                </Box>
                              </Pressable>
                              <Pressable
                                flexDirection="row"
                                alignItems="center"
                                paddingY="2"
                                paddingX="2"
                                marginBottom={{ base: '2', sm: '0' }}
                                backgroundColor={{
                                  base: 'white',
                                  sm: theme.colors.shared.aliceBlue
                                }}
                                borderWidth="1"
                                borderColor={theme.colors.shared.softGray}
                                borderRadius="lg"
                              >
                                <Box
                                  w="18px"
                                  marginRight={{ base: '1', sm: '2' }}
                                >
                                  <IconTag />
                                </Box>
                                <Hidden till="sm">
                                  <Text fontSize="13px" fontWeight="medium">
                                    Add Tags
                                  </Text>
                                </Hidden>
                                <Hidden from="sm">
                                  <Text fontSize="13px" fontWeight="medium">
                                    Tags
                                  </Text>
                                </Hidden>
                              </Pressable>
                            </HStack>
                            <Hidden till="sm">
                              <HStack space="2">
                                <Pressable
                                  flexDirection="row"
                                  alignItems="center"
                                  paddingY="2"
                                  paddingX="0.7rem"
                                  backgroundColor={
                                    theme.colors.shared.aliceBlue
                                  }
                                  borderWidth="1"
                                  borderColor={theme.colors.shared.softGray}
                                  borderRadius="lg"
                                >
                                  <Box w="16px">
                                    <IconList />
                                  </Box>
                                </Pressable>
                                <Pressable
                                  flexDirection="row"
                                  alignItems="center"
                                  paddingY="2"
                                  paddingX="0.7rem"
                                  backgroundColor={
                                    theme.colors.shared.aliceBlue
                                  }
                                  borderWidth="1"
                                  borderColor={theme.colors.shared.softGray}
                                  borderRadius="lg"
                                >
                                  <Box w="16px">
                                    <IconGroup />
                                  </Box>
                                </Pressable>
                              </HStack>
                            </Hidden>
                          </HStack>
                          <Hidden from="sm">
                            <Box position="relative" marginTop="2">
                              <Input
                                paddingLeft="10"
                                paddingRight="10"
                                paddingTop="0.6rem"
                                paddingBottom="0.6rem"
                                w="full"
                                borderRadius="lg"
                                borderWidth="1"
                                borderColor={theme.colors.shared.black_20}
                                backgroundColor={theme.colors.shared.soft6Gray}
                                fontSize="13px"
                                placeholder="Search Lists, tags"
                              />
                              <Box
                                position="absolute"
                                left="3"
                                h="full"
                                flexDir="row"
                                alignItems="center"
                              >
                                <Box w="20px">
                                  <IconSearch />
                                </Box>
                              </Box>
                              <Box
                                position="absolute"
                                right="0.6rem"
                                h="full"
                                flexDir="row"
                                alignItems="center"
                              >
                                <Pressable
                                  backgroundColor="white"
                                  borderWidth="1"
                                  borderColor={theme.colors.shared.black_20}
                                  borderRadius="md"
                                  p="1"
                                >
                                  <Box w="16px">
                                    <IconPlus />
                                  </Box>
                                </Pressable>
                              </Box>
                            </Box>
                          </Hidden>
                        </Box>
                        {/* <Box
                  marginX={{ base: '3', sm: '5' }}
                  marginBottom="0"
                  paddingX={{ base: '4', sm: '4' }}
                  paddingTop={{ base: '0', sm: '4' }}
                  paddingBottom="1"
                  borderBottomRadius="2xl"
                  backgroundColor="white"
                  borderWidth="1"
                  borderTopWidth="0"
                  borderColor={theme.colors.shared.softGray}
                >
                  <HStack flexWrap="wrap">
                    {[...Array(2)].map((_, i) => (
                      <Fragment key={i}>
                        <HStack
                          marginRight="3"
                          marginBottom="3"
                          paddingY="2"
                          paddingLeft="3"
                          paddingRight="2"
                          alignItems="center"
                          borderRadius="full"
                          borderWidth="1"
                          borderColor={theme.colors.shared.softGray}
                          backgroundColor={theme.colors.shared.aliceBlue}
                        >
                          <Text
                            fontSize="13px"
                            fontWeight="medium"
                            marginRight="2"
                          >
                            SEO {i}
                          </Text>
                          <Pressable>
                            <Box w="18px">
                              <IconX color="#545658" />
                            </Box>
                          </Pressable>
                        </HStack>
                      </Fragment>
                    ))}
                  </HStack>
                </Box> */}
                      </Box>
                    </Hidden>
                  </Modal>
                  <Hidden till="sm">
                    <Pressable
                      backgroundColor={theme.colors.shared.blueGentianFlower}
                      borderRadius="md"
                      paddingX="3"
                      paddingY="2"
                      marginRight="5"
                      onPress={handleFilterPress}
                      // _hover={{
                      //   backgroundColor: theme.colors.shared.brightBlue
                      // }}
                    >
                      <HStack alignItems="center" space="3">
                        <Box w="20px">
                          <IconFilter color="white" />
                        </Box>
                        <HStack>
                          <Text
                            color="white"
                            fontSize="xs"
                            fontWeight="medium"
                            textDecoration="none"
                          >
                            Filter
                          </Text>
                        </HStack>
                      </HStack>
                    </Pressable>
                  </Hidden>
                  <Hidden till="sm">
                    {enableExportButton && !hideLeads ? (
                      <CSVLink
                        data={exportLeads}
                        filename={'clienteye-export.csv'}
                        style={{ textDecoration: 'none' }}
                      >
                        <Box
                          backgroundColor={
                            theme.colors.shared.blueGentianFlower
                          }
                          borderRadius="md"
                          paddingX="3"
                          paddingY="2"
                          // _hover={{
                          //   backgroundColor: theme.colors.shared.brightBlue
                          // }}
                        >
                          <HStack alignItems="center" space="3">
                            <Box w="20px">
                              <IconUpload color="white" />
                            </Box>
                            <HStack>
                              <Text
                                color="white"
                                fontSize="xs"
                                fontWeight="medium"
                                textDecoration="none"
                              >
                                Export
                              </Text>
                            </HStack>
                          </HStack>
                        </Box>
                      </CSVLink>
                    ) : (
                      <Box
                        backgroundColor={theme.colors.shared.blueGentianFlower}
                        borderRadius="md"
                        paddingX="3"
                        paddingY="2"
                        // _hover={{
                        //   backgroundColor: theme.colors.shared.brightBlue
                        // }}
                      >
                        <HStack alignItems="center" space="3">
                          <Box w="20px">
                            <IconUpload color="white" />
                          </Box>
                          <HStack>
                            <Text
                              color="white"
                              fontSize="xs"
                              fontWeight="medium"
                              textDecoration="none"
                            >
                              Export
                            </Text>
                          </HStack>
                        </HStack>
                      </Box>
                    )}
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
                      <Box w="13.8%">
                        <Text fontSize="sm" fontWeight="medium">
                          Phone Number
                        </Text>
                      </Box>
                      <Box w="16%">
                        <Checkbox
                          value=""
                          onChange={(value) => exportAllLeads(value)}
                        />
                      </Box>
                    </HStack>
                    {leads?.map((l, i) => {
                      return (
                        <Pressable
                          disabled={hideLeads}
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
                              {hideLeads
                                ? 'Hidden'
                                : `${l.firstName} ${l.lastName}`}
                            </Text>
                          </Box>
                          <Box w="27%">
                            <Text
                              fontSize="sm"
                              fontWeight="medium"
                              isTruncated
                              maxW="315"
                            >
                              {hideLeads ? 'Hidden' : l.title}
                            </Text>
                          </Box>
                          <Box w="20%">
                            <Text
                              fontSize="sm"
                              fontWeight="medium"
                              isTruncated
                              maxW="240"
                            >
                              {hideLeads ? 'Hidden' : l.companyName}
                            </Text>
                          </Box>
                          <Box w="20.5%">
                            <Text
                              fontSize="sm"
                              fontWeight="medium"
                              isTruncated
                              maxW="250"
                            >
                              {hideLeads ? 'Hidden' : l.email || 'Unknown'}
                            </Text>
                          </Box>
                          <Box w="14%">
                            <Text
                              fontSize="sm"
                              fontWeight="medium"
                              isTruncated
                              maxW="150"
                            >
                              {hideLeads ? 'Hidden' : l.phone || 'Unknown'}
                            </Text>
                          </Box>
                          <Box w="16%">
                            <Pressable>
                              <Checkbox
                                value=""
                                isChecked={exportLeads.includes(l)}
                                onChange={(value) => exportLead(value, l)}
                              />
                            </Pressable>
                          </Box>
                        </Pressable>
                      )
                    })}
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
              </Box>
            </Box>
          </Box>
        ) : null}
      </DashboardLayout>
    </>
  )
}
