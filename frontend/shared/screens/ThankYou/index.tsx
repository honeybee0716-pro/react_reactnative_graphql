import {
  StatusBar,
  Box,
  Center,
  Text,
  Image,
  HStack,
  VStack,
  Button,
  Pressable
} from 'native-base'
import React from 'react'
import { theme } from 'shared/styles/theme'
import { Dimensions } from 'react-native'
import IconArrowRight from 'shared/components/icons/IconArrowRight'
import LandingPageTopNavigation from 'shared/components/LandingPage/LandingPageTopNavigation'
import IconPartyPopper from '../../components/icons/IconPartyPopper'

const { width, height } = Dimensions.get('window')

export default function ThankYouPage() {
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
      <Box position="relative" h="100vh">
        <Image
          zIndex={1}
          position="absolute"
          right="0"
          top="0"
          w={1252}
          h="full"
          source={require('../../images/ThankYouBlurredBackground.png')}
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
            <Box>
              <LandingPageTopNavigation />
            </Box>

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
                        for choosing contact blaster.
                      </Text>
                      <Pressable
                        backgroundColor={theme.colors.shared.blueGentianFlower}
                        borderRadius="full"
                        paddingX="10"
                        paddingY={{ base: '10px', sm: '3' }}
                        marginTop="12"
                        _hover={{
                          backgroundColor: theme.colors.shared.brightBlue
                        }}
                      >
                        <HStack alignItems="center">
                          <Button
                            p="0"
                            backgroundColor="none"
                            _hover={{
                              _text: {
                                color: 'white'
                              }
                            }}
                            _text={{
                              color: 'white',
                              fontSize: {
                                base: 'sm',
                                sm: '15px'
                              },
                              fontWeight: 'medium'
                            }}
                          >
                            Get Started
                          </Button>
                          <Box w={{ base: '18px', sm: '24px' }} marginLeft="2">
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
    </>
  )
}
