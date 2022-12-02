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
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { theme } from 'shared/styles/theme'
import { Link as SolitoLink } from 'solito/link'
import { useState } from 'react'
import IconLink from 'shared/components/icons/IconLink'
import { gql, useLazyQuery } from '@apollo/client'
import { useRouter } from 'solito/router'
import AsyncStorage from '@react-native-community/async-storage'
import { useRecoilState } from 'recoil'
import { userSubscriptionDataState} from '../../state'
import { createParam } from 'solito'

const LOGIN_USER = gql`
  query LoginCustomerWithPassword($input: loginCustomerWithPasswordInput) {
    loginCustomerWithPassword(input: $input) {
      message
      status
      jwt
      verified
    }
  }
`

const GET_BUSINESS_SUBSCRIPTION_DATA = gql`
  query Query {
    getBusinessSubscriptionData {
      message
      status
      stripeCustomer
      activeSubscription
      remainingCredits
      isInTrial
      redirectToPricingPage
      redirectToOTPPage
      isCustomPlan
      userInternalID
      userEmail
    }
  }
`

const GET_B_LOGO_TXT = gql`
  query getBlogoTxt($input: getBlogoTxtInput) {
    getBlogoTxt(input: $input) {
      message
      status
      companyLogo
      companyName
    }
  }
`

export default function SignUp(props: any) {
  const { push } = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [loginUser, { loading }] = useLazyQuery(LOGIN_USER)
  const toast = useToast()
  const { useParam } = createParam()
  const [businessId, setBusinessId] = useParam('businessID')
  const [displayCompanyLogo,setDisplayCompanyLogo]=useState('')
  const [displayCompanyName,setDisplayCompanyName]=useState('')
  const [getBlogotxt,{loading:loadingLogo}] = useLazyQuery(GET_B_LOGO_TXT)

  const [userSubscriptionData, setUserSubscriptionData] = useRecoilState<any>(
    userSubscriptionDataState
  )

  const [getBusinessSubscriptionData, { data }] = useLazyQuery(
    GET_BUSINESS_SUBSCRIPTION_DATA,
    {
      fetchPolicy: 'network-only'
    }
  )

  React.useEffect(()=>{
    console.log("businessId:",businessId)
    getBlogotxt({
      variables: {
        input: {
          id:businessId?businessId:'',
        }
      },
      onCompleted: async ({ getBlogoTxt }) => {
        
        if (
          getBlogoTxt?.status === 'success'
        ) {
          console.log(getBlogoTxt)

          if(getBlogoTxt.companyLogo!==null)
          setDisplayCompanyLogo(getBlogoTxt.companyLogo)
          if(getBlogoTxt.companyName!==null)
          setDisplayCompanyName(getBlogoTxt.companyName)        
          return
        }
        if (getBlogoTxt?.message) {
         
          return
        }
        
        return
      },
      onError: (error) => {
        toast.show({
          description: `${error.message}`
        })
      }
    })
  },[businessId])

  React.useEffect(()=>{},[displayCompanyLogo,displayCompanyName])

  React.useEffect(() => {
    //console.log("data:",data)
    if (data?.getBusinessSubscriptionData) {
      setUserSubscriptionData(data.getBusinessSubscriptionData)
    }
  }, [data])

  const handleSignIn = async () => {

    if(businessId===undefined)
    {
      toast.show({
        description: 'please provide a business Id'
      })
      return
    }

    await AsyncStorage.removeItem('jwt')
    loginUser({
      variables: {
        input: {
          email,
          password,
          businessId,
        }
      },
      onCompleted: async ({ loginCustomerWithPassword }) => {
        if (
          loginCustomerWithPassword?.status === 'success' &&
          loginCustomerWithPassword?.jwt
        ) {
          await AsyncStorage.setItem('jwt', loginCustomerWithPassword.jwt)
          console.log(loginCustomerWithPassword)
          await getBusinessSubscriptionData()
          if (loginCustomerWithPassword.verified) push('/home')
          else push('/otp-customer')
          return
        }
        if (loginCustomerWithPassword?.message) {
          toast.show({
            description: loginCustomerWithPassword.message
          })
          return
        }
        toast.show({
          description: 'There was a problem logging in, please try again...'
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
           {businessId?(
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
                          backgroundColor={theme.colors.shared.brightBlue}
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
                          <SolitoLink href="/sign-up-customer">
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
          </Box>):<p style={{textAlign:"center"}}>please provide a businessID</p>}
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
              source={require('../../images/pexels-gradienta-7135120 1.png')}
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

                {!loadingLogo && (
                  <img
                    width="200px"
                    height="128px"
                    src={displayCompanyLogo!==''?displayCompanyLogo: require('shared/images/salespinLogo.png')}
                  />)}

                </Box>
                <Text
                  color="white"
                  textAlign="center"
                  fontSize={{ base: '4xl', xl: '5xl' }}
                  fontWeight="semibold"
                >

                  {!loadingLogo &&  (
                  displayCompanyName!==''?displayCompanyName:'SaleSpin'
                    )}
                  
                </Text>
              </Box>
            </Box>
          </Box>
        </Hidden>
      </Stack>
    </>
  )
}
