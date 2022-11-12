import React from 'react'
import {
  HStack,
  Icon,
  Text,
  VStack,
  Avatar,
  Pressable,
  Center,
  IconButton,
  Radio,
  Divider
} from 'native-base'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import DashboardLayout from '../../layouts/DashboardLayout'
import { useRouteAuthentication } from '../../hooks/useRouteAuthentication/useRouteAuthentication'

function Dropdown() {
  useRouteAuthentication()

  return (
    <VStack>
      <Radio.Group defaultValue="1" name="MyRadioGroup">
        <HStack justifyContent="space-between" width="100%">
          <HStack space="3" alignItems="center">
            <Avatar
              source={require('../../assets/women.jpg')}
              width="9"
              height="9"
            />
            <VStack>
              <Text
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
                fontSize="sm"
                fontWeight="bold"
              >
                Jane Doe
              </Text>
              <Text
                _light={{ color: 'coolGray.500' }}
                _dark={{ color: 'coolGray.300' }}
                fontSize="xs"
                fontWeight="medium"
              >
                janedoe2@mydomain.com
              </Text>
            </VStack>
          </HStack>
          <Center>
            <Radio
              _light={{
                // @ts-ignore
                _checked: {
                  _icon: { color: 'coolGray.400' },
                  borderColor: 'coolGray.400'
                }
              }}
              _dark={{
                // @ts-ignore
                _checked: {
                  _icon: { color: 'coolGray.700' },
                  borderColor: 'coolGray.700'
                }
              }}
              value="one"
            />
          </Center>
        </HStack>
        <Divider mt="5" />
        <HStack justifyContent="space-between" pt="6" width="100%">
          <HStack space="3" alignItems="center">
            <Avatar
              source={require('../../assets/women.jpg')}
              width="9"
              height="9"
            />
            <VStack>
              <Text
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
                fontSize="sm"
                fontWeight="bold"
              >
                Harry
              </Text>
              <Text
                _light={{ color: 'coolGray.500' }}
                _dark={{ color: 'coolGray.300' }}
                fontSize="xs"
                fontWeight="medium"
              >
                Harrilegiee2@mydomain.com
              </Text>
            </VStack>
          </HStack>
          <Center>
            <Radio
              _light={{
                // @ts-ignore
                _checked: {
                  _icon: { color: 'coolGray.400' },
                  borderColor: 'coolGray.400'
                }
              }}
              _dark={{
                // @ts-ignore
                _checked: {
                  _icon: { color: 'coolGray.700' },
                  borderColor: 'coolGray.700'
                }
              }}
              value="two"
            />
          </Center>
        </HStack>
      </Radio.Group>
    </VStack>
  )
}

export default function ManageAccount() {
  const [dropdownTab, setDropdownTab] = React.useState(false)

  return (
    <DashboardLayout title={'Manage Accounts'} displayScreenTitle={true}>
      <VStack
        px={{ base: 4, md: 8 }}
        py={{ base: 4, md: 8 }}
        borderRadius={{ md: '8' }}
        _light={{
          borderColor: 'coolGray.400',
          bg: { base: 'white' }
        }}
        _dark={{
          borderColor: 'coolGray.800',
          bg: { md: 'coolGray.400', base: 'coolGray.800' }
        }}
        borderWidth={{ md: '1' }}
        borderBottomWidth={{ base: '1', md: '0' }}
        space="9"
      >
        <HStack
          pb="3"
          alignItems="center"
          borderBottomWidth="1"
          justifyContent="space-between"
          _light={{ borderColor: 'coolGray.400' }}
          _dark={{ borderColor: 'coolGray.500' }}
        >
          <HStack space="4" alignItems="center">
            <Avatar
              source={require('../../assets/women.jpg')}
              width="10"
              height="10"
            />
            <VStack space="1">
              <Text
                fontSize="sm"
                fontWeight="bold"
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
              >
                Jane Doe
              </Text>
              <Text
                fontSize="xs"
                fontWeight="medium"
                _light={{ color: 'coolGray.500' }}
                _dark={{ color: 'coolGray.300' }}
              >
                janedoe2@mydomain.com
              </Text>
            </VStack>
          </HStack>
          <IconButton
            p="0"
            variant="unstyled"
            icon={
              <Icon
                size="25"
                name={'delete'}
                as={MaterialCommunityIcons}
                _dark={{ color: 'coolGray.400' }}
                _light={{ color: 'coolGray.500' }}
              />
            }
            onPress={() => {
              console.log('this will delete the profile')
            }}
          />
        </HStack>
        <Pressable
          onPress={() => {
            console.log('this onPress will add another account')
          }}
        >
          <HStack alignItems="center" space="3">
            <Icon
              as={Ionicons}
              name={'person-add'}
              _light={{ color: 'coolGray.500' }}
              _dark={{ color: 'coolGray.400' }}
              size="6"
            />
            <Text
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
              fontSize="md"
              fontWeight="medium"
            >
              Add another account
            </Text>
          </HStack>
        </Pressable>
        <Pressable
          onPress={() => {
            setDropdownTab(!dropdownTab)
          }}
        >
          <HStack justifyContent="space-between">
            <HStack space="4" alignItems="center">
              <Icon
                as={MaterialCommunityIcons}
                name={'account-box-multiple'}
                _light={{ color: 'coolGray.500' }}
                _dark={{ color: 'coolGray.400' }}
                size="6"
              />
              <VStack>
                <Text
                  _light={{ color: 'coolGray.800' }}
                  _dark={{ color: 'coolGray.50' }}
                  fontSize="md"
                  fontWeight="medium"
                >
                  Switch Accounts
                </Text>
              </VStack>
            </HStack>
            <Center>
              {!dropdownTab ? (
                <Icon
                  as={MaterialCommunityIcons}
                  name={'chevron-up'}
                  size="25"
                />
              ) : (
                <Icon
                  as={MaterialCommunityIcons}
                  name={'chevron-down'}
                  size="25"
                />
              )}
            </Center>
          </HStack>
        </Pressable>
        {dropdownTab ? <Dropdown /> : null}
      </VStack>
    </DashboardLayout>
  )
}
