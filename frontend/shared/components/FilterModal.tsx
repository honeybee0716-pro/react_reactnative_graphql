import {
  Box,
  Center,
  Hidden,
  Text,
  HStack,
  Input,
  Pressable,
  Modal
} from 'native-base'
import { theme } from 'shared/styles/theme'
import React from 'react'
import IconCalendar from 'shared/components/icons/IconCalendar'
import IconMoreVertical from 'shared/components/icons/IconMoreVertical'
import IconChevronDown from 'shared/components/icons/IconChevronDown'
import IconPlus from 'shared/components/icons/IconPlus'
import IconSliders from 'shared/components/icons/IconSliders'
import IconTag from 'shared/components/icons/IconTag'
import IconFilter from 'shared/components/icons/IconFilter'
import IconList from 'shared/components/icons/IconList'
import IconGroup from 'shared/components/icons/IconGroup'
import IconSearch from 'shared/components/icons/IconSearch'
import { useRecoilState } from 'recoil'
import {
  filterSort,
  filterFirstName,
  filterLastName,
  filterCompanyName,
  filterJobTitle,
  searchForLeadsVariablesState
} from '../state'

export const FilterModal = ({
  modalIsOpen,
  setModalIsOpen,
  handleSearch
}: any) => {
  const [sortBy, setSortBy] = useRecoilState<any>(filterSort)
  const [firstName, setFirstName] = useRecoilState<any>(filterFirstName)
  const [lastName, setLastName] = useRecoilState<any>(filterLastName)
  const [companyName, setCompanyName] = useRecoilState<any>(filterCompanyName)
  const [jobTitle, setJobTitle] = useRecoilState<any>(filterJobTitle)
  const [searchForLeadsVariables, setSearchForLeadsVariables] =
    useRecoilState<any>(searchForLeadsVariablesState)

  const resetFilters = async () => {
    setFirstName(undefined)
    setLastName(undefined)
    setCompanyName(undefined)
    setJobTitle(undefined)
    setSearchForLeadsVariables(undefined)
    await handleSearch()
  }

  const handleSortByDate = () => {
    setSortBy('date')
  }

  const handleSortByName = () => {
    setSortBy('name')
  }

  const hasFilters = !!firstName || !!lastName || !!companyName || !!jobTitle

  return (
    <Modal
      isOpen={modalIsOpen}
      overlayVisible={true}
      backdropVisible={true}
      onClose={() => setModalIsOpen(false)}
    >
      <Hidden till="lg">
        <Box>
          <Box
            marginX="5"
            marginTop="5"
            marginBottom={{ base: '0', lg: '5' }}
            paddingX={{ base: '4', sm: '6' }}
            paddingTop={{ base: '4', sm: '6' }}
            paddingBottom="4"
            borderRadius="2xl"
            backgroundColor="white"
            borderWidth="1"
            borderColor={theme.colors.shared.softGray}
          >
            <HStack alignItems="center" marginBottom="6">
              <Center
                backgroundColor={theme.colors.shared.fireOrange_20}
                paddingY="2"
                paddingX="2"
                borderRadius="lg"
              >
                <Box w="18px">
                  <IconSliders color={theme.colors.shared.fireOrange} />
                </Box>
              </Center>
              <Text
                marginLeft="3"
                fontWeight="medium"
                fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}
              >
                Filters
              </Text>
            </HStack>
            <Text fontSize="sm" fontWeight="500" marginBottom="4">
              Sort By:
            </Text>
            <HStack marginBottom="6">
              <Pressable
                flex="1"
                borderWidth="1"
                borderColor={theme.colors.shared.softGray}
                borderLeftRadius="lg"
                borderRightRadius="lg"
                marginRight="2"
                paddingY="0.35rem"
                backgroundColor={
                  sortBy === 'date'
                    ? theme.colors.shared.clientEyePrimary
                    : theme.colors.shared.aliceBlue
                }
                _hover={{
                  backgroundColor:
                    sortBy === 'date'
                      ? theme.colors.shared.clientEyePrimary
                      : theme.colors.shared.softerGray
                }}
                onPress={handleSortByDate}
              >
                <Text
                  fontSize="13px"
                  fontWeight="medium"
                  textAlign="center"
                  color={sortBy === 'date' ? 'white' : 'black'}
                >
                  Date
                </Text>
              </Pressable>
              <Pressable
                flex="1"
                borderWidth="1"
                borderColor={theme.colors.shared.softGray}
                borderRightRadius="lg"
                borderLeftRadius="lg"
                marginLeft="2"
                paddingY="0.35rem"
                backgroundColor={
                  sortBy === 'name'
                    ? theme.colors.shared.clientEyePrimary
                    : theme.colors.shared.aliceBlue
                }
                _hover={{
                  backgroundColor:
                    sortBy === 'name'
                      ? theme.colors.shared.clientEyePrimary
                      : theme.colors.shared.softerGray
                }}
                onPress={handleSortByName}
              >
                <Text
                  fontSize="13px"
                  fontWeight="medium"
                  textAlign="center"
                  color={sortBy === 'name' ? 'white' : 'black'}
                >
                  Name
                </Text>
              </Pressable>
            </HStack>
            <Text fontSize="sm" fontWeight="500" marginBottom="3">
              Search for:
            </Text>
            <Box flexDirection="row" justifyContent="space-between">
              <Box
                flex="1"
                position="relative"
                marginBottom="3"
                marginRight="2"
              >
                <Input
                  paddingLeft="3"
                  paddingRight="10"
                  paddingTop="0.6rem"
                  paddingBottom="0.6rem"
                  w="full"
                  borderRadius="lg"
                  borderWidth="1"
                  borderColor={theme.colors.shared.black_20}
                  backgroundColor={theme.colors.shared.soft6Gray}
                  fontSize="13px"
                  placeholder="First Name"
                  value={firstName}
                  onChangeText={(text) =>
                    setFirstName(text.length ? text : undefined)
                  }
                />
              </Box>
              <Box flex="1" position="relative" marginBottom="3" marginLeft="2">
                <Input
                  paddingLeft="3"
                  paddingRight="10"
                  paddingTop="0.6rem"
                  paddingBottom="0.6rem"
                  w="full"
                  borderRadius="lg"
                  borderWidth="1"
                  borderColor={theme.colors.shared.black_20}
                  backgroundColor={theme.colors.shared.soft6Gray}
                  fontSize="13px"
                  placeholder="Last Name"
                  onChangeText={(text) =>
                    setLastName(text.length ? text : undefined)
                  }
                  value={lastName}
                />
              </Box>
            </Box>
            <Box flexDirection="row" justifyContent="space-between">
              <Box
                flex="1"
                position="relative"
                marginBottom="3"
                marginRight="2"
              >
                <Input
                  paddingLeft="3"
                  paddingRight="10"
                  paddingTop="0.6rem"
                  paddingBottom="0.6rem"
                  w="full"
                  borderRadius="lg"
                  borderWidth="1"
                  borderColor={theme.colors.shared.black_20}
                  backgroundColor={theme.colors.shared.soft6Gray}
                  fontSize="13px"
                  placeholder="Company Name"
                  onChangeText={(text) =>
                    setCompanyName(text.length ? text : undefined)
                  }
                  value={companyName}
                />
              </Box>
              <Box flex="1" position="relative" marginBottom="3" marginLeft="2">
                <Input
                  paddingLeft="3"
                  paddingRight="10"
                  paddingTop="0.6rem"
                  paddingBottom="0.6rem"
                  w="full"
                  borderRadius="lg"
                  borderWidth="1"
                  borderColor={theme.colors.shared.black_20}
                  backgroundColor={theme.colors.shared.soft6Gray}
                  fontSize="13px"
                  placeholder="Job Title"
                  onChangeText={(text) =>
                    setJobTitle(text.length ? text : undefined)
                  }
                  value={jobTitle}
                />
              </Box>
            </Box>
            <Box flexDirection="row" justifyContent="space-between">
              <Pressable
                borderRadius="lg"
                flex="1"
                marginRight="2"
                paddingY="2"
                backgroundColor={theme.colors.shared.clientEyePrimary}
                onPress={() =>
                  handleSearch(hasFilters, {
                    input: {
                      firstName,
                      lastName,
                      companyName,
                      jobTitle,
                      sortBy
                    }
                  })
                }
              >
                <Text
                  color="white"
                  fontSize="sm"
                  fontWeight="medium"
                  textAlign="center"
                >
                  Apply Filters
                </Text>
              </Pressable>
              <Pressable
                backgroundColor={theme.colors.shared.aliceBlue}
                borderWidth="1"
                borderColor={theme.colors.shared.softGray}
                borderRadius="lg"
                flex="1"
                marginLeft="2"
                paddingY="2"
                onPress={resetFilters}
                _hover={{
                  backgroundColor: theme.colors.shared.softerGray
                }}
              >
                <Text
                  color={theme.colors.shared.soft2Gray}
                  fontSize="sm"
                  fontWeight="medium"
                  textAlign="center"
                >
                  Reset All
                </Text>
              </Pressable>
            </Box>
          </Box>
        </Box>
      </Hidden>
      <Hidden from="lg">
        <Box width="full">
          <Box
            marginX={{ base: '3', sm: '5' }}
            marginTop={{ base: '3', sm: '5' }}
            marginBottom="0"
            paddingX={{ base: '4', sm: '5' }}
            paddingTop={{ base: '4', sm: '5' }}
            paddingBottom="4"
            borderTopRadius="2xl"
            backgroundColor="white"
            borderWidth="1"
            borderBottomWidth={{ base: '0', sm: '1' }}
            borderColor={theme.colors.shared.softGray}
          >
            <HStack alignItems="center" marginBottom="6">
              <Center
                backgroundColor={theme.colors.shared.fireOrange_20}
                paddingY="2"
                paddingX="2"
                borderRadius="lg"
              >
                <Box w="18px">
                  <IconFilter color={theme.colors.shared.fireOrange} />
                </Box>
              </Center>
              <Text
                flex="1"
                marginLeft="3"
                fontWeight="medium"
                fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}
              >
                Filter Lists
              </Text>
              <Hidden from="lg">
                <Pressable
                  borderWidth="1"
                  borderColor={theme.colors.shared.soft4Gray}
                  borderRadius="md"
                  p={{ base: '6px', sm: '0.4rem' }}
                >
                  <Box w="16px">
                    <IconMoreVertical />
                  </Box>
                </Pressable>
              </Hidden>
            </HStack>
            <HStack>
              <HStack
                flex="1"
                space={{ base: '2', sm: '4' }}
                justifyContent={{
                  base: 'space-between',
                  sm: 'unset'
                }}
                flexWrap="wrap"
              >
                <Pressable
                  flexDirection="row"
                  alignItems="center"
                  paddingY="2"
                  paddingX="2"
                  marginBottom={{ base: '2', sm: '0' }}
                  backgroundColor={{
                    base: 'white',
                    sm: theme.colors.shared.aliceBlue
                  }}
                  borderWidth="1"
                  borderColor={theme.colors.shared.softGray}
                  borderRadius="lg"
                >
                  <Box w="18px" marginRight={{ base: '1', sm: '2' }}>
                    <IconSliders />
                  </Box>
                  <Text fontSize="13px" fontWeight="medium">
                    Name
                  </Text>
                  <Box w="18px" marginLeft={{ base: '1', sm: '2' }}>
                    <IconChevronDown rotation={180} />
                  </Box>
                </Pressable>
                <Pressable
                  flexDirection="row"
                  alignItems="center"
                  paddingY="2"
                  paddingX="2"
                  marginBottom={{ base: '2', sm: '0' }}
                  backgroundColor={{
                    base: 'white',
                    sm: theme.colors.shared.aliceBlue
                  }}
                  borderWidth="1"
                  borderColor={theme.colors.shared.softGray}
                  borderRadius="lg"
                >
                  <Box w="20px" marginRight={{ base: '1', sm: '2' }}>
                    <IconCalendar />
                  </Box>
                  <Text fontSize="13px" fontWeight="medium">
                    This Month
                  </Text>
                  <Box w="18px" marginLeft={{ base: '1', sm: '2' }}>
                    <IconChevronDown rotation={180} />
                  </Box>
                </Pressable>
                <Pressable
                  flexDirection="row"
                  alignItems="center"
                  paddingY="2"
                  paddingX="2"
                  marginBottom={{ base: '2', sm: '0' }}
                  backgroundColor={{
                    base: 'white',
                    sm: theme.colors.shared.aliceBlue
                  }}
                  borderWidth="1"
                  borderColor={theme.colors.shared.softGray}
                  borderRadius="lg"
                >
                  <Box w="18px" marginRight={{ base: '1', sm: '2' }}>
                    <IconTag />
                  </Box>
                  <Hidden till="sm">
                    <Text fontSize="13px" fontWeight="medium">
                      Add Tags
                    </Text>
                  </Hidden>
                  <Hidden from="sm">
                    <Text fontSize="13px" fontWeight="medium">
                      Tags
                    </Text>
                  </Hidden>
                </Pressable>
              </HStack>
              <Hidden till="sm">
                <HStack space="2">
                  <Pressable
                    flexDirection="row"
                    alignItems="center"
                    paddingY="2"
                    paddingX="0.7rem"
                    backgroundColor={theme.colors.shared.aliceBlue}
                    borderWidth="1"
                    borderColor={theme.colors.shared.softGray}
                    borderRadius="lg"
                  >
                    <Box w="16px">
                      <IconList />
                    </Box>
                  </Pressable>
                  <Pressable
                    flexDirection="row"
                    alignItems="center"
                    paddingY="2"
                    paddingX="0.7rem"
                    backgroundColor={theme.colors.shared.aliceBlue}
                    borderWidth="1"
                    borderColor={theme.colors.shared.softGray}
                    borderRadius="lg"
                  >
                    <Box w="16px">
                      <IconGroup />
                    </Box>
                  </Pressable>
                </HStack>
              </Hidden>
            </HStack>
            <Hidden from="sm">
              <Box position="relative" marginTop="2">
                <Input
                  paddingLeft="10"
                  paddingRight="10"
                  paddingTop="0.6rem"
                  paddingBottom="0.6rem"
                  w="full"
                  borderRadius="lg"
                  borderWidth="1"
                  borderColor={theme.colors.shared.black_20}
                  backgroundColor={theme.colors.shared.soft6Gray}
                  fontSize="13px"
                  placeholder="Search Lists, tags"
                />
                <Box
                  position="absolute"
                  left="3"
                  h="full"
                  flexDir="row"
                  alignItems="center"
                >
                  <Box w="20px">
                    <IconSearch />
                  </Box>
                </Box>
                <Box
                  position="absolute"
                  right="0.6rem"
                  h="full"
                  flexDir="row"
                  alignItems="center"
                >
                  <Pressable
                    backgroundColor="white"
                    borderWidth="1"
                    borderColor={theme.colors.shared.black_20}
                    borderRadius="md"
                    p="1"
                  >
                    <Box w="16px">
                      <IconPlus />
                    </Box>
                  </Pressable>
                </Box>
              </Box>
            </Hidden>
          </Box>
        </Box>
      </Hidden>
    </Modal>
  )
}
