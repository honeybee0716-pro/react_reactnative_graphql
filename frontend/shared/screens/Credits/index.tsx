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
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import DashboardLayout from 'shared/layouts/DashboardLayout'
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

export default function Credits() {
  const [selectPayUsing, setSelectPayUsing] = useState('mastercard')

  return (
    <>
      <DashboardLayout>
        <Box flexDirection="row">
          {/* Get more credits */}
          <Box flex="1">
            <Box
              marginTop="5"
              marginLeft="5"
              marginRight={{ base: '5', lg: '0' }}
              paddingX={{ base: '0', sm: '5' }}
              paddingTop={{ base: '0', sm: '5' }}
              paddingBottom={{ base: 'none', sm: '4' }}
              borderTopRadius={{ base: 'none', sm: '2xl' }}
              borderBottomRadius={{ base: 'none', sm: '2xl', lg: 'none' }}
              backgroundColor={{ base: 'none', sm: 'white' }}
              borderWidth={{ base: 'none', sm: '1' }}
              borderBottomWidth={{ base: 'none', sm: '1', lg: '0' }}
              borderColor={theme.colors.shared.softer3Gray}
            >
              <Hidden till="sm">
                <HStack alignItems="center" marginBottom="4">
                  <Center
                    backgroundColor={theme.colors.shared.tosca_10}
                    paddingY="0.625rem"
                    paddingX="0.375rem"
                    borderRadius="lg"
                  >
                    <Box w="20px">
                      <IconCredits color={theme.colors.shared.tosca} />
                    </Box>
                  </Center>
                  <Text
                    marginLeft="3"
                    fontWeight="medium"
                    fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}
                  >
                    Get more credits
                  </Text>
                </HStack>
              </Hidden>
              <Box flexDirection={{ base: 'unset', sm: 'row' }}>
                {/* Get more credits */}
                <Box
                  flex="1"
                  marginRight={{ base: '0', sm: '6' }}
                  marginBottom={{ base: '6', sm: '0' }}
                >
                  <Box
                    padding="4"
                    borderRadius="xl"
                    backgroundColor="white"
                    borderWidth="1"
                    borderColor={theme.colors.shared.softGray}
                    h="full"
                  >
                    <Box h={{ base: 'auto', sm: '0' }} flexDirection="row">
                      <Box flex="1">
                        <Hidden from="sm">
                          <HStack alignItems="center">
                            <Center
                              backgroundColor={theme.colors.shared.tosca_10}
                              paddingY="0.625rem"
                              paddingX="0.375rem"
                              borderRadius="lg"
                            >
                              <Box w="20px">
                                <IconCredits
                                  color={theme.colors.shared.tosca}
                                />
                              </Box>
                            </Center>
                            <Text
                              marginLeft="3"
                              fontWeight="medium"
                              fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}
                            >
                              Get more credits
                            </Text>
                          </HStack>
                        </Hidden>
                      </Box>
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
                    </Box>
                    <Text
                      marginTop="5"
                      fontWeight="medium"
                      fontSize="md"
                      textAlign="center"
                    >
                      Credits
                    </Text>
                    <Text
                      fontSize="40px"
                      fontWeight="semibold"
                      textAlign="center"
                    >
                      50,000
                    </Text>
                    <HStack marginTop="4" space="4" justifyContent="center">
                      {[...Array(3)].map((_, i) => (
                        <Pressable
                          key={i}
                          backgroundColor={theme.colors.shared.black_6}
                          borderRadius="full"
                        >
                          <Text
                            fontSize="sm"
                            fontWeight="medium"
                            paddingX="4"
                            paddingY="1"
                          >
                            30,000
                          </Text>
                        </Pressable>
                      ))}
                    </HStack>
                    <Slider
                      marginTop="5"
                      w="full"
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
                        backgroundColor={theme.colors.shared.softer4Gray}
                      />
                    </Slider>
                    <Box flexDirection="row" justifyContent="space-between">
                      <Text fontSize="sm" fontWeight="medium">
                        10 K
                      </Text>
                      <Text fontSize="sm" fontWeight="medium">
                        100 K
                      </Text>
                    </Box>
                    <Box
                      marginTop="4"
                      backgroundColor={theme.colors.shared.aliceBlue}
                      flexDirection="row"
                      alignItems="center"
                      borderWidth="1"
                      borderColor={theme.colors.shared.softGray}
                      borderRadius="xl"
                      paddingY="3"
                      paddingX="4"
                    >
                      <Text flex="1" fontWeight="medium" fontSize="sm">
                        Current Rate
                      </Text>
                      <Text fontWeight="medium" fontSize="sm">
                        $0.01 Per Credit
                      </Text>
                    </Box>
                    <Box
                      marginTop="4"
                      backgroundColor={theme.colors.shared.aliceBlue}
                      flexDirection="row"
                      alignItems="center"
                      borderWidth="1"
                      borderColor={theme.colors.shared.softGray}
                      borderRadius="xl"
                      paddingY="3"
                      paddingX="4"
                    >
                      <Text flex="1" fontWeight="medium" fontSize="sm">
                        Enable Automatic Topup
                      </Text>
                      <Switch
                        onThumbColor="white"
                        onTrackColor={theme.colors.shared.brightBlue}
                        offThumbColor="white"
                        offTrackColor="gray.200"
                        _hover={{
                          onTrackColor: theme.colors.shared.blueGentianFlower,
                          offTrackColor: 'gray.300'
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
                {/* Order Summary */}
                <Box
                  borderRadius="xl"
                  backgroundColor="white"
                  borderWidth="1"
                  borderColor={theme.colors.shared.softGray}
                  w={{ base: 'auto', sm: '330px' }}
                >
                  <HStack
                    alignItems="center"
                    paddingTop="4"
                    paddingX="4"
                    paddingBottom="4"
                  >
                    <Center
                      backgroundColor={theme.colors.shared.tosca_10}
                      paddingY="1"
                      paddingX="1"
                      borderRadius="md"
                    >
                      <Box w="18px">
                        <IconDollarSign color={theme.colors.shared.tosca} />
                      </Box>
                    </Center>
                    <Text
                      flex="1"
                      marginLeft="2"
                      fontWeight="medium"
                      fontSize="lg"
                    >
                      Order Summary
                    </Text>
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
                  </HStack>
                  <Box
                    borderBottomWidth="1"
                    borderColor={theme.colors.shared.softGray}
                  ></Box>
                  <Box padding="4">
                    <HStack>
                      <Text flex="1" fontSize="sm" fontWeight="medium">
                        Top up Amount
                      </Text>
                      <Text fontSize="sm" fontWeight="semibold">
                        $500.00
                      </Text>
                    </HStack>
                    <HStack>
                      <Text flex="1" fontSize="sm" fontWeight="medium">
                        VAT (12%)
                      </Text>
                      <Text fontSize="sm" fontWeight="semibold">
                        $60.00
                      </Text>
                    </HStack>
                  </Box>
                  <Box
                    borderBottomWidth="1"
                    borderColor={theme.colors.shared.softGray}
                  ></Box>
                  <Box padding="4">
                    <Text fontSize="xs" fontWeight="medium" marginBottom="3">
                      Pay using
                    </Text>
                    <Pressable
                      flexDirection="row"
                      alignItems="center"
                      backgroundColor={theme.colors.shared.aliceBlue}
                      borderWidth="1"
                      borderColor={theme.colors.shared.softGray}
                      borderRadius="md"
                      paddingX="4"
                      paddingY="3"
                      _hover={{
                        backgroundColor: theme.colors.shared.softerGray
                      }}
                    >
                      <Box w="28px" marginRight="2">
                        <IconMasterCard />
                      </Box>
                      <Text flex="1" fontSize="xs" fontWeight="medium">
                        Mastercard ending in 7322
                      </Text>
                      <Box w="16px">
                        <IconChevronDown rotation={180} />
                      </Box>
                    </Pressable>
                  </Box>
                  <Box
                    borderBottomWidth="1"
                    borderColor={theme.colors.shared.softGray}
                  ></Box>
                  <Box padding="4">
                    <HStack alignItems="center" justifyContent="space-between">
                      <Box>
                        <Text fontSize="15px" fontWeight="semibold">
                          Total
                        </Text>
                        <Text
                          color="gray.500"
                          fontSize="2xs"
                          fontWeight="medium"
                        >
                          (Incl VAT)
                        </Text>
                      </Box>
                      <Box>
                        <Text fontSize="xl" fontWeight="semibold">
                          $560.00
                        </Text>
                      </Box>
                    </HStack>
                    <Pressable
                      marginTop="5"
                      w="full"
                      paddingY="3"
                      backgroundColor={theme.colors.shared.brightBlue}
                      borderRadius="xl"
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
                        Proceed to payment
                      </Text>
                    </Pressable>
                  </Box>
                </Box>
              </Box>
            </Box>
            {/* Recent top up */}
            <Box
              marginBottom="5"
              marginLeft="5"
              marginTop={{ base: '5', lg: '0' }}
              marginRight={{ base: '5', lg: '0' }}
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
                    <IconCornerLeftDown color={theme.colors.shared.redOrange} />
                  </Box>
                </Center>
                <Text
                  flex="1"
                  marginLeft="3"
                  fontWeight="medium"
                  fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}
                >
                  Recent Top up’s
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
                        Date
                      </Text>
                    </Box>
                    <Box w="28%">
                      <Text fontSize="sm" fontWeight="medium">
                        Payment Method
                      </Text>
                    </Box>
                    <Box w="15%">
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        textAlign="center"
                      >
                        Credits
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
                  {[...Array(3)].map((_, i) => (
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
                          25 April, 04:28 PM
                        </Text>
                      </Box>
                      <Box w="28%">
                        <HStack alignItems="center">
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
                          color={theme.colors.shared.green}
                          fontSize="sm"
                          fontWeight="medium"
                          textAlign="center"
                        >
                          +30000
                        </Text>
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
                <VStack space="6">
                  <Box
                    backgroundColor={theme.colors.shared.aliceBlue}
                    borderWidth="1"
                    borderColor={theme.colors.shared.softGray}
                    borderRadius="md"
                    paddingX="4"
                    paddingY="3"
                  >
                    <HStack w="full">
                      <Text flex="1" fontSize="sm" fontWeight="medium">
                        25 April, 04:28 PM
                      </Text>
                      <Text
                        color={theme.colors.shared.green}
                        fontSize="sm"
                        fontWeight="semibold"
                      >
                        +30000
                      </Text>
                    </HStack>
                    <HStack alignItems="center" w="full" marginTop="3">
                      <Box w="24.75px" marginRight="1">
                        <IconMasterCard />
                      </Box>
                      <Text flex="1" fontSize="sm" fontWeight="medium">
                        Mastercard - 7322
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
          <Hidden till="lg">
            <Box width={{ lg: '430px' }}>
              {/* Card Account Overview */}
              <Box position="relative" margin="5">
                <Image
                  height="228px"
                  borderRadius="2xl"
                  source={require('shared/assets/images/credit-card-black.png')}
                />
                <Box
                  position="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  paddingY="6"
                  paddingX="6"
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
              {/* Saved cards */}
              <Box
                marginBottom="5"
                marginX="5"
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
                  <Swiper
                    pagination={true}
                    modules={[Pagination]}
                    style={{ width: '100%', height: '100%' }}
                    spaceBetween={10}
                  >
                    {[...Array(3)].map((_, i) => (
                      <SwiperSlide key={i}>
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
                              <Box flexDirection="row" alignItems="center">
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
          </Hidden>
        </Box>
      </DashboardLayout>
    </>
  )
}
