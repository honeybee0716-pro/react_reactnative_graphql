import React from 'react'
import {
  Box,
  VStack,
  ScrollView,
  HStack,
  Icon,
  Text,
  Button
} from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import { Link as SolitoLink } from 'solito/link'

const list = [
  {
    iconName: 'groups',
    iconText: 'Leads',
    route: '/home'
  },
  {
    iconName: 'support-agent',
    iconText: 'Help & Support',
    route: '/help'
  },
  {
    iconName: 'credit-card',
    iconText: 'Billing',
    route: '/billing'
  },
  {
    iconName: 'logout',
    iconText: 'Sign out',
    route: '/sign-out'
  }
]

export default function Sidebar() {
  return (
    <Box
      w="80"
      borderRightWidth="1"
      display="flex"
      _light={{ bg: 'white', borderRightColor: 'coolGray.400' }}
      _dark={{ bg: 'coolGray.400', borderRightColor: 'coolGray.800' }}
    >
      <ScrollView>
        <VStack px="4" py="4">
          {list.map((item, idx) => {
            return (
              <SolitoLink href={item.route}>
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
              </SolitoLink>
            )
          })}
        </VStack>
      </ScrollView>
    </Box>
  )
}
