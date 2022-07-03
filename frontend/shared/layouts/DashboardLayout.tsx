import {
  StatusBar,
  Box,
  Center,
  Hidden,
  Text,
  HStack,
  Pressable,
  Tooltip
} from 'native-base'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { theme } from 'shared/styles/theme'
import IconCredits from 'shared/components/icons/IconCredits'
import IconHome from 'shared/components/icons/IconHome'
import IconCreditCard from 'shared/components/icons/IconCreditCard'
import IconHelpCircle from 'shared/components/icons/IconHelpCircle'
import IconX from 'shared/components/icons/IconX'
import { useRouter } from 'solito/router'
import AsyncStorage from '@react-native-community/async-storage'
import { useRecoilState } from 'recoil'
import { userSubscriptionDataState } from '../state'

const DashboardLayout: React.FC = ({ children }) => {
  const { push } = useRouter()
  const [route, setRoute] = React.useState<string | undefined>()
  const [userSubscriptionData] = useRecoilState<any>(userSubscriptionDataState)

  React.useEffect(() => {
    setRoute(document.location.pathname)
  }, [])

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

      {/* Top navigation */}
      <HStack
        position="fixed"
        top="0"
        paddingLeft={{ base: '0', sm: '90px', lg: '20px' }}
        w="full"
        zIndex={10}
        height={{ base: '69px', sm: '84px' }}
        backgroundColor="white"
        borderBottomWidth="1"
        borderBottomColor={theme.colors.shared.softGray}
      >
        <HStack
          marginLeft={{ base: '5', lg: '0' }}
          width="100%"
          justifyContent="space-between"
          paddingRight={{ base: '0', sm: '5' }}
        >
          <Center
            h="84px"
            borderBottomWidth="1"
            borderBottomColor={theme.colors.shared.softer2Gray}
          >
            <Pressable
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              flexDir="row"
              w="full"
              onPress={async () => {
                const jwt = await AsyncStorage.getItem('jwt')
                if (jwt) {
                  push('/home')
                } else {
                  push('/sign-in')
                }
              }}
            >
              {/* <Image
                w={{ base: '2.5rem', sm: '3.1rem' }}
                h={{ base: '2.5rem', sm: '3.1rem' }}
                source={require('shared/assets/images/contact-blaster-blue.png')}
              /> */}
              <Hidden till="lg">
                <Text
                  color={theme.colors.shared.softBlack}
                  fontSize={{ base: 'xl', sm: '2xl' }}
                  fontWeight="semibold"
                  marginLeft={'4'}
                >
                  ClientEye
                </Text>
              </Hidden>
            </Pressable>
          </Center>

          <Center>
            <HStack>
              <Box flex="1">
                <Center marginY={{ base: '2', lg: '0' }}>
                  <Pressable
                    w={{ lg: 'full' }}
                    flexDirection="row"
                    backgroundColor={
                      route === '/home'
                        ? theme.colors.shared.brightBlue
                        : undefined
                    }
                    alignItems="center"
                    paddingX={{ base: '3', lg: '6' }}
                    paddingY="3"
                    borderRadius="lg"
                    onPress={() => push('/home')}
                    _hover={{
                      ...(route !== '/home'
                        ? {
                            backgroundColor: theme.colors.shared.softer2Gray
                          }
                        : {})
                    }}
                  >
                    <Box w={{ base: '20px', lg: '24px' }}>
                      <IconHome
                        color={
                          route === '/home'
                            ? 'white'
                            : theme.colors.shared.soft2Gray
                        }
                      />
                    </Box>
                    <Hidden till="lg">
                      <Text
                        color={
                          route === '/home'
                            ? 'white'
                            : theme.colors.shared.soft2Gray
                        }
                        fontWeight="semibold"
                        paddingLeft="4"
                      >
                        Visitors
                      </Text>
                    </Hidden>
                  </Pressable>
                </Center>
              </Box>
              <Center marginY={{ base: '2', lg: '0' }}>
                <Pressable
                  backgroundColor={
                    route === '/billing'
                      ? theme.colors.shared.brightBlue
                      : undefined
                  }
                  w={{ lg: 'full' }}
                  flexDirection="row"
                  alignItems="center"
                  paddingX={{ base: '3', lg: '6' }}
                  paddingY="3"
                  borderRadius="lg"
                  _hover={{
                    ...(route !== '/billing'
                      ? {
                          backgroundColor: theme.colors.shared.softer2Gray
                        }
                      : {})
                  }}
                  onPress={() => push('/billing')}
                >
                  <Box w={{ base: '20px', lg: '24px' }}>
                    <IconCreditCard
                      color={
                        route === '/billing'
                          ? 'white'
                          : theme.colors.shared.soft2Gray
                      }
                    />
                  </Box>
                  <Hidden till="lg">
                    <Text
                      color={
                        route === '/billing'
                          ? 'white'
                          : theme.colors.shared.soft2Gray
                      }
                      fontWeight="semibold"
                      paddingLeft="4"
                    >
                      Billing
                    </Text>
                  </Hidden>
                </Pressable>
              </Center>
              <Center marginY={{ base: '2', lg: '0' }}>
                <Pressable
                  backgroundColor={
                    route === '/help'
                      ? theme.colors.shared.brightBlue
                      : undefined
                  }
                  w={{ lg: 'full' }}
                  flexDirection="row"
                  alignItems="center"
                  paddingX={{ base: '3', lg: '6' }}
                  paddingY="3"
                  borderRadius="lg"
                  _hover={{
                    ...(route !== '/help'
                      ? {
                          backgroundColor: theme.colors.shared.softer2Gray
                        }
                      : {})
                  }}
                  onPress={() => {
                    window.open('https://clienteye.com/contact/', '_blank')
                  }}
                >
                  <Box w={{ base: '20px', lg: '24px' }}>
                    <IconHelpCircle
                      color={
                        route === '/help'
                          ? 'white'
                          : theme.colors.shared.soft2Gray
                      }
                    />
                  </Box>
                  <Hidden till="lg">
                    <Text
                      color={
                        route === '/help'
                          ? 'white'
                          : theme.colors.shared.soft2Gray
                      }
                      fontWeight="semibold"
                      paddingLeft="4"
                    >
                      Help
                    </Text>
                  </Hidden>
                </Pressable>
              </Center>
              <Center marginY={{ base: '2', lg: '0' }}>
                <Pressable
                  backgroundColor={
                    route === '/sign-out'
                      ? theme.colors.shared.brightBlue
                      : undefined
                  }
                  w={{ lg: 'full' }}
                  flexDirection="row"
                  alignItems="center"
                  paddingX={{ base: '3', lg: '6' }}
                  paddingY="3"
                  borderRadius="lg"
                  _hover={{
                    ...(route !== '/sign-out'
                      ? {
                          backgroundColor: theme.colors.shared.softer2Gray
                        }
                      : {})
                  }}
                  onPress={() => push('/sign-out')}
                >
                  <Box w={{ base: '20px', lg: '24px' }}>
                    <IconX
                      color={
                        route === '/sign-out'
                          ? 'white'
                          : theme.colors.shared.soft2Gray
                      }
                    />
                  </Box>
                  <Hidden till="lg">
                    <Text
                      color={
                        route === '/sign-out'
                          ? 'white'
                          : theme.colors.shared.soft2Gray
                      }
                      fontWeight="semibold"
                      paddingLeft="4"
                    >
                      Sign out
                    </Text>
                  </Hidden>
                </Pressable>
              </Center>
            </HStack>
          </Center>

          <Hidden till="sm">
            <Tooltip
              label="Your credits will reset at the start of your billing cycle."
              openDelay={100}
            >
              <Center>
                <Pressable
                  alignItems="center"
                  display="flex"
                  flexDirection="row"
                  backgroundColor={theme.colors.shared.blueGentianFlower}
                  paddingY="2"
                  paddingX="6"
                  rounded="full"
                  justifyContent="center"
                  onPress={() => push('/billing')}
                >
                  <Box w="21px" marginRight="2">
                    <IconCredits />
                  </Box>
                  <Text color="white" fontWeight="semibold">
                    {userSubscriptionData?.remainingCredits}
                  </Text>
                </Pressable>
              </Center>
            </Tooltip>
          </Hidden>
        </HStack>
      </HStack>
      {/* Left Navbar */}
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        marginTop={{
          base: '69px',
          sm: '84px'
        }}
      >
        <KeyboardAwareScrollView
          contentContainerStyle={{
            width: '100%',
            height: '100%',
            backgroundColor: theme.colors.shared.aliceBlue
          }}
          overScrollMode="auto"
        >
          <Box backgroundColor={theme.colors.shared.aliceBlue} minH="full">
            {children}
          </Box>
        </KeyboardAwareScrollView>
      </Box>
    </>
  )
}

export default DashboardLayout
