import React from 'react'
import {
  StatusBar,
  Box,
  Center,
  Stack,
  Hidden,
  Text,
  Image,
  HStack,
  Input,
  Button,
  Checkbox,
  Link,
  Pressable,
  useToast
} from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { theme } from 'shared/styles/theme'
import { useState, useEffect } from 'react'
import IconLink from 'shared/components/icons/IconLink'
import { gql, useMutation } from '@apollo/client'
import AsyncStorage from '@react-native-community/async-storage'
import { Link as SolitoLink } from 'solito/link'
import { useRouter } from 'solito/router'
import IconUsers from 'shared/components/icons/IconUsers'
import IconUser from 'shared/components/icons/IconUser'
import IconMail from 'shared/components/icons/IconMail'
import IconLock from 'shared/components/icons/IconLock'
import IconEye from 'shared/components/icons/IconEye'
import { useRecoilState } from 'recoil'
import { Platform } from 'react-native'
import { jwtState } from '../../state'
import { useRouteAuthentication } from '../../hooks/useRouteAuthentication/useRouteAuthentication'

const CREATE_USER = gql`
  mutation CreateUser($input: createUserInput!) {
    createUser(input: $input) {
      message
      status
      jwt
    }
  }
`

export default function SignUp({ client }: any) {
  useRouteAuthentication()
  console.log({ client })
  const toast = useToast()
  const { push } = useRouter()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [checkbox, setCheckbox] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)
  const [jwt, setJWT] = useRecoilState<any>(jwtState)

  const [createUser, { loading }] = useMutation(CREATE_USER)

  const handleSignUp = async (e) => {
    if (!firstName || !lastName || !companyName || !email || !password) {
      toast.show({
        description: 'Please fill all fields.'
      })
      return
    }
    if (!checkbox) {
      toast.show({
        description: 'You must agree to the terms and conditions.'
      })
      return
    }
    await AsyncStorage.removeItem('jwt')
    createUser({
      fetchPolicy: 'network-only',
      variables: {
        input: {
          firstName,
          lastName,
          companyName,
          email,
          password
        }
      },
      onCompleted: async ({ createUser }) => {
        if (createUser?.status === 'success' && createUser?.jwt) {
          await AsyncStorage.setItem('jwt', createUser.jwt)
          setJWT(createUser.jwt)
          push('/otp')
          return
        }
        if (createUser?.message) {
          toast.show({
            description: createUser.message
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

  useEffect(() => {
    ;(async () => {
      await client.cache.reset()
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
                <Hidden from="lg">
                  <Center flexDir="row">
                    <Text
                      color={theme.colors.shared.softBlack}
                      fontSize={{ base: 'xl', sm: '2xl' }}
                      fontWeight="semibold"
                      marginLeft={'4'}
                    >
                      ClientEye
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
                    Create an account
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
                    {/* input first last name */}
                    <HStack
                      position="relative"
                      justifyContent="center"
                      mt="7"
                      space={{ base: '5', sm: '7' }}
                    >
                      <Box position="relative" w="47%">
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
                          placeholder="First Name"
                          onChangeText={(text) => setFirstName(text)}
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
                          <IconUser color="#6E767E" />
                        </Box>
                      </Box>
                      <Box position="relative" w="47%">
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
                          placeholder="Last Name"
                          onChangeText={(text) => setLastName(text)}
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
                          <IconUser color="#6E767E" />
                        </Box>
                      </Box>
                    </HStack>
                    {/* company name */}
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
                        placeholder="Company Name"
                        onChangeText={(text) => setCompanyName(text)}
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
                        <IconUsers color="#6E767E" />
                      </Box>
                    </Box>
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
                          <Box height="14px">
                            <IconEye color="#6E767E" />
                          </Box>
                        </Button>
                      </Box>
                    </Box>

                    {/* terms_condition */}
                    <Hidden till="lg">
                      <Box position="relative" marginTop="5" marginLeft="1">
                        <Checkbox
                          alignItems="center"
                          defaultIsChecked={false}
                          value="demo"
                          colorScheme="primary"
                          accessibilityLabel="Terms and Conditions"
                          onChange={(value) => {
                            setCheckbox(value)
                          }}
                        >
                          <HStack alignItems="center">
                            <Text fontSize="md" fontWeight="medium">
                              I agree to the{' '}
                              {Platform.OS === 'web' ? (
                                <a
                                  style={{
                                    textDecoration: 'none',
                                    color: 'black'
                                  }}
                                  href="/terms-and-conditions"
                                  target="_blank"
                                >
                                  <Text fontSize="md" fontWeight="bold">
                                    Terms and Conditions
                                  </Text>
                                </a>
                              ) : (
                                <SolitoLink href="/terms-and-conditions">
                                  <Text fontSize="md" fontWeight="bold">
                                    Terms and Conditions
                                  </Text>
                                </SolitoLink>
                              )}
                              .
                            </Text>
                          </HStack>
                        </Checkbox>
                      </Box>
                    </Hidden>

                    {/* remember_me_forgot_pass */}
                    <Hidden from="lg">
                      <HStack
                        justifyContent="space-between"
                        position="relative"
                        marginTop="5"
                      >
                        <Checkbox
                          alignItems="center"
                          defaultIsChecked={false}
                          value="demo"
                          colorScheme="primary"
                          accessibilityLabel="Remember me"
                        >
                          <HStack alignItems="center">
                            <Text
                              fontSize={{ base: 'sm', sm: 'md' }}
                              fontWeight="medium"
                            >
                              Remember me
                            </Text>
                          </HStack>
                        </Checkbox>
                        <HStack alignItems="center" space="1">
                          <Box w="18px">
                            <IconLink />
                          </Box>
                          <Text
                            fontSize={{ base: 'xs', sm: 'md' }}
                            fontWeight="medium"
                            color={theme.colors.shared.softBlack}
                          >
                            Forgot Password ?
                          </Text>
                        </HStack>
                      </HStack>
                    </Hidden>

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
                          <Pressable onPress={handleSignUp}>
                            <Hidden till="lg">
                              <>
                                {loading ? 'Loading...' : 'Create an account'}
                              </>
                            </Hidden>
                            <Hidden from="lg">
                              <>
                                {loading ? 'Loading...' : 'Create an account'}
                              </>
                            </Hidden>
                          </Pressable>
                        </Text>
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
                        Already have an account?{' '}
                        <SolitoLink href="/sign-in">
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
