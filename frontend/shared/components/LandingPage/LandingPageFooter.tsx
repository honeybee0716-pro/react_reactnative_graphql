import {
  Box,
  Center,
  Hidden,
  Text,
  Image,
  HStack,
  VStack,
  Input,
  Pressable
} from 'native-base'
import { Link as SolitoLink } from 'solito/link'
import React from 'react'
import { theme } from 'shared/styles/theme'
import IconMail from 'shared/components/icons/IconMail'
import IconArrowRight from 'shared/components/icons/IconArrowRight'

export default function LandingPageFooter() {
  return (
    <>
      <Box>
        <Box
          flexDirection={{ base: 'col', sm: 'row' }}
          paddingY={{ base: '0', sm: '5', lg: '7' }}
          paddingX={{ base: '0', sm: '6', lg: '12' }}
        >
          <Box
            flexDirection={{ base: 'row', lg: 'unset' }}
            alignItems="center"
            w={{ base: 'full', sm: '70%', lg: '60%' }}
            paddingY={{ base: '9', sm: '5', lg: '7' }}
            paddingX={{ base: '6', sm: '0' }}
            borderBottomWidth={{ base: '1', sm: '0' }}
            borderBottomColor={theme.colors.shared.softGray}
          >
            <Box
              flexDirection={{ base: 'col', sm: 'row' }}
              alignItems={{ base: 'unset', sm: 'center' }}
              flexWrap={{ base: '', sm: 'wrap', lg: '' }}
              w={{ base: 'full', sm: 'auto' }}
            >
              <Box
                flexDir="row"
                alignItems="center"
                marginTop={{ base: '0', sm: '4' }}
                marginBottom={{ base: '6', sm: '4' }}
              >
                <Image
                  w={{ base: '40px', lg: '50px' }}
                  h={{ base: '40px', lg: '50px' }}
                  source={require('shared/images/contact-blaster-blue.png')}
                />
                <Text
                  color={theme.colors.shared.softBlack}
                  fontSize={{ base: 'lg', lg: '22px' }}
                  fontWeight="semibold"
                  marginLeft={'2'}
                >
                  SaaS Template
                </Text>
              </Box>
              <Box
                marginLeft={{ base: '0', sm: '4', lg: '24' }}
                w={{ base: 'full', sm: 'auto' }}
              >
                <HStack
                  space={{ base: '0', sm: '4', lg: '16' }}
                  w={{ base: 'full', sm: 'auto' }}
                  justifyContent={{ base: 'space-between', sm: 'unset' }}
                >
                  <VStack>
                    <Pressable>
                      <Text
                        fontSize={{ base: 'sm', lg: 'md' }}
                        fontWeight="medium"
                      >
                        Home
                      </Text>
                    </Pressable>
                    <Pressable marginTop={{ base: '3', lg: '6' }}>
                      <Text
                        fontSize={{ base: 'sm', lg: 'md' }}
                        fontWeight="medium"
                      >
                        Features
                      </Text>
                    </Pressable>
                    <Hidden from="sm">
                      <Pressable marginTop={{ base: '3', lg: '6' }}>
                        <Text fontSize="sm" fontWeight="medium">
                          Privacy
                        </Text>
                      </Pressable>
                    </Hidden>
                  </VStack>
                  <VStack>
                    <Pressable>
                      <Text
                        fontSize={{ base: 'sm', lg: 'md' }}
                        fontWeight="medium"
                      >
                        About Us
                      </Text>
                    </Pressable>
                    <Pressable marginTop={{ base: '3', lg: '6' }}>
                      <Text
                        fontSize={{ base: 'sm', lg: 'md' }}
                        fontWeight="medium"
                      >
                        Services
                      </Text>
                    </Pressable>
                    <Hidden from="sm">
                      <Pressable marginTop={{ base: '3', lg: '6' }}>
                        <Text fontSize="sm" fontWeight="medium">
                          Cookie
                        </Text>
                      </Pressable>
                    </Hidden>
                  </VStack>
                  <VStack>
                    <SolitoLink href={`/terms-and-conditions`}>
                      <Box>
                        <Text
                          fontSize={{ base: 'sm', lg: 'md' }}
                          fontWeight="medium"
                        >
                          Terms & Conditions
                        </Text>
                      </Box>
                    </SolitoLink>
                    <Pressable marginTop={{ base: '3', lg: '6' }}>
                      <Text
                        fontSize={{ base: 'sm', lg: 'md' }}
                        fontWeight="medium"
                      >
                        Support
                      </Text>
                    </Pressable>
                    <Hidden from="sm">
                      <Pressable marginTop={{ base: '3', lg: '6' }}>
                        <Text fontSize="sm" fontWeight="medium">
                          Terms Of Service
                        </Text>
                      </Pressable>
                    </Hidden>
                  </VStack>
                </HStack>
              </Box>
            </Box>
          </Box>
          <Box
            w={{ base: 'full', sm: '30%', lg: '40%' }}
            paddingY={{ base: '8', sm: '5', lg: '7' }}
            paddingLeft={{ base: '6', sm: '4', lg: '0' }}
            paddingRight={{ base: '6', sm: '0' }}
            borderLeftWidth="1"
            borderLeftColor={theme.colors.shared.softGray}
          >
            <Box
              flexDirection="row"
              justifyContent={{ base: 'unset', sm: 'center' }}
            >
              <Box w={{ base: 'full', sm: 'auto' }} maxW="full">
                <HStack alignItems="center">
                  <Text fontFamily="dm_sans" fontSize="lg" fontWeight="bold">
                    Join our Newsletter
                  </Text>
                  <Image
                    marginLeft="1"
                    w="23px"
                    h="23px"
                    source={require('./components/pop_confetti.png')}
                  />
                </HStack>
                <Hidden till="sm">
                  <Text fontFamily="dm_sans" fontSize="sm" fontWeight="medium">
                    Subscribe to our newsletter for latest updates
                  </Text>
                </Hidden>
                <Box
                  position="relative"
                  w="full"
                  marginTop={{ base: '4', sm: '2' }}
                >
                  <Input
                    paddingLeft="10"
                    paddingTop="3"
                    paddingRight="10"
                    paddingBottom="3"
                    w="full"
                    borderRadius="full"
                    fontSize="xs"
                    fontWeight="medium"
                    backgroundColor={theme.colors.shared.black_3}
                    borderWidth="0"
                    placeholder="Enter your email"
                  />
                  <Box
                    position="absolute"
                    left="4"
                    h="full"
                    flexDir="row"
                    alignItems="center"
                  >
                    <Box w="15px">
                      <IconMail />
                    </Box>
                  </Box>
                  <Box
                    position="absolute"
                    right="2"
                    h="full"
                    flexDir="row"
                    alignItems="center"
                  >
                    <Center
                      w="26px"
                      h="26px"
                      borderRadius="full"
                      backgroundColor={theme.colors.shared.blueGentianFlower}
                    >
                      <Box w="14px">
                        <IconArrowRight color="white" />
                      </Box>
                    </Center>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          paddingY={{ base: '5', lg: '8' }}
          paddingX={{ base: '0', sm: '6', lg: '12' }}
          borderTopWidth="1"
          borderTopColor={theme.colors.shared.softGray}
        >
          <Text
            fontFamily="dm_sans"
            fontSize={{ base: '13px', sm: 'sm' }}
            fontWeight="medium"
            textAlign={{ base: 'center', sm: 'left' }}
            w={{ base: 'full', sm: 'auto' }}
          >
            Copyright © 2022 SaaS Template. All rights reserved
          </Text>
          <Hidden till="sm">
            <HStack space={{ base: '6', lg: '8' }}>
              <Pressable>
                <Text fontFamily="dm_sans" fontSize="md" fontWeight="medium">
                  Privacy Policy
                </Text>
              </Pressable>
              <Pressable>
                <Text fontFamily="dm_sans" fontSize="md" fontWeight="medium">
                  Terms of service
                </Text>
              </Pressable>
              <Pressable>
                <Text fontFamily="dm_sans" fontSize="md" fontWeight="medium">
                  Cookie policy
                </Text>
              </Pressable>
            </HStack>
          </Hidden>
        </Box>
      </Box>
    </>
  )
}
