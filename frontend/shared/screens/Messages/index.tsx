import {
  Box,
  Center,
  Stack,
  Hidden,
  Text,
  HStack,
  Input,
  Pressable
} from 'native-base'
import React from 'react'
import { theme } from 'shared/styles/theme'
import { Dimensions } from 'react-native'
import { Fragment, useState, useRef } from 'react'
import DashboardLayout from 'shared/layouts/DashboardLayout'
import IconDownload from 'shared/components/icons/IconDownload'
import IconClock from 'shared/components/icons/IconClock'
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
import IconMessages from 'shared/components/icons/IconMessages'
import IconGoogleGLogo from 'shared/components/icons/IconGoogleGLogo'
import IconMicrosoftLogo from 'shared/components/icons/IconMicrosoftLogo'
import IconMetaLogo from 'shared/components/icons/IconMetaLogo'
import IconLayers from 'shared/components/icons/IconLayers'
import CreateNewMessageModal from './components/CreateNewMessageModal'

const { width, height } = Dimensions.get('window')

export default function Messages() {
  const [openCreateNewMessageModal, setOpenCreateNewMessageModal] =
    useState(false)
  const refCreateNewMessageModal = useRef<HTMLDivElement>()

  return (
    <>
      <CreateNewMessageModal
        refCreateNewMessageModal={refCreateNewMessageModal}
        openCreateNewMessageModal={openCreateNewMessageModal}
        setOpenCreateNewMessageModal={setOpenCreateNewMessageModal}
      />

      <DashboardLayout>
        <Box flexDirection={{ base: 'column', lg: 'row' }}>
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
                    Filter Lists
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
                  backgroundColor={theme.colors.shared.purple2_15}
                  paddingY="2"
                  paddingX="2"
                  borderRadius="lg"
                >
                  <Box w="21px">
                    <IconMessages color={theme.colors.shared.purple2} />
                  </Box>
                </Center>
                <Text
                  flex="1"
                  marginLeft="3"
                  fontWeight="medium"
                  fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}
                >
                  Manage Messages
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
                    onPress={() => setOpenCreateNewMessageModal(true)}
                  >
                    <HStack alignItems="center" space="3">
                      <Box w="20px">
                        <IconPlus color="white" />
                      </Box>
                      <Text color="white" fontSize="xs" fontWeight="medium">
                        New Message
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
              {/* Manage Messages */}
              <Stack flexDirection="row" flexWrap="wrap">
                {[...Array(width >= 480 ? (width >= 991 ? 9 : 6) : 4)].map(
                  (_, i) => (
                    <Fragment key={i}>
                      <Box w={{ base: 'full', sm: '1/2', lg: '1/3' }} p="2">
                        <Box
                          p="4"
                          borderWidth="1"
                          borderColor={theme.colors.shared.softGray}
                          borderRadius="lg"
                          backgroundColor={theme.colors.shared.aliceBlue}
                        >
                          <HStack
                            alignItems="center"
                            justifyContent="space-between"
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
                              <Box w="22px">
                                <IconMetaLogo />
                              </Box>
                            </Center>
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
                          <Text
                            fontSize="sm"
                            fontWeight="semibold"
                            marginTop="2"
                          >
                            Social Media Markeing
                          </Text>
                          <Text fontSize="2xs" fontWeight="medium">
                            Meta - Facebook
                          </Text>
                          <Text
                            fontSize="xs"
                            fontWeight="medium"
                            color="gray.600"
                            marginTop="2"
                          >
                            Praesent vitae tincidunt libero. Maecenas lobortis
                            odio tortor, eget placerat eros aliquet et.
                          </Text>
                          <HStack
                            justifyContent="space-between"
                            alignItems="center"
                            marginTop="2"
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
                  )
                )}
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
                    Filter Messages
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
                    <Box w="22px">
                      <IconGoogleGLogo />
                    </Box>
                  </Center>
                  <Box flex="1">
                    <Text fontSize="sm" fontWeight="medium" marginRight="2">
                      Cloud Services
                    </Text>
                    <Text fontSize="11px" fontWeight="medium" marginRight="2">
                      Google LLC
                    </Text>
                  </Box>
                  <Pressable>
                    <Box w="18px">
                      <IconX />
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
                    <Box w="22px">
                      <IconMicrosoftLogo />
                    </Box>
                  </Center>
                  <Box flex="1">
                    <Text fontSize="sm" fontWeight="medium" marginRight="2">
                      Software Development
                    </Text>
                    <Text fontSize="11px" fontWeight="medium" marginRight="2">
                      Microsoft LLC
                    </Text>
                  </Box>
                  <Pressable>
                    <Box w="18px">
                      <IconX />
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
        </Box>
      </DashboardLayout>
    </>
  )
}
