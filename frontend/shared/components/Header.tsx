import React from 'react'
import {
  Icon,
  Text,
  HStack,
  IconButton,
  Divider,
  Box,
  Pressable,
  useColorMode,
  Image,
  Avatar,
  Menu,
  StatusBar,
  Hidden
} from 'native-base'
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons'

export const Header = () => {
  const { colorMode } = useColorMode()
  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <Box
        px={{ base: '1', md: '8' }}
        pt={{ base: '4', md: '4' }}
        pb={{ base: '32', md: '4' }}
        _dark={{ bg: 'coolGray.900', borderColor: 'coolGray.700' }}
        _light={{
          bg: { base: 'primary.900', md: 'coolGray.50' },
          borderColor: 'coolGray.200'
        }}
        borderBottomWidth={{ md: '1' }}
      >
        {/* Mobile header */}
        <Hidden from="md">
          <HStack space="2" justifyContent="space-between">
            <HStack space="2" alignItems="center">
              <IconButton
                variant="ghost"
                colorScheme="light"
                icon={
                  <Icon
                    size="6"
                    as={AntDesign}
                    name="arrowleft"
                    color="coolGray.50"
                  />
                }
              />
              <Text color="coolGray.50" fontSize="lg">
                {/* Mobile Screen Name */}
              </Text>
            </HStack>
          </HStack>
        </Hidden>
        {/* Desktop header */}
        <Hidden from="base" till="md">
          <HStack alignItems="center" justifyContent="space-between">
            <HStack space="0" alignItems="center">
              <IconButton
                variant="ghost"
                colorScheme="light"
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
              {colorMode === 'light' ? (
                <Image
                  h="10"
                  w="72"
                  alt="NativeBase Startup+"
                  resizeMode="contain"
                  source={require('../../../assets/header_logo_light.png')}
                />
              ) : (
                <Image
                  h="10"
                  w="72"
                  alt="NativeBase Startup+"
                  resizeMode="contain"
                  source={require('../../../assets/header_logo_dark.png')}
                />
              )}
            </HStack>
            <HStack space="8" alignItems="center">
              <IconButton
                variant="ghost"
                colorScheme="light"
                icon={
                  <Icon
                    size="6"
                    name="bell"
                    as={FontAwesome}
                    color="coolGray.400"
                  />
                }
              />
              <Menu
                closeOnSelect={false}
                w="190"
                onOpen={() => console.log('opened')}
                onClose={() => console.log('closed')}
                trigger={(triggerProps) => {
                  return (
                    <Pressable {...triggerProps}>
                      <Avatar
                        w="8"
                        h="8"
                        _dark={{ borderColor: 'primary.700' }}
                        source={{
                          uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        }}
                      />
                    </Pressable>
                  )
                }}
              >
                <Menu.OptionGroup title="Profile" type="checkbox">
                  <Menu.Item>Account</Menu.Item>
                  <Menu.Item>Billing</Menu.Item>
                  <Menu.Item>Security</Menu.Item>
                </Menu.OptionGroup>
                <Divider mt="3" w="100%" />
                <Menu.OptionGroup title="Shortcuts" type="checkbox">
                  <Menu.Item>Settings</Menu.Item>
                  <Menu.Item>Logout</Menu.Item>
                </Menu.OptionGroup>
              </Menu>
            </HStack>
          </HStack>
        </Hidden>
      </Box>
    </>
  )
}
