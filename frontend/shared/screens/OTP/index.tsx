import React, { useState } from 'react'
import {
  VStack,
  Box,
  HStack,
  Icon,
  Text,
  Link,
  Button,
  Image,
  Hidden,
  IconButton,
  Center,
  FormControl,
  StatusBar,
  Stack,
  useColorModeValue,
  useToast
} from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import { Link as SolitoLink } from 'solito/link'
import { useRouter } from 'solito/router'
import { AntDesign } from '@expo/vector-icons'
import { gql, useMutation } from '@apollo/client'
import FloatingLabelInput from './components/FloatingLabelInput'

const CONFIRM_EMAIL_VALIDATION_CODE = gql`
  mutation ConfirmEmailValidationCode($input: confirmEmailValidationCodeInput) {
    confirmEmailValidationCode(input: $input) {
      message
      status
    }
  }
`

export default function OtpVerification() {
  const { push } = useRouter()
  const [confirmEmailValidationCode, { loading }] = useMutation(
    CONFIRM_EMAIL_VALIDATION_CODE
  )
  const [code, setCode] = useState('')
  const toast = useToast()

  const handleSubmitOTP = async () => {
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

    const jwt = await AsyncStorage.getItem('jwt')
    if (!jwt) {
      toast.show({
        description: 'There was an error. Please try again.'
      })
      return
    }

    confirmEmailValidationCode({
      variables: {
        input: {
          code: Number(code)
        }
      },
      onCompleted: ({ confirmEmailValidationCode }) => {
        if (confirmEmailValidationCode?.status === 'success') {
          push('/home')
          return
        }
        if (confirmEmailValidationCode?.message) {
          toast.show({
            description: confirmEmailValidationCode.message
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
          description: error
        })
      }
    })
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
            <HStack space="2" px="4" mt="4" mb="5" alignItems="center">
              <IconButton
                variant="unstyled"
                onPress={() => {}}
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
                Create Password
              </Text>
            </HStack>
          </Hidden>
          <Hidden till="md">
            <Center
              flex="1"
              bg="coolGray.700"
              px={{ base: '4', md: '8' }}
              borderTopLeftRadius={{ md: 'xl' }}
              borderBottomLeftRadius={{ md: 'xl' }}
            >
              <Image
                h="24"
                size="80"
                alt="NativeBase Startup+ "
                resizeMode={'contain'}
                source={require('./components/logo.png')}
              />
            </Center>
          </Hidden>
          <Box
            py={{ base: '6', md: '12' }}
            px={{ base: '4', md: '10' }}
            _light={{ bg: 'white' }}
            _dark={{ bg: 'coolGray.800' }}
            flex="1"
            borderTopRightRadius={{ md: 'xl' }}
            borderBottomRightRadius={{ md: 'xl' }}
          >
            <VStack justifyContent="space-between" flex="1" space="24">
              <Box>
                <VStack space={{ base: '4', md: '5' }}>
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    _dark={{ color: 'coolGray.50' }}
                    _light={{ color: 'coolGray.800' }}
                  >
                    Enter Security Code
                  </Text>
                  <HStack space="2" alignItems="center">
                    <Text
                      _light={{ color: 'coolGray.800' }}
                      _dark={{ color: 'coolGray.400' }}
                    >
                      Please check your email for the code.
                    </Text>
                  </HStack>
                </VStack>
                <VStack space="12" mt="6">
                  <FormControl>
                    <HStack space="2">
                      <FloatingLabelInput
                        isRequired
                        label="Code"
                        labelColor="#9ca3af"
                        labelBGColor={useColorModeValue('#fff', '#1f2937')}
                        borderRadius="4"
                        defaultValue={code}
                        onChangeText={(txt: any) => setCode(txt)}
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
                    </HStack>
                    <FormControl.HelperText mt="7">
                      <HStack>
                        <Text
                          _light={{ color: 'coolGray.800' }}
                          _dark={{ color: 'coolGray.400' }}
                        >
                          Didn’t receive the email?
                        </Text>
                        <Link
                          _text={{
                            _light: { color: 'coolGray.400' },
                            _dark: { color: 'violet.500' },
                            fontWeight: 'bold',
                            color: 'violet.700',
                            textDecoration: 'none'
                          }}
                        >
                          {' '}
                          Resend Email
                        </Link>
                      </HStack>
                    </FormControl.HelperText>
                  </FormControl>
                  <Button
                    size="md"
                    _hover={{
                      bg: 'coolGray.600'
                    }}
                    _light={{
                      bg: 'coolGray.700'
                    }}
                    _dark={{
                      bg: 'coolGray.700'
                    }}
                    onPress={handleSubmitOTP}
                  >
                    {loading ? 'Loading...' : 'Submit Code'}
                  </Button>
                </VStack>
              </Box>
              <HStack
                mt="28"
                mb="4"
                space="1"
                safeAreaBottom
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  _light={{ color: 'coolGray.800' }}
                  _dark={{ color: 'coolGray.400' }}
                >
                  Already have an account?
                </Text>
                {/* Opening Link Tag navigateTo:"SignUp" */}
                <SolitoLink href="/sign-up">
                  <Link
                    _text={{
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
                        color: 'violet.500'
                      }
                    }}
                  >
                    Sign up
                  </Link>
                </SolitoLink>
                {/* Closing Link Tag */}
              </HStack>
            </VStack>
          </Box>
        </Stack>
      </Center>
    </>
  )
}
