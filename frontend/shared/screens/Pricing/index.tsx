import React from 'react'
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
  Divider,
  Tooltip,
  useToast
} from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from 'shared/styles/theme'
import { Link as SolitoLink } from 'solito/link'
import { Dimensions, View } from 'react-native'
import { Fragment, useState, useRef } from 'react'
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
import IconMessages from 'shared/components/icons/IconMessages'
import IconGoogleGLogo from 'shared/components/icons/IconGoogleGLogo'
import IconMicrosoftLogo from 'shared/components/icons/IconMicrosoftLogo'
import IconMetaLogo from 'shared/components/icons/IconMetaLogo'
import IconLayers from 'shared/components/icons/IconLayers'
import IconCheck from 'shared/components/icons/IconCheck'
import AmazonLogo from 'shared/components/logo/AmazonLogo'
import SlackTechnologiesLogo from 'shared/components/logo/SlackTechnologiesLogo'
import DiscordWordmarkLogo from 'shared/components/logo/DiscordWordmarkLogo'
import SpotifyLogo from 'shared/components/logo/SpotifyLogo'
import DolbyLogo from 'shared/components/logo/DolbyLogo'
import IconFlag from 'shared/components/icons/IconFlag'
import IconLists from 'shared/components/icons/IconLists'
import IconArrowRight from 'shared/components/icons/IconArrowRight'
import IconLock from 'shared/components/icons/IconLock'
import IconCheckCircle from 'shared/components/icons/IconCheckCircle'
import IconMail from 'shared/components/icons/IconMail'
import IconMenu from 'shared/components/icons/IconMenu'
import LandingPageFooter from 'shared/components/LandingPage/LandingPageFooter'
import LandingPageTopNavigation from 'shared/components/LandingPage/LandingPageTopNavigation'
import IconInfo from 'shared/components/icons/IconInfo'
import IconLine from 'shared/components/icons/IconLine'
import { gql, useLazyQuery } from '@apollo/client'

const { width, height } = Dimensions.get('window')

const GET_STRIPE_CHECKOUT_LINK = gql`
  query CreateStripeCheckoutPage($input: createStripeCheckoutPageInput) {
    createStripeCheckoutPage(input: $input) {
      message
      status
      link
    }
  }
`

export default function PricingPage() {
  const toast = useToast()

  const [createStripeCheckoutPage, { loading }] = useLazyQuery(
    GET_STRIPE_CHECKOUT_LINK
  )

  const [listFeature, setListFeature] = useState<any>([
    {
      feature: 'Visitors identified',
      standard: '300',
      custom: 'Custom',
      tooltip: "Visitors of your website who's identity we've revealed to you."
    }
  ])

  const handleStandardPlanPress = () => {
    createStripeCheckoutPage({
      variables: {
        input: {
          plan: 'Standard'
        }
      },
      onCompleted: async ({ createStripeCheckoutPage }) => {
        document.location = createStripeCheckoutPage.link

        return
      },
      onError: (error) => {
        toast.show({
          description: `There was an error: ${error}`
        })
      }
    })
  }

  const handleContactUsPress = () => {
    window.open('https://clienteye.com/contact', '_blank')
  }

  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <Box
        safeAreaTop
        _light={{ bg: 'primary.900' }}
        _dark={{ bg: 'coolGray.900' }}
      />

      {/* <LandingPageTopNavigation /> */}

      <DashboardLayout>
        <Box position="relative">
          {/* <Image
            zIndex={1}
            position="absolute"
            right="0"
            top="-200px"
            w="597px"
            h="679.68px"
            source={require('./components/Blurred Background.png')}
            style={{
              transform: [
                {
                  scaleY: '-1'
                }
              ]
            }}
          />
          <Image
            zIndex={1}
            position="absolute"
            right="0"
            top="479.68px"
            w="597px"
            h="679.68px"
            source={require('./components/Blurred Background.png')}
          /> */}

          <VStack
            zIndex={2}
            alignItems="center"
            marginTop={{ base: '12', lg: '12' }}
          >
            <Text
              fontSize={{ base: '28px', sm: '35px', lg: '45px' }}
              fontWeight="semibold"
              textAlign="center"
            >
              Simplified pricing.
            </Text>
          </VStack>

          <Hidden till="sm">
            <Box
              zIndex={2}
              paddingX={{ base: '0', lg: '12' }}
              marginTop={{ base: '16', lg: '16' }}
            >
              <Box
                backgroundColor={{ base: 'none', lg: '#00000004' }}
                borderRadius="15px"
                paddingX={{ base: '10', lg: '16' }}
                paddingY={{ base: '10', lg: '16' }}
              >
                <HStack>
                  <VStack
                    w={{ base: '25%', lg: '33%' }}
                    paddingTop="8"
                    paddingBottom="6"
                  ></VStack>
                  <VStack
                    w={{ base: '50%', lg: '33%' }}
                    borderWidth="1"
                    borderBottomWidth="0"
                    borderColor={theme.colors.shared.black_9}
                    backgroundColor={theme.colors.shared.white_60}
                    borderTopRadius="15px"
                    paddingTop="8"
                    paddingBottom="6"
                  >
                    <VStack alignItems="center">
                      <Text
                        fontSize="15px"
                        fontWeight="semibold"
                        color={theme.colors.shared.orange}
                      >
                        Standard
                      </Text>
                      <Text fontSize="13px" fontWeight="medium">
                        For small business
                      </Text>
                      <HStack alignItems="start">
                        <Text fontSize="20px" fontWeight="medium">
                          $
                        </Text>
                        <Text fontSize="48px" fontWeight="medium">
                          500
                          <Text fontSize="16px" fontWeight="light">
                            USD
                          </Text>
                        </Text>
                      </HStack>
                      <Text fontSize="sm">Per month</Text>
                    </VStack>
                  </VStack>
                  <VStack
                    w={{ base: '25%', lg: '33%' }}
                    paddingTop="8"
                    paddingBottom="6"
                  >
                    <VStack alignItems="center">
                      <Text
                        fontSize="15px"
                        fontWeight="semibold"
                        color={theme.colors.shared.pink}
                      >
                        Custom
                      </Text>
                      <Text fontSize="13px" fontWeight="medium">
                        For enterprise business
                      </Text>
                      <HStack alignItems="start">
                        <Text fontSize="48px" fontWeight="medium">
                          Custom&nbsp;
                        </Text>
                      </HStack>
                    </VStack>
                  </VStack>
                </HStack>
                <HStack>
                  <VStack w={{ base: '25%', lg: '33%' }}>
                    <Text
                      fontSize={{ base: 'sm', lg: 'md' }}
                      fontWeight="semibold"
                      color={theme.colors.shared.gray}
                    >
                      Features
                    </Text>
                  </VStack>
                  <VStack
                    w={{ base: '25%', lg: '33%' }}
                    borderWidth="1"
                    borderBottomWidth="0"
                    borderTopWidth="0"
                    borderColor={theme.colors.shared.black_9}
                    backgroundColor={theme.colors.shared.white_60}
                  ></VStack>
                  <VStack w={{ base: '25%', lg: '33%' }}></VStack>
                  <VStack w={{ base: '25%', lg: '33%' }}></VStack>
                </HStack>
                {listFeature.map((item1, i) => (
                  <Fragment key={`feature${i}`}>
                    <HStack
                      borderBottomWidth="1"
                      borderBottomColor={theme.colors.shared.soft4Gray_65}
                    >
                      <VStack w={{ base: '25%', lg: '33%' }} paddingY="4">
                        <HStack
                          alignItems="center"
                          paddingRight={{ base: '0', lg: '24' }}
                        >
                          <Text
                            marginRight="10px"
                            fontSize={{ base: 'md', lg: 'xl' }}
                            fontWeight="medium"
                          >
                            {item1.feature}
                          </Text>
                          <Tooltip label={item1.tooltip}>
                            <Box w="20px">
                              <IconInfo color={theme.colors.shared.gray} />
                            </Box>
                          </Tooltip>
                        </HStack>
                      </VStack>
                      <VStack
                        w={{ base: '25%', lg: '33%' }}
                        borderWidth="1"
                        borderBottomWidth="0"
                        borderTopWidth="0"
                        borderColor={theme.colors.shared.black_9}
                        backgroundColor={theme.colors.shared.white_60}
                        paddingY="4"
                      >
                        <HStack
                          justifyContent="center"
                          alignItems="center"
                          h="full"
                        >
                          {item1.standard === true ||
                          item1.standard === false ? (
                            <Box w="20px">
                              <IconCheck color={theme.colors.shared.green4} />
                            </Box>
                          ) : (
                            <Box>
                              <Text
                                fontSize={{ base: 'sm', lg: 'md' }}
                                fontWeight="semibold"
                                color={theme.colors.shared.gray}
                              >
                                {item1.standard}
                              </Text>
                            </Box>
                          )}
                        </HStack>
                      </VStack>
                      <VStack w={{ base: '25%', lg: '33%' }} paddingY="4">
                        <HStack
                          justifyContent="center"
                          alignItems="center"
                          h="full"
                        >
                          {item1.custom === true || item1.custom === false ? (
                            <Box w="20px">
                              <IconCheck color={theme.colors.shared.green4} />
                            </Box>
                          ) : (
                            <Box>
                              <Text
                                fontSize={{ base: 'sm', lg: 'md' }}
                                fontWeight="semibold"
                                color={theme.colors.shared.gray}
                              >
                                {item1.custom}
                              </Text>
                            </Box>
                          )}
                        </HStack>
                      </VStack>
                    </HStack>
                  </Fragment>
                ))}
                <HStack>
                  <VStack w={{ base: '25%', lg: '33%' }} paddingY="6"></VStack>
                  <VStack
                    w={{ base: '25%', lg: '33%' }}
                    paddingY="6"
                    borderWidth="1"
                    borderTopWidth="0"
                    borderBottomRadius="15px"
                    borderColor={theme.colors.shared.black_9}
                    backgroundColor={theme.colors.shared.white_60}
                  >
                    <HStack
                      justifyContent="center"
                      alignItems="center"
                      h="full"
                    >
                      <Pressable
                        onPress={handleStandardPlanPress}
                        backgroundColor={theme.colors.shared.clientEyePrimary}
                        borderRadius="full"
                        paddingX="7"
                        paddingY="3"
                        _hover={{
                          backgroundColor:
                            theme.colors.shared.clientEyeSecondary
                        }}
                      >
                        <HStack alignItems="center">
                          <Text
                            color="white"
                            fontSize="15px"
                            fontWeight="medium"
                          >
                            Get started
                          </Text>
                        </HStack>
                      </Pressable>
                    </HStack>
                  </VStack>
                  <VStack w={{ base: '25%', lg: '33%' }} paddingY="6">
                    <HStack
                      justifyContent="center"
                      alignItems="center"
                      h="full"
                    >
                      <Pressable
                        borderRadius="full"
                        paddingX="7"
                        paddingY="3"
                        backgroundColor={theme.colors.shared.clientEyePrimary}
                        _hover={{
                          backgroundColor:
                            theme.colors.shared.clientEyeSecondary
                        }}
                        onPress={handleContactUsPress}
                      >
                        <HStack alignItems="center">
                          <Text
                            color="white"
                            fontSize="15px"
                            fontWeight="medium"
                          >
                            Contact us
                          </Text>
                        </HStack>
                      </Pressable>
                    </HStack>
                  </VStack>
                </HStack>
              </Box>
            </Box>
          </Hidden>

          <Hidden from="sm">
            <Box zIndex={2} paddingX="5" marginTop="20">
              <VStack space="12">
                <Box
                  backgroundColor="white"
                  borderWidth="1"
                  borderColor={theme.colors.shared.black_15}
                  borderRadius="15px"
                  paddingY="6"
                  paddingX="6"
                >
                  <HStack alignItems="center" justifyContent="space-between">
                    <Box>
                      <HStack alignItems="start">
                        <Text fontSize="20px" fontWeight="medium">
                          $
                        </Text>
                        <Text fontSize="48px" fontWeight="medium">
                          500&nbsp;
                        </Text>
                      </HStack>
                      <Text fontSize="sm">Per month</Text>
                    </Box>
                    <Box>
                      <Text
                        fontSize="15px"
                        fontWeight="semibold"
                        color={theme.colors.shared.orange}
                      >
                        Standard
                      </Text>
                      <Text fontSize="13px" fontWeight="medium">
                        For small business
                      </Text>
                    </Box>
                  </HStack>
                  <Box
                    borderBottomWidth="1"
                    borderBottomColor={theme.colors.shared.black_10}
                    marginTop="2"
                  ></Box>
                  <VStack space="7" marginTop="7">
                    {listFeature.map((feature_item, i) => (
                      <Fragment key={`featuremobilepremium${i}`}>
                        <HStack
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Text fontSize="15px" fontWeight="medium">
                            {feature_item.feature}
                          </Text>
                          {feature_item.premium ? (
                            <Box w="24px">
                              <IconCheck color={theme.colors.shared.green4} />
                            </Box>
                          ) : (
                            <Box w="18px">
                              <IconLine />
                            </Box>
                          )}
                        </HStack>
                      </Fragment>
                    ))}
                  </VStack>
                </Box>
                <Box
                  backgroundColor="white"
                  borderWidth="1"
                  borderColor={theme.colors.shared.black_15}
                  borderRadius="15px"
                  paddingY="6"
                  paddingX="6"
                >
                  <HStack alignItems="center" justifyContent="space-between">
                    <Box>
                      <HStack alignItems="start">
                        <Text fontSize="48px" fontWeight="medium">
                          Negotiable
                        </Text>
                      </HStack>
                      <Text fontSize="sm">Per month</Text>
                    </Box>
                    <Box>
                      <Text
                        fontSize="15px"
                        fontWeight="semibold"
                        color={theme.colors.shared.pink}
                      >
                        Custom
                      </Text>
                      <Text fontSize="13px" fontWeight="medium">
                        For enterprise business
                      </Text>
                    </Box>
                  </HStack>
                  <Box
                    borderBottomWidth="1"
                    borderBottomColor={theme.colors.shared.black_10}
                    marginTop="2"
                  ></Box>
                  <VStack space="7" marginTop="7">
                    {listFeature.map((feature_item, i) => (
                      <Fragment key={`featuremobileunlimited${i}`}>
                        <HStack
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Text fontSize="15px" fontWeight="medium">
                            {feature_item.feature}
                          </Text>
                          {feature_item.unlimited ? (
                            <Box w="24px">
                              <IconCheck color={theme.colors.shared.green4} />
                            </Box>
                          ) : (
                            <Box w="18px">
                              <IconLine />
                            </Box>
                          )}
                        </HStack>
                      </Fragment>
                    ))}
                  </VStack>
                  <Button
                    p="0"
                    marginTop="10"
                    borderRadius="full"
                    backgroundColor={theme.colors.shared.clientEyePrimary}
                    _hover={{
                      backgroundColor: theme.colors.shared.clientEyeSecondary,
                      _text: {
                        color: 'white'
                      }
                    }}
                    _text={{
                      paddingX: '7',
                      paddingY: '3',
                      color: 'white',
                      fontSize: '15px',
                      fontWeight: 'medium'
                    }}
                  >
                    Contact Us
                  </Button>
                </Box>
              </VStack>
            </Box>
          </Hidden>
        </Box>
      </DashboardLayout>
    </>
  )
}
