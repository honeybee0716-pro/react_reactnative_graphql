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
  useColorMode,
  useToast
} from 'native-base'
import { AntDesign, Entypo } from '@expo/vector-icons'
import FloatingLabelInput from '../../components/FloatingLabelInput'
import GuestLayout from '../../layouts/GuestLayout'
import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'solito/router'

const FORGOT_PASSWORD = gql`
  mutation ForgotPassword($input: forgotPasswordInput) {
    forgotPassword(input: $input) {
      message
      status
    }
  }
`

const CONFIRM_FORGOT_PASSWORD = gql`
  mutation ConfirmForgotPasswordCode($input: confirmForgotPasscodeCodeInput) {
    confirmForgotPasswordCode(input: $input) {
      message
      status
    }
  }
`

export default function ForgotPassword() {
  const { push } = useRouter()
  const [email, setEmail] = React.useState('')
  const [newPassword, setNewPassword] = React.useState('')
  const [code, setCode] = React.useState('')
  const [showPass, setShowPass] = React.useState(false)
  const [step, setStep] = React.useState(1)
  const { colorMode } = useColorMode()
  const toast = useToast()
  const [step1, { loading: loadingStep1 }] = useMutation(FORGOT_PASSWORD)
  const [step2, { loading: loadingStep2 }] = useMutation(
    CONFIRM_FORGOT_PASSWORD
  )

  const handleSubmit = async (e) => {
    if (step === 1) {
      step1({
        variables: {
          input: {
            email
          }
        },
        onCompleted: async ({ forgotPassword }) => {
          if (forgotPassword?.status === 'success') {
            setStep(2)
            return
          }
          if (forgotPassword?.message) {
            toast.show({
              description: forgotPassword.message
            })
            return
          }
          toast.show({
            description: 'There was an error'
          })
          return
        },
        onError: (error) => {
          toast.show({
            description: `There was an error: ${error}`
          })
        }
      })
    }
    if (step === 2) {
      if (!code) {
        toast.show({
          description: 'Please enter a code.'
        })
        return
      }
      try {
        Number(code)
      } catch (e) {
        toast.show({
          description: 'Please enter a valid code.'
        })
        return
      }
      step2({
        variables: {
          input: {
            email,
            code: Number(code),
            newPassword
          }
        },
        onCompleted: async ({ confirmForgotPasswordCode }) => {
          if (confirmForgotPasswordCode?.status === 'success') {
            if (confirmForgotPasswordCode?.message) {
              toast.show({
                description: confirmForgotPasswordCode.message
              })
            }
            push('/sign-in')
            return
          }
          toast.show({
            description: 'There was an error'
          })
          return
        },
        onError: (error) => {
          toast.show({
            description: `There was an error: ${error}`
          })
        }
      })
    }
  }

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
        _light={{ bg: { base: 'white', md: 'coolGray.300' } }}
        _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.400' } }}
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
              source={require('../../assets/clientEyeLogo.jpeg')}
            />
          ) : (
            <Image
              w={{ base: '205px' }}
              h={{ base: '160px' }}
              alt="NativeBase Startup+ "
              resizeMode={'contain'}
              source={require('../../assets/clientEyeLogo.jpeg')}
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
              {step === 1 ? (
                <FloatingLabelInput
                  py={{ base: '17px', md: '14px' }}
                  isRequired
                  label="Email"
                  labelColor="#9CA3AF"
                  borderRadius="4"
                  defaultValue={email}
                  onChangeText={(txt: string) => setEmail(txt)}
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
              ) : null}
              {step === 2 ? (
                <>
                  `{' '}
                  <FloatingLabelInput
                    py={{ base: '17px', md: '14px' }}
                    isRequired
                    label="Code"
                    labelColor="#9CA3AF"
                    borderRadius="4"
                    defaultValue={code}
                    onChangeText={(txt: string) => setCode(txt)}
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
                  <FloatingLabelInput
                    isRequired
                    type={showPass ? '' : 'password'}
                    label="Password"
                    borderRadius="4"
                    labelColor="#9ca3af"
                    labelBGColor={useColorModeValue('#fff', '#1f2937')}
                    defaultValue={newPassword}
                    onChangeText={(txt: any) => setNewPassword(txt)}
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
                </>
              ) : null}
              <Button
                py="13px"
                size="md"
                _hover={{
                  bg: 'coolGray.600',
                  _pressed: { bg: 'coolGray.700' }
                }}
                _light={{
                  bg: 'coolGray.700',
                  _pressed: { bg: 'coolGray.700' }
                }}
                _dark={{
                  bg: 'coolGray.700',
                  _pressed: { bg: 'coolGray.4000' }
                }}
                onPress={handleSubmit}
              >
                {loadingStep1 || loadingStep2 ? 'Loading...' : 'SUBMIT'}
              </Button>
            </VStack>
          </Box>
        </VStack>
        {/* <VStack alignItems="center">
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
                  color: 'coolGray.4000'
                }
              }}
              _light={{
                _text: {
                  color: 'coolGray.400'
                }
              }}
              _dark={{
                _text: {
                  color: 'coolGray.700'
                }
              }}
            >
              OTP
            </Link>
          </HStack>
        </VStack> */}
      </Box>
    </GuestLayout>
  )
}
