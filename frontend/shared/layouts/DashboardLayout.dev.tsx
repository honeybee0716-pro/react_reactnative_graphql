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
  Avatar,
  Menu,
  CheckIcon,
  Select,
  Tooltip
} from 'native-base'
import React from 'react'
import { Dimensions, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from 'shared/styles/theme'
import { Link as SolitoLink } from 'solito/link'
import IconMacCommand from 'shared/components/icons/IconMacCommand'
import IconCredits from 'shared/components/icons/IconCredits'
import IconSun from 'shared/components/icons/IconSun'
import IconNotificationBell from 'shared/components/icons/IconNotificationBell'
import IconHome from 'shared/components/icons/IconHome'
import IconLists from 'shared/components/icons/IconLists'
import IconMessages from 'shared/components/icons/IconMessages'
import IconFlag from 'shared/components/icons/IconFlag'
import IconTrashBin from 'shared/components/icons/IconTrashBin'
import IconCreditCard from 'shared/components/icons/IconCreditCard'
import IconUser from 'shared/components/icons/IconUser'
import IconHelpCircle from 'shared/components/icons/IconHelpCircle'
import IconChevronDown from 'shared/components/icons/IconChevronDown'
import IconArrowRight from 'shared/components/icons/IconArrowRight'
import IconMenu from 'shared/components/icons/IconMenu'
import IconX from 'shared/components/icons/IconX'
import { useRouter } from 'solito/router'
import AsyncStorage from '@react-native-community/async-storage'

const { width, height } = Dimensions.get('window')

function MenuComponent() {
  const [shouldOverlapWithTrigger] = React.useState(false)
  const [position, setPosition] = React.useState('auto')

  return (
    <VStack space={6} alignSelf="flex-start" w="100%">
      <Menu
        w="160"
        shouldOverlapWithTrigger={shouldOverlapWithTrigger} // @ts-ignore
        placement={position == 'auto' ? undefined : position}
        trigger={(triggerProps) => {
          return (
            <Button variant="unstyled" {...triggerProps}>
              <Box
                w={{ base: '35px', sm: '12' }}
                h={{ base: '35px', sm: '12' }}
              >
                <Avatar
                  source={{
                    uri: undefined
                    // uri: "https://media-exp1.licdn.com/dms/image/C5603AQH7LFIlwjId2g/profile-displayphoto-shrink_100_100/0/1517410056178?e=1655942400&v=beta&t=h6GNGaSXOzOrdXoMyBVV906rm7NtIFS-MtPEgLWqWQ8"
                  }}
                  w="100%"
                  h="100%"
                >
                  {`${'J' || ''}${'F' || ''}`}
                </Avatar>
              </Box>
            </Button>
          )
        }}
      >
        <SolitoLink href="/sign-out">
          <Menu.Item>Sign out</Menu.Item>
        </SolitoLink>
      </Menu>
    </VStack>
  )
}

const DashboardLayout: React.FC = ({ children }) => {
  const { push } = useRouter()
  const [route, setRoute] = React.useState<string | undefined>()

  React.useEffect(() => {
    // alert(document.location.pathname)
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
        paddingLeft={{ base: '0', sm: '90px', lg: '310px' }}
        w="full"
        zIndex={10}
        height={{ base: '69px', sm: '84px' }}
        backgroundColor="white"
        borderBottomWidth="1"
        borderBottomColor={theme.colors.shared.softGray}
      >
        {/* Logo Contact Blaster */}
        <Hidden from="sm">
          <Center
            flex="1"
            paddingLeft="4"
            borderBottomWidth="1"
            borderBottomColor={theme.colors.shared.softer2Gray}
          >
            <Box flexDir="row" alignItems="center" w="full">
              <Image
                w="2.5rem"
                h="2.5rem"
                source={require('shared/assets/images/contact-blaster-blue.png')}
              />
              <Text
                color={theme.colors.shared.softBlack}
                fontSize="lg"
                fontWeight="semibold"
                marginLeft={'2'}
              >
                ClientEye
              </Text>
            </Box>
          </Center>
        </Hidden>
        {/* Search here */}
        <Hidden till="sm">
          <Center flex="1" paddingLeft="6"></Center>
        </Hidden>
        <HStack
          marginLeft={{ base: '5', lg: '0' }}
          width={{ lg: '430px' }}
          justifyContent="end"
          paddingRight={{ base: '0', sm: '5' }}
        >
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
                    300
                  </Text>
                </Pressable>
              </Center>
            </Tooltip>
          </Hidden>
          {/* <Hidden till="lg">
            <Center marginLeft="6">
              <Pressable>
                <Box w="24px">
                  <IconSun />
                </Box>
              </Pressable>
            </Center>
          </Hidden> */}
          {/* <Center marginLeft={{ base: '0', sm: '6' }}>
            <Pressable>
              <Box w="19px">
                <IconNotificationBell />
              </Box>
            </Pressable>
          </Center> */}
          {/* <Center marginLeft={{ base: '4', sm: '8' }}>
            <MenuComponent />
          </Center>
          <Hidden from="sm">
            <Center marginLeft={{ base: '4', sm: '8' }}>
              <Box p="1">
                <Box w="24px">
                  <IconMenu />
                </Box>
              </Box>
            </Center>
          </Hidden> */}
        </HStack>
      </HStack>
      {/* Left Navbar */}
      <Hidden till="sm">
        <Box
          position="fixed"
          left="0"
          top="0"
          bottom="0"
          zIndex={10}
          w={{ base: '90px', lg: '310px' }}
          h="full"
          backgroundColor="white"
        >
          <VStack h="full">
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
                borderRightWidth="1"
                borderRightColor={theme.colors.shared.softer2Gray}
                onPress={async () => {
                  const jwt = await AsyncStorage.getItem('jwt')
                  if (jwt) {
                    push('/home')
                  } else {
                    push('/sign-in')
                  }
                }}
              >
                <Image
                  w={{ base: '2.5rem', sm: '3.1rem' }}
                  h={{ base: '2.5rem', sm: '3.1rem' }}
                  source={require('shared/assets/images/contact-blaster-blue.png')}
                />
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
            <Box flex="1" paddingY="3">
              <VStack
                h="full"
                paddingY={{ base: '0', lg: '4' }}
                paddingX={{ base: '0', lg: '7' }}
                borderRightWidth="1"
                borderRightColor={theme.colors.shared.softer2Gray}
              >
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
                          Leads
                        </Text>
                      </Hidden>
                    </Pressable>
                  </Center>
                </Box>
                <Box>
                  <Hidden from="lg">
                    <>
                      <Center marginY={{ base: '2', lg: '0' }}>
                        <Pressable
                          w={{ lg: 'full' }}
                          flexDirection="row"
                          alignItems="center"
                          paddingX={{ base: '3', lg: '6' }}
                          paddingY="3"
                          borderRadius="lg"
                          _hover={{
                            backgroundColor: theme.colors.shared.softer2Gray
                          }}
                        >
                          <Box w="20px">
                            <IconArrowRight />
                          </Box>
                        </Pressable>
                      </Center>
                      <Center marginY={{ base: '2', lg: '0' }}>
                        <Pressable
                          w={{ lg: 'full' }}
                          flexDirection="row"
                          alignItems="center"
                          paddingX={{ base: '3', lg: '6' }}
                          paddingY="3"
                          borderRadius="lg"
                          _hover={{
                            backgroundColor: theme.colors.shared.softer2Gray
                          }}
                        >
                          <Box w="20px">
                            <IconSun />
                          </Box>
                        </Pressable>
                      </Center>
                      <Box
                        borderBottomWidth="1px"
                        borderColor="#0000001A"
                        marginX="3"
                      ></Box>
                    </>
                  </Hidden>
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
                  {/* <Center marginY={{ base: '2', lg: '0' }}>
                    <Pressable
                      w={{ lg: 'full' }}
                      flexDirection="row"
                      alignItems="center"
                      paddingX={{ base: '3', lg: '6' }}
                      paddingY="3"
                      borderRadius="lg"
                      _hover={{
                        backgroundColor: theme.colors.shared.softer2Gray
                      }}
                    >
                      <Box w={{ base: '20px', lg: '24px' }}>
                        <IconUser />
                      </Box>
                      <Hidden till="lg">
                        <Text
                          color={theme.colors.shared.soft2Gray}
                          fontWeight="semibold"
                          paddingLeft="4"
                        >
                          Account
                        </Text>
                      </Hidden>
                    </Pressable>
                  </Center> */}
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
                      onPress={() => push('/help')}
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
                </Box>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Hidden>
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
        marginLeft={{
          base: '0',
          sm: '90px',
          lg: '310px'
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
