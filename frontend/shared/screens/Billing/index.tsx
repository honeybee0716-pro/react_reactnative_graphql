import {
  StatusBar,
  Box,
  Center,
  Stack,
  Hidden,
  Text,
  Image,
  HStack,
  VStack,
  Input,
  InputGroup,
  Button,
  Checkbox,
  Link,
  Icon,
  Pressable,
  Flex,
  Select,
  CheckIcon,
  Slider,
  Switch
} from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from 'shared/styles/theme'
import { Link as SolitoLink } from 'solito/link'
import { Dimensions, View } from 'react-native'
import { Fragment, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import DashboardLayout from 'shared/layouts/DashboardLayout.dev'
import IconCredits from 'shared/components/icons/IconCredits'
import IconCornerUpRight from 'shared/components/icons/IconCornerUpRight'
import IconZap from 'shared/components/icons/IconZap'
import IconDollarSign from 'shared/components/icons/IconDollarSign'
import IconUploadCloud from 'shared/components/icons/IconUploadCloud'
import IconBarChart from 'shared/components/icons/IconBarChart'
import IconCompass from 'shared/components/icons/IconCompass'
import IconDownload from 'shared/components/icons/IconDownload'
import IconEye from 'shared/components/icons/IconEye'
import IconClock from 'shared/components/icons/IconClock'
import IconCalendar from 'shared/components/icons/IconCalendar'
import IconShoppingCart from 'shared/components/icons/IconShoppingCart'
import IconMoreVertical from 'shared/components/icons/IconMoreVertical'
import IconChevronDown from 'shared/components/icons/IconChevronDown'
import IconPlayCircle from 'shared/components/icons/IconPlayCircle'
import IconCreditCard from 'shared/components/icons/IconCreditCard'
import IconLightcoin from 'shared/components/icons/IconLightcoin'
import IconNFC from 'shared/components/icons/IconNFC'
import IconEdit from 'shared/components/icons/IconEdit'
import IconCornerLeftDown from 'shared/components/icons/IconCornerLeftDown'
import IconMasterCard from 'shared/components/icons/IconMasterCard'
import IconVISA from 'shared/components/icons/IconVISA'
import IconHome from 'shared/components/icons/IconHome'
import IconGlobe from 'shared/components/icons/IconGlobe'
import IconPlus from 'shared/components/icons/IconPlus'
import IconX from 'shared/components/icons/IconX'

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
            <Pressable
              onPress={() => {
                alert('cancel subscription')
              }}
            >
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
                      <IconX color={theme.colors.shared.redOrange} />
                    </Box>
                  </Center>
                  <Text
                    flex="1"
                    marginLeft="3"
                    fontWeight="medium"
                    fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}
                  >
                    Cancel Subscription
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
                ></HStack>
              </Box>
            </Pressable>
          </Box>
          <Box
            width={{ base: 'auto', lg: '20px' }}
            flexDirection={{ base: 'column', sm: 'row', lg: 'column' }}
          ></Box>
        </Box>
      </DashboardLayout>
    </>
  )
}
