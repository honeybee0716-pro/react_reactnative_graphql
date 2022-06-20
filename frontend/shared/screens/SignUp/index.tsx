import React, { useState } from 'react'
import {
  Button,
  Checkbox,
  Image,
  HStack,
  VStack,
  Text,
  Link,
  Divider,
  Icon,
  IconButton,
  useColorModeValue,
  Pressable,
  Hidden,
  Center,
  StatusBar,
  Box,
  Stack
} from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import { Link as SolitoLink } from 'solito/link'
import { useRouter } from 'solito/router'
import { AntDesign, Entypo } from '@expo/vector-icons'
// import IconGoogle from './components/IconGoogle'
// import IconFacebook from './components/IconFacebook'
import FloatingLabelInput from './components/FloatingLabelInput'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { gql, useMutation } from '@apollo/client'

const CREATE_USER = gql`
  mutation CreateUser($input: createUserInput!) {
    createUser(input: $input) {
      message
      status
      jwt
    }
  }
`

function SignUpForm() {
  const { push } = useRouter()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPass, setShowPass] = React.useState(false)
  const [showConfirmPass, setShowConfirmPass] = React.useState(false)

  const [createUser, { loading }] = useMutation(CREATE_USER)

  const handleSignUp = async (e) => {
    createUser({
      variables: {
        input: {
          firstName,
          lastName,
          email,
          password
        }
      },
      onCompleted: async ({ createUser }) => {
        if (createUser?.status === 'success' && createUser?.jwt) {
          await AsyncStorage.setItem('jwt', createUser.jwt)
          push('/otp')
          return
        }
        if (createUser?.message) {
          alert(createUser.message)
          return
        }
        alert('There was an error')
        return
      },
      onError: (error) => {
        alert(`There was an error: ${error}`)
      }
    })
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flexGrow: 1
      }}
      style={{ flex: 1 }}
    >
      <VStack
        flex="1"
        px="6"
        py="9"
        _light={{ bg: 'white' }}
        _dark={{ bg: 'coolGray.800' }}
        justifyContent="space-between"
        space="3"
        borderTopRightRadius={{ base: '2xl', md: 'xl' }}
        borderBottomRightRadius={{ base: '0', md: 'xl' }}
        borderTopLeftRadius={{ base: '2xl', md: '0' }}
      >
        <VStack space="7">
          <Hidden till="md">
            <Text fontSize="lg" fontWeight="normal">
              Sign up to continue!
            </Text>
          </Hidden>
          <VStack>
            <VStack space="8">
              <VStack space={{ base: '7', md: '4' }}>
                <FloatingLabelInput
                  isRequired
                  label="First Name"
                  labelColor="#9ca3af"
                  labelBGColor={useColorModeValue('#fff', '#1f2937')}
                  borderRadius="4"
                  defaultValue={firstName}
                  onChangeText={(txt: any) => setFirstName(txt)}
                  _text={{
                    fontSize: 'sm',
                    fontWeight: 'medium'
                  }}
                  _dark={{
                    borderColor: 'coolGray.700'
                  }}
                  _light={{
                    borderColor: 'coolGray.300'
                  }}
                />
                <FloatingLabelInput
                  isRequired
                  label="Last Name"
                  labelColor="#9ca3af"
                  labelBGColor={useColorModeValue('#fff', '#1f2937')}
                  borderRadius="4"
                  defaultValue={lastName}
                  onChangeText={(txt: any) => setLastName(txt)}
                  _text={{
                    fontSize: 'sm',
                    fontWeight: 'medium'
                  }}
                  _dark={{
                    borderColor: 'coolGray.700'
                  }}
                  _light={{
                    borderColor: 'coolGray.300'
                  }}
                />
                <FloatingLabelInput
                  isRequired
                  label="Email"
                  labelColor="#9ca3af"
                  labelBGColor={useColorModeValue('#fff', '#1f2937')}
                  borderRadius="4"
                  defaultValue={email}
                  onChangeText={(txt: any) => setEmail(txt)}
                  _text={{
                    fontSize: 'sm',
                    fontWeight: 'medium'
                  }}
                  _dark={{
                    borderColor: 'coolGray.700'
                  }}
                  _light={{
                    borderColor: 'coolGray.300'
                  }}
                />
                <FloatingLabelInput
                  isRequired
                  type={showPass ? '' : 'password'}
                  label="Password"
                  borderRadius="4"
                  labelColor="#9ca3af"
                  labelBGColor={useColorModeValue('#fff', '#1f2937')}
                  defaultValue={password}
                  onChangeText={(txt: any) => setPassword(txt)}
                  InputRightElement={
                    <IconButton
                      variant="unstyled"
                      icon={
                        <Icon
                          size="4"
                          color="coolGray.400"
                          as={Entypo}
                          name={showPass ? 'eye-with-line' : 'eye'}
                        />
                      }
                      onPress={() => {
                        setShowPass(!showPass)
                      }}
                    />
                  }
                  _text={{
                    fontSize: 'sm',
                    fontWeight: 'medium'
                  }}
                  _dark={{
                    borderColor: 'coolGray.700'
                  }}
                  _light={{
                    borderColor: 'coolGray.300'
                  }}
                />

                <FloatingLabelInput
                  isRequired
                  type={showConfirmPass ? '' : 'password'}
                  label="Confirm Password"
                  borderRadius="4"
                  labelColor="#9ca3af"
                  labelBGColor={useColorModeValue('#fff', '#1f2937')}
                  defaultValue={confirmPassword}
                  onChangeText={(txt: any) => setConfirmPassword(txt)}
                  InputRightElement={
                    <IconButton
                      variant="unstyled"
                      icon={
                        <Icon
                          size="4"
                          color="coolGray.400"
                          as={Entypo}
                          name={showConfirmPass ? 'eye-with-line' : 'eye'}
                        />
                      }
                      onPress={() => {
                        setShowConfirmPass(!showConfirmPass)
                      }}
                    />
                  }
                  _text={{
                    fontSize: 'sm',
                    fontWeight: 'medium'
                  }}
                  _dark={{
                    borderColor: 'coolGray.700'
                  }}
                  _light={{
                    borderColor: 'coolGray.300'
                  }}
                />
              </VStack>
              <Checkbox
                alignItems="flex-start"
                defaultIsChecked
                value="demo"
                colorScheme="primary"
                accessibilityLabel="Remember me"
              >
                <HStack alignItems="center">
                  <Text fontSize="sm" color="coolGray.400" pl="2">
                    I accept the{' '}
                  </Text>

                  <SolitoLink href="/terms-of-use">
                    <Link
                      _text={{
                        fontSize: 'sm',
                        fontWeight: 'semibold',
                        textDecoration: 'none'
                      }}
                      _light={{
                        _text: {
                          color: 'coolGray.700'
                        }
                      }}
                      _dark={{
                        _text: {
                          color: 'coolGray.4000'
                        }
                      }}
                      // onPress={(e) => e.preventDefault()}
                    >
                      Terms of Use
                    </Link>
                  </SolitoLink>

                  <Text fontSize="sm"> & </Text>

                  <SolitoLink href="/privacy-policy">
                    <Link
                      _text={{
                        fontSize: 'sm',
                        fontWeight: 'semibold',
                        textDecoration: 'none'
                      }}
                      _light={{
                        _text: {
                          color: 'coolGray.700'
                        }
                      }}
                      _dark={{
                        _text: {
                          color: 'coolGray.4000'
                        }
                      }}
                      // onPress={(e) => e.preventDefault()}
                    >
                      Privacy Policy
                    </Link>
                  </SolitoLink>
                </HStack>
              </Checkbox>
              <Button
                size="md"
                borderRadius="4"
                _text={{
                  fontSize: 'sm',
                  fontWeight: 'medium'
                }}
                _hover={{ bg: 'coolGray.600' }}
                _light={{
                  bg: 'coolGray.700'
                }}
                _dark={{
                  bg: 'coolGray.700'
                }}
                onPress={handleSignUp}
              >
                {loading ? 'Loading...' : 'SIGN UP'}
              </Button>
              {/* <HStack
                space="2"
                mb={{ base: '6', md: '7' }}
                alignItems="center"
                justifyContent="center"
              >
                <Divider
                  w="30%"
                  _light={{ bg: 'coolGray.400' }}
                  _dark={{ bg: 'coolGray.700' }}
                ></Divider>
                <Text
                  fontSize="sm"
                  fontWeight="medium"
                  _light={{ color: 'coolGray.300' }}
                  _dark={{ color: 'coolGray.500' }}
                >
                  or
                </Text>
                <Divider
                  w="30%"
                  _light={{ bg: 'coolGray.400' }}
                  _dark={{ bg: 'coolGray.700' }}
                ></Divider>
              </HStack> */}
            </VStack>
            {/* <Center>
              <HStack space="4">
                <Pressable>
                  <IconFacebook />
                </Pressable>
                <Pressable>
                  <IconGoogle />
                </Pressable>
              </HStack>
            </Center> */}
          </VStack>
        </VStack>
        <HStack
          mb="4"
          space="1"
          alignItems="center"
          justifyContent="center"
          mt={{ base: 'auto', md: '8' }}
        >
          <Text
            fontSize="sm"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.400' }}
          >
            Already have an account?
          </Text>
          {/* Opening Link Tag navigateTo:"SignIn" */}
          <SolitoLink href="/sign-in">
            <Link
              _text={{
                fontSize: 'sm',
                fontWeight: 'bold',
                textDecoration: 'none'
              }}
              _light={{
                _text: {
                  color: 'coolGray.700'
                }
              }}
              _dark={{
                _text: {
                  color: 'coolGray.4000'
                }
              }}
            >
              Sign in
            </Link>
          </SolitoLink>
          {/* Closing Link Tag */}
        </HStack>
      </VStack>
    </KeyboardAwareScrollView>
  )
}

export default function SignUp(props: any) {
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
      <Center
        my="auto"
        _dark={{ bg: 'coolGray.400' }}
        _light={{ bg: 'coolGray.400' }}
        flex="1"
      >
        <Stack
          flexDirection={{ base: 'column', md: 'row' }}
          w="100%"
          maxW={{ md: '1016px' }}
          flex={{ base: '1', md: 'none' }}
        >
          <Hidden from="md">
            <VStack px="4" mt="4" mb="5" space="9">
              <HStack space="2" alignItems="center">
                <IconButton
                  pl="0"
                  variant="unstyled"
                  onPress={() => {}}
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
                  Sign Up
                </Text>
              </HStack>
              <VStack space="2">
                <Text fontSize="3xl" fontWeight="bold" color="coolGray.50">
                  Welcome
                </Text>
                <Text
                  fontSize="md"
                  fontWeight="normal"
                  _dark={{
                    color: 'coolGray.400'
                  }}
                  _light={{
                    color: 'primary.300'
                  }}
                >
                  Sign up to continue
                </Text>
              </VStack>
            </VStack>
          </Hidden>
          {/* <Hidden till="md">
            <Center
              flex="1"
              bg="coolGray.700"
              borderTopLeftRadius={{ base: '0', md: 'xl' }}
              borderBottomLeftRadius={{ base: '0', md: 'xl' }}
            >
              <Image
                h="24"
                size="80"
                alt="NativeBase Startup+ "
                resizeMode={'contain'}
                source={require('../../assets/clientEyeLogo.jpeg')}
              />
            </Center>
          </Hidden> */}
          <SignUpForm props={props} />
        </Stack>
      </Center>
    </>
  )
}
