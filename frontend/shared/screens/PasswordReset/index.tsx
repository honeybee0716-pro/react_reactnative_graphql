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
  Link,
  Pressable
} from 'native-base'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { theme } from 'shared/styles/theme'
import { Link as SolitoLink } from 'solito/link'
import { useState } from 'react'
import IconLock from 'shared/components/icons/IconLock'
import IconShield from 'shared/components/icons/IconShield'
import IconCheckCircle from 'shared/components/icons/IconCheckCircle'
import IconArrowRight from 'shared/components/icons/IconArrowRight'

export default function PasswordReset(props: any) {
  const [showPass, setShowPass] = useState(false)

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
                        fontSize={{ base: 'xl', sm: '3xl' }}
                        fontWeight="semibold"
                        marginLeft={'4'}
                      >
                        SaleSpin
                      </Text>
                    </Center>
                  </Hidden>

                  <Box
                    bgColor="white"
                    borderRadius="2xl"
                    paddingY="4"
                    paddingX={{ base: '6', sm: '10' }}
                    marginTop={{ base: '4', sm: '9', lg: '6' }}
                    marginBottom={{ base: '0', lg: '16' }}
                  >
                    <HStack
                      marginTop={{ base: '2', sm: '9', lg: '0' }}
                      marginBottom={{ base: '0', lg: '16' }}
                    >
                      <Pressable>
                        <HStack
                          alignItems="center"
                          borderWidth="1"
                          borderColor={theme.colors.shared.softGray}
                          borderRadius="full"
                          paddingX="3"
                          paddingY="1"
                        >
                          <Box w={{ base: '13px', sm: '6' }} marginRight="2">
                            <IconArrowRight rotation={180} />
                          </Box>
                          <Text
                            fontSize={{ base: 'xs', sm: 'sm' }}
                            fontWeight="medium"
                          >
                            Go Back
                          </Text>
                        </HStack>
                      </Pressable>
                    </HStack>
                    <Text
                      fontWeight="semibold"
                      color={theme.colors.shared.softBlack}
                      fontSize={{ base: '22px', sm: '32px' }}
                      marginTop={{ base: '4', lg: '0' }}
                      fontFamily="body"
                    >
                      Reset Password
                    </Text>
                    <Hidden till="sm">
                      <Text fontSize="md" fontWeight="medium" marginTop="4">
                        Please enter the verification code that you have
                        recieved to your registered email address
                      </Text>
                    </Hidden>
                    <Box>
                      {/* input verification code */}
                      <Box position="relative" w="full" marginTop="6">
                        <Input
                          paddingLeft={{ base: '8', sm: '12' }}
                          paddingTop={{ base: '2', sm: '3' }}
                          paddingRight={{ base: '2', sm: '3' }}
                          paddingBottom={{ base: '2', sm: '3' }}
                          w="full"
                          borderRadius={{ base: 'lg', sm: 'xl' }}
                          borderWidth="2"
                          borderColor={theme.colors.shared.softerGray}
                          fontSize={{ base: 'xs', sm: 'md' }}
                          fontWeight="medium"
                          backgroundColor={theme.colors.shared.aliceBlue}
                          placeholder="Enter your verification code"
                        />
                        <Box
                          position="absolute"
                          left={{ base: '2', sm: '4' }}
                          h="full"
                          flexDir="row"
                          alignItems="center"
                        >
                          <Box w={{ base: '5', sm: '6' }}>
                            <IconShield />
                          </Box>
                        </Box>
                        <Box
                          position="absolute"
                          right={{ base: '2', sm: '4' }}
                          h="full"
                          flexDir="row"
                          alignItems="center"
                        >
                          <Box
                            backgroundColor={theme.colors.shared.green}
                            borderRadius="full"
                            paddingX={{ base: '2', sm: '3' }}
                            paddingY={{ base: '2px', sm: '1' }}
                          >
                            <Text
                              fontSize={{ base: '2xs', sm: 'xs' }}
                              fontWeight="semibold"
                              color="white"
                            >
                              02:54
                            </Text>
                          </Box>
                        </Box>
                      </Box>
                      <HStack justifyContent="end" marginTop="2">
                        <Pressable
                          _hover={{
                            textDecoration: 'underline'
                          }}
                        >
                          <Text
                            fontSize={{ base: 'xs', sm: '15px', lg: 'md' }}
                            fontWeight="medium"
                          >
                            Resend Code
                          </Text>
                        </Pressable>
                      </HStack>
                      {/* input new password */}
                      <Box position="relative" w="full" marginTop="5">
                        <Input
                          paddingLeft={{ base: '8', sm: '12' }}
                          paddingTop={{ base: '2', sm: '3' }}
                          paddingRight={{ base: '8', sm: '12' }}
                          paddingBottom={{ base: '2', sm: '3' }}
                          w="full"
                          borderRadius={{ base: 'lg', sm: 'xl' }}
                          borderWidth="2"
                          borderColor={theme.colors.shared.softerGray}
                          fontSize={{ base: 'xs', sm: 'md' }}
                          fontWeight="medium"
                          backgroundColor={theme.colors.shared.aliceBlue}
                          placeholder="Enter your new password"
                        />
                        <Box
                          position="absolute"
                          left={{ base: '2', sm: '4' }}
                          h="full"
                          flexDir="row"
                          alignItems="center"
                        >
                          <Box w={{ base: '5', sm: '6' }}>
                            <IconLock />
                          </Box>
                        </Box>
                        <Box
                          position="absolute"
                          right={{ base: '2', sm: '4' }}
                          h="full"
                          flexDir="row"
                          alignItems="center"
                        >
                          <Box w={{ base: '5', sm: '6' }}>
                            <IconCheckCircle
                              color={theme.colors.shared.green}
                            />
                          </Box>
                        </Box>
                      </Box>
                      {/* input confirm password */}
                      <Box position="relative" w="full" marginTop="5">
                        <Input
                          type={showPass ? 'text' : 'password'}
                          paddingLeft={{ base: '8', sm: '12' }}
                          paddingTop={{ base: '2', sm: '3' }}
                          paddingRight={{ base: '8', sm: '12' }}
                          paddingBottom={{ base: '2', sm: '3' }}
                          w="full"
                          borderRadius={{ base: 'lg', sm: 'xl' }}
                          borderWidth="2"
                          borderColor={theme.colors.shared.softerGray}
                          fontSize={{ base: 'xs', sm: 'md' }}
                          fontWeight="medium"
                          backgroundColor={theme.colors.shared.aliceBlue}
                          placeholder="Confirm Password"
                        />
                        <Box
                          position="absolute"
                          left={{ base: '2', sm: '4' }}
                          h="full"
                          flexDir="row"
                          alignItems="center"
                        >
                          <Box w={{ base: '5', sm: '6' }}>
                            <IconLock />
                          </Box>
                        </Box>
                        <Box
                          position="absolute"
                          right={{ base: '2', sm: '4' }}
                          h="full"
                          flexDir="row"
                          alignItems="center"
                        >
                          <Box w={{ base: '5', sm: '6' }}>
                            <IconCheckCircle
                              color={theme.colors.shared.green}
                            />
                          </Box>
                        </Box>
                      </Box>

                      {/* button */}
                      <Box marginTop={{ base: '6', lg: '10' }}>
                        <Box
                          backgroundColor={theme.colors.shared.brightBlue}
                          paddingY="3"
                          paddingX="2"
                          borderRadius="xl"
                        >
                          <Text
                            textAlign="center"
                            fontWeight="semibold"
                            color="white"
                            fontSize={{ base: '13px', sm: 'md' }}
                          >
                            Reset your password
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
                          <Hidden till="lg">
                            <>Don’t have an account yet? </>
                          </Hidden>
                          <Hidden from="lg">
                            <>Don’t have an account ? </>
                          </Hidden>
                          <SolitoLink href="/sign-up">
                            <Link
                              _text={{
                                fontSize: 'md'
                              }}
                              fontWeight="semibold"
                            >
                              <Hidden till="lg">
                                <>Sign up now</>
                              </Hidden>
                              <Hidden from="lg">
                                <>Sign up for free</>
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
                    w="128px"
                    h="128px"
                    source={require('shared/images/contact-blaster-white.png')}
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
