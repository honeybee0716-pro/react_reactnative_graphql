import React from 'react'
import {
  Box,
  Center,
  Hidden,
  Text,
  Image,
  HStack,
  VStack,
  Checkbox,
  Pressable
} from 'native-base'
import { theme } from 'shared/styles/theme'
import { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import DashboardLayout from 'shared/layouts/DashboardLayout'
import IconCornerUpRight from 'shared/components/icons/IconCornerUpRight'
import IconDollarSign from 'shared/components/icons/IconDollarSign'
import IconDownload from 'shared/components/icons/IconDownload'
import IconMoreVertical from 'shared/components/icons/IconMoreVertical'
import IconChevronDown from 'shared/components/icons/IconChevronDown'
import IconCreditCard from 'shared/components/icons/IconCreditCard'
import IconLightcoin from 'shared/components/icons/IconLightcoin'
import IconNFC from 'shared/components/icons/IconNFC'
import IconEdit from 'shared/components/icons/IconEdit'
import IconMasterCard from 'shared/components/icons/IconMasterCard'
import IconVISA from 'shared/components/icons/IconVISA'
import IconHome from 'shared/components/icons/IconHome'
import IconGlobe from 'shared/components/icons/IconGlobe'
import IconPlus from 'shared/components/icons/IconPlus'

export default function Billing() {
  return (
    <>
      <DashboardLayout>
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
            >
              <Hidden till="lg">
                <HStack alignItems="center" marginBottom="4">
                  <Center
                    backgroundColor={theme.colors.shared.green_10}
                    paddingY="2"
                    paddingX="2"
                    borderRadius="lg"
                  >
                    <Box w="20px">
                      <IconDollarSign color={theme.colors.shared.green} />
                    </Box>
                  </Center>
                  <Text
                    marginLeft="3"
                    fontWeight="medium"
                    fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}
                  >
                    Billing Information
                  </Text>
                </HStack>
              </Hidden>
              <Box
                flexDirection={{ base: 'unset', sm: 'row' }}
                borderRadius="2xl"
                backgroundColor="white"
              >
                {/* Billing account */}
                <Box flex="1" flexDirection="column">
                  <Hidden from="lg">
                    <Box
                      borderTopWidth="1"
                      borderLeftWidth="1"
                      borderRightWidth="1"
                      borderColor={theme.colors.shared.softGray}
                      borderTopRadius="xl"
                      flexDirection="row"
                    >
                      <HStack
                        w={{ base: 'full', sm: '55%', lg: '1/2' }}
                        paddingLeft={{ base: '4', sm: '6' }}
                        paddingRight={{ base: '4', sm: '0' }}
                        paddingTop={{ base: '4', sm: '5' }}
                        alignItems="center"
                      >
                        <Center
                          backgroundColor={theme.colors.shared.green_10}
                          paddingY="2"
                          paddingX="2"
                          borderRadius="lg"
                        >
                          <Box w="20px">
                            <IconDollarSign color={theme.colors.shared.green} />
                          </Box>
                        </Center>
                        <Text
                          flex="1"
                          marginLeft="3"
                          fontWeight="medium"
                          fontSize="xl"
                        >
                          Billing Account
                        </Text>
                        <Hidden from="sm">
                          <Pressable
                            borderWidth="1"
                            borderColor={theme.colors.shared.soft4Gray}
                            borderRadius="md"
                            p={{ base: '6px', sm: '0.3rem' }}
                          >
                            <Box w="16px">
                              <IconMoreVertical />
                            </Box>
                          </Pressable>
                        </Hidden>
                      </HStack>
                      <Hidden till="sm">
                        <HStack
                          w={{ base: '45%', lg: '1/2' }}
                          paddingRight="6"
                          paddingTop="5"
                          alignItems="center"
                          justifyContent="end"
                          borderLeftWidth="1"
                          borderColor={theme.colors.shared.softGray}
                        >
                          <Pressable
                            borderWidth="1"
                            borderColor={theme.colors.shared.soft4Gray}
                            borderRadius="md"
                            p={{ base: '6px', sm: '0.3rem' }}
                          >
                            <Box w="16px">
                              <IconMoreVertical />
                            </Box>
                          </Pressable>
                        </HStack>
                      </Hidden>
                    </Box>
                  </Hidden>
                  <Box flexDirection="row">
                    <Box
                      w={{ base: 'full', sm: '55%', lg: '1/2' }}
                      paddingX={{ base: '4', sm: '6' }}
                      paddingTop={{ base: '5', sm: '5' }}
                      paddingBottom={{ base: '3', sm: '5' }}
                      borderTopWidth={{ base: '0', lg: '1' }}
                      borderBottomWidth="1"
                      borderRightWidth={{ base: '1', sm: '0' }}
                      borderLeftWidth="1"
                      borderColor={theme.colors.shared.softGray}
                      borderTopLeftRadius={{ base: 'none', lg: 'xl' }}
                    >
                      <Text
                        fontSize={{ base: 'md', sm: 'lg' }}
                        fontWeight="medium"
                      >
                        Payment Method
                      </Text>
                      <Pressable
                        flexDirection="row"
                        alignItems="center"
                        backgroundColor={theme.colors.shared.aliceBlue}
                        borderWidth="1"
                        borderColor={theme.colors.shared.softGray}
                        borderRadius="xl"
                        paddingX="4"
                        paddingY="4"
                        marginTop="4"
                        _hover={{
                          backgroundColor: theme.colors.shared.softerGray
                        }}
                      >
                        <Box w="43px" marginRight="2">
                          <IconMasterCard />
                        </Box>
                        <Box flex="1">
                          <Text fontSize="sm" fontWeight="medium">
                            Mastercard ending in 7322
                          </Text>
                          <Text fontSize="xs" fontWeight="medium">
                            Expiry : 05-09-2022
                          </Text>
                        </Box>
                        <Box w="20px">
                          <IconChevronDown rotation={180} />
                        </Box>
                      </Pressable>
                      <Hidden from="sm">
                        <>
                          <Text marginTop="4" fontSize="md" fontWeight="medium">
                            Billing Information
                          </Text>
                          <Box marginTop="4">
                            <HStack>
                              <Box>
                                <Box w="24px">
                                  <IconHome />
                                </Box>
                              </Box>
                              <Text
                                marginLeft="4"
                                fontSize="sm"
                                fontWeight="medium"
                              >
                                4200 Wisconsin Ave NW, Washington Delaware,
                                20016
                              </Text>
                            </HStack>
                            <HStack marginTop="2">
                              <Box>
                                <Box w="24px">
                                  <IconGlobe />
                                </Box>
                              </Box>
                              <Text
                                marginLeft="4"
                                fontSize="sm"
                                fontWeight="medium"
                              >
                                United States
                              </Text>
                            </HStack>
                          </Box>
                        </>
                      </Hidden>
                    </Box>
                    <Hidden till="sm">
                      <Box
                        w={{ base: '45%', lg: '1/2' }}
                        paddingX="6"
                        paddingY="5"
                        borderTopWidth={{ base: '0', lg: '1' }}
                        borderBottomWidth={{ base: '0', lg: '1' }}
                        borderLeftWidth="1"
                        borderRightWidth="1"
                        borderColor={theme.colors.shared.softGray}
                        borderTopRightRadius={{ base: 'none', lg: 'xl' }}
                      >
                        <Text fontSize="lg" fontWeight="medium">
                          Billing Information
                        </Text>
                        <Box marginTop="4">
                          <HStack>
                            <Box>
                              <Box w="18px">
                                <IconHome />
                              </Box>
                            </Box>
                            <Text
                              marginLeft="4"
                              fontSize="13px"
                              fontWeight="medium"
                            >
                              4200 Wisconsin Ave NW, Washington Delaware, 20016
                            </Text>
                          </HStack>
                          <HStack marginTop="2">
                            <Box>
                              <Box w="18px">
                                <IconGlobe />
                              </Box>
                            </Box>
                            <Text
                              marginLeft="4"
                              fontSize="13px"
                              fontWeight="medium"
                            >
                              United States
                            </Text>
                          </HStack>
                        </Box>
                      </Box>
                    </Hidden>
                  </Box>
                  <Box
                    w="full"
                    borderLeftWidth="1"
                    borderBottomWidth="1"
                    borderRightWidth="1"
                    borderColor={theme.colors.shared.softGray}
                    borderBottomRadius="xl"
                    flexDirection="row"
                    alignItems="center"
                  >
                    <Box
                      w={{ base: 'full', sm: '55%', lg: '1/2' }}
                      paddingLeft={{ base: '4', sm: '6' }}
                      paddingRight={{ base: '2', sm: '0' }}
                      paddingY="2"
                      flexDirection="row"
                      alignItems="center"
                    >
                      <Text flex="1" fontSize="xs" fontWeight="medium">
                        Last Updated on : 18-03-2022
                      </Text>
                      <Hidden from="sm">
                        <Pressable
                          backgroundColor={theme.colors.shared.white}
                          flexDirection="row"
                          justifyContent="center"
                          alignItems="center"
                          paddingX="4"
                          paddingY="1"
                          borderWidth="1"
                          borderColor={theme.colors.shared.softGray}
                          borderRadius="md"
                          _hover={{
                            backgroundColor: theme.colors.shared.softGray
                          }}
                        >
                          <Box w="13px" marginRight="2">
                            <IconEdit />
                          </Box>
                          <Text fontSize="xs" fontWeight="medium">
                            Edit
                          </Text>
                        </Pressable>
                      </Hidden>
                    </Box>
                    <Hidden till="sm">
                      <Box
                        w={{ base: '45%', lg: '1/2' }}
                        paddingRight="3"
                        paddingY="2"
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="end"
                        borderLeftWidth={{ base: '1', lg: '0' }}
                        borderColor={theme.colors.shared.softGray}
                      >
                        <Pressable
                          backgroundColor={theme.colors.shared.brightBlue}
                          flexDirection="row"
                          justifyContent="center"
                          alignItems="center"
                          paddingX="8"
                          paddingY="2"
                          borderRadius="lg"
                          _hover={{
                            backgroundColor:
                              theme.colors.shared.blueGentianFlower
                          }}
                        >
                          <Box w="13px" marginRight="2">
                            <IconEdit color="white" />
                          </Box>
                          <Text color="white" fontSize="xs" fontWeight="medium">
                            Edit
                          </Text>
                        </Pressable>
                      </Box>
                    </Hidden>
                  </Box>
                </Box>
              </Box>
            </Box>
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
                          <IconCreditCard color={theme.colors.shared.green} />
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
                                  source={require('shared/images/saved-card.png')}
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
                    <Box marginTop="4">
                      <Box
                        flexDirection="row"
                        alignItems="center"
                        backgroundColor={theme.colors.shared.aliceBlue}
                        borderWidth="1"
                        borderColor={theme.colors.shared.softGray}
                        borderRadius="xl"
                        paddingX="4"
                        paddingY="4"
                      >
                        <Box width="33px">
                          <IconMasterCard />
                        </Box>
                        <Box flex="1" marginLeft="4">
                          <Text
                            color={theme.colors.shared.softBlack}
                            fontWeight="medium"
                            fontSize="13px"
                          >
                            Mastercard ending in 7322
                          </Text>
                          <Text
                            color={theme.colors.shared.soft5Gray}
                            fontWeight="medium"
                            fontSize="11px"
                          >
                            Expiry : 05-09-2022
                          </Text>
                        </Box>
                        <Pressable
                          backgroundColor="white"
                          borderWidth="1"
                          borderColor={theme.colors.shared.softGray}
                          borderRadius="md"
                          paddingX="2"
                          paddingY="2"
                          _hover={{
                            backgroundColor: theme.colors.shared.softerGray
                          }}
                        >
                          <Box w="14px">
                            <IconEdit />
                          </Box>
                        </Pressable>
                      </Box>
                    </Box>
                    <Box marginTop="4">
                      <Box
                        flexDirection="row"
                        alignItems="center"
                        backgroundColor={theme.colors.shared.aliceBlue}
                        borderWidth="1"
                        borderColor={theme.colors.shared.softGray}
                        borderRadius="xl"
                        paddingX="4"
                        paddingY="4"
                      >
                        <Box w="33px">
                          <IconVISA />
                        </Box>
                        <Box flex="1" marginLeft="4">
                          <Text
                            color={theme.colors.shared.softBlack}
                            fontWeight="medium"
                            fontSize="13px"
                          >
                            Visa ending in 6534
                          </Text>
                          <Text
                            color={theme.colors.shared.soft5Gray}
                            fontWeight="medium"
                            fontSize="11px"
                          >
                            Expiry : 05-09-2022
                          </Text>
                        </Box>
                        <Pressable
                          backgroundColor="white"
                          borderWidth="1"
                          borderColor={theme.colors.shared.softGray}
                          borderRadius="md"
                          paddingX="2"
                          paddingY="2"
                          _hover={{
                            backgroundColor: theme.colors.shared.softerGray
                          }}
                        >
                          <Box w="14px">
                            <IconEdit />
                          </Box>
                        </Pressable>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Hidden>
            {/* Transaction History */}
            <Box
              marginBottom={{ base: '3', lg: '5' }}
              marginLeft={{ base: '3', lg: '5' }}
              marginTop={{ base: '3', lg: '0' }}
              marginRight={{ base: '3', lg: '0' }}
              paddingX={{ base: '4', sm: '5' }}
              paddingTop={{ base: '4', sm: '5' }}
              paddingBottom="4"
              borderBottomRadius="2xl"
              borderTopRadius={{ base: '2xl', lg: 'none' }}
              backgroundColor="white"
              borderWidth="1"
              borderTopWidth={{ base: '1', lg: '0' }}
              borderColor={theme.colors.shared.softer3Gray}
            >
              <HStack alignItems="center" marginBottom="4">
                <Center
                  backgroundColor={theme.colors.shared.redOrange_20}
                  paddingY="2"
                  paddingX="2"
                  borderRadius="lg"
                >
                  <Box w="18px">
                    <IconCornerUpRight color={theme.colors.shared.redOrange} />
                  </Box>
                </Center>
                <Text
                  flex="1"
                  marginLeft="3"
                  fontWeight="medium"
                  fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}
                >
                  Transaction History
                </Text>
                <Hidden till="sm">
                  <Center>
                    <Pressable
                      backgroundColor={theme.colors.shared.aliceBlue}
                      borderWidth="1"
                      borderRadius="md"
                      paddingX="3"
                      paddingY="2"
                      borderColor={theme.colors.shared.softer3Gray}
                      _hover={{
                        backgroundColor: theme.colors.shared.softerGray
                      }}
                    >
                      <HStack alignItems="center" space="3">
                        <Box w="16px">
                          <IconDownload />
                        </Box>
                        <Text fontSize="xs" fontWeight="medium">
                          Download All
                        </Text>
                      </HStack>
                    </Pressable>
                  </Center>
                </Hidden>
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
              {/* List recent top up tablet to dekstop */}
              <Hidden till="sm">
                <Box>
                  <HStack paddingX="3" paddingY="3">
                    <Box w="5%">
                      <Checkbox value="" />
                    </Box>
                    <Box w="24%">
                      <Text fontSize="sm" fontWeight="medium">
                        Name
                      </Text>
                    </Box>
                    <Box w="15%">
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        textAlign="center"
                      >
                        Date
                      </Text>
                    </Box>
                    <Box w="28%">
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        textAlign="center"
                      >
                        Payment Method
                      </Text>
                    </Box>
                    <Box w="15%">
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        textAlign="center"
                      >
                        Amount
                      </Text>
                    </Box>
                    <Box w="13%">
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        textAlign="center"
                      >
                        Actions
                      </Text>
                    </Box>
                  </HStack>
                  {[...Array(5)].map((_, i) => (
                    <HStack
                      key={i}
                      marginTop="3"
                      backgroundColor={theme.colors.shared.aliceBlue}
                      borderWidth="1"
                      borderColor={theme.colors.shared.softGray}
                      borderRadius="md"
                      paddingX="3"
                      paddingY="3"
                      alignItems="center"
                    >
                      <Box w="5%">
                        <Checkbox value="" />
                      </Box>
                      <Box w="24%">
                        <Text fontSize="sm" fontWeight="medium">
                          SEO Campaigns
                        </Text>
                      </Box>
                      <Box w="15%">
                        <Text
                          fontSize="sm"
                          fontWeight="medium"
                          textAlign="center"
                        >
                          08-04-2022
                        </Text>
                      </Box>
                      <Box w="28%">
                        <HStack alignItems="center" justifyContent="center">
                          <Box w="24.75px" marginRight="1">
                            <IconMasterCard />
                          </Box>
                          <Text fontSize="sm" fontWeight="medium">
                            Mastercard - 7322
                          </Text>
                        </HStack>
                      </Box>
                      <Box w="15%">
                        <Text
                          color={theme.colors.shared.redText}
                          fontSize="sm"
                          fontWeight="medium"
                          textAlign="center"
                        >
                          $300.00
                        </Text>
                      </Box>
                      <Box w="13%">
                        <HStack space="1" justifyContent="center">
                          <Box>
                            <Pressable
                              backgroundColor="white"
                              borderWidth="1"
                              borderColor={theme.colors.shared.soft4Gray}
                              borderRadius="md"
                              p={{ base: '6px', sm: '0.3rem' }}
                              _hover={{
                                backgroundColor: theme.colors.shared.softerGray
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
                                backgroundColor: theme.colors.shared.softerGray
                              }}
                            >
                              <Box w="16px">
                                <IconMoreVertical />
                              </Box>
                            </Pressable>
                          </Box>
                        </HStack>
                      </Box>
                    </HStack>
                  ))}
                </Box>
              </Hidden>
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
                        <HStack alignItems="center" w="full" marginTop="2">
                          <Box w="24.75px" marginRight="1">
                            <IconMasterCard />
                          </Box>
                          <Text flex="1" fontSize="sm" fontWeight="medium">
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
                          <Text flex="1" fontSize="sm" fontWeight="medium">
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
                              backgroundColor: theme.colors.shared.softerGray
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
          <Box
            width={{ base: 'auto', lg: '430px' }}
            flexDirection={{ base: 'column', sm: 'row', lg: 'column' }}
          >
            {/* Card Account Overview */}
            <Box w={{ base: 'full', sm: '345px', lg: 'auto' }}>
              <Box
                marginY={{ base: '3', lg: '5' }}
                marginX={{ base: '3', lg: '5' }}
              >
                <Box
                  h={{ base: '228px', sm: '230px', lg: 'auto' }}
                  position="relative"
                >
                  <Image
                    height="228px"
                    borderRadius="2xl"
                    source={require('shared/images/credit-card-black.png')}
                  />
                  <Box
                    position="absolute"
                    top="0"
                    bottom="0"
                    left="0"
                    right="0"
                    paddingY="6"
                    paddingX={{ base: '8', sm: '6' }}
                    flexDirection="column"
                  >
                    <Text color="white" fontWeight="semibold" fontSize="xl">
                      Account Overview
                    </Text>
                    <Text
                      marginTop="4"
                      color="white"
                      fontWeight="semibold"
                      fontSize="40px"
                      lineHeight="sm"
                    >
                      8,752
                    </Text>
                    <Text color="white" fontWeight="medium" fontSize="md">
                      Credits
                    </Text>
                    <HStack flex="1" alignItems="end">
                      <Pressable
                        backgroundColor="white"
                        borderRadius="lg"
                        paddingY="2"
                        paddingX="6"
                      >
                        <Text fontWeight="medium" fontSize="13px">
                          Get More
                        </Text>
                      </Pressable>
                    </HStack>
                  </Box>
                </Box>
              </Box>
            </Box>
            {/* Saved cards */}
            <Hidden till="sm">
              <Box flex="1" w={{ base: 'full', sm: 'auto' }}>
                <Box
                  marginTop={{ base: '0', sm: '3', lg: '0' }}
                  marginBottom={{ base: '3', lg: '5' }}
                  marginLeft={{ base: '2', sm: '0', lg: '5' }}
                  marginRight={{ base: '2', sm: '3', lg: '5' }}
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
                          <IconCreditCard color={theme.colors.shared.green} />
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
                          <IconMoreVertical />
                        </Box>
                      </Pressable>
                    </HStack>
                    <Box marginTop="5">
                      <Hidden till="lg">
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
                                    source={require('shared/images/saved-card.png')}
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
                      </Hidden>
                      <Hidden from="lg">
                        <Swiper
                          pagination={true}
                          modules={[Pagination]}
                          style={{ width: '100%', height: '100%' }}
                          spaceBetween={10}
                        >
                          {[...Array(3)].map((_, i) => (
                            <Fragment key={i}>
                              <SwiperSlide>
                                <Box
                                  flexDirection="row"
                                  alignItems="center"
                                  backgroundColor={
                                    theme.colors.shared.aliceBlue
                                  }
                                  borderWidth="1"
                                  borderColor={theme.colors.shared.softGray}
                                  borderRadius="xl"
                                  paddingX="4"
                                  paddingY="4"
                                >
                                  <Box width="33px">
                                    <IconMasterCard />
                                  </Box>
                                  <Box flex="1" marginLeft="4">
                                    <Text
                                      color={theme.colors.shared.softBlack}
                                      fontWeight="medium"
                                      fontSize="13px"
                                    >
                                      Mastercard ending in 7322
                                    </Text>
                                    <Text
                                      color={theme.colors.shared.soft5Gray}
                                      fontWeight="medium"
                                      fontSize="11px"
                                    >
                                      Expiry : 05-09-2022
                                    </Text>
                                  </Box>
                                  <Pressable
                                    backgroundColor="white"
                                    borderWidth="1"
                                    borderColor={theme.colors.shared.softGray}
                                    borderRadius="md"
                                    paddingX="2"
                                    paddingY="2"
                                    _hover={{
                                      backgroundColor:
                                        theme.colors.shared.softerGray
                                    }}
                                  >
                                    <Box w="14px">
                                      <IconEdit />
                                    </Box>
                                  </Pressable>
                                </Box>
                              </SwiperSlide>
                            </Fragment>
                          ))}
                        </Swiper>
                      </Hidden>
                    </Box>
                    <Hidden till="lg">
                      <>
                        <Box marginTop="4">
                          <Box
                            flexDirection="row"
                            alignItems="center"
                            backgroundColor={theme.colors.shared.aliceBlue}
                            borderWidth="1"
                            borderColor={theme.colors.shared.softGray}
                            borderRadius="xl"
                            paddingX="4"
                            paddingY="4"
                          >
                            <Box width="33px">
                              <IconMasterCard />
                            </Box>
                            <Box flex="1" marginLeft="4">
                              <Text
                                color={theme.colors.shared.softBlack}
                                fontWeight="medium"
                                fontSize="13px"
                              >
                                Mastercard ending in 7322
                              </Text>
                              <Text
                                color={theme.colors.shared.soft5Gray}
                                fontWeight="medium"
                                fontSize="11px"
                              >
                                Expiry : 05-09-2022
                              </Text>
                            </Box>
                            <Pressable
                              backgroundColor="white"
                              borderWidth="1"
                              borderColor={theme.colors.shared.softGray}
                              borderRadius="md"
                              paddingX="2"
                              paddingY="2"
                              _hover={{
                                backgroundColor: theme.colors.shared.softerGray
                              }}
                            >
                              <Box w="14px">
                                <IconEdit />
                              </Box>
                            </Pressable>
                          </Box>
                        </Box>
                        <Box marginTop="4">
                          <Box
                            flexDirection="row"
                            alignItems="center"
                            backgroundColor={theme.colors.shared.aliceBlue}
                            borderWidth="1"
                            borderColor={theme.colors.shared.softGray}
                            borderRadius="xl"
                            paddingX="4"
                            paddingY="4"
                          >
                            <Box w="33px">
                              <IconVISA />
                            </Box>
                            <Box flex="1" marginLeft="4">
                              <Text
                                color={theme.colors.shared.softBlack}
                                fontWeight="medium"
                                fontSize="13px"
                              >
                                Visa ending in 6534
                              </Text>
                              <Text
                                color={theme.colors.shared.soft5Gray}
                                fontWeight="medium"
                                fontSize="11px"
                              >
                                Expiry : 05-09-2022
                              </Text>
                            </Box>
                            <Pressable
                              backgroundColor="white"
                              borderWidth="1"
                              borderColor={theme.colors.shared.softGray}
                              borderRadius="md"
                              paddingX="2"
                              paddingY="2"
                              _hover={{
                                backgroundColor: theme.colors.shared.softerGray
                              }}
                            >
                              <Box w="14px">
                                <IconEdit />
                              </Box>
                            </Pressable>
                          </Box>
                        </Box>
                      </>
                    </Hidden>
                    <Box
                      marginTop="6"
                      flexDirection="row"
                      justifyContent="space-between"
                    >
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
                          Add New
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
                          Remove All
                        </Text>
                      </Pressable>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Hidden>
          </Box>
        </Box>
      </DashboardLayout>
    </>
  )
}
