import React from 'react'
import {
  Box,
  VStack,
  StatusBar,
  HStack,
  Icon,
  Image,
  Text,
  Hidden,
  useColorMode,
  IconButton,
  Divider,
  Menu,
  Avatar,
  Input
} from 'native-base'
type ChatLayoutProps = {
  scrollable?: boolean
  displayScreenTitle?: boolean
  displaySidebar?: boolean
  header?: {
    menuButton: boolean
    searchbar: boolean
  }
  mobileHeader?: {
    backButton: boolean
  }
  title: string
  subTitle: string
  children: React.ReactNode
}
type HeaderProps = {
  toggleSidebar?: () => void
  title: string
  menuButton?: boolean
  searchbar?: boolean
}
type MobileHeaderProps = {
  title: string
  subTitle: string
  backButton?: boolean
}

type MainContentProps = {
  displayScreenTitle?: boolean
  children: React.ReactNode
}

import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons
} from '@expo/vector-icons'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Sidebar from '../components/Sidebar'

export function Header(props: HeaderProps) {
  const { colorMode } = useColorMode()
  return (
    <Box
      px="6"
      pt="3"
      pb="3"
      borderBottomWidth="1"
      _dark={{ bg: 'coolGray.400', borderColor: 'coolGray.800' }}
      _light={{
        bg: { base: 'coolGray.400', md: 'white' },
        borderColor: 'coolGray.400'
      }}
    >
      <VStack
        alignSelf="center"
        width="100%"
        maxW={props.menuButton ? null : '1016px'}
      >
        <HStack alignItems="center" justifyContent="space-between">
          <HStack space="4" alignItems="center">
            {props.menuButton && (
              <IconButton
                variant="ghost"
                colorScheme="light"
                onPress={props.toggleSidebar}
                icon={
                  <Icon
                    size="6"
                    name="menu-sharp"
                    as={Ionicons}
                    _light={{ color: 'coolGray.800' }}
                    _dark={{ color: 'coolGray.50' }}
                  />
                }
              />
            )}
            {colorMode === 'light' ? (
              <Image
                h="10"
                w="56"
                alt="NativeBase Startup+"
                resizeMode="contain"
                source={require('../assets/header_logo_light.png')}
              />
            ) : (
              <Image
                h="10"
                w="56"
                alt="NativeBase Startup+"
                resizeMode="contain"
                source={require('../assets/header_logo_dark.png')}
              />
            )}
          </HStack>
          {props.searchbar && (
            <Input
              px="4"
              w="30%"
              size="sm"
              placeholder="Search"
              InputLeftElement={
                <Icon
                  px="2"
                  size="4"
                  name={'search'}
                  as={FontAwesome}
                  _light={{
                    color: 'coolGray.400'
                  }}
                  _dark={{
                    color: 'coolGray.100'
                  }}
                />
              }
            />
          )}

          <HStack space="2" alignItems="center">
            <IconButton
              variant="ghost"
              colorScheme="light"
              icon={
                <Icon
                  size="6"
                  name="bell"
                  as={FontAwesome}
                  _dark={{
                    color: 'coolGray.400'
                  }}
                  _light={{
                    color: 'coolGray.400'
                  }}
                />
              }
            />
            <Menu
              w="190"
              closeOnSelect={false}
              onOpen={() => console.log('opened')}
              onClose={() => console.log('closed')}
              trigger={(triggerProps) => {
                return (
                  <IconButton
                    {...triggerProps}
                    variant="ghost"
                    colorScheme="light"
                    icon={
                      <Avatar
                        w="8"
                        h="8"
                        // borderWidth="1"
                        _dark={{ bg: 'coolGray.400' }}
                        // _dark={{ borderColor: 'coolGray.700' }}
                        source={{
                          uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        }}
                      />
                    }
                  />
                )
              }}
              //@ts-ignore
              _dark={{ bg: 'coolGray.800', borderColor: 'coolGray.700' }}
            >
              <Menu.Group title="Profile">
                <Menu.Item>Account</Menu.Item>
              </Menu.Group>
              <Divider mt="3" w="100%" _dark={{ bg: 'coolGray.700' }} />
              <Menu.Group title="Shortcuts">
                <Menu.Item>Settings</Menu.Item>
                <Menu.Item>Logout</Menu.Item>
              </Menu.Group>
            </Menu>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  )
}

function MainContent(props: MainContentProps) {
  return (
    <VStack maxW="1016px" flex={1} width="100%">
      {props.children}
    </VStack>
  )
}

export function MobileHeader(props: MobileHeaderProps) {
  return (
    <Box
      px="1"
      pt="4"
      pb="4"
      _dark={{ bg: 'coolGray.400', borderColor: 'coolGray.800' }}
      _light={{
        bg: { base: 'coolGray.400', md: 'white' },
        borderColor: 'coolGray.400'
      }}
    >
      <HStack space="2" alignItems="center">
        <IconButton
          colorScheme="light"
          variant="ghost"
          icon={
            <Icon
              size="6"
              as={AntDesign}
              name={'arrowleft'}
              color="coolGray.50"
            />
          }
        />
        <Avatar
          source={{
            uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          }}
          _dark={{
            borderColor: 'coolGray.700'
          }}
          w="12"
          h="12"
        />
        <VStack>
          {props.subTitle ? (
            <>
              <Text color="coolGray.50" fontSize="sm" fontWeight="bold">
                {props.title}
              </Text>
              <Text color="coolGray.400" fontSize="xs">
                {props.subTitle}
              </Text>
            </>
          ) : (
            <Text color="coolGray.50" fontSize="lg">
              {props.title}
            </Text>
          )}
        </VStack>
        <HStack ml="auto" space="1" alignItems="center">
          <IconButton
            variant="ghost"
            colorScheme="light"
            icon={
              <Icon
                size="6"
                color="coolGray.50"
                as={MaterialIcons}
                name={'search'}
              />
            }
          />
          <Menu
            p="0"
            trigger={(triggerProps) => {
              return (
                <IconButton
                  variant="ghost"
                  colorScheme="light"
                  accessibilityLabel="More options menu"
                  {...triggerProps}
                  icon={
                    <Icon
                      size="6"
                      color="coolGray.50"
                      name={'dots-vertical'}
                      as={MaterialCommunityIcons}
                    />
                  }
                />
              )
            }}
            placement="bottom right"
          >
            <Menu.Item _dark={{ bg: 'coolGray.400' }}>New group</Menu.Item>
            <Menu.Item _dark={{ bg: 'coolGray.400' }}>New broadcast</Menu.Item>
            <Menu.Item _dark={{ bg: 'coolGray.400' }}>Settings</Menu.Item>
          </Menu>
        </HStack>
      </HStack>
    </Box>
  )
}

export default function ChatLayout({
  displaySidebar = true,
  header = {
    menuButton: true,
    searchbar: false
  },
  mobileHeader = {
    backButton: true
  },
  ...props
}: ChatLayoutProps) {
  const [isSidebarVisible, setIsSidebarVisible] = React.useState(true)
  function toggleSidebar() {
    setIsSidebarVisible(!isSidebarVisible)
  }

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Box
        safeAreaTop
        _light={{ bg: 'coolGray.400' }}
        _dark={{ bg: 'coolGray.400' }}
      />
      <VStack
        flex={1}
        _light={{ bg: 'coolGray.400' }}
        _dark={{ bg: 'customGray' }}
      >
        <KeyboardAwareScrollView
          contentContainerStyle={{ width: '100%', height: '100%' }}
        >
          <Hidden from="md">
            <MobileHeader
              title={props.title}
              subTitle={props.subTitle}
              backButton={mobileHeader.backButton}
            />
          </Hidden>
          <Hidden till="md">
            <Header
              toggleSidebar={toggleSidebar}
              title={props.title}
              menuButton={displaySidebar}
              searchbar={header.searchbar}
            />
          </Hidden>
          <Box
            flex={1}
            safeAreaBottom
            flexDirection={{ base: 'column', md: 'row' }}
            _light={{
              borderTopColor: 'coolGray.400'
            }}
            _dark={{
              bg: 'coolGray.700',
              borderTopColor: 'coolGray.700'
            }}
          >
            {isSidebarVisible && displaySidebar && (
              <Hidden till="md">
                <Sidebar />
              </Hidden>
            )}

            <VStack alignItems="center" flex={1} p={{ md: 8 }}>
              <MainContent displayScreenTitle={true} {...props} />
            </VStack>
          </Box>
        </KeyboardAwareScrollView>
      </VStack>
    </>
  )
}
