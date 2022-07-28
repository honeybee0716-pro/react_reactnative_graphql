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
  Button,
  Link,
  Pressable,
  useToast
} from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { theme } from 'shared/styles/theme'
import { Link as SolitoLink } from 'solito/link'
import { useState, useEffect } from 'react'
import IconLink from 'shared/components/icons/IconLink'
import { gql, useLazyQuery } from '@apollo/client'
import { useRouter } from 'solito/router'
import AsyncStorage from '@react-native-community/async-storage'
import IconMail from 'shared/components/icons/IconMail'
import IconLock from 'shared/components/icons/IconLock'
import IconEye from 'shared/components/icons/IconEye'
import { useRecoilState } from 'recoil'
import { useRouteAuthentication } from '../../hooks/useRouteAuthentication/useRouteAuthentication'
import { jwtState } from '../../state'

const LOGIN_USER = gql`
  query LoginUserWithPassword($input: loginUserWithPasswordInput) {
    loginUserWithPassword(input: $input) {
      jwt
      message
      status
    }
  }
`

export default function SignUp({ client }: any) {
  useRouteAuthentication()
  const { push } = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [loginUser, { loading }] = useLazyQuery(LOGIN_USER)
  const toast = useToast()
  const [jwt, setJWT] = useRecoilState<any>(jwtState)

  const handleSignIn = async () => {
    await AsyncStorage.removeItem('jwt')
    loginUser({
      fetchPolicy: 'network-only',
      variables: {
        input: {
          email,
          password
        }
      },
      onCompleted: async ({ loginUserWithPassword }) => {
        if (
          loginUserWithPassword?.status === 'success' &&
          loginUserWithPassword?.jwt
        ) {
          await AsyncStorage.setItem('jwt', loginUserWithPassword.jwt)
          setJWT(loginUserWithPassword.jwt)
          push('/home')
          return
        }
        if (loginUserWithPassword?.message) {
          toast.show({
            description: loginUserWithPassword.message
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
          description: `${error.message}`
        })
      }
    })
  }

  useEffect(() => {
    ;(async () => {
      if (!jwt) {
        await client.cache.reset()
      }
    })()
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
                    Sign in
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
                        placeholder="Email"
                        onChangeText={(text) => setEmail(text)}
                      />
                      <Box
                        position="absolute"
                        left="4"
                        top="3.5"
                        h="full"
                        flexDir="row"
                        alignItems="center"
                        height="24px"
                        width="24px"
                      >
                        <IconMail color="#6E767E" />
                      </Box>
                    </Box>
                    {/* input password */}
                    <Box position="relative" w="full" marginTop="5">
                      <Input
                        type={showPass ? 'text' : 'password'}
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
                        placeholder="Password"
                        onChangeText={(text) => setPassword(text)}
                      />
                      <Box
                        position="absolute"
                        left="4"
                        top="3.5"
                        h="full"
                        flexDir="row"
                        alignItems="center"
                        height="24px"
                        width="24px"
                      >
                        <IconLock color="#6E767E" />
                      </Box>
                      <Box
                        position="absolute"
                        right="2"
                        h="full"
                        flexDirection="row"
                        alignItems="center"
                      >
                        <Button
                          backgroundColor="white"
                          _hover={{
                            backgroundColor: 'gray.100'
                          }}
                          borderWidth="2"
                          borderColor={theme.colors.shared.softGray}
                          borderRadius="lg"
                          padding="2"
                          onPress={() => {
                            setShowPass(!showPass)
                          }}
                        >
                          <Box height="14px" width="14px">
                            <IconEye color="#6E767E" />
                          </Box>
                        </Button>
                      </Box>
                    </Box>

                    {/* remember_me_forgot_pass */}
                    <HStack
                      justifyContent="space-between"
                      position="relative"
                      marginTop="5"
                    >
                      <Box></Box>
                      <SolitoLink href="/forgot-password">
                        <HStack alignItems="center" space="1">
                          <Box w="18px">
                            <IconLink />
                          </Box>
                          <Text
                            fontSize={{ base: 'xs', sm: 'md' }}
                            fontWeight="medium"
                            color={theme.colors.shared.softBlack}
                          >
                            Forgot Password?
                          </Text>
                        </HStack>
                      </SolitoLink>
                    </HStack>

                    {/* button */}
                    <Box marginTop="5">
                      <Box
                        backgroundColor={theme.colors.shared.clientEyePrimary}
                        paddingY="3"
                        paddingX="2"
                        borderRadius="xl"
                      >
                        <Pressable onPress={handleSignIn}>
                          <Text
                            textAlign="center"
                            fontWeight="semibold"
                            color="white"
                            fontSize={{ base: 'sm', sm: 'md' }}
                          >
                            <Hidden till="lg">
                              <>
                                {loading
                                  ? 'Loading...'
                                  : 'Sign in to your account'}
                              </>
                            </Hidden>
                            <Hidden from="lg">
                              <>
                                {loading
                                  ? 'Loading...'
                                  : 'Sign in to your account'}
                              </>
                            </Hidden>
                          </Text>
                        </Pressable>
                      </Box>
                    </Box>

                    {/* already have account */}
                    <Box
                      marginTop={{ base: '5', sm: '7' }}
                      marginBottom={{ base: '1', sm: '7', lg: '0' }}
                    >
                      <Text
                        textAlign="center"
                        fontSize={{ base: 'sm', sm: 'md' }}
                      >
                        Don't have an account yet?{' '}
                        <SolitoLink href="/sign-up">
                          <Link
                            _text={{
                              fontSize: 'md'
                            }}
                            fontWeight="semibold"
                          >
                            <Hidden till="lg">
                              <>Sign up</>
                            </Hidden>
                            <Hidden from="lg">
                              <>Sign up now</>
                            </Hidden>
                          </Link>
                        </SolitoLink>
                      </Text>
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
