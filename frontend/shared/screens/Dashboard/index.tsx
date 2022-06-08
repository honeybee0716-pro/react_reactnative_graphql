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
  Divider,
  Button,
  Heading
} from 'native-base'
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { gql, useQuery } from '@apollo/client'

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
    <>
      <Pressable p={2} flex={1}>
        <HStack alignItems="center" flex={1} justifyContent="space-between">
          <HStack alignItems="center" space={4} w={40}>
            <Avatar
              source={{
                uri: props.item.profileImageURL
              }}
              w={10}
              h={10}
            >
              N/A
            </Avatar>
            <Text
              _light={{ color: 'coolGray.700' }}
              _dark={{ color: 'coolGray.50' }}
            >
              {props.item.firstName + ' ' + props.item.lastName}
            </Text>
          </HStack>

          <Text
            w={40}
            _light={{ color: 'coolGray.700' }}
            _dark={{ color: 'coolGray.50' }}
          >
            {props.item.email}
          </Text>

          <Text
            w={40}
            _light={{ color: 'coolGray.700' }}
            _dark={{ color: 'coolGray.50' }}
          >
            {props.item.phone}
          </Text>

          <Text
            w={40}
            _light={{ color: 'coolGray.700' }}
            _dark={{ color: 'coolGray.50' }}
          >
            {props.item.companyName}
          </Text>

          <Text
            w={40}
            _light={{ color: 'coolGray.700' }}
            _dark={{ color: 'coolGray.50' }}
          >
            {props.item.title}
          </Text>
        </HStack>
      </Pressable>
      <Divider />
    </>
  )
}

export default function ContactList() {
  const { data, error, loading } = useQuery(GET_USER_LEADS, {
    fetchPolicy: 'cache-first'
  })

  return (
    <>
      <DashboardLayout
        displaySidebar
        displayScreenTitle={!!data}
        title={'Leads'}
      >
        {loading ? <Heading>Loading...</Heading> : null}
        {error ? <Heading>Error. Please try again.</Heading> : null}
        {data ? (
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
                flex={{ md: undefined, lg: undefined, base: 1 }}
                w={{ md: '100%', lg: '100%', base: '90%' }}
                py={3}
                mx={{ base: 4, md: 0 }}
                mr={{ base: 4, md: 4, lg: 30, xl: 40 }}
                _light={{ bg: 'white' }}
                _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.400' } }}
                InputLeftElement={
                  <Icon
                    as={<AntDesign name="search1" />}
                    size={{ base: '4', md: '4' }}
                    my={2}
                    ml={2}
                    _light={{
                      color: 'coolGray.400'
                    }}
                    _dark={{
                      color: 'coolGray.300'
                    }}
                  />
                }
                color="coolGray.200"
                placeholder="Search here"
              />
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
                      Contacts ({data?.getUserLeads?.leads?.length})
                    </Text>
                    <VStack space={4}>
                      {data?.getUserLeads?.leads?.map((item, index) => {
                        return <ListItemDesktop item={item} key={index} />
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
