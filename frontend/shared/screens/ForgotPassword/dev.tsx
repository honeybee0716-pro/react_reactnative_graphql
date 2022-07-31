import React from 'react'
import {
  StatusBar,
  Box,
  Center,
  Hidden,
  Text,
  Image,
  HStack,
  Input,
  Checkbox,
  Link,
  Pressable,
  IconButton,
  Icon,
  useToast
} from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Entypo } from '@expo/vector-icons'
import { theme } from 'shared/styles/theme'
import { Link as SolitoLink } from 'solito/link'
import IconLink from 'shared/components/icons/IconLink'
import { useRouter } from 'solito/router'
import { gql, useMutation } from '@apollo/client'
import { useState } from 'react'
import { useRouteAuthentication } from '../../hooks/useRouteAuthentication/useRouteAuthentication'

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

export default function SignUp() {
  useRouteAuthentication()
  const { push } = useRouter()
  const toast = useToast()
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [code, setCode] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [step, setStep] = useState(1)
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
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Box
        safeAreaTop
        _light={{ bg: 'primary.900' }}
        _dark={{ bg: 'coolGray.900' }}
      />
      <Image
        position="absolute"
        w="full"
        h="full"
        top={0}
        left={0}
        right={0}
        bottom={0}
        source={require('shared/assets/wallpaper.jpeg')}
      />

      <Box
        w={{ base: 'full', lg: 'full' }}
        h="full"
        // backgroundColor={{ base: theme.colors.shared.softViolet, lg: 'none' }}
      >
        <Box
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          h="full"
        >
          <KeyboardAwareScrollView
            contentContainerStyle={{
              flexGrow: 1
            }}
            style={{ flex: 1 }}
          >
            <Center>
              <Image
                height="100px"
                width="250px"
                resizeMode="contain"
                source={require('shared/assets/images/clientEyeLogoWhite.png')}
              />
              <Box
                width={{
                  base: `${(11 / 12) * 100}%`,
                  sm: `${(9 / 12) * 100}%`,
                  lg: '30rem',
                  xl: '35rem'
                }}
              >
                <Box
                  bgColor="white"
                  borderRadius="2xl"
                  paddingY="4"
                  paddingX={{ base: '4', sm: '8' }}
                  marginTop={{ base: '4', sm: '7', lg: '6' }}
                >
                  <Text
                    fontWeight="semibold"
                    color={theme.colors.shared.softBlack}
                    textAlign="center"
                    fontSize={{ base: '2xl', sm: '4xl' }}
                    marginTop={{ base: '1', sm: '9', lg: '0' }}
                    fontFamily="body"
                  >
                    {step === 1 ? 'Forgot password' : 'Confirm code'}
                  </Text>
                  {/* <HStack
                      justifyContent="center"
                      marginTop="7"
                      space={{ base: '5', sm: '7' }}
                    >
                      <Box
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        color={theme.colors.shared.softBlack}
                        borderWidth="2"
                        borderColor={theme.colors.shared.softGray}
                        w="47%"
                        py="0.375rem"
                        borderRadius="lg"
                      >
                        <Image
                          w="5"
                          h="5"
                          mr="2"
                          source={require('shared/assets/icons/Google__G__Logo 1.png')}
                        />
                        <Text
                          color={theme.colors.shared.softBlack}
                          fontSize={{ base: 'xs', sm: 'md' }}
                          fontWeight="medium"
                        >
                          Google
                        </Text>
                      </Box>
                      <Box
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        color={theme.colors.shared.softBlack}
                        borderWidth="2"
                        borderColor={theme.colors.shared.softGray}
                        w="47%"
                        py="0.375rem"
                        borderRadius="lg"
                      >
                        <Image
                          w="4"
                          h="4"
                          mr="2"
                          source={require('shared/assets/icons/Apple_logo_black 1.png')}
                        />
                        <Text
                          color={theme.colors.shared.softBlack}
                          fontSize={{ base: 'xs', sm: 'md' }}
                          fontWeight="medium"
                        >
                          Apple ID
                        </Text>
                      </Box>
                    </HStack> */}
                  {/* <Box position="relative">
                      <HStack justifyContent="center" mt="7" space="10">
                        <Box
                          w="45%"
                          borderBottomWidth="2"
                          borderColor={theme.colors.shared.softGray}
                        ></Box>
                        <Box
                          w="45%"
                          borderBottomWidth="2"
                          borderColor={theme.colors.shared.softGray}
                        ></Box>
                      </HStack>
                      <Box
                        position="absolute"
                        w="full"
                        flexDir="row"
                        justifyContent="center"
                      >
                        <Text
                          position="absolute"
                          top={{ base: '5', sm: '4' }}
                          textAlign="center"
                          fontWeight="medium"
                          fontSize={{ base: 'xs', sm: 'md' }}
                        >
                          Or
                        </Text>
                      </Box>
                    </Box> */}
                  <Box>
                    {step === 1 ? (
                      <Box position="relative" w="full" marginTop="5">
                        <Input
                          paddingLeft="12"
                          paddingTop="3"
                          paddingRight="3"
                          paddingBottom="3"
                          w="full"
                          borderRadius="xl"
                          borderWidth="2"
                          borderColor={theme.colors.shared.softerGray}
                          fontSize={{ base: 'xs', sm: 'md' }}
                          fontWeight="medium"
                          backgroundColor={theme.colors.shared.aliceBlue}
                          placeholder="eg: johndoe@gmail.com"
                          onChangeText={(text) => setEmail(text)}
                          value={email}
                        />
                        <Box
                          position="absolute"
                          left="4"
                          h="full"
                          flexDir="row"
                          alignItems="center"
                        >
                          <Image
                            w="6"
                            h="6"
                            source={require('shared/assets/icons/mail 1.png')}
                          />
                        </Box>
                      </Box>
                    ) : (
                      <>
                        <Box position="relative" w="full" marginTop="5">
                          <Input
                            paddingLeft="12"
                            paddingTop="3"
                            paddingRight="3"
                            paddingBottom="3"
                            w="full"
                            borderRadius="xl"
                            borderWidth="2"
                            borderColor={theme.colors.shared.softerGray}
                            fontSize={{ base: 'xs', sm: 'md' }}
                            fontWeight="medium"
                            backgroundColor={theme.colors.shared.aliceBlue}
                            placeholder="eg: 123456"
                            onChangeText={(text) => setCode(text)}
                            value={code}
                          />
                          <Box
                            position="absolute"
                            left="4"
                            h="full"
                            flexDir="row"
                            alignItems="center"
                          >
                            <Image
                              w="6"
                              h="6"
                              source={require('shared/assets/icons/mail 1.png')}
                            />
                          </Box>
                        </Box>
                        <Box position="relative" w="full" marginTop="5">
                          <Input
                            paddingLeft="12"
                            type={showPass ? 'text' : 'password'}
                            paddingTop="3"
                            paddingRight="3"
                            paddingBottom="3"
                            w="full"
                            borderRadius="xl"
                            borderWidth="2"
                            borderColor={theme.colors.shared.softerGray}
                            fontSize={{ base: 'xs', sm: 'md' }}
                            fontWeight="medium"
                            backgroundColor={theme.colors.shared.aliceBlue}
                            placeholder="New password"
                            onChangeText={(text) => setNewPassword(text)}
                            value={newPassword}
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
                          />
                          <Box
                            position="absolute"
                            left="4"
                            h="full"
                            flexDir="row"
                            alignItems="center"
                          >
                            <Image
                              w="6"
                              h="6"
                              source={require('shared/assets/icons/lock 1.png')}
                            />
                          </Box>
                        </Box>
                      </>
                    )}

                    {/* button */}
                    <Box marginTop="5">
                      <Box
                        backgroundColor={theme.colors.shared.clientEyePrimary}
                        paddingY="3"
                        paddingX="2"
                        borderRadius="xl"
                      >
                        <Pressable onPress={handleSubmit}>
                          <Text
                            textAlign="center"
                            fontWeight="semibold"
                            color="white"
                            fontSize={{ base: 'sm', sm: 'md' }}
                          >
                            <Hidden till="lg">
                              <>
                                {loadingStep1 || loadingStep2
                                  ? 'Loading...'
                                  : step === 1
                                  ? 'Send reset code'
                                  : 'Submit'}
                              </>
                            </Hidden>
                            <Hidden from="lg">
                              <>
                                {loadingStep1 || loadingStep2
                                  ? 'Loading...'
                                  : step === 1
                                  ? 'Send reset code'
                                  : 'Submit'}
                              </>
                            </Hidden>
                          </Text>
                        </Pressable>
                      </Box>
                    </Box>

                    <Box
                      marginTop={{ base: '5', sm: '7' }}
                      marginBottom={{ base: '1', sm: '7', lg: '0' }}
                    >
                      <SolitoLink href="/sign-in">
                        <Text
                          textAlign="center"
                          fontSize={{ base: 'sm', sm: 'md' }}
                        >
                          Remember your password?{' '}
                          <Link
                            _text={{
                              fontSize: 'md'
                            }}
                            fontWeight="semibold"
                          >
                            <Hidden till="lg">
                              <>Sign in</>
                            </Hidden>
                            <Hidden from="lg">
                              <>Sign in</>
                            </Hidden>
                          </Link>
                        </Text>
                      </SolitoLink>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Center>
          </KeyboardAwareScrollView>
        </Box>
      </Box>
    </>
  )
}
