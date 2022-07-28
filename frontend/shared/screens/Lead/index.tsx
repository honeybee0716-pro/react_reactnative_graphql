import React from 'react'
import {
  Box,
  Center,
  Hidden,
  Text,
  HStack,
  VStack,
  Icon,
  Pressable,
  Spinner,
  Heading,
  Avatar
} from 'native-base'
import { Feather } from '@expo/vector-icons'
import { theme } from 'shared/styles/theme'
import { Link as SolitoLink } from 'solito/link'
import DashboardLayout from 'shared/layouts/DashboardLayout'
import IconClock from 'shared/components/icons/IconClock'
import IconUsers from 'shared/components/icons/IconUsers'
import IconShield from 'shared/components/icons/IconShield'
import IconMail from 'shared/components/icons/IconMail'
import IconUser from 'shared/components/icons/IconUser'
import IconAtSign from 'shared/components/icons/IconAtSign'
import IconPhoneCall from 'shared/components/icons/IconPhoneCall'
import IconArrowRight from 'shared/components/icons/IconArrowRight'
import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'solito/router'
import { useRouteAuthentication } from '../../hooks/useRouteAuthentication/useRouteAuthentication'

const GET_LEAD = gql`
  query GetLeadByID($input: getLeadByIDInput) {
    getLeadByID(input: $input) {
      message
      status
      lead
    }
  }
`

const LoadingSpinner = () => {
  return (
    <HStack space={8} flex="1" justifyContent="center" alignItems="center">
      <Spinner size="lg" color={theme.colors.shared.clientEyePrimary} />
    </HStack>
  )
}

export default function ProfileScreen({ id }: any) {
  useRouteAuthentication()
  const router = useRouter()

  const { data, error, loading } = useQuery(GET_LEAD, {
    fetchPolicy: 'cache-first',
    variables: {
      input: {
        id
      }
    }
  })

  const lead = data?.getLeadByID?.lead

  const goHome = () => {
    router.push('/home')
  }

  return (
    <>
      <DashboardLayout>
        {loading ? <LoadingSpinner /> : null}
        {error ? <Heading>Error. Please try again.</Heading> : null}
        {lead && !loading ? (
          <Box
            flexDirection={{ base: 'column', lg: 'row' }}
            display="flex"
            flex="1"
          >
            <Box
              margin="5"
              marginRight={{ base: '5', lg: '0' }}
              marginBottom={{ sm: '0', md: '0', lg: '5' }}
              paddingX={{ base: '4', sm: '6' }}
              paddingBottom={{ base: '4', sm: '8' }}
              borderTopRadius="2xl"
              borderBottomRadius="2xl"
              backgroundColor="white"
              borderWidth="1"
              borderColor={theme.colors.shared.softGray}
            >
              <Pressable paddingTop="5" onPress={goHome} width="25px">
                <Box
                  height="25px"
                  width="25px"
                  style={{
                    transform: [{ rotate: '180deg' }]
                  }}
                >
                  <IconArrowRight color="black" />
                </Box>
              </Pressable>
              <Box position="relative" marginBottom={{ base: '12', sm: '16' }}>
                <Box borderRadius="xl" height={{ base: '94px', sm: '81px' }} />
                <Box
                  position="absolute"
                  bottom={{ base: '-40px', sm: '-60px' }}
                  left="0"
                  right="0"
                  flexDirection="row"
                  justifyContent="center"
                >
                  <Box
                    w={{ base: '100px' }}
                    h={{ base: '100px' }}
                    borderRadius="full"
                    borderWidth="1"
                    borderColor={theme.colors.shared.darkerGray}
                    backgroundColor="white"
                  >
                    <Avatar
                      source={{
                        uri: lead.profileImageURL
                      }}
                      height="100%"
                      width="100%"
                    >
                      <Text fontSize="30" fontWeight="medium" color="white">
                        {`${lead.firstName?.charAt(0) || ''}${
                          lead.lastName?.charAt(0) || ''
                        }`}
                      </Text>
                    </Avatar>
                  </Box>
                </Box>
              </Box>
              <Text
                fontSize={{ base: '24px', sm: '28px' }}
                fontWeight="semibold"
                textAlign="center"
                marginTop="5"
              >
                {lead.firstName && lead.lastName
                  ? `${lead.firstName} ${lead.lastName}`
                  : 'Unknown'}
              </Text>
              <Text
                fontSize={{ base: '14px', sm: '14px' }}
                fontWeight="normal"
                textAlign="center"
                marginTop="5"
              >
                {lead.location ? lead.location : 'Unknown'}
              </Text>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
              >
                {lead.phone ? (
                  <SolitoLink href={`tel:${lead.phone}`}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      margin="4"
                      width="50px"
                    >
                      <Box paddingY="6">
                        <Box w="28px">
                          <IconPhoneCall color="black" />
                        </Box>
                      </Box>
                      <Text
                        color="gray.500"
                        fontSize={{ base: '13px', sm: '15px' }}
                        fontWeight="medium"
                        textAlign="center"
                      >
                        Call
                      </Text>
                    </Box>
                  </SolitoLink>
                ) : null}
                {lead.email ? (
                  <SolitoLink href={`mailto:${lead.email}`}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      margin="4"
                      width="50px"
                    >
                      <Box paddingY="6">
                        <Box w="28px">
                          <IconMail color="black" />
                        </Box>
                      </Box>
                      <Text
                        color="gray.500"
                        fontSize={{ base: '13px', sm: '15px' }}
                        fontWeight="medium"
                        textAlign="center"
                      >
                        Email
                      </Text>
                    </Box>
                  </SolitoLink>
                ) : null}
                {lead.linkedInProfileURL ? (
                  <Pressable
                    onPress={() => window.open(lead.linkedInProfileURL)}
                  >
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      margin="4"
                      width="50px"
                    >
                      <Box paddingY="6">
                        <Box w="28px">
                          <Icon
                            as={Feather}
                            name="linkedin"
                            _light={{
                              color: 'black'
                            }}
                            size="7"
                          />
                        </Box>
                      </Box>
                      <Text
                        color="gray.500"
                        fontSize={{ base: '13px', sm: '15px' }}
                        fontWeight="medium"
                        textAlign="center"
                      >
                        LinkedIn
                      </Text>
                    </Box>
                  </Pressable>
                ) : null}
              </Box>
            </Box>
            <Box
              margin="5"
              paddingX={{ base: '4', sm: '6' }}
              paddingTop={{ base: '4', sm: '6' }}
              paddingBottom="6"
              borderTopRadius="2xl"
              borderBottomRadius="2xl"
              backgroundColor="white"
              borderWidth="1"
              borderColor={theme.colors.shared.softGray}
              flex="1"
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
                  Information
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
                          Company Name
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
                        {lead.companyName || 'Unknown'}
                      </Text>
                    </Box>
                  </HStack>
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
                          Website
                        </Text>
                      </Box>
                    </Hidden>
                    <Box
                      w={{ base: 'full', sm: '3/4' }}
                      flexDirection="row"
                      alignItems="center"
                      paddingLeft={{ base: '0', sm: '4' }}
                    >
                      <Pressable
                        onPress={() => {
                          window.open(`https://${lead.website}`)
                        }}
                        disabled={!lead.website}
                      >
                        <Text
                          fontSize={{ base: 'sm', sm: '15px' }}
                          fontWeight="medium"
                          color={
                            lead.website ? theme.colors.shared.brightBlue : ''
                          }
                        >
                          {lead.website || 'Unknown'}
                        </Text>
                      </Pressable>
                    </Box>
                  </HStack>
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
                          Job Title
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
                        {lead.title || 'Unknown'}
                      </Text>
                    </Box>
                  </HStack>
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
                      <IconMail />
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
                      <Pressable
                        onPress={() => {
                          window.location.href = `mailto:${lead.email}`
                        }}
                        disabled={!lead.email}
                      >
                        <Text
                          fontSize={{ base: 'sm', sm: '15px' }}
                          fontWeight="medium"
                          color={
                            lead.email ? theme.colors.shared.brightBlue : ''
                          }
                        >
                          {lead.email || 'Unknown'}
                        </Text>
                      </Pressable>
                    </Box>
                  </HStack>
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
                      <Pressable
                        onPress={() => {
                          window.location.href = `tel:${lead.phone}`
                        }}
                        disabled={!lead.phone}
                      >
                        <Text
                          fontSize={{ base: 'sm', sm: '15px' }}
                          fontWeight="medium"
                          color={
                            lead.email ? theme.colors.shared.brightBlue : ''
                          }
                        >
                          {lead.phone || 'Unknown'}
                        </Text>
                      </Pressable>
                    </Box>
                  </HStack>
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
                      <IconClock />
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
                          Duration in company
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
                        {lead.durationInCompany || 'Unknown'}
                      </Text>
                    </Box>
                  </HStack>
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
                      <IconClock />
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
                          Duration in role
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
                        {lead.durationInRole || 'Unknown'}
                      </Text>
                    </Box>
                  </HStack>
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
                      <IconShield />
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
                          Is Premium
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
                        {lead.isPremium === 1 ? 'Yes' : 'No'}
                      </Text>
                    </Box>
                  </HStack>
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
                          Sales Navigator URL
                        </Text>
                      </Box>
                    </Hidden>
                    <Box
                      w={{ base: 'full', sm: '3/4' }}
                      flexDirection="row"
                      alignItems="center"
                      paddingLeft={{ base: '0', sm: '4' }}
                    >
                      <Pressable
                        onPress={() => {
                          window.open(`${lead.linkedInSalesNavigatorURL}`)
                        }}
                        disabled={!lead.linkedInSalesNavigatorURL}
                      >
                        <Text
                          fontSize={{ base: 'sm', sm: '15px' }}
                          fontWeight="medium"
                          color={
                            lead.linkedInSalesNavigatorURL
                              ? theme.colors.shared.brightBlue
                              : ''
                          }
                        >
                          {lead.linkedInSalesNavigatorURL ? 'Visit' : 'Unknown'}
                        </Text>
                      </Pressable>
                    </Box>
                  </HStack>
                </Box>
              </VStack>
            </Box>
          </Box>
        ) : null}
      </DashboardLayout>
    </>
  )
}
