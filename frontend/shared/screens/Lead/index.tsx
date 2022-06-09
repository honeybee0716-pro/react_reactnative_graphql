import React from 'react'
import {
  HStack,
  Icon,
  Text,
  VStack,
  Avatar,
  Center,
  Fab,
  Pressable,
  Heading
} from 'native-base'
import {
  AntDesign,
  Entypo,
  FontAwesome,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons
} from '@expo/vector-icons'
import { useRouter } from 'solito/router'
import { gql, useQuery } from '@apollo/client'

import DashboardLayout from '../../layouts/DashboardLayout'

function TopSection({ lead }) {
  if (!lead) return null

  return (
    <>
      <VStack
        _light={{
          borderBottomColor: 'coolGray.200',
          bg: { base: 'primary.900', md: 'white' }
        }}
        _dark={{
          borderBottomColor: 'coolGray.800',
          bg: 'coolGray.900'
        }}
        borderBottomWidth={{ md: '1' }}
      >
        <VStack px={{ md: '8' }} py={{ base: 4, md: 8 }} alignItems="center">
          <VStack alignItems="center" space="2">
            <Avatar width="20" height="20" source={lead?.profileImageURL} />
            <VStack alignItems="center">
              <Text
                _light={{
                  color: { base: 'coolGray.50', md: 'coolGray.800' }
                }}
                fontSize="2xl"
                fontWeight="medium"
              >
                {`${lead?.firstName} ${lead?.lastName}`}
              </Text>
              <Text
                _light={{
                  color: { base: 'coolGray.50', md: 'coolGray.400' }
                }}
                _dark={{
                  color: 'coolGray.500'
                }}
                fontSize="sm"
              >
                {lead?.title} at {lead?.companyName}
              </Text>
            </VStack>
          </VStack>
          <HStack
            mt="5"
            space="12"
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Pressable>
              <VStack alignItems="center" justifyContent="center" space="2">
                <Icon
                  size="6"
                  name="call"
                  as={Ionicons}
                  _light={{
                    color: { base: 'coolGray.50', md: 'coolGray.500' }
                  }}
                />
                <Text
                  _light={{
                    color: { base: 'coolGray.50', md: 'coolGray.500' }
                  }}
                  fontSize="md"
                >
                  Call
                </Text>
              </VStack>
            </Pressable>
            {/* <VStack alignItems="center" justifyContent="center" space="2">
              <Icon
                as={Foundation}
                name="video"
                _light={{
                  color: { base: 'coolGray.50', md: 'coolGray.500' },
                }}
                size="6"
              />
              <Text
                _light={{
                  color: { base: 'coolGray.50', md: 'coolGray.500' },
                }}
                fontSize="md"
              >
                Video
              </Text>
            </VStack> */}
            <VStack alignItems="center" justifyContent="center" space="2">
              <Icon
                as={MaterialCommunityIcons}
                name="email"
                _light={{
                  color: { base: 'coolGray.50', md: 'coolGray.500' }
                }}
                size="6"
              />
              <Text
                _light={{
                  color: { base: 'coolGray.50', md: 'coolGray.500' }
                }}
                fontSize="md"
              >
                Email
              </Text>
            </VStack>
            <VStack alignItems="center" justifyContent="center" space="2">
              <Icon
                as={MaterialCommunityIcons}
                name="linkedin"
                _light={{
                  color: { base: 'coolGray.50', md: 'coolGray.500' }
                }}
                size="6"
              />
              <Text
                _light={{
                  color: { base: 'coolGray.50', md: 'coolGray.500' }
                }}
                fontSize="md"
              >
                LinkedIn
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </>
  )
}

function BottomSection({ lead }) {
  if (!lead) return null
  const contactList = [
    {
      iconName: 'mobile1',
      contactDetail: lead?.phone || 'unknown',
      contactTye: 'Mobile',
      as: AntDesign
    },
    {
      iconName: 'phone',
      contactDetail: 'unknown',
      contactTye: 'Home',
      as: FontAwesome
    },
    {
      iconName: 'mail',
      contactDetail: lead?.email || 'unknown',
      contactTye: 'Email',
      as: Entypo
    },
    {
      iconName: 'map-marker',
      contactDetail: lead?.location || 'unknown',
      contactTye: 'Location',
      as: MaterialCommunityIcons
    }
  ]

  return (
    <>
      <VStack
        flex={1}
        py={{ base: 6, md: 8 }}
        flexWrap={{ md: 'wrap' }}
        space={{ base: 6, md: 1 }}
        flexDirection={{ md: 'row' }}
        _light={{ bg: 'white' }}
        _dark={{ bg: { md: 'coolGray.900', base: 'coolGray.800' } }}
      >
        {contactList.map((item, index) => {
          return (
            <HStack
              width={{ md: '100%', lg: '50%' }}
              key={index}
              px={{ base: 4, md: 4, lg: '12%' }}
              py={{ md: 0 }}
              space={{ base: 2 }}
            >
              <Icon
                size="6"
                as={item.as}
                name={item.iconName}
                _dark={{ color: 'primary.700' }}
                _light={{ color: 'primary.900' }}
                mt="1"
                mr="2"
              />

              <VStack space="1">
                <Text
                  fontSize="md"
                  fontWeight="medium"
                  _dark={{ color: 'coolGray.50' }}
                  _light={{ color: 'coolGray.800' }}
                >
                  {item.contactDetail}
                </Text>
                <Text
                  fontSize="md"
                  fontWeight="medium"
                  _dark={{ color: 'coolGray.300' }}
                  _light={{ color: 'coolGray.500' }}
                >
                  {item.contactTye}
                </Text>
              </VStack>
            </HStack>
          )
        })}
      </VStack>
    </>
  )
}

const GET_LEAD = gql`
  query GetLeadByID($input: getLeadByIDInput) {
    getLeadByID(input: $input) {
      message
      status
      lead
    }
  }
`

export default function ({ id }: any) {
  const { push } = useRouter()

  const { data, error, loading } = useQuery(GET_LEAD, {
    fetchPolicy: 'cache-first',
    variables: {
      input: {
        id
      }
    }
  })

  console.log('789', { data })

  // if (error || data && !data?.getLeadByID?.lead?.id) {
  //   return (
  //     <>
  //       <div>{id}</div>
  //       <br />
  //       <div>{JSON.stringify(error || "There was an error.")}</div>
  //     </>
  //   )
  // }

  return (
    <>
      <DashboardLayout title="Lead Profile" displayBackButton>
        <Heading>{loading ? 'Loading...' : ''}</Heading>
        <Heading>{error ? 'Error' : ''}</Heading>
        <VStack
          _light={{
            borderColor: 'coolGray.200'
          }}
          _dark={{
            borderColor: 'coolGray.800'
          }}
          borderWidth={{ md: '1' }}
          borderBottomWidth="1"
          borderRadius={{ md: '8' }}
          overflow="hidden"
          flex={1}
        >
          <TopSection lead={data?.getLeadByID?.lead} />
          <BottomSection lead={data?.getLeadByID?.lead} />
        </VStack>
      </DashboardLayout>
    </>
  )
}
