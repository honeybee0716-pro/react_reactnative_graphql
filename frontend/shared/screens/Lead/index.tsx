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
  Switch,
  AspectRatio,
  Spinner,
  Heading,
  Avatar
} from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  Entypo,
  Feather
} from '@expo/vector-icons'
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
import IconFileText from 'shared/components/icons/IconFileText'
import IconSliders from 'shared/components/icons/IconSliders'
import IconTrashBin from 'shared/components/icons/IconTrashBin'
import IconUpload from 'shared/components/icons/IconUpload'
import IconTag from 'shared/components/icons/IconTag'
import IconX from 'shared/components/icons/IconX'
import IconFilter from 'shared/components/icons/IconFilter'
import IconList from 'shared/components/icons/IconList'
import IconGroup from 'shared/components/icons/IconGroup'
import IconSearch from 'shared/components/icons/IconSearch'
import IconUsers from 'shared/components/icons/IconUsers'
import IconLock from 'shared/components/icons/IconLock'
import IconShield from 'shared/components/icons/IconShield'
import IconMail from 'shared/components/icons/IconMail'
import IconUser from 'shared/components/icons/IconUser'
import IconAtSign from 'shared/components/icons/IconAtSign'
import IconPhoneCall from 'shared/components/icons/IconPhoneCall'
import IconSave from 'shared/components/icons/IconSave'
import { useRouter } from 'solito/router'
import { gql, useQuery } from '@apollo/client'

const GET_LEAD = gql`
  query GetLeadByID($input: getLeadByIDInput) {
    getLeadByID(input: $input) {
      message
      status
      lead
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

export default function ProfileScreen({ id }: any) {
  const { push } = useRouter()

  const { data, error, loading } = useQuery(GET_LEAD, {
    fetchPolicy: 'cache-first',
    variables: {
      input: {
        id
      }
    }
  })

  // if (error || data && !data?.getLeadByID?.lead?.id) {
  //   return (
  //     <>
  //       <div>{id}</div>
  //       <br />
  //       <div>{JSON.stringify(error || "There was an error.")}</div>
  //     </>
  //   )
  // }

  const lead = data?.getLeadByID?.lead

  return (
    <>
      <DashboardLayout>
        {loading ? <LoadingSpinner /> : null}
        {error ? <Heading>Error. Please try again.</Heading> : null}
        {lead && !loading ? (
          <Box flexDirection={{ base: 'column', lg: 'row' }}>
            <Box w={{ base: 'full' }}>
              <Box
                marginTop={{ base: '3', sm: '5' }}
                marginLeft={{ base: '3', sm: '5' }}
                marginRight={{ base: '3', sm: '5', lg: '5' }}
                marginBottom={{ base: '5', lg: '8' }}
                paddingX={{ base: '4', sm: '6' }}
                paddingTop={{ base: '4', sm: '6' }}
                paddingBottom={{ base: '4', sm: '8' }}
                borderTopRadius="2xl"
                borderBottomRadius="2xl"
                backgroundColor="white"
                borderWidth="1"
                borderColor={theme.colors.shared.softGray}
              >
                <Box
                  position="relative"
                  marginBottom={{ base: '12', sm: '16' }}
                >
                  <Box
                    borderRadius="xl"
                    height={{ base: '94px', sm: '81px' }}
                  />
                  <Pressable
                    position="absolute"
                    bottom="2"
                    right="2"
                    backgroundColor="#FFFFFF78"
                    borderRadius="lg"
                    paddingY="2"
                    paddingX="4"
                    flexDirection="row"
                    alignItems="center"
                    _hover={{
                      backgroundColor: 'white'
                    }}
                  ></Pressable>
                  <Box
                    position="absolute"
                    bottom={{ base: '-40px', sm: '-60px' }}
                    left="0"
                    right="0"
                    flexDirection="row"
                    justifyContent="center"
                  >
                    <Box
                      w={{ base: '85px', sm: '130px' }}
                      h={{ base: '85px', sm: '130px' }}
                      borderRadius="full"
                      borderWidth="1"
                      borderColor={theme.colors.shared.darkerGray}
                      backgroundColor="white"
                    >
                      <Avatar
                        source={{
                          uri: lead.profileImageURL
                        }}
                        height="100%"
                        width="100%"
                      />
                    </Box>
                  </Box>
                </Box>
                <Text
                  fontSize={{ base: '24px', sm: '28px' }}
                  fontWeight="semibold"
                  textAlign="center"
                >
                  {`${lead.firstName} ${lead.lastName}`}
                </Text>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  {!lead.phone ? (
                    <SolitoLink href={`tel:${lead.phone}`}>
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        margin="4"
                        width="50px"
                      >
                        <Box paddingY="6">
                          <Box w="28px">
                            <IconPhoneCall color="black" />
                          </Box>
                        </Box>
                        <Text
                          color="gray.500"
                          fontSize={{ base: '13px', sm: '15px' }}
                          fontWeight="medium"
                          textAlign="center"
                        >
                          Call
                        </Text>
                      </Box>
                    </SolitoLink>
                  ) : null}
                  {!lead.email ? (
                    <SolitoLink href={`mailto:${lead.email}`}>
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        margin="4"
                        width="50px"
                      >
                        <Box paddingY="6">
                          <Box w="28px">
                            <IconMail color="black" />
                          </Box>
                        </Box>
                        <Text
                          color="gray.500"
                          fontSize={{ base: '13px', sm: '15px' }}
                          fontWeight="medium"
                          textAlign="center"
                        >
                          Email
                        </Text>
                      </Box>
                    </SolitoLink>
                  ) : null}
                  {lead.linkedInProfileURL ? (
                    <Pressable
                      onPress={() => window.open(lead.linkedInProfileURL)}
                    >
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        margin="4"
                        width="50px"
                      >
                        <Box paddingY="6">
                          <Box w="28px">
                            <Icon
                              as={Feather}
                              name="linkedin"
                              _light={{
                                color: 'black'
                              }}
                              size="7"
                            />
                          </Box>
                        </Box>
                        <Text
                          color="gray.500"
                          fontSize={{ base: '13px', sm: '15px' }}
                          fontWeight="medium"
                          textAlign="center"
                        >
                          LinkedIn
                        </Text>
                      </Box>
                    </Pressable>
                  ) : null}
                </Box>
              </Box>
              <Box
                marginLeft={{ base: '3', sm: '5' }}
                marginRight={{ base: '3', sm: '5', lg: '0' }}
                marginBottom={{ base: '0', lg: '5' }}
                paddingX={{ base: '4', sm: '6' }}
                paddingTop={{ base: '4', sm: '6' }}
                paddingBottom="6"
                borderTopRadius="2xl"
                borderBottomRadius="2xl"
                backgroundColor="white"
                borderWidth="1"
                borderColor={theme.colors.shared.softGray}
              >
                <HStack alignItems="center" marginBottom="6">
                  <Center
                    backgroundColor={theme.colors.shared.masterCardYellow_15}
                    paddingY="2"
                    paddingX="2"
                    borderRadius="lg"
                  >
                    <Box w="18px">
                      <IconUsers color={theme.colors.shared.masterCardYellow} />
                    </Box>
                  </Center>
                  <Text
                    flex="1"
                    marginLeft="3"
                    fontWeight="medium"
                    fontSize={{ base: 'lg', sm: 'xl' }}
                  >
                    Information
                  </Text>
                </HStack>
                <VStack space="4">
                  <Box
                    flexDirection="row"
                    alignItems="center"
                    backgroundColor={theme.colors.shared.softer6Gray}
                    borderWidth="1"
                    borderColor={theme.colors.shared.softer7Gray_25}
                    borderRadius="lg"
                    paddingLeft="4"
                    paddingRight="5"
                  >
                    <Box paddingY="4">
                      <Box w="18px" marginRight="3">
                        <IconUser />
                      </Box>
                    </Box>
                    <HStack flex="1" h="full">
                      <Hidden till="sm">
                        <Box
                          w="1/4"
                          h="full"
                          borderRightWidth="1"
                          borderRightColor={theme.colors.shared.softer7Gray_25}
                          flexDirection="row"
                          alignItems="center"
                        >
                          <Text fontSize="15px" fontWeight="medium">
                            First Name
                          </Text>
                        </Box>
                      </Hidden>
                      <Box
                        w={{ base: 'full', sm: '3/4' }}
                        flexDirection="row"
                        alignItems="center"
                        paddingLeft={{ base: '0', sm: '4' }}
                      >
                        <Text
                          fontSize={{ base: 'sm', sm: '15px' }}
                          fontWeight="medium"
                        >
                          {lead.firstName}
                        </Text>
                      </Box>
                    </HStack>
                  </Box>
                  <Box
                    flexDirection="row"
                    alignItems="center"
                    backgroundColor={theme.colors.shared.softer6Gray}
                    borderWidth="1"
                    borderColor={theme.colors.shared.softer7Gray_25}
                    borderRadius="lg"
                    paddingLeft="4"
                    paddingRight="5"
                  >
                    <Box paddingY="4">
                      <Box w="18px" marginRight="3">
                        <IconUser />
                      </Box>
                    </Box>
                    <HStack flex="1" h="full">
                      <Hidden till="sm">
                        <Box
                          w="1/4"
                          h="full"
                          borderRightWidth="1"
                          borderRightColor={theme.colors.shared.softer7Gray_25}
                          flexDirection="row"
                          alignItems="center"
                        >
                          <Text fontSize="15px" fontWeight="medium">
                            Last Name
                          </Text>
                        </Box>
                      </Hidden>
                      <Box
                        w={{ base: 'full', sm: '3/4' }}
                        flexDirection="row"
                        alignItems="center"
                        paddingLeft={{ base: '0', sm: '4' }}
                      >
                        <Text
                          fontSize={{ base: 'sm', sm: '15px' }}
                          fontWeight="medium"
                        >
                          {lead.lastName}
                        </Text>
                      </Box>
                    </HStack>
                  </Box>
                  <Box
                    flexDirection="row"
                    alignItems="center"
                    backgroundColor={theme.colors.shared.softer6Gray}
                    borderWidth="1"
                    borderColor={theme.colors.shared.softer7Gray_25}
                    borderRadius="lg"
                    paddingLeft="4"
                    paddingRight="5"
                  >
                    <Box paddingY="4">
                      <Box w="18px" marginRight="3">
                        <IconAtSign />
                      </Box>
                    </Box>
                    <HStack flex="1" h="full">
                      <Hidden till="sm">
                        <Box
                          w="1/4"
                          h="full"
                          borderRightWidth="1"
                          borderRightColor={theme.colors.shared.softer7Gray_25}
                          flexDirection="row"
                          alignItems="center"
                        >
                          <Text fontSize="15px" fontWeight="medium">
                            Company Name
                          </Text>
                        </Box>
                      </Hidden>
                      <Box
                        w={{ base: 'full', sm: '3/4' }}
                        flexDirection="row"
                        alignItems="center"
                        paddingLeft={{ base: '0', sm: '4' }}
                      >
                        <Text
                          fontSize={{ base: 'sm', sm: '15px' }}
                          fontWeight="medium"
                        >
                          {lead.companyName || 'Unkown'}
                        </Text>
                      </Box>
                    </HStack>
                  </Box>
                  <Box
                    flexDirection="row"
                    alignItems="center"
                    backgroundColor={theme.colors.shared.softer6Gray}
                    borderWidth="1"
                    borderColor={theme.colors.shared.softer7Gray_25}
                    borderRadius="lg"
                    paddingLeft="4"
                    paddingRight="5"
                  >
                    <Box paddingY="4">
                      <Box w="18px" marginRight="3">
                        <IconAtSign />
                      </Box>
                    </Box>
                    <HStack flex="1" h="full">
                      <Hidden till="sm">
                        <Box
                          w="1/4"
                          h="full"
                          borderRightWidth="1"
                          borderRightColor={theme.colors.shared.softer7Gray_25}
                          flexDirection="row"
                          alignItems="center"
                        >
                          <Text fontSize="15px" fontWeight="medium">
                            Job Title
                          </Text>
                        </Box>
                      </Hidden>
                      <Box
                        w={{ base: 'full', sm: '3/4' }}
                        flexDirection="row"
                        alignItems="center"
                        paddingLeft={{ base: '0', sm: '4' }}
                      >
                        <Text
                          fontSize={{ base: 'sm', sm: '15px' }}
                          fontWeight="medium"
                        >
                          {lead.title || 'Unkown'}
                        </Text>
                      </Box>
                    </HStack>
                  </Box>
                  <Box
                    flexDirection="row"
                    alignItems="center"
                    backgroundColor={theme.colors.shared.softer6Gray}
                    borderWidth="1"
                    borderColor={theme.colors.shared.softer7Gray_25}
                    borderRadius="lg"
                    paddingLeft="4"
                    paddingRight="5"
                  >
                    <Box paddingY="4">
                      <Box w="18px" marginRight="3">
                        <IconMail />
                      </Box>
                    </Box>
                    <HStack flex="1" h="full">
                      <Hidden till="sm">
                        <Box
                          w="1/4"
                          h="full"
                          borderRightWidth="1"
                          borderRightColor={theme.colors.shared.softer7Gray_25}
                          flexDirection="row"
                          alignItems="center"
                        >
                          <Text fontSize="15px" fontWeight="medium">
                            Email Address
                          </Text>
                        </Box>
                      </Hidden>
                      <Box
                        w={{ base: 'full', sm: '3/4' }}
                        flexDirection="row"
                        alignItems="center"
                        paddingLeft={{ base: '0', sm: '4' }}
                      >
                        <Text
                          fontSize={{ base: 'sm', sm: '15px' }}
                          fontWeight="medium"
                        >
                          {lead.email || 'Unkown'}
                        </Text>
                      </Box>
                    </HStack>
                  </Box>
                  <Box
                    flexDirection="row"
                    alignItems="center"
                    backgroundColor={theme.colors.shared.softer6Gray}
                    borderWidth="1"
                    borderColor={theme.colors.shared.softer7Gray_25}
                    borderRadius="lg"
                    paddingLeft="4"
                    paddingRight="5"
                  >
                    <Box paddingY="4">
                      <Box w="18px" marginRight="3">
                        <IconPhoneCall />
                      </Box>
                    </Box>
                    <HStack flex="1" h="full">
                      <Hidden till="sm">
                        <Box
                          w="1/4"
                          h="full"
                          borderRightWidth="1"
                          borderRightColor={theme.colors.shared.softer7Gray_25}
                          flexDirection="row"
                          alignItems="center"
                        >
                          <Text fontSize="15px" fontWeight="medium">
                            Phone
                          </Text>
                        </Box>
                      </Hidden>
                      <Box
                        w={{ base: 'full', sm: '3/4' }}
                        flexDirection="row"
                        alignItems="center"
                        paddingLeft={{ base: '0', sm: '4' }}
                      >
                        <Text
                          fontSize={{ base: 'sm', sm: '15px' }}
                          fontWeight="medium"
                        >
                          {lead.phone || 'Unknown'}
                        </Text>
                      </Box>
                    </HStack>
                  </Box>
                  <Box
                    flexDirection="row"
                    alignItems="center"
                    backgroundColor={theme.colors.shared.softer6Gray}
                    borderWidth="1"
                    borderColor={theme.colors.shared.softer7Gray_25}
                    borderRadius="lg"
                    paddingLeft="4"
                    paddingRight="5"
                  >
                    <Box paddingY="4">
                      <Box w="18px" marginRight="3">
                        <IconClock />
                      </Box>
                    </Box>
                    <HStack flex="1" h="full">
                      <Hidden till="sm">
                        <Box
                          w="1/4"
                          h="full"
                          borderRightWidth="1"
                          borderRightColor={theme.colors.shared.softer7Gray_25}
                          flexDirection="row"
                          alignItems="center"
                        >
                          <Text fontSize="15px" fontWeight="medium">
                            Duration in company
                          </Text>
                        </Box>
                      </Hidden>
                      <Box
                        w={{ base: 'full', sm: '3/4' }}
                        flexDirection="row"
                        alignItems="center"
                        paddingLeft={{ base: '0', sm: '4' }}
                      >
                        <Text
                          fontSize={{ base: 'sm', sm: '15px' }}
                          fontWeight="medium"
                        >
                          {lead.durationInCompany || 'Unkown'}
                        </Text>
                      </Box>
                    </HStack>
                  </Box>
                  <Box
                    flexDirection="row"
                    alignItems="center"
                    backgroundColor={theme.colors.shared.softer6Gray}
                    borderWidth="1"
                    borderColor={theme.colors.shared.softer7Gray_25}
                    borderRadius="lg"
                    paddingLeft="4"
                    paddingRight="5"
                  >
                    <Box paddingY="4">
                      <Box w="18px" marginRight="3">
                        <IconClock />
                      </Box>
                    </Box>
                    <HStack flex="1" h="full">
                      <Hidden till="sm">
                        <Box
                          w="1/4"
                          h="full"
                          borderRightWidth="1"
                          borderRightColor={theme.colors.shared.softer7Gray_25}
                          flexDirection="row"
                          alignItems="center"
                        >
                          <Text fontSize="15px" fontWeight="medium">
                            Duration in role
                          </Text>
                        </Box>
                      </Hidden>
                      <Box
                        w={{ base: 'full', sm: '3/4' }}
                        flexDirection="row"
                        alignItems="center"
                        paddingLeft={{ base: '0', sm: '4' }}
                      >
                        <Text
                          fontSize={{ base: 'sm', sm: '15px' }}
                          fontWeight="medium"
                        >
                          {lead.durationInRole || 'Unkown'}
                        </Text>
                      </Box>
                    </HStack>
                  </Box>
                  <Box
                    flexDirection="row"
                    alignItems="center"
                    backgroundColor={theme.colors.shared.softer6Gray}
                    borderWidth="1"
                    borderColor={theme.colors.shared.softer7Gray_25}
                    borderRadius="lg"
                    paddingLeft="4"
                    paddingRight="5"
                  >
                    <Box paddingY="4">
                      <Box w="18px" marginRight="3">
                        <IconShield />
                      </Box>
                    </Box>
                    <HStack flex="1" h="full">
                      <Hidden till="sm">
                        <Box
                          w="1/4"
                          h="full"
                          borderRightWidth="1"
                          borderRightColor={theme.colors.shared.softer7Gray_25}
                          flexDirection="row"
                          alignItems="center"
                        >
                          <Text fontSize="15px" fontWeight="medium">
                            Is Premium
                          </Text>
                        </Box>
                      </Hidden>
                      <Box
                        w={{ base: 'full', sm: '3/4' }}
                        flexDirection="row"
                        alignItems="center"
                        paddingLeft={{ base: '0', sm: '4' }}
                      >
                        <Text
                          fontSize={{ base: 'sm', sm: '15px' }}
                          fontWeight="medium"
                        >
                          {lead.isPremium === 1 ? 'Yes' : 'No'}
                        </Text>
                      </Box>
                    </HStack>
                  </Box>
                </VStack>
              </Box>
            </Box>
          </Box>
        ) : null}
      </DashboardLayout>
    </>
  )
}
