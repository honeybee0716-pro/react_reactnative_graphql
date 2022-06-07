import React from 'react'
import {
  Box,
  VStack,
  ScrollView,
  HStack,
  Icon,
  Text,
  Divider,
  Avatar,
  Button
} from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

const list = [
  {
    iconName: 'person-outline',
    iconText: 'Contacts'
  },
  {
    iconName: 'groups',
    iconText: 'Group'
  },
  {
    iconName: 'notifications-none',
    iconText: 'Notification'
  },
  {
    iconName: 'shopping-bag',
    iconText: 'Orders'
  },
  {
    iconName: 'settings',
    iconText: 'Settings',
    iconColorLight: 'primary.900',
    textColorLight: 'primary.900',
    iconColorDark: 'violet.500',
    textColorDark: 'violet.500'
  },
  {
    iconName: 'shield',
    iconText: 'Privacy Policy'
  },
  {
    iconName: 'support-agent',
    iconText: 'Help & Support'
  },
  {
    iconName: 'share',
    iconText: 'Refer & Earn'
  }
]

export default function Sidebar() {
  return (
    <Box
      w="80"
      borderRightWidth="1"
      display="flex"
      _light={{ bg: 'white', borderRightColor: 'coolGray.200' }}
      _dark={{ bg: 'coolGray.900', borderRightColor: 'coolGray.800' }}
    >
      <ScrollView>
        <VStack
          pb="4"
          mt="10"
          space="3"
          alignItems="center"
          borderBottomWidth="1"
          _light={{
            borderBottomColor: 'coolGray.200'
          }}
          _dark={{
            borderBottomColor: 'coolGray.800'
          }}
        >
          <Avatar
            source={require('../assets/women.jpg')}
            width={{ base: 20, md: 40 }}
            height={{ base: 20, md: 40 }}
          />
          <HStack alignItems="center" justifyContent="center" space="2">
            <Text
              fontSize="xl"
              fontWeight="bold"
              _light={{ color: 'coolGray.800' }}
            >
              Jane Doe
            </Text>
          </HStack>
          <Text
            fontSize="md"
            fontWeight="medium"
            textAlign="center"
            _light={{ color: 'coolGray.500' }}
          >
            janedoe2@mydomain.com
          </Text>
        </VStack>
        <VStack px="4" py="4">
          {list.map((item, idx) => {
            return (
              <Button
                key={idx}
                variant="ghost"
                justifyContent="flex-start"
                py="4"
                px="5"
              >
                <HStack space="4" alignItems="center">
                  <Icon
                    size="6"
                    as={MaterialIcons}
                    name={item.iconName}
                    _dark={{ color: 'coolGray.50' }}
                    _light={{ color: 'coolGray.500' }}
                  />
                  <Text
                    fontSize="md"
                    fontWeight="medium"
                    _dark={{ color: 'coolGray.50' }}
                    _light={{ color: 'coolGray.800' }}
                  >
                    {item.iconText}
                  </Text>
                </HStack>
              </Button>
            )
          })}
        </VStack>
        <Divider _dark={{ bgColor: 'coolGray.800' }} />
        <Box px="4" py="2">
          <Button variant="ghost" justifyContent="flex-start" py="4" px="5">
            <HStack space="4" alignItems="center">
              <Icon
                size="6"
                as={MaterialIcons}
                name="exit-to-app"
                _dark={{ color: 'coolGray.50' }}
                _light={{ color: 'coolGray.500' }}
              />
              <Text
                fontSize="md"
                fontWeight="medium"
                _dark={{ color: 'coolGray.50' }}
                _light={{ color: 'coolGray.800' }}
              >
                Logout
              </Text>
            </HStack>
          </Button>
        </Box>
      </ScrollView>
    </Box>
  )
}
