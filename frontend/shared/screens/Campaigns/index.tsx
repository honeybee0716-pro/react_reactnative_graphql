import React from 'react'
import {
  Box,
  Center,
  Stack,
  Hidden,
  Text,
  HStack,
  Input,
  Pressable,
  useToast,
  AlertDialog,
  Button
} from 'native-base'
import { theme } from 'shared/styles/theme'
import { Dimensions } from 'react-native'
import { Fragment, useState, useRef } from 'react'
import DashboardLayout from 'shared/layouts/DashboardLayout'
import IconZap from 'shared/components/icons/IconZap'
import IconDownload from 'shared/components/icons/IconDownload'
import IconCalendar from 'shared/components/icons/IconCalendar'
import IconMoreVertical from 'shared/components/icons/IconMoreVertical'
import IconChevronDown from 'shared/components/icons/IconChevronDown'
import IconPlus from 'shared/components/icons/IconPlus'
import IconSliders from 'shared/components/icons/IconSliders'
import IconTrashBin from 'shared/components/icons/IconTrashBin'
import IconTag from 'shared/components/icons/IconTag'
import IconX from 'shared/components/icons/IconX'
import IconFilter from 'shared/components/icons/IconFilter'
import IconList from 'shared/components/icons/IconList'
import IconGroup from 'shared/components/icons/IconGroup'
import IconSearch from 'shared/components/icons/IconSearch'
import IconLayers from 'shared/components/icons/IconLayers'
import IconFlag from 'shared/components/icons/IconFlag'
import IconCheckCircle from 'shared/components/icons/IconCheckCircle'
import IconFourSquare from 'shared/components/icons/IconFourSquare'
import { gql, useLazyQuery, useMutation } from '@apollo/client'
import LoadingSpinner from '../../components/LoadingSpinner'

const { width } = Dimensions.get('window')

const GET_CUSTOMER_DETAILS_BUSINESS = gql`
  query getCustomerDetailsBusiness {
    getCustomerDetailsBusiness {
      message
      status
      dataBusiness
    }
  }
`

const SEND_MESSAGE = gql`
  mutation Mutation($sendMessageToUsersInput: sendMessageToUsersInput) {
    sendMessageToUsers(input: $sendMessageToUsersInput) {
      message
      status
      users
    }
  }
`

export default function Campaigns() {
  const toast = useToast()
  const [loading, setLoading] = React.useState(true)

  const [getC] = useLazyQuery(GET_CUSTOMER_DETAILS_BUSINESS)
  const [sM] = useMutation(SEND_MESSAGE)

  const [isOpen, setIsOpen] = React.useState(false)

  const onClose = () => setIsOpen(false)

  const [item1, setItem1] = useState({ msg: '' })

  const cancelRef = React.useRef(null)

  const [Bcustomers, setBcustomers] = useState([])
  const [openCreateNewCampaignModal, setOpenCreateNewCampaignModal] =
    useState(false)
  const refCreateNewCampaignModal = useRef<HTMLDivElement>()

  const getCs = () => {
    getC({
      onCompleted: async ({ getCustomerDetailsBusiness }) => {
        if (getCustomerDetailsBusiness?.status === 'success') {
          //console.log(getCustomerDetailsBusiness.dataBusiness)
          setBcustomers(getCustomerDetailsBusiness.dataBusiness)
          setLoading(false)
        }
        if (getCustomerDetailsBusiness?.message) {
          toast.show({
            description: getCustomerDetailsBusiness.message
          })
          return
        } else {
          toast.show({
            description: 'There was a problem....'
          })
        }
      },
      onError: (error) => {
        toast.show({
          description: `${error.message}`
        })
      }
    })
  }

  React.useEffect(() => {
    getCs()
  }, [])

  const sendMsg = async () => {
    const myele = document.getElementById('myct')
    const tempc = []
    if (myele !== undefined) {
      const ies = myele?.getElementsByTagName(`input`)
      if (ies?.length > 0) {
        for (let j = 0; j < ies?.length; j++) {
          if (ies[j].checked) {
            tempc.push(ies[j].value)
          }
        }
      }
      if (tempc.length > 0) {
        sM({
          variables: {
            sendMessageToUsersInput: {
              msg: item1.msg,
              users: tempc
            }
          },
          onCompleted: async (sendMessageToUsersData) => {
            console.log(sendMessageToUsersData)
            if (
              sendMessageToUsersData?.sendMessageToUsers?.status === 'success'
            ) {
              toast.show({
                description: 'message sent successfully'
              })

              return
            }
            if (sendMessageToUsersData?.sendMessageToUsers?.message) {
              toast.show({
                description: sendMessageToUsersData.sendMessageToUsers.message
              })
              return
            }
            toast.show({
              description: 'There was an error'
            })
            return
          },
          onError: (error) => {
            toast.show({
              description: `${error.message}`
            })
          }
        })
      }
    }
  }

  return (
    <>
      <DashboardLayout>
        {loading ? (
          <div>
            <LoadingSpinner />
          </div>
        ) : (
          <>
            {/*<Box flexDirection={{ base: 'column', lg: 'row' }}>
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
                    backgroundColor={theme.colors.shared.fireOrange_20}
                    paddingY="2"
                    paddingX="2"
                    borderRadius="lg"
                  >
                    <Box w="18px">
                      <IconFilter color={theme.colors.shared.fireOrange} />
                    </Box>
                  </Center>
                  <Text
                    flex="1"
                    marginLeft="3"
                    fontWeight="medium"
                    fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}
                  >
                    Filter Campaigns
                  </Text>
                  <Hidden from="lg">
                    <Pressable
                      borderWidth="1"
                      borderColor={theme.colors.shared.soft4Gray}
                      borderRadius="md"
                      p={{ base: '6px', sm: '0.4rem' }}
                      _hover={{
                        backgroundColor: theme.colors.shared.softerGray
                      }}
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
                    justifyContent={{ base: 'space-between', sm: 'unset' }}
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
                      <Box w="18px" marginRight={{ base: '1', sm: '2' }}>
                        <IconSliders />
                      </Box>
                      <Text fontSize="13px" fontWeight="medium">
                        Name
                      </Text>
                      <Box w="18px" marginLeft={{ base: '1', sm: '2' }}>
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
                      <Box w="20px" marginRight={{ base: '1', sm: '2' }}>
                        <IconCalendar />
                      </Box>
                      <Text fontSize="13px" fontWeight="medium">
                        This Month
                      </Text>
                      <Box w="18px" marginLeft={{ base: '1', sm: '2' }}>
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
                      <Box w="18px" marginRight={{ base: '1', sm: '2' }}>
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
                        backgroundColor={theme.colors.shared.aliceBlue}
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
                        backgroundColor={theme.colors.shared.aliceBlue}
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
              <Box
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
              </Box>
            </Box>
          </Hidden>
          <Box flex="1">
            <Box
              marginTop={{ base: '3', sm: '5' }}
              marginLeft={{ base: '3', sm: '5' }}
              marginRight={{ base: '3', sm: '5', lg: '0' }}
              marginBottom="5"
              paddingX={{ base: '4', sm: '5' }}
              paddingTop={{ base: '4', sm: '5' }}
              paddingBottom={{ base: '4', sm: '5' }}
              borderTopRadius="2xl"
              borderBottomRadius="2xl"
              backgroundColor="white"
              borderWidth="1"
              borderColor={theme.colors.shared.softGray}
            >
              <HStack alignItems="center" marginBottom="4">
                <Center
                  backgroundColor={theme.colors.shared.green3_15}
                  paddingY="2"
                  paddingX="2"
                  borderRadius="lg"
                >
                  <Box w="21px">
                    <IconFlag color={theme.colors.shared.green2} />
                  </Box>
                </Center>
                <Text
                  flex="1"
                  marginLeft="3"
                  fontWeight="medium"
                  fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}
                >
                  Manage Campaigns
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
                    onPress={() => setOpenCreateNewCampaignModal(true)}
                  >
                    <HStack alignItems="center" space="3">
                      <Box w="20px">
                        <IconPlus color="white" />
                      </Box>
                      <Text color="white" fontSize="xs" fontWeight="medium">
                        New Campaign
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
              <HStack
                justifyContent="space-between"
                alignItems="center"
                paddingX="2"
                marginBottom="5"
                marginTop="6"
              >
                <HStack space="4">
                  {[...Array(2)].map((_, i) => (
                    <Fragment key={',sjhgbdfa' + i}>
                      <HStack
                        paddingY="2"
                        paddingLeft="4"
                        paddingRight="3"
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
                          All
                        </Text>
                        <Box
                          backgroundColor={theme.colors.shared.soft7Gray}
                          borderRadius="full"
                          paddingX="2"
                        >
                          <Text fontSize="2xs" fontWeight="medium">
                            48
                          </Text>
                        </Box>
                      </HStack>
                    </Fragment>
                  ))}
                </HStack>
                <Box>
                  <Hidden from="sm">
                    <HStack alignItems="center" justifyContent="end">
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
                  </Hidden>
                  <Hidden till="sm">
                    <HStack alignItems="center" space="3">
                      <Pressable
                        borderWidth="1"
                        borderColor={theme.colors.shared.soft4Gray}
                        borderRadius="md"
                        p={{ base: '6px', sm: '0.4rem' }}
                        backgroundColor="white"
                        _hover={{
                          backgroundColor: theme.colors.shared.softerGray
                        }}
                      >
                        <Box w="16px">
                          <IconList />
                        </Box>
                      </Pressable>
                      <Pressable
                        borderWidth="1"
                        borderColor={theme.colors.shared.soft4Gray}
                        borderRadius="md"
                        p={{ base: '6px', sm: '0.4rem' }}
                        backgroundColor="white"
                        _hover={{
                          backgroundColor: theme.colors.shared.softerGray
                        }}
                      >
                        <Box w="16px">
                          <IconFourSquare />
                        </Box>
                      </Pressable>
                    </HStack>
                  </Hidden>
                </Box>
              </HStack>
              <Box
                borderBottomWidth="1"
                borderBottomColor={theme.colors.shared.softer2Gray}
              ></Box>
              
              <Stack flexDirection="row" flexWrap="wrap" marginTop="4">
                {[
                  { status: 'running' },
                  { status: 'completed' },
                  { status: 'paused' },
                  { status: 'running' },
                  ...(width >= 480
                    ? [
                        { status: 'completed' },
                        { status: 'paused' },
                        ...(width >= 991
                          ? [
                              { status: 'completed' },
                              { status: 'paused' },
                              { status: 'running' }
                            ]
                          : [])
                      ]
                    : [])
                ].map((list_manage_campaign, i) => (
                  <Fragment key={i}>
                    <Box w={{ base: 'full', sm: '1/2', lg: '1/3' }} p="2">
                      <Box
                        borderWidth="1"
                        borderColor={theme.colors.shared.softGray}
                        borderRadius="lg"
                        backgroundColor={theme.colors.shared.aliceBlue}
                      >
                        <HStack
                          alignItems="center"
                          paddingTop="4"
                          paddingX="4"
                          paddingBottom={{ base: '4', sm: '2' }}
                        >
                          <HStack flex="1" alignItems="center">
                            <Center
                              w="40px"
                              h="40px"
                              borderWidth="1"
                              borderColor={theme.colors.shared.softGray}
                              borderRadius="md"
                              marginRight="3"
                              backgroundColor={theme.colors.shared.soft7Gray}
                            >
                              <Box w="20px">
                                <IconZap />
                              </Box>
                            </Center>
                            <Hidden from="sm">
                              <>
                                <Text
                                  fontSize="md"
                                  fontWeight="semibold"
                                  marginBottom="1"
                                  numberOfLines={1}
                                >
                                  Social Media Marketing
                                </Text>
                                <HStack marginLeft="2" marginRight="2">
                                  {list_manage_campaign.status === 'running' ? (
                                    <>
                                      <Box
                                        backgroundColor={
                                          theme.colors.shared.blueGentianFlower
                                        }
                                        borderRadius="full"
                                        paddingX="2"
                                        paddingY="0"
                                      >
                                        <Text
                                          fontSize="9px"
                                          fontWeight="medium"
                                          color="white"
                                        >
                                          Running
                                        </Text>
                                      </Box>
                                    </>
                                  ) : list_manage_campaign.status ===
                                    'completed' ? (
                                    <>
                                      <Box
                                        backgroundColor={
                                          theme.colors.shared.lightGreen3
                                        }
                                        borderRadius="full"
                                        paddingX="2"
                                        paddingY="0"
                                      >
                                        <Text
                                          fontSize="9px"
                                          fontWeight="medium"
                                        >
                                          Completed
                                        </Text>
                                      </Box>
                                    </>
                                  ) : list_manage_campaign.status ===
                                    'paused' ? (
                                    <>
                                      <Box
                                        backgroundColor={
                                          theme.colors.shared.redOrange
                                        }
                                        borderRadius="full"
                                        paddingX="2"
                                        paddingY="0"
                                      >
                                        <Text
                                          fontSize="9px"
                                          fontWeight="medium"
                                          color="white"
                                        >
                                          Completed
                                        </Text>
                                      </Box>
                                    </>
                                  ) : null}
                                </HStack>
                              </>
                            </Hidden>
                          </HStack>
                          <Pressable
                            borderWidth="1"
                            borderColor={theme.colors.shared.soft4Gray}
                            borderRadius="md"
                            p={{ base: '6px', sm: '0.4rem' }}
                            backgroundColor="white"
                            _hover={{
                              backgroundColor: theme.colors.shared.softerGray
                            }}
                          >
                            <Box w="16px">
                              <IconMoreVertical />
                            </Box>
                          </Pressable>
                        </HStack>
                        <Hidden till="sm">
                          <Box paddingX="4" paddingBottom="3">
                            <Text
                              fontSize="sm"
                              fontWeight="semibold"
                              marginBottom="1"
                            >
                              Social Media Marketing
                            </Text>
                            <HStack>
                              {list_manage_campaign.status === 'running' ? (
                                <>
                                  <Box
                                    backgroundColor={
                                      theme.colors.shared.blueGentianFlower
                                    }
                                    borderRadius="full"
                                    paddingX="2"
                                    paddingY="0"
                                  >
                                    <Text
                                      fontSize="9px"
                                      fontWeight="medium"
                                      color="white"
                                    >
                                      Running
                                    </Text>
                                  </Box>
                                </>
                              ) : list_manage_campaign.status ===
                                'completed' ? (
                                <>
                                  <Box
                                    backgroundColor={
                                      theme.colors.shared.lightGreen3
                                    }
                                    borderRadius="full"
                                    paddingX="2"
                                    paddingY="0"
                                  >
                                    <Text fontSize="9px" fontWeight="medium">
                                      Completed
                                    </Text>
                                  </Box>
                                </>
                              ) : list_manage_campaign.status === 'paused' ? (
                                <>
                                  <Box
                                    backgroundColor={
                                      theme.colors.shared.redOrange
                                    }
                                    borderRadius="full"
                                    paddingX="2"
                                    paddingY="0"
                                  >
                                    <Text
                                      fontSize="9px"
                                      fontWeight="medium"
                                      color="white"
                                    >
                                      Completed
                                    </Text>
                                  </Box>
                                </>
                              ) : null}
                            </HStack>
                          </Box>
                        </Hidden>
                        <HStack
                          justifyContent="space-between"
                          alignItems="center"
                          borderTopWidth="1"
                          borderTopColor={theme.colors.shared.softGray}
                          paddingTop="3"
                          paddingX="4"
                          paddingBottom="3"
                        >
                          <Text fontSize="2xs" fontWeight="medium">
                            Last year
                          </Text>
                          <HStack space="1" justifyContent="end">
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
                                  <IconLayers />
                                </Box>
                              </Pressable>
                            </Box>
                          </HStack>
                        </HStack>
                      </Box>
                    </Box>
                  </Fragment>
                ))}
              </Stack>
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
          <Hidden till="lg">
            <Box width="430px">
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
                    backgroundColor={theme.colors.shared.fireOrange_20}
                    paddingY="2"
                    paddingX="2"
                    borderRadius="lg"
                  >
                    <Box w="18px">
                      <IconSliders color={theme.colors.shared.fireOrange} />
                    </Box>
                  </Center>
                  <Text
                    flex="1"
                    marginLeft="3"
                    fontWeight="medium"
                    fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}
                  >
                    Filter Campaigns
                  </Text>
                </HStack>
                <Text fontSize="sm" fontWeight="500" marginBottom="4">
                  Sort By:
                </Text>
                <HStack marginBottom="6">
                  <Box
                    flex="1"
                    borderWidth="1"
                    borderColor={theme.colors.shared.softGray}
                    borderLeftRadius="lg"
                    paddingY="0.35rem"
                  >
                    <Text
                      fontSize="13px"
                      fontWeight="medium"
                      textAlign="center"
                    >
                      Company
                    </Text>
                  </Box>
                  <Box
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
                  </Box>
                  <Box
                    flex="1"
                    borderTopWidth="1"
                    borderBottomWidth="1"
                    borderRightWidth="1"
                    borderColor={theme.colors.shared.softGray}
                    borderRightRadius="lg"
                    paddingY="0.35rem"
                  >
                    <Text
                      fontSize="13px"
                      fontWeight="medium"
                      textAlign="center"
                    >
                      Date
                    </Text>
                  </Box>
                </HStack>
                <Text fontSize="sm" fontWeight="500" marginBottom="3">
                  Tags :
                </Text>
                <Box position="relative" marginBottom="3">
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
                    placeholder="Search & add tags"
                  />
                  <Box
                    position="absolute"
                    left="3"
                    h="full"
                    flexDir="row"
                    alignItems="center"
                  >
                    <Box w="18px">
                      <IconTag />
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
                <HStack flexWrap="wrap" marginBottom="4">
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
                </HStack>
                <Box flexDirection="row" justifyContent="space-between">
                  <Pressable
                    backgroundColor={theme.colors.shared.brightBlue}
                    borderRadius="lg"
                    w="40%"
                    paddingY="2"
                    _hover={{
                      backgroundColor: theme.colors.shared.blueGentianFlower
                    }}
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
                    w="40%"
                    paddingY="2"
                    _hover={{
                      backgroundColor: theme.colors.shared.softerGray
                    }}
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
              <Box
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
                    backgroundColor={theme.colors.shared.darkPink2_15}
                    paddingY="2"
                    paddingX="2"
                    borderRadius="lg"
                  >
                    <Box w="18px">
                      <IconCheckCircle color={theme.colors.shared.darkPink2} />
                    </Box>
                  </Center>
                  <Text
                    flex="1"
                    marginLeft="3"
                    fontWeight="medium"
                    fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}
                  >
                    Recently Completed
                  </Text>
                  <Pressable
                    borderWidth="1"
                    borderColor={theme.colors.shared.soft4Gray}
                    borderRadius="md"
                    p={{ base: '6px', sm: '0.4rem' }}
                    _hover={{
                      backgroundColor: theme.colors.shared.softerGray
                    }}
                  >
                    <Box w="16px">
                      <IconMoreVertical />
                    </Box>
                  </Pressable>
                </HStack>
                <HStack
                  marginBottom="3"
                  paddingY="3"
                  paddingLeft="4"
                  paddingRight="4"
                  alignItems="center"
                  borderRadius="lg"
                  borderWidth="1"
                  borderColor={theme.colors.shared.softGray}
                  backgroundColor={theme.colors.shared.aliceBlue}
                >
                  <Center
                    w="40px"
                    h="40px"
                    borderWidth="1"
                    borderColor={theme.colors.shared.softGray}
                    borderRadius="md"
                    marginRight="2"
                    backgroundColor="white"
                  >
                    <Box w="20px">
                      <IconZap />
                    </Box>
                  </Center>
                  <Box flex="1">
                    <Text fontSize="sm" fontWeight="medium" marginRight="2">
                      Advertising Campaign
                    </Text>
                    <Text
                      fontSize="11px"
                      fontWeight="medium"
                      marginRight="2"
                      color="#585858A8"
                    >
                      2 minutes ago
                    </Text>
                  </Box>
                  <Pressable>
                    <Box w="18px">
                      <IconCheckCircle
                        color={theme.colors.shared.lightGreen2}
                      />
                    </Box>
                  </Pressable>
                </HStack>
                <HStack
                  marginBottom="4"
                  paddingY="3"
                  paddingLeft="4"
                  paddingRight="4"
                  alignItems="center"
                  borderRadius="lg"
                  borderWidth="1"
                  borderColor={theme.colors.shared.softGray}
                  backgroundColor={theme.colors.shared.aliceBlue}
                >
                  <Center
                    w="40px"
                    h="40px"
                    borderWidth="1"
                    borderColor={theme.colors.shared.softGray}
                    borderRadius="md"
                    marginRight="2"
                    backgroundColor="white"
                  >
                    <Box w="20px">
                      <IconZap />
                    </Box>
                  </Center>
                  <Box flex="1">
                    <Text fontSize="sm" fontWeight="medium" marginRight="2">
                      Sales Campaign
                    </Text>
                    <Text
                      fontSize="11px"
                      fontWeight="medium"
                      marginRight="2"
                      color="#585858A8"
                    >
                      3 days ago
                    </Text>
                  </Box>
                  <Pressable>
                    <Box w="18px">
                      <IconCheckCircle
                        color={theme.colors.shared.lightGreen2}
                      />
                    </Box>
                  </Pressable>
                </HStack>
                <Box flexDirection="row" marginBottom="1">
                  <Pressable
                    backgroundColor={theme.colors.shared.aliceBlue}
                    borderWidth="1"
                    borderColor={theme.colors.shared.softGray}
                    borderRadius="lg"
                    w="40%"
                    paddingY="2"
                    _hover={{
                      backgroundColor: theme.colors.shared.softerGray
                    }}
                  >
                    <Text
                      color={theme.colors.shared.soft2Gray}
                      fontSize="sm"
                      fontWeight="medium"
                      textAlign="center"
                    >
                      Clear All
                    </Text>
                  </Pressable>
                </Box>
              </Box>
            </Box>
          </Hidden>
        </Box>*/}
            <Box>
              <table
                style={{
                  marginTop: '40px',
                  padding: '10px',
                  marginBottom: '50px'
                }}
                id="myct"
              >
                <tr style={{ textAlign: 'left', height: '50px' }}>
                  <th>Email</th>
                  <th>name</th>
                </tr>
                {Bcustomers.map((c, i) => {
                  return (
                    <tr
                      style={{ backgroundColor: 'white', height: '35px' }}
                      key={i}
                    >
                      <td>{c?.email}</td>
                      <td>{c?.firstName}</td>
                      <td>
                        <input type="checkbox" value={c?.email} />
                      </td>
                    </tr>
                  )
                })}
                <button
                  style={{ margin: '10px', marginLeft: '0px' }}
                  onClick={() => {
                    setIsOpen(!isOpen)
                  }}
                >
                  Send Message
                </button>
              </table>
              <AlertDialog
                leastDestructiveRef={cancelRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <AlertDialog.Content>
                  <AlertDialog.CloseButton />
                  <AlertDialog.Header>Send Message</AlertDialog.Header>
                  <AlertDialog.Body>
                    Please write the message that you want to send to selected
                    users
                    <textarea
                      onChange={(e) =>
                        setItem1({ ...item1, msg: e.target.value })
                      }
                      placeholder="message..."
                    ></textarea>
                  </AlertDialog.Body>
                  <AlertDialog.Footer>
                    <Button.Group space={2}>
                      <Button
                        variant="unstyled"
                        colorScheme="danger"
                        onPress={onClose}
                        ref={cancelRef}
                      >
                        Cancel
                      </Button>

                      <Button
                        colorScheme="success"
                        onPress={() => {
                          sendMsg()
                          onClose()
                        }}
                      >
                        Send
                      </Button>
                    </Button.Group>
                  </AlertDialog.Footer>
                </AlertDialog.Content>
              </AlertDialog>
            </Box>
          </>
        )}
      </DashboardLayout>
    </>
  )
}
