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
  Divider
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
import IconPartyPopper from './components/IconPartyPopper'
import { useRouter } from 'solito/router'

const { width, height } = Dimensions.get('window')

export default function ThankYouPage() {
  const { push } = useRouter()

  const handleViewDashboardPress = () => {
    push('/home')
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

      <DashboardLayout>
        <Box position="relative" h="100%">
          <Image
            zIndex={1}
            position="absolute"
            right="0"
            top="0"
            w={1252}
            h="full"
            source={require('./components/ThankYouBlurredBackground.png')}
            // style={{
            //   transform: [
            //     {
            //       scaleY: '-1'
            //     }
            //   ]
            // }}
          />

          <Box zIndex={2} h="full">
            <VStack h="full">
              <Box flex="1">
                <Box h="full">
                  <Center h="90%" paddingX={{ base: '5', sm: '0' }}>
                    <Box
                      backgroundColor={theme.colors.shared.white_50}
                      borderWidth="1"
                      borderColor={theme.colors.shared.soft8Gray}
                      borderRadius="15px"
                      paddingX={{ base: '5', sm: '20' }}
                      paddingTop={{ base: '12', sm: '72px' }}
                      paddingBottom={{ base: '12', sm: '72px' }}
                    >
                      <VStack alignItems="center">
                        <Box w={{ base: '67px', sm: '100px' }}>
                          <IconPartyPopper />
                        </Box>
                        <Text
                          fontSize={{ base: '28px', sm: '45px' }}
                          fontWeight="semibold"
                          marginTop="2"
                        >
                          Awesome
                        </Text>
                        <Text
                          fontSize={{ base: '15px', sm: 'xl' }}
                          fontWeight="medium"
                          textAlign="center"
                          marginTop={{ base: '4', sm: '2' }}
                        >
                          Your account is ready to use. Thank you
                          <br />
                          for choosing ClientEye.
                        </Text>
                        <Pressable
                          onPress={handleViewDashboardPress}
                          backgroundColor={theme.colors.shared.clientEyePrimary}
                          borderRadius="full"
                          paddingX="10"
                          paddingY={{ base: '10px', sm: '3' }}
                          marginTop="12"
                          _hover={{
                            backgroundColor:
                              theme.colors.shared.clientEyeSecondary
                          }}
                        >
                          <HStack alignItems="center">
                            <Text
                              p="0"
                              backgroundColor="none"
                              color="white"
                              fontSize="15px"
                              fontWeight="medium"
                            >
                              View dashboard
                            </Text>
                            <Box
                              w={{ base: '18px', sm: '24px' }}
                              marginLeft="2"
                            >
                              <IconArrowRight color="white" />
                            </Box>
                          </HStack>
                        </Pressable>
                      </VStack>
                    </Box>
                  </Center>
                </Box>
              </Box>
            </VStack>
          </Box>
        </Box>
      </DashboardLayout>
    </>
  )
}
