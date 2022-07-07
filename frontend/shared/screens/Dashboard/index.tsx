import {
  Box,
  Center,
  Hidden,
  Text,
  HStack,
  Checkbox,
  Pressable,
  Heading
} from 'native-base'
import { theme } from 'shared/styles/theme'
import { useEffect, useState } from 'react'
import DashboardLayout from 'shared/layouts/DashboardLayout'
import IconPlus from 'shared/components/icons/IconPlus'
import IconFileText from 'shared/components/icons/IconFileText'
import IconUpload from 'shared/components/icons/IconUpload'
import IconFilter from 'shared/components/icons/IconFilter'
import { LoadingSpinner } from 'shared/components/LoadingSpinner'
import { FilterModal } from 'shared/components/FilterModal'
import { LeadRows } from 'shared/components/LeadRows'
import { useRouter } from 'solito/router'
import { gql, useLazyQuery } from '@apollo/client'
import { CSVLink } from 'react-csv'
import { useRecoilState } from 'recoil'
import {
  userSubscriptionDataState,
  searchForLeadsVariablesState
} from '../../state'

const SEARCH_FOR_LEADS = gql`
  query SearchForLeads($input: searchForLeadsInput) {
    searchForLeads(input: $input) {
      message
      status
      leads
      count
    }
  }
`

export default function Dashboard() {
  const [finishedVerifyingAccess, setFinishedVerifyingAccess] =
    useState<boolean>(false)
  const [exportLeads, setExportLeads] = useState<any>([])
  const [leads, setLeads] = useState<any>([])
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [hasFilters, setHasFilters] = useState<boolean>(false)
  const [count, setCount] = useState<number>(0)
  const { push } = useRouter()
  const [searchForLeads, { data, loading, error }] =
    useLazyQuery(SEARCH_FOR_LEADS)
  const [userSubscriptionData] = useRecoilState<any>(userSubscriptionDataState)
  const [searchForLeadsVariables, setSearchForLeadsVariables] =
    useRecoilState<any>(searchForLeadsVariablesState)

  const handleSearch = async (
    hasFiltersParam: boolean,
    variablesParam?: any
  ) => {
    setModalIsOpen(false)

    setHasFilters(hasFiltersParam)

    const variables = variablesParam
      ? variablesParam
      : {
          input: {
            sortBy: 'date'
          }
        }
    setSearchForLeadsVariables(variables)

    await searchForLeads({
      fetchPolicy: 'network-only',
      nextFetchPolicy: 'cache-and-network',
      variables
    })
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

  const loadMore = async () => {
    const variables = {
      input: {
        ...searchForLeadsVariables.input
      }
    }
    variables.input.cursor = leads[leads.length - 1].id
    await handleSearch(true, variables)
  }

  useEffect(() => {
    if (userSubscriptionData?.redirectToPricingPage) {
      push('/pricing')
    } else {
      setFinishedVerifyingAccess(true)
    }
  }, [userSubscriptionData])

  useEffect(() => {
    if (data?.searchForLeads?.count) {
      setCount(data.searchForLeads.count)
    }
    if (data?.searchForLeads?.leads) {
      if (searchForLeadsVariables.input.cursor) {
        setLeads((prevLeads) => [...prevLeads, ...data.searchForLeads.leads])
      } else {
        setLeads(data.searchForLeads.leads)
      }
    }
  }, [data?.searchForLeads?.leads])

  useEffect(() => {
    ;(async () => {
      // initial search
      await handleSearch(false)
    })()
  }, [])

  const enableExportButton = exportLeads.length

  const hideLeads =
    userSubscriptionData?.activeSubscription === null &&
    userSubscriptionData?.isInTrial === false

  const clearFilters = async () => {
    await handleSearch(false)
  }

  return (
    <>
      <DashboardLayout>
        {error ? (
          <Heading marginTop="2" marginLeft="2">
            Error. Please try again.
          </Heading>
        ) : null}
        {data?.searchForLeads && finishedVerifyingAccess === true ? (
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
                <HStack alignItems="center" marginBottom="4" flex="none">
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
                    maxWidth="150px"
                  >
                    {hideLeads
                      ? "Your leads are hidden because you don't have an active subscription."
                      : 'Website Visitors'}
                  </Text>
                  <Text
                    flex="1"
                    fontWeight="light"
                    fontSize="sm"
                    width="300px"
                    marginLeft="3"
                  >
                    (Showing {leads?.length || 0} of {count || 0})
                  </Text>
                  <FilterModal
                    modalIsOpen={modalIsOpen}
                    setModalIsOpen={setModalIsOpen}
                    handleSearch={handleSearch}
                    handleFilterPress={handleFilterPress}
                    hasFilters={hasFilters}
                    setHasFilters={setHasFilters}
                  />
                  <Hidden till="sm">
                    <Pressable
                      backgroundColor={theme.colors.shared.clientEyePrimary}
                      borderRadius="md"
                      paddingX="3"
                      paddingY="2"
                      marginRight="5"
                      onPress={handleFilterPress}
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
                          backgroundColor={theme.colors.shared.clientEyePrimary}
                          borderRadius="md"
                          paddingX="3"
                          paddingY="2"
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
                        backgroundColor={theme.colors.shared.clientEyePrimary}
                        borderRadius="md"
                        paddingX="3"
                        paddingY="2"
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
                <Hidden till="sm">
                  <Box>
                    <HStack
                      paddingX="3"
                      paddingY="3"
                      borderBottomWidth="1"
                      borderBottomColor={theme.colors.shared.softGray}
                    >
                      <Box w="5%" />
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
                          accessibilityLabel="Select all leads"
                        />
                      </Box>
                    </HStack>
                    {leads?.length === 0 && !hasFilters ? (
                      <Text marginTop="4" textAlign="center">
                        You don't have any leads yet.
                      </Text>
                    ) : null}
                    {leads?.length === 0 && hasFilters ? (
                      <>
                        <Text marginTop="4" textAlign="center">
                          No leads found with those filters.
                        </Text>
                        <Center height="50px">
                          <Pressable
                            backgroundColor={
                              theme.colors.shared.clientEyePrimary
                            }
                            borderRadius="md"
                            paddingX="3"
                            paddingY="2"
                            marginTop="2"
                            onPress={clearFilters}
                          >
                            <Text
                              color="white"
                              fontSize="xs"
                              fontWeight="medium"
                              textDecoration="none"
                            >
                              Clear Filters
                            </Text>
                          </Pressable>
                        </Center>
                      </>
                    ) : null}
                    <LeadRows
                      leads={leads}
                      hideLeads={hideLeads}
                      exportLeads={exportLeads}
                      exportLead={exportLead}
                      push={push}
                    />
                  </Box>
                </Hidden>
              </Box>
            </Box>
          </Box>
        ) : null}
        {loading ? (
          <Box height="50px">
            <LoadingSpinner />
          </Box>
        ) : null}
        {leads.length && count !== leads.length && !hasFilters && !loading ? (
          <Center height="50px">
            <Pressable
              backgroundColor={theme.colors.shared.clientEyePrimary}
              borderRadius="md"
              paddingX="3"
              paddingY="2"
              marginTop="2"
              onPress={loadMore}
            >
              <Text
                color="white"
                fontSize="xs"
                fontWeight="medium"
                textDecoration="none"
              >
                Load more
              </Text>
            </Pressable>
          </Center>
        ) : null}
      </DashboardLayout>
    </>
  )
}
