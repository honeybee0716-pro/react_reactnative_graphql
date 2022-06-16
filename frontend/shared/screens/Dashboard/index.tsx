import React from 'react'
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Avatar,
  ScrollView,
  Pressable,
  Center,
  Input,
  Fab,
  IconButton,
  useColorModeValue,
  Divider,
  Button,
  Heading,
  Stack,
  InputGroup,
  InputLeftAddon,
  InputRightAddon
} from 'native-base'
import FloatingLabelInput from './components/FloatingLabelInput'
import { Link as SolitoLink } from 'solito/link'
import { useRouter } from 'solito/router'
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { gql, useQuery, useLazyQuery } from '@apollo/client'

import DashboardLayout from '../../layouts/DashboardLayout'

const GET_USER_LEADS = gql`
  query GetUserLeads {
    getUserLeads {
      message
      status
      leads
    }
  }
`

const GET_USER_SUBSCRIPTION_DATA = gql`
  query GetUserSubscriptionData {
    getUserSubscriptionData {
      stripeCustomer
      status
      message
    }
  }
`

const SEARCH_FOR_LEADS = gql`
  query SearchForLeads {
    searchForLeads {
      leads
      status
      message
    }
  }
`

// const sortedContacts = clientEyeData.sort((a, b) =>
//   a.contactName.localeCompare(b.contactName)
// );

// const groupedContacts = getGroupedContacts(sortedContacts);

// type GroupedContact = {
//   [key: string]: ContactProps[];
// };

// function getGroupedContacts(contactsData: ContactProps[]) {
//   const data = contactsData.reduce<GroupedContact>((acc, curr) => {
//     const group = curr.contactName[0];
//     if (!acc[group]) acc[group] = [curr];
//     else acc[group].push(curr);
//     return acc;
//   }, {} as GroupedContact);
//   return data;
// }

// function ListWithLabel({ category }: { category: string }) {
//   return (
//     <Box>
//       <HStack alignItems="center">
//         <Text
//           fontSize="xs"
//           _light={{ color: 'coolGray.400' }}
//           _dark={{ color: 'coolGray.50' }}
//           mt={5}
//           mb={2}
//           pl={4}
//         >
//           {category.toUpperCase()}
//         </Text>
//         <Divider ml={2} mr={9} mt={2} flex={1} />
//       </HStack>

//       {groupedContacts[category].map((item, index) => {
//         return (
//           <Pressable p={2} key={index}>
//             <HStack alignItems="center" space={4}>
//               <Avatar
//                 source={{
//                   uri: item.imageUri,
//                 }}
//                 w={10}
//                 h={10}
//               >
//                 JD
//               </Avatar>

//               <VStack>
//                 <Text
//                   fontSize="sm"
//                   _light={{ color: 'coolGray.400' }}
//                   _dark={{ color: 'coolGray.50' }}
//                 >
//                   {item.contactName.charAt(0).toUpperCase() +
//                     item.contactName.slice(1)}
//                 </Text>
//               </VStack>
//             </HStack>
//           </Pressable>
//         );
//       })}
//     </Box>
//   );
// }

type ListItemProps = {
  item: any
}

function ListItem(props: ListItemProps) {
  return (
    <Pressable p={2}>
      <HStack alignItems="center" space={4}>
        <Avatar
          source={{
            uri: props.item.imageUri
          }}
          w={10}
          h={10}
        >
          JD
        </Avatar>
        <VStack>
          <Text
            fontSize="sm"
            _light={{ color: 'coolGray.400' }}
            _dark={{ color: 'coolGray.50' }}
          >
            {props.item.contactName.charAt(0).toUpperCase() +
              props.item.contactName.slice(1, props.item.contactName.length)}
          </Text>
        </VStack>
      </HStack>
    </Pressable>
  )
}

function ListItemDesktop(props: ListItemProps) {
  return (
    <SolitoLink href={`/lead/${props?.item?.id}`}>
      <Pressable p={2} flex={1}>
        <HStack alignItems="center" flex={1} justifyContent="space-between">
          <HStack alignItems="center" space={4} w={40}>
            <Avatar
              source={{
                uri: props?.item?.profileImageURL
              }}
              w={10}
              h={10}
            >
              {`${props?.item?.firstName?.charAt(0) || ''}${
                props?.item?.lastName?.charAt(0) || ''
              }`}
            </Avatar>
            <Text
              _light={{ color: 'coolGray.700' }}
              _dark={{ color: 'coolGray.50' }}
            >
              {props?.item?.fullName || 'unknown'}
            </Text>
          </HStack>

          <Text
            w={40}
            _light={{ color: 'coolGray.700' }}
            _dark={{ color: 'coolGray.50' }}
          >
            {props?.item?.email || 'unknown'}
          </Text>

          <Text
            w={40}
            _light={{ color: 'coolGray.700' }}
            _dark={{ color: 'coolGray.50' }}
          >
            {props?.item?.phone || 'unknown'}
          </Text>

          <Text
            w={40}
            _light={{ color: 'coolGray.700' }}
            _dark={{ color: 'coolGray.50' }}
          >
            {props?.item?.companyName || 'unknown'}
          </Text>

          <Text
            w={40}
            _light={{ color: 'coolGray.700' }}
            _dark={{ color: 'coolGray.50' }}
          >
            {props?.item?.title || 'unknown'}
          </Text>
        </HStack>
      </Pressable>
      <Divider />
    </SolitoLink>
  )
}

export default function ContactList() {
  const { data, loading, error } = useQuery(SEARCH_FOR_LEADS, {
    variables: {
      input: {
        joey: 'fenny'
      }
    }
  })
  const [searchFirstName, setSearchFirstName] = React.useState('joey')
  const [searchLastName, setSearchLastName] = React.useState('fenny')
  const [searchCompanyName, setSearchCompanyName] = React.useState('kwri')
  const [searchJobTitle, setSearchJobTitle] = React.useState('sre')
  const [leads, setLeads] = React.useState([])
  const { push } = useRouter()
  const {
    data: getUserSubscriptionDataResult,
    error: getUserSubscriptionDataError,
    loading: getUserSubscriptionDataLoading
  } = useQuery(GET_USER_SUBSCRIPTION_DATA, {
    fetchPolicy: 'cache-first'
  })

  const handleSearch = async () => {
    // searchForLeads({
    //   fetchPolicy: 'network-only',
    //   variables: {
    //     input: {
    //       firstName: searchFirstName,
    //       lastName: searchLastName,
    //       companyName: searchCompanyName,
    //       jobTitle: searchJobTitle
    //     }
    //   }
    // });
    // {
    //   variables: {
    //     input: {
    //       firstName: searchFirstName !== 'jf' ? searchFirstName : null,
    //       lastName: searchLastName !== 'jf' ? searchLastName : null,
    //       companyName: searchCompanyName !== 'jf' ? searchCompanyName : null,
    //       jobTitle: searchJobTitle !== 'jf' ? searchJobTitle : null
    //     }
    //   },
    //   fetchPolicy: 'network-only',
    //   onCompleted: data => {
    //     // console.log({leads});
    //     // setLeads(data.searchForLeads)
    //   },
    //   onError: error => {
    //     console.log(error)
    //   }
    // }
  }

  React.useEffect(() => {
    if (getUserSubscriptionDataResult) {
      if (
        !getUserSubscriptionDataResult?.getUserSubscriptionData?.stripeCustomer
          ?.activePlanLevel
      ) {
        push('/pricing')
      }
    }
  }, [getUserSubscriptionDataResult])

  React.useEffect(() => {
    ;(async () => {
      handleSearch()
    })()
  }, [])

  return (
    <>
      <DashboardLayout
        displaySidebar
        displayScreenTitle={!!data?.searchForLeads?.leads && !loading}
        title={'Leads'}
      >
        {loading ? <Heading>Loading...</Heading> : null}
        {error ? <Heading>Error. Please try again.</Heading> : null}
        {data?.searchForLeads?.leads && !getUserSubscriptionDataLoading ? (
          <>
            <HStack
              pt={{ md: 5, base: 2 }}
              mb={{ md: 5, base: 0 }}
              w="100%"
              justifyContent="space-between"
              _light={{ bg: { base: 'white', md: 'coolGray.200' } }}
              _dark={{
                bg: { base: 'coolGray.800', md: 'coolGray.700' }
              }}
            >
              <Input
                onChangeText={(txt) => setSearchFirstName(txt)}
                value={searchFirstName}
                size="xl"
                placeholder="First Name"
                color="muted.900"
                placeholderTextColor="muted.500"
                bg="coolGray.100"
                borderColor="coolGray.400"
              />
              <Input
                onChangeText={(txt) => setSearchLastName(txt)}
                value={searchLastName}
                size="xl"
                placeholder="Last Name"
                color="muted.900"
                placeholderTextColor="muted.500"
                bg="coolGray.100"
                borderColor="coolGray.400"
              />
              <Input
                onChangeText={(txt) => setSearchCompanyName(txt)}
                value={searchCompanyName}
                size="xl"
                placeholder="Company Name"
                color="muted.900"
                placeholderTextColor="muted.500"
                bg="coolGray.100"
                borderColor="coolGray.400"
              />
              <Input
                onChangeText={(txt) => setSearchJobTitle(txt)}
                value={searchJobTitle}
                size="xl"
                placeholder="Job Title"
                color="muted.900"
                placeholderTextColor="muted.500"
                bg="coolGray.100"
                borderColor="coolGray.400"
              />
              <Button
                onPress={handleSearch}
                bg="primary.700"
                color="muted.200"
                leftIcon={<Icon as={Ionicons} name="search" size="sm" />}
              >
                Search
              </Button>
            </HStack>
            <VStack
              px={{ base: 4, md: 8 }}
              py={{ base: 2, md: 8 }}
              borderRadius={{ md: '8' }}
              _light={{
                borderColor: 'coolGray.400',
                bg: { base: 'white' }
              }}
              _dark={{
                borderColor: 'coolGray.700',
                bg: { md: 'coolGray.400', base: 'coolGray.800' }
              }}
              borderWidth={{ md: '1' }}
              borderBottomWidth="1"
              space="4"
            >
              <Box>
                <ScrollView>
                  <Box display={{ md: 'flex', base: 'none' }}>
                    <HStack
                      alignItems="center"
                      justifyContent="space-between"
                      borderBottomWidth={1}
                      _light={{ borderColor: 'coolGray.400' }}
                      _dark={{ borderColor: 'coolGray.600' }}
                    >
                      <Text
                        fontWeight="bold"
                        textAlign="left"
                        w={40}
                        mb={3}
                        _light={{ color: 'coolGray.800' }}
                        _dark={{ color: 'coolGray.50' }}
                      >
                        Name
                      </Text>
                      <Text
                        fontWeight="bold"
                        textAlign="left"
                        w={40}
                        mb={3}
                        _light={{ color: 'coolGray.800' }}
                        _dark={{ color: 'coolGray.50' }}
                      >
                        Email
                      </Text>
                      <Text
                        fontWeight="bold"
                        textAlign="left"
                        w={40}
                        mb={3}
                        _light={{ color: 'coolGray.800' }}
                        _dark={{ color: 'coolGray.50' }}
                      >
                        Phone
                      </Text>
                      <Text
                        fontWeight="bold"
                        w={40}
                        mb={3}
                        _light={{ color: 'coolGray.800' }}
                        _dark={{ color: 'coolGray.50' }}
                      >
                        Company
                      </Text>
                      <Text
                        fontWeight="bold"
                        w={40}
                        mb={3}
                        _light={{ color: 'coolGray.800' }}
                        _dark={{ color: 'coolGray.50' }}
                      >
                        Job Title
                      </Text>
                    </HStack>
                    <Text
                      mt={7}
                      pl={2}
                      fontSize="sm"
                      mb={3}
                      _light={{ color: 'coolGray.600' }}
                      _dark={{ color: 'coolGray.300' }}
                    >
                      Contacts (
                      {
                        data?.searchForLeads?.leads?.filter(
                          (l: any) => l.display === true
                        ).length
                      }{' '}
                      shown out of {data?.searchForLeads?.leads.length})
                    </Text>
                    <VStack space={4}>
                      {data?.searchForLeads?.leads
                        ?.filter((l: any) => {
                          return l.display === true
                        })
                        .map((item: any, index) => {
                          return <ListItemDesktop item={item} key={item.id} />
                        })}
                    </VStack>
                  </Box>
                </ScrollView>
                <VStack
                  display={{ md: 'none', base: 'flex' }}
                  zIndex={2}
                  position="absolute"
                  alignItems="center"
                  right={5}
                  top={4}
                >
                  <Icon
                    size={3}
                    _light={{ color: 'coolGray.400' }}
                    _dark={{ color: 'violet.500' }}
                    as={AntDesign}
                    name="heart"
                  />
                  {/* {Object.keys(groupedContacts).map((key) => (
                    <Pressable key={key}>
                      <Text mt={2}> {key.toUpperCase()}</Text>
                    </Pressable>
                  ))} */}
                </VStack>
                <Fab
                  display={{ md: 'none', base: 'flex' }}
                  bg="coolGray.400"
                  placement="bottom-right"
                  mb={10}
                  borderRadius="full"
                  icon={
                    <Center>
                      <Icon
                        size={6}
                        color="white"
                        as={Ionicons}
                        name={'keypad'}
                      />
                    </Center>
                  }
                />
              </Box>
            </VStack>
          </>
        ) : null}
      </DashboardLayout>
    </>
  )
}
