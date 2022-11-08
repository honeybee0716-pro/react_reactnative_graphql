import {
  StatusBar,
  Box,
  Center,
  Hidden,
  Text,
  Image,
  HStack,
  VStack,
  Button,
  Pressable
} from 'native-base'
import { Link as SolitoLink } from 'solito/link'
import React from 'react'
import { theme } from 'shared/styles/theme'
import { Fragment, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import IconChevronDown from 'shared/components/icons/IconChevronDown'
import IconPlayCircle from 'shared/components/icons/IconPlayCircle'
import IconCreditCard from 'shared/components/icons/IconCreditCard'
import IconMessages from 'shared/components/icons/IconMessages'
import IconCheck from 'shared/components/icons/IconCheck'
import AmazonLogo from 'shared/components/logo/AmazonLogo'
import SlackTechnologiesLogo from 'shared/components/logo/SlackTechnologiesLogo'
import DiscordWordmarkLogo from 'shared/components/logo/DiscordWordmarkLogo'
import SpotifyLogo from 'shared/components/logo/SpotifyLogo'
import DolbyLogo from 'shared/components/logo/DolbyLogo'
import IconFlag from 'shared/components/icons/IconFlag'
import IconLists from 'shared/components/icons/IconLists'
import IconArrowRight from 'shared/components/icons/IconArrowRight'
import LandingPageFooter from 'shared/components/LandingPage/LandingPageFooter'
import LandingPageTopNavigation from 'shared/components/LandingPage/LandingPageTopNavigation'
import IconInfo from 'shared/components/icons/IconInfo'
import IconLine from 'shared/components/icons/IconLine'

export default function LandingPage() {
  const [listFeature, setListFeature] = useState([
    {
      feature: 'Manage Campaigns',
      free: true,
      premium: true,
      unlimited: true
    },
    {
      feature: 'Manage Lists',
      free: true,
      premium: true,
      unlimited: true
    },
    {
      feature: 'Manage Messages',
      free: true,
      premium: true,
      unlimited: true
    },
    {
      feature: 'Upload Lists',
      free: false,
      premium: true,
      unlimited: true
    },
    {
      feature: 'Download Lists',
      free: false,
      premium: false,
      unlimited: true
    },
    {
      feature: 'Teams Support',
      free: false,
      premium: false,
      unlimited: true
    },
    {
      feature: 'User Support',
      free: false,
      premium: true,
      unlimited: true
    }
  ])

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

      <LandingPageTopNavigation />

      <Box position="relative">
        <Image
          zIndex={1}
          position="absolute"
          right="0"
          top="-200px"
          w="597px"
          h="679.68px"
          source={require('../../images/Blurred Background.png')}
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
          source={require('../../images/Blurred Background.png')}
        />

        <VStack
          zIndex={2}
          alignItems="center"
          marginTop={{ base: '12', lg: '8' }}
        >
          <Text
            fontSize={{ base: '36px', sm: '45px' }}
            fontWeight="semibold"
            textAlign="center"
          >
            <Hidden till="sm">
              <>
                Providing better solutions
                <br />
                for your business
              </>
            </Hidden>
            <Hidden from="sm">
              <>
                Providing better
                <br />
                solutions for your
                <br />
                business
              </>
            </Hidden>
          </Text>

          <Hidden from="sm">
            <Center marginTop="16" w="full">
              <Image
                h="220px"
                w="353px"
                source={require('../../images/Landing page laptop (phone).png')}
              />
            </Center>
          </Hidden>

          <Text
            fontSize={{ base: '15px', sm: '20px' }}
            fontWeight="medium"
            textAlign="center"
            marginTop="4"
          >
            <Hidden till="sm">
              <>
                A Comprehensive dashboard allowing you to manage all
                <br />
                aspects of your business in one platform
              </>
            </Hidden>
            <Hidden from="sm">
              <>
                A Comprehensive dashboard allowing you
                <br />
                to manage all aspects of your business in
                <br />
                one platform
              </>
            </Hidden>
          </Text>

          <Hidden till="sm">
            <HStack marginTop="12">
              <Box>
                <SolitoLink href={`/sign-up`}>
                  <Box
                    backgroundColor={theme.colors.shared.blueGentianFlower}
                    borderRadius="full"
                    paddingX="10"
                    paddingY="2"
                    _hover={{
                      backgroundColor: theme.colors.shared.brightBlue
                    }}
                  >
                    <HStack alignItems="center">
                      <Text color="white" fontSize="md" fontWeight="medium">
                        Get Started
                      </Text>
                    </HStack>
                  </Box>
                </SolitoLink>
              </Box>
              <Box>
                <Pressable
                  paddingX="10"
                  paddingY="2"
                  _hover={{
                    backgroundColor: theme.colors.shared.brightBlue
                  }}
                >
                  <HStack alignItems="center">
                    <Box w="29px" marginRight="2">
                      <IconPlayCircle />
                    </Box>
                    <Text fontSize="md" fontWeight="medium">
                      Play Video
                    </Text>
                  </HStack>
                </Pressable>
              </Box>
            </HStack>
          </Hidden>
          <Hidden from="sm">
            <HStack marginTop="10" justifyContent="center">
              <Pressable
                backgroundColor={theme.colors.shared.blueGentianFlower}
                borderRadius="full"
                paddingX="12"
                paddingY="3"
                _hover={{
                  backgroundColor: theme.colors.shared.brightBlue
                }}
              >
                <HStack alignItems="center">
                  <Text fontSize="md" fontWeight="medium" color="white">
                    Get Started
                  </Text>
                  <Box w="24px" marginLeft="2">
                    <IconArrowRight color="white" />
                  </Box>
                </HStack>
              </Pressable>
            </HStack>
          </Hidden>

          <Hidden till="sm">
            <Center marginTop="16" w="full" paddingX="16">
              <Hidden till="lg">
                <Image
                  w="1029px"
                  h="608px"
                  source={require('../../images/Landing page laptop.png')}
                />
              </Hidden>
              <Hidden from="lg">
                <Image
                  w={(851 * 8) / 10}
                  h={(507 * 8) / 10}
                  source={require('../../images/Landing page laptop (tablet).png')}
                />
              </Hidden>
            </Center>
          </Hidden>
          <Text
            fontSize={{ base: 'xl', sm: '2xl' }}
            fontWeight="semibold"
            marginTop="16"
            textAlign="center"
          >
            Trusted by many companies worldwide
          </Text>
          <Hidden till="sm">
            <HStack
              w="full"
              maxW="1029px"
              paddingX="10"
              justifyContent="space-between"
              alignItems="center"
              marginTop="12"
              marginBottom="32"
            >
              <Box w="112.65px">
                <AmazonLogo />
              </Box>
              <Box w="133.32px">
                <SlackTechnologiesLogo />
              </Box>
              <Box w="172.44px">
                <DiscordWordmarkLogo />
              </Box>
              <Box w="113.17px">
                <SpotifyLogo />
              </Box>
              <Box w="156.92px">
                <DolbyLogo />
              </Box>
            </HStack>
          </Hidden>
          <Hidden from="sm">
            <Center marginTop="12" w="80%">
              <Swiper
                pagination={true}
                modules={[Pagination]}
                style={{ width: '100%', height: '100%' }}
                spaceBetween={30}
                slidesPerView={2}
                autoplay={true}
              >
                <SwiperSlide>
                  <Box w="full">
                    <AmazonLogo />
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box w="full">
                    <SlackTechnologiesLogo />
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box w="full">
                    <DiscordWordmarkLogo />
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box w="full">
                    <SpotifyLogo />
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box w="full">
                    <DolbyLogo />
                  </Box>
                </SwiperSlide>
              </Swiper>
            </Center>
          </Hidden>
        </VStack>
      </Box>

      <Box
        flexDirection={{ base: 'column-reverse', lg: 'row' }}
        paddingLeft={{ base: '0', sm: '16' }}
        paddingRight={{ base: '0', sm: '12' }}
        paddingY={{ base: '10', sm: '24' }}
        backgroundColor={{ base: 'none', lg: theme.colors.shared.black_2 }}
      >
        <Box
          w={{ base: 'full', lg: '1/2' }}
          flexDirection="col"
          justifyContent="center"
          paddingTop={{ base: '10', sm: '24', lg: '0' }}
        >
          <Text
            fontSize={{ base: '28px', sm: '40px' }}
            fontWeight="semibold"
            textAlign={{ base: 'center', lg: 'left' }}
          >
            Fast & Effective Solutions
            <br />
            for your business
          </Text>
          <Box paddingX="5">
            <Box
              marginTop="10"
              flexDirection="row"
              justifyContent={{ base: 'center', lg: 'start' }}
            >
              <Box
                w={{ base: 'full', sm: 'auto' }}
                backgroundColor={{
                  base: theme.colors.shared.black_4,
                  lg: 'none'
                }}
                borderColor={theme.colors.shared.black_9}
                borderWidth={{ base: '1', lg: '0' }}
                borderRadius={{ base: '19px', lg: '0' }}
                paddingX={{ base: '7', sm: '12', lg: '0' }}
                paddingY={{ base: '7', sm: '8', lg: '0' }}
              >
                <HStack alignItems="center">
                  <Center
                    backgroundColor={theme.colors.shared.blueGentianFlower}
                    borderRadius="full"
                    w="30px"
                    h="30px"
                  >
                    <Box w="18px">
                      <IconCheck color="white" />
                    </Box>
                  </Center>
                  <Text
                    fontSize={{ base: 'xl', sm: '2xl' }}
                    fontWeight="semibold"
                    marginLeft="5"
                  >
                    Pay as you go
                  </Text>
                </HStack>
                <Text
                  fontSize={{ base: 'sm', sm: 'md' }}
                  fontWeight="medium"
                  marginLeft={{ base: '0', sm: '50px' }}
                  marginTop={{ base: '4', sm: '2' }}
                >
                  <Hidden till="sm">
                    <>
                      You only pay for the services you use. No up-front fees.
                      <br />
                      No termination charges.
                    </>
                  </Hidden>
                  <Hidden from="sm">
                    <>
                      You only pay for the services you use. No up-front fees.
                      No termination charges.
                    </>
                  </Hidden>
                </Text>
              </Box>
            </Box>
            <Box
              marginTop={{ base: '5', sm: '10' }}
              flexDirection="row"
              justifyContent={{ base: 'center', lg: 'start' }}
            >
              <Box
                w={{ base: 'full', sm: 'auto' }}
                backgroundColor={{
                  base: theme.colors.shared.black_4,
                  lg: 'none'
                }}
                borderColor={theme.colors.shared.black_9}
                borderWidth={{ base: '1', lg: '0' }}
                borderRadius={{ base: '19px', lg: '0' }}
                paddingX={{ base: '7', sm: '12', lg: '0' }}
                paddingY={{ base: '7', sm: '8', lg: '0' }}
              >
                <HStack alignItems="center">
                  <Center
                    backgroundColor={theme.colors.shared.blueGentianFlower}
                    borderRadius="full"
                    w="30px"
                    h="30px"
                  >
                    <Box w="18px">
                      <IconCheck color="white" />
                    </Box>
                  </Center>
                  <Text
                    fontSize={{ base: 'xl', sm: '2xl' }}
                    fontWeight="semibold"
                    marginLeft="5"
                  >
                    Business Analytics
                  </Text>
                </HStack>
                <Text
                  fontSize={{ base: 'sm', sm: 'md' }}
                  fontWeight="medium"
                  marginLeft={{ base: '0', sm: '50px' }}
                  marginTop={{ base: '4', sm: '2' }}
                >
                  <Hidden till="sm">
                    <>
                      Analytics that provides the easiest path to becoming an
                      <br />
                      intelligence-driven organization
                    </>
                  </Hidden>
                  <Hidden from="sm">
                    <>
                      Analytics that provides the easiest path to becoming an
                      intelligence-driven organization
                    </>
                  </Hidden>
                </Text>
              </Box>
            </Box>
            <Box
              marginTop={{ base: '5', sm: '10' }}
              flexDirection="row"
              justifyContent={{ base: 'center', lg: 'start' }}
            >
              <Box
                w={{ base: 'full', sm: 'auto' }}
                backgroundColor={{
                  base: theme.colors.shared.black_4,
                  lg: 'none'
                }}
                borderColor={theme.colors.shared.black_9}
                borderWidth={{ base: '1', lg: '0' }}
                borderRadius={{ base: '19px', lg: '0' }}
                paddingX={{ base: '7', sm: '12', lg: '0' }}
                paddingY={{ base: '7', sm: '8', lg: '0' }}
              >
                <HStack alignItems="center">
                  <Center
                    backgroundColor={theme.colors.shared.blueGentianFlower}
                    borderRadius="full"
                    w="30px"
                    h="30px"
                  >
                    <Box w="18px">
                      <IconCheck color="white" />
                    </Box>
                  </Center>
                  <Text
                    fontSize={{ base: 'xl', sm: '2xl' }}
                    fontWeight="semibold"
                    marginLeft="5"
                  >
                    Modern UI Design
                  </Text>
                </HStack>
                <Text
                  fontSize={{ base: 'sm', sm: 'md' }}
                  fontWeight="medium"
                  marginLeft={{ base: '0', sm: '50px' }}
                  marginTop={{ base: '4', sm: '2' }}
                >
                  <Hidden till="sm">
                    <>
                      With a modern user interface it makes it easier for you
                      <br />
                      to organize your campaigns, messages & Lists
                    </>
                  </Hidden>
                  <Hidden from="sm">
                    <>
                      With a modern user interface it makes it easier for you to
                      organize your campaigns, messages & Lists
                    </>
                  </Hidden>
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          w={{ base: 'full', lg: '1/2' }}
          flexDirection="row"
          justifyContent={{ base: 'center', lg: 'end' }}
          paddingBottom={{ base: '0', sm: '24', lg: '0' }}
        >
          <Hidden till="sm">
            <Box>
              <Image
                w={(687 * 8) / 10}
                h={(727 * 8) / 10}
                source={require('../../images/Landing page content 1.png')}
              />
            </Box>
          </Hidden>
          <Hidden from="sm">
            <Box>
              <Image
                w={(361 * 9) / 10}
                h={(384 * 9) / 10}
                source={require('../../images/Landing page content 1 (phone).png')}
              />
            </Box>
          </Hidden>
        </Box>
      </Box>

      <Box
        flexDirection={{ base: 'column', lg: 'row' }}
        paddingLeft={{ base: '0', sm: '16' }}
        paddingRight={{ base: '0', sm: '12' }}
        paddingY={{ base: '5', sm: '24' }}
      >
        <Hidden from="sm">
          <Text
            fontSize="28px"
            fontWeight="semibold"
            marginBottom="6"
            textAlign="center"
          >
            Take your business to the next level
          </Text>
        </Hidden>
        <Box
          w={{ base: 'full', lg: '1/2' }}
          flexDirection="row"
          justifyContent={{ base: 'center', lg: 'start' }}
        >
          <VStack space={{ base: '6', sm: '10' }}>
            <HStack space={{ base: '6', sm: '10' }}>
              <Box
                w={{ base: '147px', sm: '262px' }}
                borderColor={theme.colors.shared.black_9}
                borderWidth="1"
                borderRadius={{ base: '19px', sm: '30px' }}
                flexDirection="col"
                alignItems="center"
                p={{ base: '5', sm: '8' }}
              >
                <Center
                  backgroundColor={theme.colors.shared.blueGentianFlower}
                  borderRadius="full"
                  w={{ base: '45px', sm: '100px' }}
                  h={{ base: '45px', sm: '100px' }}
                >
                  <Box w={{ base: '18px', sm: '35px' }}>
                    <IconFlag color="white" />
                  </Box>
                </Center>
                <Text
                  fontFamily="quicksand"
                  fontSize={{ base: 'sm', sm: '2xl' }}
                  fontWeight="bold"
                  textAlign="center"
                  marginTop="4"
                >
                  Manage your Campaigns
                </Text>
              </Box>
              <Box
                w={{ base: '147px', sm: '262px' }}
                borderColor={theme.colors.shared.black_9}
                borderWidth="1"
                borderRadius={{ base: '19px', sm: '30px' }}
                flexDirection="col"
                alignItems="center"
                p={{ base: '5', sm: '8' }}
              >
                <Center
                  backgroundColor={theme.colors.shared.purple}
                  borderRadius="full"
                  w={{ base: '45px', sm: '100px' }}
                  h={{ base: '45px', sm: '100px' }}
                >
                  <Box w={{ base: '18px', sm: '32px' }}>
                    <IconCreditCard color="white" />
                  </Box>
                </Center>
                <Text
                  fontFamily="quicksand"
                  fontSize={{ base: 'sm', sm: '2xl' }}
                  fontWeight="bold"
                  textAlign="center"
                  marginTop="4"
                >
                  Manage your Billing
                </Text>
              </Box>
            </HStack>
            <HStack space={{ base: '6', sm: '10' }}>
              <Box
                w={{ base: '147px', sm: '262px' }}
                borderColor={theme.colors.shared.black_9}
                borderWidth="1"
                borderRadius={{ base: '19px', sm: '30px' }}
                flexDirection="col"
                alignItems="center"
                p={{ base: '5', sm: '8' }}
              >
                <Center
                  backgroundColor={theme.colors.shared.pink}
                  borderRadius="full"
                  w={{ base: '45px', sm: '100px' }}
                  h={{ base: '45px', sm: '100px' }}
                >
                  <Box w={{ base: '18px', sm: '35px' }}>
                    <IconMessages color="white" />
                  </Box>
                </Center>
                <Text
                  fontFamily="quicksand"
                  fontSize={{ base: 'sm', sm: '2xl' }}
                  fontWeight="bold"
                  textAlign="center"
                  marginTop="4"
                >
                  Messages
                </Text>
              </Box>
              <Box
                w={{ base: '147px', sm: '262px' }}
                borderColor={theme.colors.shared.black_9}
                borderWidth="1"
                borderRadius={{ base: '19px', sm: '30px' }}
                flexDirection="col"
                alignItems="center"
                p={{ base: '5', sm: '8' }}
              >
                <Center
                  backgroundColor={theme.colors.shared.yellow}
                  borderRadius="full"
                  w={{ base: '45px', sm: '100px' }}
                  h={{ base: '45px', sm: '100px' }}
                >
                  <Box w={{ base: '18px', sm: '35px' }}>
                    <IconLists color="white" />
                  </Box>
                </Center>
                <Text
                  fontFamily="quicksand"
                  fontSize={{ base: 'sm', sm: '2xl' }}
                  fontWeight="bold"
                  textAlign="center"
                  marginTop="4"
                >
                  Lists
                </Text>
              </Box>
            </HStack>
          </VStack>
        </Box>
        <Box
          w={{ base: 'full', lg: '1/2' }}
          flexDirection="col"
          justifyContent="center"
          marginTop={{ base: '9', sm: '24', lg: '0' }}
        >
          <Hidden till="lg">
            <Text fontFamily="quicksand" fontSize="2xl" fontWeight="semibold">
              Our Services
            </Text>
          </Hidden>
          <Hidden till="sm">
            <Text
              fontSize="55px"
              fontWeight="semibold"
              marginTop={{ base: '0', lg: '4' }}
              textAlign={{ base: 'center', lg: 'left' }}
            >
              Take your business to
              <br />
              the next level
            </Text>
          </Hidden>
          <Box marginTop="3" paddingX={{ base: '5', sm: '0' }}>
            <Text
              fontSize={{ base: 'sm', sm: 'xl' }}
              fontWeight="medium"
              textAlign={{ base: 'center', sm: 'left' }}
            >
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business
            </Text>
          </Box>
          <HStack
            marginTop="8"
            justifyContent={{ base: 'center', lg: 'start' }}
          >
            <Hidden till="lg">
              <Pressable>
                <HStack alignItems="center">
                  <Text
                    fontSize="md"
                    fontWeight="medium"
                    color={theme.colors.shared.blueLink}
                  >
                    Learn More
                  </Text>
                  <Box w="24px" marginLeft="2">
                    <IconArrowRight color={theme.colors.shared.blueLink} />
                  </Box>
                </HStack>
              </Pressable>
            </Hidden>

            <Hidden from="lg">
              <Pressable
                backgroundColor={theme.colors.shared.blueGentianFlower}
                borderRadius="full"
                paddingX={{ base: '9', sm: '10' }}
                paddingY={{ base: '3', sm: '4' }}
                _hover={{
                  backgroundColor: theme.colors.shared.brightBlue
                }}
              >
                <HStack alignItems="center">
                  <Text
                    fontSize={{ base: 'sm', sm: 'md' }}
                    fontWeight="medium"
                    color="white"
                  >
                    Learn More
                  </Text>
                  <Box w={{ base: '18px', sm: '24px' }} marginLeft="2">
                    <IconArrowRight color="white" />
                  </Box>
                </HStack>
              </Pressable>
            </Hidden>
          </HStack>
        </Box>
      </Box>

      <VStack
        zIndex={2}
        alignItems="center"
        marginTop={{ base: '12', lg: '8' }}
      >
        <Text
          fontSize={{ base: '28px', sm: '35px', lg: '45px' }}
          fontWeight="semibold"
          textAlign="center"
        >
          Pricing & Plans
        </Text>

        <Text
          fontSize={{ base: '13px', sm: 'lg', lg: 'xl' }}
          fontWeight="medium"
          textAlign="center"
          marginTop="4"
        >
          Affordable pricing that suits all business
        </Text>
      </VStack>

      <Hidden till="sm">
        <Box
          zIndex={2}
          paddingX={{ base: '0', lg: '12' }}
          marginTop={{ base: '16', lg: '24' }}
        >
          <Box
            backgroundColor={{ base: 'none', lg: '#00000004' }}
            borderRadius="15px"
            paddingX={{ base: '10', lg: '16' }}
            paddingY={{ base: '10', lg: '16' }}
          >
            <HStack>
              <VStack
                w={{ base: '25%', lg: '31%' }}
                paddingTop="8"
                paddingBottom="6"
              ></VStack>
              <VStack
                w={{ base: '25%', lg: '23%' }}
                paddingTop="8"
                paddingBottom="6"
              >
                <VStack alignItems="center">
                  <Text
                    fontSize="15px"
                    fontWeight="semibold"
                    color={theme.colors.shared.purple}
                  >
                    Free Trial
                  </Text>
                  <Text fontSize="13px" fontWeight="medium">
                    14 days of free trial
                  </Text>
                  <HStack alignItems="start">
                    <Text fontSize="20px" fontWeight="medium">
                      $
                    </Text>
                    <Text fontSize="48px" fontWeight="medium">
                      0&nbsp;
                    </Text>
                  </HStack>
                  <Text fontSize="sm">Per month</Text>
                </VStack>
              </VStack>
              <VStack
                w={{ base: '25%', lg: '23%' }}
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
                    Premium
                  </Text>
                  <Text fontSize="13px" fontWeight="medium">
                    For small business
                  </Text>
                  <HStack alignItems="start">
                    <Text fontSize="20px" fontWeight="medium">
                      $
                    </Text>
                    <Text fontSize="48px" fontWeight="medium">
                      99&nbsp;
                    </Text>
                  </HStack>
                  <Text fontSize="sm">Per month</Text>
                </VStack>
              </VStack>
              <VStack
                w={{ base: '25%', lg: '23%' }}
                paddingTop="8"
                paddingBottom="6"
              >
                <VStack alignItems="center">
                  <Text
                    fontSize="15px"
                    fontWeight="semibold"
                    color={theme.colors.shared.pink}
                  >
                    Unlimited Access
                  </Text>
                  <Text fontSize="13px" fontWeight="medium">
                    For enterprise business
                  </Text>
                  <HStack alignItems="start">
                    <Text fontSize="20px" fontWeight="medium">
                      $
                    </Text>
                    <Text fontSize="48px" fontWeight="medium">
                      490&nbsp;
                    </Text>
                  </HStack>
                  <Text fontSize="sm">Per month</Text>
                </VStack>
              </VStack>
            </HStack>
            <HStack>
              <VStack w={{ base: '25%', lg: '31%' }}>
                <Text
                  fontSize={{ base: 'sm', lg: 'md' }}
                  fontWeight="semibold"
                  color={theme.colors.shared.gray}
                >
                  Main Features
                </Text>
              </VStack>
              <VStack w={{ base: '25%', lg: '23%' }}></VStack>
              <VStack
                w={{ base: '25%', lg: '23%' }}
                borderWidth="1"
                borderBottomWidth="0"
                borderTopWidth="0"
                borderColor={theme.colors.shared.black_9}
                backgroundColor={theme.colors.shared.white_60}
              ></VStack>
              <VStack w={{ base: '25%', lg: '23%' }}></VStack>
            </HStack>
            {listFeature.map((item1, i) => (
              <Fragment key={`feature${i}`}>
                <HStack
                  borderBottomWidth="1"
                  borderBottomColor={theme.colors.shared.soft4Gray_65}
                >
                  <VStack w={{ base: '25%', lg: '31%' }} paddingY="4">
                    <HStack
                      alignItems="center"
                      paddingRight={{ base: '0', lg: '24' }}
                    >
                      <Text
                        flex="1"
                        fontSize={{ base: 'md', lg: 'xl' }}
                        fontWeight="medium"
                      >
                        {item1.feature}
                      </Text>
                      <Box w="20px">
                        <IconInfo color={theme.colors.shared.gray} />
                      </Box>
                    </HStack>
                  </VStack>
                  <VStack w={{ base: '25%', lg: '23%' }} paddingY="4">
                    <HStack
                      justifyContent="center"
                      alignItems="center"
                      h="full"
                    >
                      {item1.free ? (
                        <Box w="20px">
                          <IconCheck color={theme.colors.shared.green4} />
                        </Box>
                      ) : (
                        <Box w="18px">
                          <IconLine />
                        </Box>
                      )}
                    </HStack>
                  </VStack>
                  <VStack
                    w={{ base: '25%', lg: '23%' }}
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
                      {item1.premium ? (
                        <Box w="20px">
                          <IconCheck color={theme.colors.shared.green4} />
                        </Box>
                      ) : (
                        <Box w="18px">
                          <IconLine />
                        </Box>
                      )}
                    </HStack>
                  </VStack>
                  <VStack w={{ base: '25%', lg: '23%' }} paddingY="4">
                    <HStack
                      justifyContent="center"
                      alignItems="center"
                      h="full"
                    >
                      {item1.unlimited ? (
                        <Box w="20px">
                          <IconCheck color={theme.colors.shared.green4} />
                        </Box>
                      ) : (
                        <Box w="18px">
                          <IconLine />
                        </Box>
                      )}
                    </HStack>
                  </VStack>
                </HStack>
              </Fragment>
            ))}
            <HStack>
              <VStack w={{ base: '25%', lg: '31%' }} paddingY="6"></VStack>
              <VStack w={{ base: '25%', lg: '23%' }} paddingY="6">
                <HStack justifyContent="center" alignItems="center" h="full">
                  <Pressable
                    backgroundColor={theme.colors.shared.blueGentianFlower}
                    borderRadius="full"
                    paddingX="7"
                    paddingY="3"
                    _hover={{
                      backgroundColor: theme.colors.shared.brightBlue
                    }}
                  >
                    <HStack alignItems="center">
                      <Text color="white" fontSize="15px" fontWeight="medium">
                        Get Started
                      </Text>
                    </HStack>
                  </Pressable>
                </HStack>
              </VStack>
              <VStack
                w={{ base: '25%', lg: '23%' }}
                paddingY="6"
                borderWidth="1"
                borderTopWidth="0"
                borderColor={theme.colors.shared.black_9}
                borderBottomRadius="15px"
                backgroundColor={theme.colors.shared.white_60}
              >
                <HStack justifyContent="center" alignItems="center" h="full">
                  <Pressable
                    backgroundColor={theme.colors.shared.blueGentianFlower}
                    borderRadius="full"
                    paddingX="7"
                    paddingY="3"
                    _hover={{
                      backgroundColor: theme.colors.shared.brightBlue
                    }}
                  >
                    <HStack alignItems="center">
                      <Text color="white" fontSize="15px" fontWeight="medium">
                        Get Started
                      </Text>
                    </HStack>
                  </Pressable>
                </HStack>
              </VStack>
              <VStack w={{ base: '25%', lg: '23%' }} paddingY="6">
                <HStack justifyContent="center" alignItems="center" h="full">
                  <Pressable
                    backgroundColor={theme.colors.shared.blueGentianFlower}
                    borderRadius="full"
                    paddingX="7"
                    paddingY="3"
                    _hover={{
                      backgroundColor: theme.colors.shared.brightBlue
                    }}
                  >
                    <HStack alignItems="center">
                      <Text color="white" fontSize="15px" fontWeight="medium">
                        Contact Us
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
                      0&nbsp;
                    </Text>
                  </HStack>
                  <Text fontSize="sm">Per month</Text>
                </Box>
                <Box>
                  <Text
                    fontSize="15px"
                    fontWeight="semibold"
                    color={theme.colors.shared.purple}
                  >
                    Free Trial
                  </Text>
                  <Text fontSize="13px" fontWeight="medium">
                    14 days of free trial
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
                  <Fragment key={`featuremobilefree${i}`}>
                    <HStack justifyContent="space-between" alignItems="center">
                      <Text fontSize="15px" fontWeight="medium">
                        {feature_item.feature}
                      </Text>
                      {feature_item.free ? (
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
                backgroundColor={theme.colors.shared.blueGentianFlower}
                _hover={{
                  backgroundColor: theme.colors.shared.brightBlue,
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
                Get Started
              </Button>
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
                    <Text fontSize="20px" fontWeight="medium">
                      $
                    </Text>
                    <Text fontSize="48px" fontWeight="medium">
                      99&nbsp;
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
                    Premium
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
                    <HStack justifyContent="space-between" alignItems="center">
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
              <Button
                p="0"
                marginTop="10"
                borderRadius="full"
                backgroundColor={theme.colors.shared.blueGentianFlower}
                _hover={{
                  backgroundColor: theme.colors.shared.brightBlue,
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
                Get Started
              </Button>
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
                    <Text fontSize="20px" fontWeight="medium">
                      $
                    </Text>
                    <Text fontSize="48px" fontWeight="medium">
                      490&nbsp;
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
                    Unlimited Access
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
                    <HStack justifyContent="space-between" alignItems="center">
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
                backgroundColor={theme.colors.shared.blueGentianFlower}
                _hover={{
                  backgroundColor: theme.colors.shared.brightBlue,
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

      <Box position="relative" h={{ base: '479px', sm: '514px', lg: 'auto' }}>
        <Hidden from="lg">
          <Box
            zIndex={1}
            position="absolute"
            top="0"
            bottom="0"
            left="0"
            right="0"
          >
            <Image
              h={{ base: '479px', sm: '514px' }}
              w="full"
              source={require('../../images/Landing page content 3 gradient 2.png')}
            />
          </Box>
        </Hidden>

        <Box
          zIndex={2}
          paddingLeft={{ base: '0', sm: '16' }}
          paddingRight={{ base: '0', sm: '12' }}
          paddingY={{ base: '0', lg: '24' }}
          h="full"
          flexDirection={{ base: 'column-reverse', lg: 'row' }}
          justifyContent="center"
        >
          <Hidden till="lg">
            <Box w="1/2" flexDirection="row">
              <Box position="relative" marginLeft="59px">
                <Image
                  borderRadius="15px"
                  w="460px"
                  h="535px"
                  source={require('../../images/Landing page content 3 gradient 1.png')}
                />

                <Box
                  position="absolute"
                  top="50px"
                  left="145px"
                  w="422px"
                  h="139px"
                  backgroundColor="#FFFFFFCC"
                  borderWidth="1"
                  borderColor={theme.colors.shared.black_9}
                  borderRadius="17px"
                >
                  <Text
                    position="absolute"
                    top="2"
                    right="2"
                    fontFamily="tauri"
                    fontSize="54px"
                    color="#777E90"
                    opacity={0.35}
                    style={{
                      transform: [
                        {
                          scaleX: '-1'
                        }
                      ]
                    }}
                  >
                    “
                  </Text>

                  <Center h="full" w="full">
                    <HStack space="6" paddingX="6">
                      <Center>
                        <Box
                          w="80px"
                          h="80px"
                          borderWidth="1"
                          borderColor={theme.colors.shared.softGray}
                          borderRadius="full"
                          backgroundColor="brown"
                        ></Box>
                      </Center>
                      <Box flex="1">
                        <Text fontSize="xl" fontWeight="semibold" italic>
                          Carla Smith
                        </Text>
                        <Text fontSize="xs" fontWeight="medium" italic>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque euismod, purus quis porttitor eleifend
                        </Text>
                      </Box>
                    </HStack>
                  </Center>
                </Box>

                <Box
                  position="absolute"
                  bottom="70px"
                  left="-59px"
                  w="422px"
                  h="139px"
                  backgroundColor="#FFFFFFCC"
                  borderWidth="1"
                  borderColor={theme.colors.shared.black_9}
                  borderRadius="17px"
                >
                  <Center h="full" w="full">
                    <HStack space="6" paddingX="6">
                      <Center>
                        <Box
                          w="80px"
                          h="80px"
                          borderWidth="1"
                          borderColor={theme.colors.shared.softGray}
                          borderRadius="full"
                          backgroundColor="brown"
                        ></Box>
                      </Center>
                      <Box flex="1">
                        <Text fontSize="xl" fontWeight="semibold" italic>
                          Kevin Tom
                        </Text>
                        <Text fontSize="xs" fontWeight="medium" italic>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque euismod, purus quis porttitor eleifend
                        </Text>
                      </Box>
                    </HStack>
                  </Center>
                </Box>
              </Box>
            </Box>
          </Hidden>
          <Box
            w={{ base: 'full', lg: '1/2' }}
            flexDirection="col"
            justifyContent="center"
          >
            <Text
              fontSize={{ base: '28px', sm: '55px' }}
              fontWeight="semibold"
              textAlign={{ base: 'center', lg: 'left' }}
            >
              Trusted by many
              <br />
              customers
            </Text>
            <Hidden till="lg">
              <>
                <Box marginTop="3">
                  <Text fontSize="xl" fontWeight="medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque euismod, purus quis porttitor eleifend, lorem diam
                    semper augue, commodo volutpat tortor felis id enim.
                    Phasellus aliquam, enim eget semper feugiat, leo lectus
                    sagittis lectus, eget faucibus massa metus vitae ipsum.
                  </Text>
                </Box>
                <HStack marginTop="8">
                  <Pressable
                    backgroundColor={theme.colors.shared.blueGentianFlower}
                    borderRadius="full"
                    paddingX="10"
                    paddingY="4"
                    _hover={{
                      backgroundColor: theme.colors.shared.brightBlue
                    }}
                  >
                    <HStack alignItems="center">
                      <Text fontSize="md" fontWeight="medium" color="white">
                        Learn More
                      </Text>
                      <Box w="24px" marginLeft="2">
                        <IconArrowRight color="white" />
                      </Box>
                    </HStack>
                  </Pressable>
                </HStack>
              </>
            </Hidden>

            <Hidden till="sm">
              <Hidden from="lg">
                <Box marginTop="12">
                  <Swiper
                    pagination={true}
                    modules={[Pagination]}
                    style={{ width: '100%', height: '100%' }}
                    spaceBetween={20}
                    slidesPerView={2}
                    autoplay={true}
                  >
                    {[...Array(6)].map((_, i) => (
                      <Fragment key={`contact 3 ${i}`}>
                        <SwiperSlide>
                          <Box
                            position="relative"
                            w="full"
                            h="139px"
                            backgroundColor="#FFFFFFCC"
                            borderWidth="1"
                            borderColor={theme.colors.shared.black_9}
                            borderRadius="17px"
                          >
                            <Text
                              position="absolute"
                              top="2"
                              right="2"
                              fontFamily="tauri"
                              fontSize="54px"
                              color="#777E90"
                              opacity={0.35}
                              style={{
                                transform: [
                                  {
                                    scaleX: '-1'
                                  }
                                ]
                              }}
                            >
                              “
                            </Text>

                            <Center h="full" w="full">
                              <HStack space="6" paddingX="6">
                                <Center>
                                  <Box
                                    w="80px"
                                    h="80px"
                                    borderWidth="1"
                                    borderColor={theme.colors.shared.softGray}
                                    borderRadius="full"
                                    backgroundColor="brown"
                                  ></Box>
                                </Center>
                                <Box flex="1">
                                  <Text
                                    fontSize="xl"
                                    fontWeight="semibold"
                                    italic
                                  >
                                    Carla Smith
                                  </Text>
                                  <Text
                                    fontSize="xs"
                                    fontWeight="medium"
                                    italic
                                  >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Quisque euismod, purus quis
                                    porttitor eleifend
                                  </Text>
                                </Box>
                              </HStack>
                            </Center>
                          </Box>
                        </SwiperSlide>
                      </Fragment>
                    ))}
                  </Swiper>
                </Box>
              </Hidden>
            </Hidden>
            <Hidden from="sm">
              <Box marginTop="10" paddingX="6">
                <Swiper
                  pagination={true}
                  modules={[Pagination]}
                  style={{ width: '100%', height: '100%' }}
                  // spaceBetween={20}
                  slidesPerView={1}
                  autoplay={true}
                >
                  {[...Array(6)].map((_, i) => (
                    <Fragment key={`contact 3 ${i}`}>
                      <SwiperSlide>
                        <Box
                          position="relative"
                          w="full"
                          backgroundColor="#FFFFFFCC"
                          borderWidth="1"
                          borderColor={theme.colors.shared.black_9}
                          borderRadius="17px"
                        >
                          <Text
                            position="absolute"
                            top="3"
                            right="5"
                            fontFamily="tauri"
                            fontSize="54px"
                            color="#777E90"
                            opacity={0.35}
                            style={{
                              transform: [
                                {
                                  scaleX: '-1'
                                }
                              ]
                            }}
                          >
                            “
                          </Text>

                          <Center h="full" w="full">
                            <Box paddingX="6" paddingTop="8" paddingBottom="6">
                              <Box
                                w="80px"
                                h="80px"
                                borderWidth="1"
                                borderColor={theme.colors.shared.softGray}
                                borderRadius="full"
                                backgroundColor="brown"
                              ></Box>
                              <Box marginTop="3">
                                <Text
                                  fontSize="xl"
                                  fontWeight="semibold"
                                  italic
                                >
                                  Carla Smith
                                </Text>
                                <Text fontSize="xs" fontWeight="medium" italic>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Quisque euismod, purus quis
                                  porttitor eleifend
                                </Text>
                              </Box>
                            </Box>
                          </Center>
                        </Box>
                      </SwiperSlide>
                    </Fragment>
                  ))}
                </Swiper>
              </Box>
            </Hidden>
          </Box>
        </Box>
      </Box>

      <Box
        flexDirection={{ base: 'column-reverse', lg: 'row' }}
        paddingLeft={{ base: '0', sm: '16' }}
        paddingRight={{ base: '0', sm: '12' }}
        paddingY={{ base: '16', sm: '24' }}
        backgroundColor={{ base: 'none', lg: theme.colors.shared.black_2 }}
      >
        <Box
          w={{ base: 'full', lg: '1/2' }}
          flexDirection="col"
          justifyContent="center"
          marginTop={{ base: '12', sm: '24', lg: '0' }}
        >
          <Hidden till="lg">
            <Text fontFamily="quicksand" fontSize="2xl" fontWeight="semibold">
              Our Services
            </Text>
          </Hidden>
          <Text
            fontSize={{ base: '28px', sm: '55px' }}
            fontWeight="semibold"
            marginTop={{ base: '0', lg: '4' }}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            One platform for many
            <br />
            solutions
          </Text>
          <Box marginTop="3" paddingX={{ base: '5', sm: '0' }}>
            <Text
              fontSize={{ base: 'sm', sm: 'xl' }}
              fontWeight="medium"
              textAlign={{ base: 'center', sm: 'left' }}
            >
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business
            </Text>
          </Box>
          <HStack
            marginTop="8"
            justifyContent={{ base: 'center', lg: 'start' }}
          >
            <Hidden till="lg">
              <Pressable>
                <HStack alignItems="center">
                  <Text
                    fontSize="md"
                    fontWeight="medium"
                    color={theme.colors.shared.blueLink}
                  >
                    Learn More
                  </Text>
                  <Box w="24px" marginLeft="2">
                    <IconArrowRight color={theme.colors.shared.blueLink} />
                  </Box>
                </HStack>
              </Pressable>
            </Hidden>

            <Hidden from="lg">
              <Pressable
                backgroundColor={theme.colors.shared.blueGentianFlower}
                borderRadius="full"
                paddingX={{ base: '9', sm: '10' }}
                paddingY={{ base: '3', sm: '4' }}
                _hover={{
                  backgroundColor: theme.colors.shared.brightBlue
                }}
              >
                <HStack alignItems="center">
                  <Text
                    fontSize={{ base: 'sm', sm: 'md' }}
                    fontWeight="medium"
                    color="white"
                  >
                    Learn More
                  </Text>
                  <Box w={{ base: '18px', sm: '24px' }} marginLeft="2">
                    <IconArrowRight color="white" />
                  </Box>
                </HStack>
              </Pressable>
            </Hidden>
          </HStack>
        </Box>
        <Box
          w={{ base: 'full', lg: '1/2' }}
          flexDirection="row"
          justifyContent={{ base: 'center', lg: 'end' }}
        >
          <Hidden till="sm">
            <Image
              w="597px"
              h="535px"
              source={require('../../images/Landing page content 2.png')}
            />
          </Hidden>
          <Hidden from="sm">
            <Box paddingRight="5">
              <Image
                w={(361 * 9) / 10}
                h={(324 * 9) / 10}
                source={require('../../images/Landing page content 2 (phone).png')}
              />
            </Box>
          </Hidden>
        </Box>
      </Box>

      <Box zIndex={2} marginTop={{ base: '16', sm: '20' }}>
        <VStack alignItems="center">
          <Text
            fontSize="15px"
            fontWeight="medium"
            color={theme.colors.shared.gray2}
          >
            learn how to get started
          </Text>
          <Text
            fontSize={{ base: '28px', sm: '35px', lg: '45px' }}
            fontWeight="semibold"
            marginTop="3"
            textAlign="center"
          >
            Frequently Asked Questions
          </Text>
          <Text
            fontSize={{ base: 'sm', sm: 'lg', lg: 'xl' }}
            fontWeight="medium"
            textAlign="center"
            marginTop="3"
          >
            <Hidden till="lg">
              <>
                Join SaaS Template community now to get free updates and
                <br />
                also a lot of offers are waiting for you
              </>
            </Hidden>
            <Hidden till="sm">
              <Hidden from="lg">
                <>
                  Join SaaS Template community now to get free updates and also
                  a
                  <br />
                  lot of offers are waiting for you
                </>
              </Hidden>
            </Hidden>
            <Hidden from="sm">
              <>
                Join SaaS Template community now to get free
                <br />
                updates and also a lot of offers are waiting for you
              </>
            </Hidden>
          </Text>
        </VStack>

        <Hidden till="sm">
          <HStack
            justifyContent="center"
            alignItems="center"
            space="2"
            marginTop="10"
          >
            <Button
              p="0"
              borderRadius="full"
              backgroundColor={theme.colors.shared.blueGentianFlower}
              _hover={{
                backgroundColor: theme.colors.shared.brightBlue,
                _text: {
                  color: 'white'
                }
              }}
              _text={{
                paddingX: '7',
                paddingY: '6px',
                color: 'white',
                fontSize: '15px',
                fontWeight: 'medium'
              }}
            >
              General
            </Button>
            <Button
              p="0"
              borderRadius="full"
              backgroundColor="none"
              _hover={{
                backgroundColor: theme.colors.shared.brightBlue,
                _text: {
                  color: 'white'
                }
              }}
              _text={{
                paddingX: '7',
                paddingY: '6px',
                color: 'gray.500',
                fontSize: '15px',
                fontWeight: 'medium'
              }}
            >
              Account
            </Button>
            <Button
              p="0"
              borderRadius="full"
              backgroundColor="none"
              _hover={{
                backgroundColor: theme.colors.shared.brightBlue,
                _text: {
                  color: 'white'
                }
              }}
              _text={{
                paddingX: '7',
                paddingY: '6px',
                color: 'gray.500',
                fontSize: '15px',
                fontWeight: 'medium'
              }}
            >
              Subscription
            </Button>
            <Button
              p="0"
              borderRadius="full"
              backgroundColor="none"
              _hover={{
                backgroundColor: theme.colors.shared.brightBlue,
                _text: {
                  color: 'white'
                }
              }}
              _text={{
                paddingX: '7',
                paddingY: '6px',
                color: 'gray.500',
                fontSize: '15px',
                fontWeight: 'medium'
              }}
            >
              Others
            </Button>
          </HStack>
        </Hidden>

        <HStack
          justifyContent="center"
          marginTop={{ base: '10', sm: '16', lg: '10' }}
          marginBottom={{ base: '3', sm: '16', lg: '24' }}
        >
          <Box
            w={{ base: 'full', lg: '70%' }}
            paddingX={{ base: '5', sm: '10' }}
          >
            <VStack alignItems="center" space="3">
              {[
                {
                  text: 'How to create and schedule a new campaign?'
                },
                {
                  text: 'How can I add a new list?'
                },
                {
                  text: 'How can I add a new list?'
                },
                {
                  text: 'How to change my account password?'
                },
                {
                  text: 'How to add a new team member?'
                }
              ].map((item2, i) => (
                <Fragment key={`item2${i}`}>
                  <HStack
                    w="full"
                    justifyContent="space-between"
                    alignItems="center"
                    borderWidth="1"
                    borderColor={theme.colors.shared.black_6}
                    borderRadius="15px"
                    backgroundColor={theme.colors.shared.softer5Gray}
                    paddingY="5"
                    paddingX="5"
                  >
                    <Text
                      fontSize={{ base: '13px', sm: '17.5px' }}
                      fontWeight="medium"
                    >
                      {item2.text}
                    </Text>
                    <Box w={{ base: '18px', sm: '24px' }}>
                      <IconChevronDown
                        rotation={180}
                        color={theme.colors.shared.softBlack}
                      />
                    </Box>
                  </HStack>
                </Fragment>
              ))}
            </VStack>
          </Box>
        </HStack>
      </Box>

      {/* Footer */}
      <LandingPageFooter />
    </>
  )
}
