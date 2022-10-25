import React from 'react'
import {
  StatusBar,
  Box,
  Center,
  Hidden,
  Text,
  Image,
  Input,
  Pressable,
  useToast,
  HStack
} from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { theme } from 'shared/styles/theme'
import { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import AsyncStorage from '@react-native-community/async-storage'
import { useRouter } from 'solito/router'
import { useEffect } from 'react'
import { useRouteAuthentication } from '../../hooks/useRouteAuthentication/useRouteAuthentication'

const CONFIRM_EMAIL_VALIDATION_CODE = gql`
  mutation ConfirmEmailValidationCode($input: confirmEmailValidationCodeInput) {
    confirmEmailValidationCode(input: $input) {
      message
      status
    }
  }
`

const RESEND_CODE = gql`
  mutation ResendCode {
    resendCode {
      message
      status
    }
  }
`

export default function OTP(props: any) {
  useRouteAuthentication()

  const { push } = useRouter()
  const [code, setCode] = useState('')
  const [codeJustSent, setCodeJustSent] = useState(false)
  const toast = useToast()

  const [confirmEmailValidationCode, { loading }] = useMutation(
    CONFIRM_EMAIL_VALIDATION_CODE
  )

  const [resendCodeMutation] = useMutation(RESEND_CODE)

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

  const resendCode = async () => {
    if (codeJustSent) {
      toast.show({
        description: 'Please wait before trying again.'
      })
    } else {
      setCodeJustSent(true)
      toast.show({
        description: 'We just sent a new code to your email.'
      })
      await resendCodeMutation()
    }
  }

  useEffect(() => {
    if (codeJustSent) {
      setTimeout(() => {
        setCodeJustSent(false)
      }, 10000)
    }
  }, [codeJustSent])

  useEffect(() => {
    toast.show({
      description: 'Please enter the code that we sent to your email.'
    })
  }, [])

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
        source={require('shared/images/wallpaper.jpeg')}
      />

      <Box
        w={{ base: 'full', lg: 'full' }}
        h="full"
        backgroundColor={{ base: theme.colors.shared.softViolet, lg: 'none' }}
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
                source={require('shared/images/clientEyeLogoWhite.png')}
              />
              <Box
                width={{
                  base: `${(11 / 12) * 100}%`,
                  sm: `${(9 / 12) * 100}%`,
                  lg: '30rem',
                  xl: '35rem'
                }}
              >
                <Hidden from="lg">
                  <Center flexDir="row">
                    <Image
                      w={{ base: '2.5rem', sm: '3.5rem' }}
                      h={{ base: '2.5rem', sm: '3.5rem' }}
                      source={require('shared/images/contact-blaster-blue.png')}
                    />
                    <Text
                      color={theme.colors.shared.softBlack}
                      fontSize={{ base: 'xl', sm: '2xl' }}
                      fontWeight="semibold"
                      marginLeft={'4'}
                    >
                      SaaS Template
                    </Text>
                  </Center>
                </Hidden>

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
                    Verify your email
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
                          source={require('shared/images/icons/Google__G__Logo 1.png')}
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
                          source={require('shared/images/icons/Apple_logo_black 1.png')}
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
                    {/* input email */}
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
                          source={require('shared/images/icons/mail 1.png')}
                        />
                      </Box>
                    </Box>

                    <Pressable onPress={resendCode}>
                      <HStack
                        justifyContent="space-between"
                        position="relative"
                        marginTop="5"
                      >
                        <Box></Box>
                        <HStack alignItems="center" space="1">
                          <Text
                            fontSize={{ base: 'xs', sm: 'md' }}
                            fontWeight="medium"
                            color={theme.colors.shared.softBlack}
                          >
                            Resend code
                          </Text>
                        </HStack>
                      </HStack>
                    </Pressable>

                    {/* button */}
                    <Box marginTop="5">
                      <Box
                        backgroundColor={theme.colors.shared.clientEyePrimary}
                        paddingY="3"
                        paddingX="2"
                        borderRadius="xl"
                      >
                        <Text
                          textAlign="center"
                          fontWeight="semibold"
                          color="white"
                          fontSize={{ base: 'sm', sm: 'md' }}
                        >
                          <Pressable onPress={handleSubmitOTP}>
                            <Hidden till="lg">
                              <>{loading ? 'Loading...' : 'Submit code'}</>
                            </Hidden>
                            <Hidden from="lg">
                              <>{loading ? 'Loading...' : 'Submit code'}</>
                            </Hidden>
                          </Pressable>
                        </Text>
                      </Box>
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
