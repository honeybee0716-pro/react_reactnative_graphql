import {
  StatusBar,
  Box,
  Hidden,
  Text,
  Image,
  HStack,
  VStack,
  Button,
  Pressable
} from 'native-base'
import React from 'react'
import { theme } from 'shared/styles/theme'
import { Fragment, useState } from 'react'
import IconChevronDown from 'shared/components/icons/IconChevronDown'
import IconCheck from 'shared/components/icons/IconCheck'
import LandingPageFooter from 'shared/components/LandingPage/LandingPageFooter'
import LandingPageTopNavigation from 'shared/components/LandingPage/LandingPageTopNavigation'
import IconInfo from 'shared/components/icons/IconInfo'
import IconLine from 'shared/components/icons/IconLine'

export default function PricingPage() {
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
        />

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
            Affordable pricing that
            <br />
            suits all business
          </Text>

          <Text
            fontSize={{ base: '13px', sm: 'lg', lg: 'xl' }}
            fontWeight="medium"
            textAlign="center"
            marginTop="4"
          >
            <Hidden till="sm">
              <>
                Choose a plan that’s right for you. Upgrade your account to
                <br />
                get unlimited messages and campaigns.
              </>
            </Hidden>
            <Hidden from="sm">
              <>
                Choose a plan that’s right for you. Upgrade
                <br />
                your account to get unlimited messages and
                <br />
                campaigns.
              </>
            </Hidden>
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
                      <HStack
                        justifyContent="space-between"
                        alignItems="center"
                      >
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
                  Join Contact Blaster community now to get free updates and
                  <br />
                  also a lot of offers are waiting for you
                </>
              </Hidden>
              <Hidden till="sm">
                <Hidden from="lg">
                  <>
                    Join Contact Blaster community now to get free updates and
                    also a
                    <br />
                    lot of offers are waiting for you
                  </>
                </Hidden>
              </Hidden>
              <Hidden from="sm">
                <>
                  Join Contact Blaster community now to get free
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
                    text: 'How to create and schedule campaign ?'
                  },
                  {
                    text: 'How can i add a new list ?'
                  },
                  {
                    text: 'How can i add a new list ?'
                  },
                  {
                    text: 'How to change my account password ?'
                  },
                  {
                    text: 'How to add a new team member ?'
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
      </Box>

      {/* Footer */}
      <LandingPageFooter />
    </>
  )
}
