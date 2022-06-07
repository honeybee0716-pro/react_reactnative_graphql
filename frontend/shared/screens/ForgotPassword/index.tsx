import React from 'react'
import {
  VStack,
  Box,
  HStack,
  Icon,
  Text,
  Link,
  Button,
  Image,
  IconButton,
  Center,
  Hidden,
  useColorModeValue,
  useColorMode
} from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import FloatingLabelInput from '../../components/FloatingLabelInput'
import GuestLayout from '../../layouts/GuestLayout'

export default function ForgotPassword() {
  const [text, setText] = React.useState('')
  const { colorMode } = useColorMode()

  return (
    <GuestLayout>
      <Hidden from="md">
        <HStack space="2" px="1" mt="4" pb="4" alignItems="center">
          <IconButton
            variant="unstyled"
            onPress={() => {
              console.log('hello')
            }}
            icon={
              <Icon
                alignItems="center"
                justifyContent="center"
                size="6"
                as={AntDesign}
                name="arrowleft"
                color="coolGray.50"
              />
            }
          />
          <Text color="coolGray.50" fontSize="lg">
            Forgot Password
          </Text>
        </HStack>
      </Hidden>
      <Center
        flex={{ md: 1 }}
        pt={{ base: 9, md: '190px' }}
        pb={{ base: '52px', md: '190px' }}
        px={{ base: 4, md: '50px' }}
        _light={{ bg: { base: 'white', md: 'primary.900' } }}
        _dark={{ bg: { base: 'coolGray.800', md: 'primary.900' } }}
        borderTopLeftRadius={{ md: 'xl' }}
        borderBottomLeftRadius={{ md: 'xl' }}
      >
        <Hidden from="base" till="md">
          {colorMode === 'light' ? (
            <Image
              w={{ base: '205px' }}
              h={{ base: '160px' }}
              alt="NativeBase Startup+ "
              resizeMode={'contain'}
              source={require('./components/forgot_password.png')}
            />
          ) : (
            <Image
              w={{ base: '205px' }}
              h={{ base: '160px' }}
              alt="NativeBase Startup+ "
              resizeMode={'contain'}
              source={require('./components/forgot_password.png')}
            />
          )}
        </Hidden>
        <Hidden from="md">
          {colorMode === 'light' ? (
            <Image
              w={{ base: '205px', md: '501px' }}
              h={{ base: '160px', md: '544px' }}
              alt="NativeBase Startup+ "
              resizeMode={'contain'}
              source={require('./components/forgot_password_mobile.png')}
            />
          ) : (
            <Image
              w={{ base: '205px', md: '501px' }}
              h={{ base: '160px', md: '544px' }}
              alt="NativeBase Startup+ "
              resizeMode={'contain'}
              source={require('./components/forgot_password.png')}
            />
          )}
        </Hidden>
      </Center>
      <Box
        pt={{ base: '0', md: '12' }}
        pb={{ base: '6', md: '12' }}
        px={{ base: '4', md: '10' }}
        _light={{ bg: 'white' }}
        _dark={{ bg: 'coolGray.800' }}
        flex="1"
        borderTopRightRadius={{ md: 'xl' }}
        borderBottomRightRadius={{ md: 'xl' }}
      >
        <VStack justifyContent="space-between" flex="1" space="0">
          <Box>
            <VStack space={{ base: '2', md: '5' }}>
              <Text
                fontSize="xl"
                fontWeight="bold"
                _dark={{ color: 'coolGray.50' }}
                _light={{ color: 'coolGray.800' }}
                textAlign={{ base: 'center', sm: 'left' }}
              >
                Forgot Password?
              </Text>
              <Text
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.400' }}
                textAlign={{ base: 'center', sm: 'left' }}
              >
                Not to worry! Enter email address associated with your account
                and we’ll send a link to reset your password.
              </Text>
            </VStack>
            <VStack space="6" mt="10">
              <FloatingLabelInput
                py={{ base: '17px', md: '14px' }}
                isRequired
                label="Email"
                labelColor="#9CA3AF"
                borderRadius="4"
                defaultValue={text}
                onChangeText={(txt: string) => setText(txt)}
                labelBGColor={useColorModeValue('#fff', '#1F2937')}
                _text={{
                  fontSize: 'md',
                  fontWeight: 'semibold'
                }}
                _dark={{
                  borderColor: 'coolGray.700'
                }}
                _light={{
                  borderColor: 'coolGray.300'
                }}
              />
              <Button
                py="13px"
                size="md"
                _light={{
                  bg: 'primary.900',
                  _pressed: { bg: 'primary.700' }
                }}
                _dark={{
                  bg: 'primary.700',
                  _pressed: { bg: 'primary.500' }
                }}
              >
                SUBMIT
              </Button>
            </VStack>
          </Box>
        </VStack>
        <VStack alignItems="center">
          <HStack space="1" position="absolute" bottom="0">
            <Text
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.400' }}
            >
              Send
            </Text>
            <Link
              _text={{
                fontWeight: 'bold',
                textDecorationLine: 'none'
              }}
              _hover={{
                _text: {
                  color: 'primary.500'
                }
              }}
              _light={{
                _text: {
                  color: 'primary.900'
                }
              }}
              _dark={{
                _text: {
                  color: 'primary.700'
                }
              }}
            >
              OTP
            </Link>
          </HStack>
        </VStack>
      </Box>
    </GuestLayout>
  )
}
