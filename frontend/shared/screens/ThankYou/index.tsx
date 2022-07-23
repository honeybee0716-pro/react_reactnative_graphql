import React from 'react'
import {
  StatusBar,
  Box,
  Center,
  Text,
  Image,
  HStack,
  VStack,
  Pressable
} from 'native-base'
import { theme } from 'shared/styles/theme'
import { Dimensions } from 'react-native'
import DashboardLayout from 'shared/layouts/DashboardLayout'
import IconArrowRight from 'shared/components/icons/IconArrowRight'
import IconPartyPopper from './components/IconPartyPopper'
import { useRouter } from 'solito/router'
import { useRouteAuthentication } from '../../hooks/useRouteAuthentication/useRouteAuthentication'

const { width, height } = Dimensions.get('window')

export default function ThankYouPage() {
  useRouteAuthentication()

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
