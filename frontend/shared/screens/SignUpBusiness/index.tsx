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
import { Link as SolitoLink } from 'solito/link'
import React, { useState } from 'react'
import { useRouter } from 'solito/router'
import { gql, useLazyQuery, useMutation } from '@apollo/client'
import AsyncStorage from '@react-native-community/async-storage'
import { useTranslation } from "react-i18next";

const CREATE_USER = gql`
  mutation Mutation($createUserInput: createUserInput) {
    createUser(input: $createUserInput) {
      jwt
      message
      status
    }
  }
`

export default function SignUp(props: any) {

  const { t, i18n } = useTranslation();
  const { push } = useRouter()
  const [showPass, setShowPass] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [companyName, setCompanyName] = useState('')
  const toast = useToast();

  const [signUpUser, { data, loading, error }] = useMutation(CREATE_USER)

  if (loading) {
  }
  if (error) {
    console.log(error.message)
  }
  if (data) {
    console.log(data)
  }

  const handleSignUp = async () => {
    console.log(email)
    await AsyncStorage.removeItem('jwt')
    signUpUser({
      variables: {
        createUserInput: {
          email,
          password,
          firstName: firstname,
          lastName: lastname,
          companyName
        }
      },
      onCompleted: async (signUpUserWithData) => {
        console.log(signUpUserWithData)
        if (
          signUpUserWithData?.createUser?.status === 'success' &&
          signUpUserWithData?.createUser?.jwt
        ) {
          await AsyncStorage.setItem('jwt', signUpUserWithData.createUser.jwt)
          push('/otp')
          return
        }
        if (signUpUserWithData?.createUser?.message) {
          toast.show({
            description: signUpUserWithData.createUser.message
          })
          //alert(signUpUserWithData.createUser.message)
          return
        }
        toast.show({
          description: "There was an error"
        })
        //alert('There was an error')
        return
      },
      onError: (error) => {
        toast.show({
          description: `${error.message}`
        })
        //alert(`${error.message}`)
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
        _light={{ bg: 'primary.900' }}
        _dark={{ bg: 'coolGray.900' }}
      />

      <Stack
        flexDirection={{ base: 'column', md: 'row' }}
        w="full"
        h="full"
        backgroundColor="white"
      >
        <Box
          w={{ base: 'full', lg: '1/2' }}
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
                         w="80px"
                         h="40px"
                        source={require('shared/images/salespinLogo.png')}
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
                      {t("Create an account")} Business
                    </Text>
                    <HStack
                      justifyContent="center"
                      marginTop="7"
                      space={{ base: '5', sm: '7' }}
                    >
                      {/*<Box
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
                          source={require('shared/images/Google__G__Logo 1.png')}
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
                          source={require('shared/images/Apple_logo_black 1.png')}
                        />
                        <Text
                          color={theme.colors.shared.softBlack}
                          fontSize={{ base: 'xs', sm: 'md' }}
                          fontWeight="medium"
                        >
                          Apple ID
                        </Text>
                      </Box>*/}
                    </HStack>
                    {/*<Box position="relative">
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
                    </Box>*/}
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
                            onChangeText={(text) => setFirstname(text)}
                            focusOutlineColor={theme.colors.shared.transparent}
                          />
                          <Box
                            position="absolute"
                            left="4"
                            h="full"
                            flexDir="row"
                            alignItems="center"
                          >
                            <Image
                              w="5"
                              h="5"
                              source={require('shared/images/person.svg')}
                            />
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
                            onChangeText={(text) => setLastname(text)}
                            focusOutlineColor={theme.colors.shared.transparent}
                          />
                          <Box
                            position="absolute"
                            left="4"
                            h="full"
                            flexDir="row"
                            alignItems="center"
                          >
                            <Image
                              w="5"
                              h="5"
                              source={require('shared/images/person.svg')}
                            />
                          </Box>
                        </Box>
                      </HStack>
                      {/*input company name*/}
                      <Box position="relative" w="full" marginTop="5">
                        <Input
                          isRequired={true}
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
                          placeholder="Company name"
                          onChangeText={(text) => setCompanyName(text)}
                          focusOutlineColor={theme.colors.shared.transparent}
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
                            source={require('shared/images/company.svg')}
                          />
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
                          placeholder="you@example.com"
                          onChangeText={(text) => setEmail(text)}
                          focusOutlineColor={theme.colors.shared.transparent}
                        />
                        <Box
                          position="absolute"
                          left="4"
                          h="full"
                          flexDir="row"
                          alignItems="center"
                        >
                          <Image
                            w="5"
                            h="5"
                            source={require('shared/images/mail.svg')}
                          />
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
                          placeholder="Enter your password"
                          onChangeText={(text) => setPassword(text)}
                          focusOutlineColor={theme.colors.shared.transparent}
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
                            source={require('shared/images/lock.svg')}
                          />
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
                            <Image
                              w="4"
                              h="4"
                              source={require('shared/images/eye (1) 1.png')}
                            />
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
                          >
                            <HStack alignItems="center">
                              <Text fontSize="md" fontWeight="medium">
                                I agree to the{' '}
                                <SolitoLink href="/terms-and-conditions">
                                  <Text fontSize="md" fontWeight="bold">
                                    Terms and Conditions
                                  </Text>
                                </SolitoLink>
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
                            <Image
                              w="4"
                              h="4"
                              source={require('shared/images/link-2 1.png')}
                            />
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
                          backgroundColor={theme.colors.shared.brightBlue}
                          paddingY="3"
                          paddingX="2"
                          borderRadius="xl"
                        >
                          <Pressable onPress={handleSignUp}>
                            <Text
                              textAlign="center"
                              fontWeight="semibold"
                              color="white"
                              fontSize={{ base: 'sm', sm: 'md' }}
                            >
                              <Hidden till="lg">
                                <>{loading ? 'Loading...' : 'Sign up'}</>
                              </Hidden>
                              <Hidden from="lg">
                                <>Create a new account</>
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
                          Already have an account ?{' '}
                          <SolitoLink href="/sign-in-business">
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
                                <>Sign in now</>
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
        <Hidden till="lg">
          <Box
            position="relative"
            w="1/2"
            h="full"
            overflow="hidden"
            borderBottomLeftRadius="9.375rem"
          >
            <Image
              position="absolute"
              w="full"
              h="full"
              top={0}
              left={0}
              right={0}
              bottom={0}
              source={require('shared/images/pexels-gradienta-7135120 1.png')}
            />
            <Box
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              w="full"
              h="90%"
            >
              <Box
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                w="full"
                h="full"
              >
                <Box flexDir="row" justifyContent="center">
                  <Image
                    w="200px"
                    h="128px"
                    source={require('shared/images/salespinLogo.png')}
                  />
                </Box>
                <Text
                  color="white"
                  textAlign="center"
                  fontSize={{ base: '4xl', xl: '5xl' }}
                  fontWeight="semibold"
                >
                  SaleSpin
                </Text>
              </Box>
            </Box>
          </Box>
        </Hidden>
      </Stack>
    </>
  )
}
