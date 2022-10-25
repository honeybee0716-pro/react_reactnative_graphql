import {
  Box,
  Center,
  Hidden,
  Text,
  Image,
  HStack,
  VStack,
  Pressable,
  Switch
} from 'native-base'
import React from 'react'
import { theme } from 'shared/styles/theme'
import DashboardLayout from 'shared/layouts/DashboardLayout'
import IconClock from 'shared/components/icons/IconClock'
import IconChevronDown from 'shared/components/icons/IconChevronDown'
import IconCreditCard from 'shared/components/icons/IconCreditCard'
import IconEdit from 'shared/components/icons/IconEdit'
import IconMasterCard from 'shared/components/icons/IconMasterCard'
import IconHome from 'shared/components/icons/IconHome'
import IconPlus from 'shared/components/icons/IconPlus'
import IconLock from 'shared/components/icons/IconLock'
import IconShield from 'shared/components/icons/IconShield'
import IconMail from 'shared/components/icons/IconMail'
import IconUser from 'shared/components/icons/IconUser'
import IconUsers from 'shared/components/icons/IconUsers'
import IconAtSign from 'shared/components/icons/IconAtSign'
import IconPhoneCall from 'shared/components/icons/IconPhoneCall'
import IconSave from 'shared/components/icons/IconSave'

export default function ManageLists() {
  return (
    <>
      <DashboardLayout>
        <Box flexDirection={{ base: 'column', lg: 'row' }}>
          <Box w={{ base: 'full', lg: '1/2' }}>
            <Box
              marginTop={{ base: '3', sm: '5' }}
              marginLeft={{ base: '3', sm: '5' }}
              marginRight={{ base: '3', sm: '5', lg: '0' }}
              marginBottom={{ base: '5', lg: '8' }}
              paddingX={{ base: '4', sm: '6' }}
              paddingTop={{ base: '4', sm: '6' }}
              paddingBottom={{ base: '4', sm: '8' }}
              borderTopRadius="2xl"
              borderBottomRadius="2xl"
              backgroundColor="white"
              borderWidth="1"
              borderColor={theme.colors.shared.softGray}
            >
              <Box position="relative" marginBottom={{ base: '12', sm: '16' }}>
                <Image
                  borderRadius="xl"
                  height={{ base: '174px', sm: '261px' }}
                  source={require('./components/pexels-mo-8657160 1.png')}
                />
                <Pressable
                  position="absolute"
                  bottom="2"
                  right="2"
                  backgroundColor="#FFFFFF78"
                  borderRadius="lg"
                  paddingY="2"
                  paddingX="4"
                  flexDirection="row"
                  alignItems="center"
                  _hover={{
                    backgroundColor: 'white'
                  }}
                >
                  <Box w="13px" marginRight="1">
                    <IconEdit />
                  </Box>
                  <Text fontSize="2xs" fontWeight="medium" textAlign="center">
                    Edit Cover
                  </Text>
                </Pressable>
                <Box
                  position="absolute"
                  bottom={{ base: '-40px', sm: '-60px' }}
                  left="0"
                  right="0"
                  flexDirection="row"
                  justifyContent="center"
                >
                  <Box
                    w={{ base: '85px', sm: '130px' }}
                    h={{ base: '85px', sm: '130px' }}
                    borderRadius="full"
                    borderWidth="1"
                    borderColor={theme.colors.shared.darkerGray}
                    backgroundColor="white"
                  ></Box>
                </Box>
              </Box>
              <Text
                fontSize={{ base: '24px', sm: '28px' }}
                fontWeight="semibold"
                textAlign="center"
              >
                Alice Cooper
              </Text>
              <Text
                color="gray.500"
                fontSize={{ base: '13px', sm: '15px' }}
                fontWeight="medium"
                textAlign="center"
              >
                alicecooper@email.com
              </Text>
            </Box>
            <Box
              marginLeft={{ base: '3', sm: '5' }}
              marginRight={{ base: '3', sm: '5', lg: '0' }}
              marginBottom={{ base: '0', lg: '5' }}
              paddingX={{ base: '4', sm: '6' }}
              paddingTop={{ base: '4', sm: '6' }}
              paddingBottom="6"
              borderTopRadius="2xl"
              borderBottomRadius="2xl"
              backgroundColor="white"
              borderWidth="1"
              borderColor={theme.colors.shared.softGray}
            >
              <HStack alignItems="center" marginBottom="6">
                <Center
                  backgroundColor={theme.colors.shared.masterCardYellow_15}
                  paddingY="2"
                  paddingX="2"
                  borderRadius="lg"
                >
                  <Box w="18px">
                    <IconUsers color={theme.colors.shared.masterCardYellow} />
                  </Box>
                </Center>
                <Text
                  flex="1"
                  marginLeft="3"
                  fontWeight="medium"
                  fontSize={{ base: 'lg', sm: 'xl' }}
                >
                  Personal information
                </Text>
              </HStack>
              <VStack space="4">
                <Box
                  flexDirection="row"
                  alignItems="center"
                  backgroundColor={theme.colors.shared.softer6Gray}
                  borderWidth="1"
                  borderColor={theme.colors.shared.softer7Gray_25}
                  borderRadius="lg"
                  paddingLeft="4"
                  paddingRight="5"
                >
                  <Box paddingY="4">
                    <Box w="18px" marginRight="3">
                      <IconUser />
                    </Box>
                  </Box>
                  <HStack flex="1" h="full">
                    <Hidden till="sm">
                      <Box
                        w="1/4"
                        h="full"
                        borderRightWidth="1"
                        borderRightColor={theme.colors.shared.softer7Gray_25}
                        flexDirection="row"
                        alignItems="center"
                      >
                        <Text fontSize="15px" fontWeight="medium">
                          Full Name
                        </Text>
                      </Box>
                    </Hidden>
                    <Box
                      w={{ base: 'full', sm: '3/4' }}
                      flexDirection="row"
                      alignItems="center"
                      paddingLeft={{ base: '0', sm: '4' }}
                    >
                      <Text
                        fontSize={{ base: 'sm', sm: '15px' }}
                        fontWeight="medium"
                      >
                        Alice Cooper
                      </Text>
                    </Box>
                  </HStack>
                  <Box>
                    <Pressable
                      backgroundColor="white"
                      borderWidth="1"
                      borderColor={theme.colors.shared.soft4Gray}
                      borderRadius="md"
                      p={{ base: '6px', sm: '0.4rem' }}
                      _hover={{
                        backgroundColor: theme.colors.shared.softerGray
                      }}
                    >
                      <Box w="13px">
                        <IconEdit />
                      </Box>
                    </Pressable>
                  </Box>
                </Box>
                <Box
                  flexDirection="row"
                  alignItems="center"
                  backgroundColor={theme.colors.shared.softer6Gray}
                  borderWidth="1"
                  borderColor={theme.colors.shared.softer7Gray_25}
                  borderRadius="lg"
                  paddingLeft="4"
                  paddingRight="5"
                >
                  <Box paddingY="4">
                    <Box w="18px" marginRight="3">
                      <IconAtSign />
                    </Box>
                  </Box>
                  <HStack flex="1" h="full">
                    <Hidden till="sm">
                      <Box
                        w="1/4"
                        h="full"
                        borderRightWidth="1"
                        borderRightColor={theme.colors.shared.softer7Gray_25}
                        flexDirection="row"
                        alignItems="center"
                      >
                        <Text fontSize="15px" fontWeight="medium">
                          Email Address
                        </Text>
                      </Box>
                    </Hidden>
                    <Box
                      w={{ base: 'full', sm: '3/4' }}
                      flexDirection="row"
                      alignItems="center"
                      paddingLeft={{ base: '0', sm: '4' }}
                    >
                      <Text
                        fontSize={{ base: 'sm', sm: '15px' }}
                        fontWeight="medium"
                      >
                        alicecooper@email.com
                      </Text>
                    </Box>
                  </HStack>
                  <Box>
                    <Pressable
                      backgroundColor="white"
                      borderWidth="1"
                      borderColor={theme.colors.shared.soft4Gray}
                      borderRadius="md"
                      p={{ base: '6px', sm: '0.4rem' }}
                      _hover={{
                        backgroundColor: theme.colors.shared.softerGray
                      }}
                    >
                      <Box w="13px">
                        <IconEdit />
                      </Box>
                    </Pressable>
                  </Box>
                </Box>
                <Box
                  flexDirection="row"
                  alignItems="center"
                  backgroundColor={theme.colors.shared.softer6Gray}
                  borderWidth="1"
                  borderColor={theme.colors.shared.softer7Gray_25}
                  borderRadius="lg"
                  paddingLeft="4"
                  paddingRight="5"
                >
                  <Box paddingY="4">
                    <Box w="18px" marginRight="3">
                      <IconPhoneCall />
                    </Box>
                  </Box>
                  <HStack flex="1" h="full">
                    <Hidden till="sm">
                      <Box
                        w="1/4"
                        h="full"
                        borderRightWidth="1"
                        borderRightColor={theme.colors.shared.softer7Gray_25}
                        flexDirection="row"
                        alignItems="center"
                      >
                        <Text fontSize="15px" fontWeight="medium">
                          Phone
                        </Text>
                      </Box>
                    </Hidden>
                    <Box
                      w={{ base: 'full', sm: '3/4' }}
                      flexDirection="row"
                      alignItems="center"
                      paddingLeft={{ base: '0', sm: '4' }}
                    >
                      <Text
                        fontSize={{ base: 'sm', sm: '15px' }}
                        fontWeight="medium"
                      >
                        +1 615-403-4290
                      </Text>
                    </Box>
                  </HStack>
                  <Box>
                    <Pressable
                      backgroundColor="white"
                      borderWidth="1"
                      borderColor={theme.colors.shared.soft4Gray}
                      borderRadius="md"
                      p={{ base: '6px', sm: '0.4rem' }}
                      _hover={{
                        backgroundColor: theme.colors.shared.softerGray
                      }}
                    >
                      <Box w="13px">
                        <IconEdit />
                      </Box>
                    </Pressable>
                  </Box>
                </Box>
              </VStack>
              <Hidden till="sm">
                <HStack marginTop="6">
                  <Pressable
                    backgroundColor={theme.colors.shared.brightBlue}
                    borderRadius="lg"
                    paddingY="2"
                    paddingX="4"
                    flexDirection="row"
                    alignItems="center"
                    _hover={{
                      backgroundColor: theme.colors.shared.blueGentianFlower
                    }}
                  >
                    <Box w="18px" marginRight="1">
                      <IconSave color="white" />
                    </Box>
                    <Text
                      color="white"
                      fontSize="sm"
                      fontWeight="medium"
                      textAlign="center"
                    >
                      Save Details
                    </Text>
                  </Pressable>
                </HStack>
              </Hidden>
            </Box>
          </Box>
          <Box w={{ base: 'full', lg: '1/2' }}>
            <Box
              marginX={{ base: '3', sm: '5' }}
              marginTop="5"
              marginBottom={{ base: '5', lg: '0' }}
              paddingX={{ base: '4', sm: '6' }}
              paddingTop={{ base: '4', sm: '6' }}
              paddingBottom="6"
              borderTopRadius="2xl"
              borderBottomRadius={{ base: '2xl', lg: 'none' }}
              backgroundColor="white"
              borderWidth="1"
              borderColor={theme.colors.shared.softGray}
            >
              <HStack alignItems="center" marginBottom="6">
                <Center
                  backgroundColor={theme.colors.shared.green3_15}
                  paddingY="2"
                  paddingX="2"
                  borderRadius="lg"
                >
                  <Box w="18px">
                    <IconCreditCard color={theme.colors.shared.green} />
                  </Box>
                </Center>
                <Text
                  flex="1"
                  marginLeft="3"
                  fontWeight="medium"
                  fontSize={{ base: 'lg', sm: 'xl' }}
                >
                  Billing information
                </Text>
              </HStack>
              <VStack space="3">
                <Pressable
                  flexDirection="row"
                  alignItems="center"
                  backgroundColor={theme.colors.shared.softer6Gray}
                  borderWidth="1"
                  borderColor={theme.colors.shared.soft4Gray_6}
                  borderRadius="lg"
                  paddingLeft="6"
                  paddingRight="5"
                  paddingY="4"
                  _hover={{
                    backgroundColor: theme.colors.shared.softerGray
                  }}
                >
                  <Box w="51px" marginRight="3">
                    <IconMasterCard />
                  </Box>
                  <Box flex="1">
                    <Text fontSize="15px" fontWeight="medium">
                      Mastercard ending in 7322
                    </Text>
                    <Text fontSize="13px" fontWeight="medium" color="gray.400">
                      Expiry : 05-09-2022
                    </Text>
                  </Box>
                  <Box w="20px">
                    <IconChevronDown rotation={180} />
                  </Box>
                </Pressable>
                <Pressable
                  flexDirection="row"
                  alignItems="center"
                  backgroundColor={theme.colors.shared.softer6Gray}
                  borderWidth="1"
                  borderColor={theme.colors.shared.soft4Gray_6}
                  borderRadius="lg"
                  paddingLeft="4"
                  paddingRight="5"
                  paddingY="4"
                  _hover={{
                    backgroundColor: theme.colors.shared.softerGray
                  }}
                >
                  <Box w="24px" marginRight="3">
                    <IconPlus />
                  </Box>
                  <Box flex="1">
                    <Text fontSize="15px" fontWeight="medium">
                      Add a new payment method
                    </Text>
                  </Box>
                  <Box w="20px">
                    <IconChevronDown rotation={90} />
                  </Box>
                </Pressable>
                <Pressable
                  flexDirection="row"
                  alignItems="center"
                  backgroundColor={theme.colors.shared.softer6Gray}
                  borderWidth="1"
                  borderColor={theme.colors.shared.soft4Gray_6}
                  borderRadius="lg"
                  paddingLeft="4"
                  paddingRight="5"
                  paddingY="4"
                  _hover={{
                    backgroundColor: theme.colors.shared.softerGray
                  }}
                >
                  <Box w="24px" marginRight="3">
                    <IconClock />
                  </Box>
                  <Box flex="1">
                    <Text fontSize="15px" fontWeight="medium">
                      View transaction History
                    </Text>
                  </Box>
                  <Box w="20px">
                    <IconChevronDown rotation={90} />
                  </Box>
                </Pressable>
                <Pressable
                  flexDirection="row"
                  alignItems="center"
                  backgroundColor={theme.colors.shared.softer6Gray}
                  borderWidth="1"
                  borderColor={theme.colors.shared.soft4Gray_6}
                  borderRadius="lg"
                  paddingLeft="4"
                  paddingRight="5"
                  paddingY="4"
                  _hover={{
                    backgroundColor: theme.colors.shared.softerGray
                  }}
                >
                  <Box w="24px" marginRight="3">
                    <IconCreditCard />
                  </Box>
                  <Box flex="1">
                    <Text fontSize="15px" fontWeight="medium">
                      View saved cards
                    </Text>
                  </Box>
                  <Box w="20px">
                    <IconChevronDown rotation={90} />
                  </Box>
                </Pressable>
                <Pressable
                  flexDirection="row"
                  alignItems="center"
                  backgroundColor={theme.colors.shared.softer6Gray}
                  borderWidth="1"
                  borderColor={theme.colors.shared.soft4Gray_6}
                  borderRadius="lg"
                  paddingLeft="4"
                  paddingRight="5"
                  paddingY="4"
                  _hover={{
                    backgroundColor: theme.colors.shared.softerGray
                  }}
                >
                  <Box w="24px" marginRight="3">
                    <IconHome />
                  </Box>
                  <Box flex="1">
                    <Text fontSize="15px" fontWeight="medium">
                      Change your billing address
                    </Text>
                  </Box>
                  <Box w="20px">
                    <IconChevronDown rotation={90} />
                  </Box>
                </Pressable>
              </VStack>
            </Box>
            <Box
              marginX={{ base: '3', sm: '5' }}
              marginTop="0"
              marginBottom="5"
              paddingX={{ base: '4', sm: '6' }}
              paddingTop={{ base: '4', sm: '6' }}
              paddingBottom="6"
              borderBottomRadius="2xl"
              borderTopRadius={{ base: '2xl', lg: 'none' }}
              backgroundColor="white"
              borderWidth="1"
              borderTopWidth={{ base: '1', lg: '0' }}
              borderColor={theme.colors.shared.softGray}
            >
              <HStack alignItems="center" marginBottom="6">
                <Center
                  backgroundColor={theme.colors.shared.purple2_15}
                  paddingY="2"
                  paddingX="2"
                  borderRadius="lg"
                >
                  <Box w="18px">
                    <IconLock color={theme.colors.shared.purple2} />
                  </Box>
                </Center>
                <Text
                  flex="1"
                  marginLeft="3"
                  fontWeight="medium"
                  fontSize={{ base: 'lg', sm: 'xl' }}
                >
                  Account Security
                </Text>
              </HStack>
              <VStack space="3">
                <Box
                  flexDirection="row"
                  alignItems="center"
                  backgroundColor={theme.colors.shared.softer6Gray}
                  borderWidth="1"
                  borderColor={theme.colors.shared.soft4Gray_6}
                  borderRadius="lg"
                  paddingLeft="4"
                  paddingRight="5"
                  paddingY="4"
                >
                  <Box w="24px" marginRight="3">
                    <IconShield />
                  </Box>
                  <Box flex="1">
                    <Text fontSize="15px" fontWeight="medium">
                      Enable two factor authentication
                    </Text>
                  </Box>
                  <Switch
                    onThumbColor="white"
                    onTrackColor={theme.colors.shared.brightBlue}
                    offThumbColor="white"
                    offTrackColor="gray.200"
                    _hover={{
                      onTrackColor: theme.colors.shared.blueGentianFlower,
                      offTrackColor: 'gray.300'
                    }}
                  />
                </Box>
                <Pressable
                  flexDirection="row"
                  alignItems="center"
                  backgroundColor={theme.colors.shared.softer6Gray}
                  borderWidth="1"
                  borderColor={theme.colors.shared.soft4Gray_6}
                  borderRadius="lg"
                  paddingLeft="4"
                  paddingRight="5"
                  paddingY="4"
                  _hover={{
                    backgroundColor: theme.colors.shared.softerGray
                  }}
                >
                  <Box w="24px" marginRight="3">
                    <IconLock />
                  </Box>
                  <Box flex="1">
                    <Text fontSize="15px" fontWeight="medium">
                      Change your password
                    </Text>
                  </Box>
                  <Box w="20px">
                    <IconChevronDown rotation={90} />
                  </Box>
                </Pressable>
                <Pressable
                  flexDirection="row"
                  alignItems="center"
                  backgroundColor={theme.colors.shared.softer6Gray}
                  borderWidth="1"
                  borderColor={theme.colors.shared.soft4Gray_6}
                  borderRadius="lg"
                  paddingLeft="4"
                  paddingRight="5"
                  paddingY="4"
                  _hover={{
                    backgroundColor: theme.colors.shared.softerGray
                  }}
                >
                  <Box w="24px" marginRight="3">
                    <IconMail />
                  </Box>
                  <Box flex="1">
                    <Text fontSize="15px" fontWeight="medium">
                      Change your recovery email
                    </Text>
                  </Box>
                  <Box w="20px">
                    <IconChevronDown rotation={90} />
                  </Box>
                </Pressable>
                <Pressable
                  flexDirection="row"
                  alignItems="center"
                  backgroundColor={theme.colors.shared.softer6Gray}
                  borderWidth="1"
                  borderColor={theme.colors.shared.soft4Gray_6}
                  borderRadius="lg"
                  paddingLeft="4"
                  paddingRight="5"
                  paddingY="4"
                  _hover={{
                    backgroundColor: theme.colors.shared.softerGray
                  }}
                >
                  <Box w="24px" marginRight="3">
                    <IconClock />
                  </Box>
                  <Box flex="1">
                    <Text fontSize="15px" fontWeight="medium">
                      Show recent activities
                    </Text>
                  </Box>
                  <Box w="20px">
                    <IconChevronDown rotation={90} />
                  </Box>
                </Pressable>
              </VStack>
            </Box>
          </Box>
        </Box>
      </DashboardLayout>
    </>
  )
}
