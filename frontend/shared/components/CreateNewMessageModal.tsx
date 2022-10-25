import {
  StatusBar,
  Box,
  Center,
  Stack,
  Hidden,
  Text,
  Image,
  HStack,
  VStack,
  Input,
  TextArea,
  InputGroup,
  Button,
  Checkbox,
  Link,
  Icon,
  Pressable,
  Flex,
  Select,
  CheckIcon,
  Slider,
  Switch
} from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { FC, Fragment, RefObject, useContext, useEffect, useState } from 'react'
import IconX from 'shared/components/icons/IconX'
import { theme } from 'shared/styles/theme'
import IconMessages from 'shared/components/icons/IconMessages'
import IconUser from 'shared/components/icons/IconUser'
import IconPhone from 'shared/components/icons/IconPhone'
import IconBxBuildings from 'shared/components/icons/IconBxBuildings'
import IconImage from 'shared/components/icons/IconImage'
import IconBriefcase from 'shared/components/icons/IconBriefcase'
import IconAlignLeft from 'shared/components/icons/IconAlignLeft'
import IconInfo from 'shared/components/icons/IconInfo'
import IconTrashBin from 'shared/components/icons/IconTrashBin'
import IconDownload from 'shared/components/icons/IconDownload'
import IconLayers from 'shared/components/icons/IconLayers'
import IconMetaLogo from 'shared/components/icons/IconMetaLogo'
import IconMoreVertical from 'shared/components/icons/IconMoreVertical'
import IconPlus from 'shared/components/icons/IconPlus'

interface MyProps {
  openCreateNewMessageModal: boolean
  setOpenCreateNewMessageModal: (value: boolean) => void
  refCreateNewMessageModal: RefObject<HTMLDivElement>
  closeOnOutsideClick?: boolean
}

const CreateNewMessageModal: FC<MyProps> = ({
  openCreateNewMessageModal,
  setOpenCreateNewMessageModal,
  refCreateNewMessageModal,
  closeOnOutsideClick = true
}) => {
  // Handle hide pop up when click outside of modal gacha frame
  useEffect(() => {
    if (closeOnOutsideClick) {
      // Handle hide pop up when click outside of modal gacha frame
      if (openCreateNewMessageModal === true) {
        function handleClickOutside(event: any) {
          if (
            refCreateNewMessageModal.current &&
            !refCreateNewMessageModal.current.contains(event.target)
          ) {
            // console.log("You clicked outside of me!");

            // check if click original button
            // if (refButtonShowPopUpMenuProfile.current?.contains(event.target)) {
            //   // console.log('original button')
            // } else {
            // }
            setOpenCreateNewMessageModal(false)
          }
        }

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener('mousedown', handleClickOutside)
        }
      }
    }
  }, [closeOnOutsideClick, refCreateNewMessageModal, openCreateNewMessageModal])

  return (
    <>
      {/* Modal Open Gacha */}
      {openCreateNewMessageModal ? (
        <>
          <Box
            flexDirection="row"
            backgroundColor="#23262FCC"
            position="fixed"
            right="0"
            left="0"
            top="0"
            zIndex={50}
            justifyContent="center"
            alignItems="center"
            h="full"
          >
            <Box
              position="relative"
              paddingX={{ base: '3', sm: '8' }}
              w="full"
              h="auto"
              maxW="56rem"
            >
              <KeyboardAwareScrollView
                contentContainerStyle={{
                  width: '100%',
                  height: '100%'
                }}
                overScrollMode="auto"
              >
                {/* <!-- Modal content --> */}
                <Box
                  position="relative"
                  backgroundColor="white"
                  borderWidth="1"
                  borderColor={theme.colors.shared.softGray}
                  borderRadius="2xl"
                  shadow="3"
                  _dark={{
                    backgroundColor: 'gray.800'
                  }}
                  ref={refCreateNewMessageModal}
                >
                  {/* <!-- Modal header --> */}
                  <Box
                    backgroundColor="white"
                    paddingTop="5"
                    paddingBottom="3"
                    paddingLeft="6"
                    paddingRight="5"
                    borderTopRadius="lg"
                  >
                    <Box position="relative">
                      <HStack alignItems="center">
                        <Center
                          backgroundColor={theme.colors.shared.purple2_15}
                          paddingY="2"
                          paddingX="2"
                          borderRadius="lg"
                        >
                          <Box w="18px">
                            <IconMessages color={theme.colors.shared.purple2} />
                          </Box>
                        </Center>
                        <Text
                          flex="1"
                          marginLeft="3"
                          fontWeight="medium"
                          fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}
                        >
                          Create a new message
                        </Text>
                        <Pressable
                          backgroundColor={theme.colors.shared.aliceBlue}
                          borderRadius="lg"
                          borderWidth="1"
                          borderColor={theme.colors.shared.softGray}
                          p="2"
                          _hover={{
                            backgroundColor: 'gray.200'
                          }}
                          onPress={() => setOpenCreateNewMessageModal(false)}
                        >
                          <Box w="20px">
                            <IconX />
                          </Box>
                        </Pressable>
                      </HStack>
                    </Box>
                  </Box>
                  {/* <!-- Modal body --> */}
                  <Box
                    paddingBottom="6"
                    paddingLeft="6"
                    paddingRight="5"
                    paddingTop="2"
                    roundedBottom="lg"
                  >
                    <Box flexDirection="row">
                      <Box flex="1" paddingRight={{ base: '0', lg: '6' }}>
                        <VStack space="3">
                          <Box flexDirection={{ base: 'column', sm: 'row' }}>
                            <Box
                              w={{ base: 'full', sm: '1/2' }}
                              paddingRight={{ base: '0', sm: '2' }}
                              marginBottom={{ base: '3', sm: '0' }}
                            >
                              <Box w="full" position="relative">
                                <Input
                                  paddingLeft={{ base: '8', sm: '10' }}
                                  paddingTop="3"
                                  paddingRight="3"
                                  paddingBottom="3"
                                  w="full"
                                  borderRadius="lg"
                                  borderWidth="1"
                                  borderColor={theme.colors.shared.softGray}
                                  fontSize="xs"
                                  fontWeight="medium"
                                  backgroundColor={theme.colors.shared.black_3}
                                  placeholder="Firstname"
                                />
                                <Box
                                  position="absolute"
                                  left="3"
                                  h="full"
                                  flexDir="row"
                                  alignItems="center"
                                >
                                  <Box w="18px">
                                    <IconUser />
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                            <Box
                              w={{ base: 'full', sm: '1/2' }}
                              paddingLeft={{ base: '0', sm: '2' }}
                            >
                              <Box w="full" position="relative">
                                <Input
                                  paddingLeft={{ base: '8', sm: '10' }}
                                  paddingTop="3"
                                  paddingRight="3"
                                  paddingBottom="3"
                                  w="full"
                                  borderRadius="lg"
                                  borderWidth="1"
                                  borderColor={theme.colors.shared.softGray}
                                  fontSize="xs"
                                  fontWeight="medium"
                                  backgroundColor={theme.colors.shared.black_3}
                                  placeholder="Lastname"
                                />
                                <Box
                                  position="absolute"
                                  left="3"
                                  h="full"
                                  flexDir="row"
                                  alignItems="center"
                                >
                                  <Box w="18px">
                                    <IconUser />
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                          <Box w="full" position="relative">
                            <Input
                              paddingLeft={{ base: '8', sm: '10' }}
                              paddingTop="3"
                              paddingRight="3"
                              paddingBottom="3"
                              w="full"
                              borderRadius="lg"
                              borderWidth="1"
                              borderColor={theme.colors.shared.softGray}
                              fontSize="xs"
                              fontWeight="medium"
                              backgroundColor={theme.colors.shared.black_3}
                              placeholder="Phone number"
                            />
                            <Box
                              position="absolute"
                              left="3"
                              h="full"
                              flexDir="row"
                              alignItems="center"
                            >
                              <Box w="18px">
                                <IconPhone />
                              </Box>
                            </Box>
                          </Box>
                          <HStack>
                            <Hidden till="sm">
                              <Hidden from="lg">
                                <Box w="1/2" paddingRight="3">
                                  <Box
                                    p="4"
                                    borderWidth="1"
                                    borderColor={theme.colors.shared.softGray}
                                    borderRadius="lg"
                                    backgroundColor={
                                      theme.colors.shared.aliceBlue
                                    }
                                  >
                                    <HStack
                                      alignItems="center"
                                      justifyContent="space-between"
                                    >
                                      <Center
                                        w="40px"
                                        h="40px"
                                        borderWidth="1"
                                        borderColor={
                                          theme.colors.shared.softGray
                                        }
                                        borderRadius="md"
                                        marginRight="2"
                                        backgroundColor="white"
                                      >
                                        <Box w="22px">
                                          <IconMetaLogo />
                                        </Box>
                                      </Center>
                                      <Pressable
                                        borderWidth="1"
                                        borderColor={
                                          theme.colors.shared.soft4Gray
                                        }
                                        borderRadius="md"
                                        p={{ base: '6px', sm: '0.4rem' }}
                                        backgroundColor="white"
                                        _hover={{
                                          backgroundColor:
                                            theme.colors.shared.softerGray
                                        }}
                                        disabled={true}
                                      >
                                        <Box w="16px">
                                          <IconMoreVertical />
                                        </Box>
                                      </Pressable>
                                    </HStack>
                                    <Text
                                      fontSize="sm"
                                      fontWeight="semibold"
                                      marginTop="2"
                                    >
                                      Social Media Markeing
                                    </Text>
                                    <Text fontSize="2xs" fontWeight="medium">
                                      Meta - Facebook
                                    </Text>
                                    <Text
                                      fontSize="xs"
                                      fontWeight="medium"
                                      color="gray.600"
                                      marginTop="2"
                                    >
                                      Praesent vitae tincidunt libero. Maecenas
                                      lobortis odio tortor, eget placerat eros
                                      aliquet et.
                                    </Text>
                                    <HStack
                                      justifyContent="space-between"
                                      alignItems="center"
                                      marginTop="2"
                                    >
                                      <Text fontSize="2xs" fontWeight="medium">
                                        Last year
                                      </Text>
                                      <HStack space="1" justifyContent="end">
                                        <Box>
                                          <Pressable
                                            backgroundColor="white"
                                            borderWidth="1"
                                            borderColor={
                                              theme.colors.shared.soft4Gray
                                            }
                                            borderRadius="md"
                                            p={{ base: '6px', sm: '0.3rem' }}
                                            _hover={{
                                              backgroundColor:
                                                theme.colors.shared.softerGray
                                            }}
                                            disabled={true}
                                          >
                                            <Box w="16px">
                                              <IconTrashBin
                                                color={
                                                  theme.colors.shared.redText
                                                }
                                              />
                                            </Box>
                                          </Pressable>
                                        </Box>
                                        <Box>
                                          <Pressable
                                            backgroundColor="white"
                                            borderWidth="1"
                                            borderColor={
                                              theme.colors.shared.soft4Gray
                                            }
                                            borderRadius="md"
                                            p={{ base: '6px', sm: '0.3rem' }}
                                            _hover={{
                                              backgroundColor:
                                                theme.colors.shared.softerGray
                                            }}
                                            disabled={true}
                                          >
                                            <Box w="16px">
                                              <IconDownload />
                                            </Box>
                                          </Pressable>
                                        </Box>
                                        <Box>
                                          <Pressable
                                            backgroundColor="white"
                                            borderWidth="1"
                                            borderColor={
                                              theme.colors.shared.soft4Gray
                                            }
                                            borderRadius="md"
                                            p={{ base: '6px', sm: '0.3rem' }}
                                            _hover={{
                                              backgroundColor:
                                                theme.colors.shared.softerGray
                                            }}
                                            disabled={true}
                                          >
                                            <Box w="16px">
                                              <IconLayers />
                                            </Box>
                                          </Pressable>
                                        </Box>
                                      </HStack>
                                    </HStack>
                                  </Box>
                                </Box>
                              </Hidden>
                            </Hidden>
                            <VStack w={{ base: 'full', sm: '1/2', lg: 'full' }}>
                              <Hidden till="sm">
                                <Hidden from="lg">
                                  <>
                                    <Box
                                      backgroundColor={
                                        theme.colors.shared.softer6Gray
                                      }
                                      flexDirection="row"
                                      alignItems="center"
                                      borderWidth="1"
                                      borderColor={theme.colors.shared.softGray}
                                      borderRadius="lg"
                                      paddingY="3"
                                      paddingX="4"
                                      marginBottom="3"
                                    >
                                      <Text
                                        flex="1"
                                        fontSize="13px"
                                        fontWeight="medium"
                                      >
                                        Allow Duplication
                                      </Text>
                                      <Switch
                                        onThumbColor="white"
                                        onTrackColor={
                                          theme.colors.shared.brightBlue
                                        }
                                        offThumbColor="white"
                                        offTrackColor="gray.200"
                                        _hover={{
                                          onTrackColor:
                                            theme.colors.shared
                                              .blueGentianFlower,
                                          offTrackColor: 'gray.300'
                                        }}
                                      />
                                    </Box>
                                    <Box
                                      backgroundColor={
                                        theme.colors.shared.softer6Gray
                                      }
                                      flexDirection="row"
                                      alignItems="center"
                                      borderWidth="1"
                                      borderColor={theme.colors.shared.softGray}
                                      borderRadius="lg"
                                      paddingY="3"
                                      paddingX="4"
                                      marginBottom="3"
                                    >
                                      <Text
                                        flex="1"
                                        fontSize="13px"
                                        fontWeight="medium"
                                      >
                                        Show Company Logo
                                      </Text>
                                      <Switch
                                        onThumbColor="white"
                                        onTrackColor={
                                          theme.colors.shared.brightBlue
                                        }
                                        offThumbColor="white"
                                        offTrackColor="gray.200"
                                        _hover={{
                                          onTrackColor:
                                            theme.colors.shared
                                              .blueGentianFlower,
                                          offTrackColor: 'gray.300'
                                        }}
                                      />
                                    </Box>
                                  </>
                                </Hidden>
                              </Hidden>
                              <VStack
                                flexDirection={{ base: 'column', lg: 'row' }}
                                space="3"
                              >
                                <Box
                                  w={{ base: 'full', lg: '1/2' }}
                                  paddingRight={{ base: '0', lg: '2' }}
                                >
                                  <Box w="full" position="relative">
                                    <Input
                                      paddingLeft={{ base: '8', sm: '10' }}
                                      paddingTop="3"
                                      paddingRight="3"
                                      paddingBottom="3"
                                      w="full"
                                      borderRadius="lg"
                                      borderWidth="1"
                                      borderColor={theme.colors.shared.softGray}
                                      fontSize="xs"
                                      fontWeight="medium"
                                      backgroundColor={
                                        theme.colors.shared.black_3
                                      }
                                      placeholder="Company Name"
                                    />
                                    <Box
                                      position="absolute"
                                      left="3"
                                      h="full"
                                      flexDir="row"
                                      alignItems="center"
                                    >
                                      <Box w="18px">
                                        <IconBxBuildings />
                                      </Box>
                                    </Box>
                                  </Box>
                                </Box>
                                <Box
                                  w={{ base: 'full', lg: '1/2' }}
                                  paddingLeft={{ base: '0', lg: '2' }}
                                >
                                  <Box w="full" position="relative">
                                    <Input
                                      paddingLeft={{ base: '8', sm: '10' }}
                                      paddingTop="3"
                                      paddingRight={{ base: '8', sm: '10' }}
                                      paddingBottom="3"
                                      w="full"
                                      borderRadius="lg"
                                      borderWidth="1"
                                      borderColor={theme.colors.shared.softGray}
                                      fontSize="xs"
                                      fontWeight="medium"
                                      backgroundColor={
                                        theme.colors.shared.black_3
                                      }
                                      placeholder="Company Logo"
                                    />
                                    <Box
                                      position="absolute"
                                      left="3"
                                      h="full"
                                      flexDir="row"
                                      alignItems="center"
                                    >
                                      <Box w="18px">
                                        <IconImage />
                                      </Box>
                                    </Box>
                                    <Box
                                      position="absolute"
                                      right="2"
                                      h="full"
                                      flexDir="row"
                                      alignItems="center"
                                    >
                                      <Pressable
                                        borderWidth="1"
                                        borderColor={
                                          theme.colors.shared.soft4Gray
                                        }
                                        borderRadius="md"
                                        p={{ base: '6px', sm: '1' }}
                                        backgroundColor="white"
                                        _hover={{
                                          backgroundColor:
                                            theme.colors.shared.softerGray
                                        }}
                                      >
                                        <Box w="18px">
                                          <IconMoreVertical rotation={90} />
                                        </Box>
                                      </Pressable>
                                    </Box>
                                  </Box>
                                </Box>
                              </VStack>
                            </VStack>
                          </HStack>
                          <Box w="full" position="relative">
                            <Input
                              paddingLeft={{ base: '8', sm: '10' }}
                              paddingTop="3"
                              paddingRight="3"
                              paddingBottom="3"
                              w="full"
                              borderRadius="lg"
                              borderWidth="1"
                              borderColor={theme.colors.shared.softGray}
                              fontSize="xs"
                              fontWeight="medium"
                              backgroundColor={theme.colors.shared.black_3}
                              placeholder="Job Title"
                            />
                            <Box
                              position="absolute"
                              left="3"
                              h="full"
                              flexDir="row"
                              alignItems="center"
                            >
                              <Box w="18px">
                                <IconBriefcase />
                              </Box>
                            </Box>
                          </Box>
                          <Box w="full" position="relative">
                            <Input
                              paddingLeft={{ base: '8', sm: '10' }}
                              paddingTop="3"
                              paddingRight="3"
                              paddingBottom="3"
                              w="full"
                              borderRadius="lg"
                              borderWidth="1"
                              borderColor={theme.colors.shared.softGray}
                              fontSize="xs"
                              fontWeight="medium"
                              backgroundColor={theme.colors.shared.black_3}
                              placeholder="Subject"
                            />
                            <Box
                              position="absolute"
                              left="3"
                              h="full"
                              flexDir="row"
                              alignItems="center"
                            >
                              <Box w="18px">
                                <IconAlignLeft />
                              </Box>
                            </Box>
                          </Box>
                          <Box w="full" position="relative">
                            <TextArea
                              paddingLeft="3"
                              paddingTop="3"
                              paddingRight="3"
                              paddingBottom="3"
                              w="full"
                              borderRadius="lg"
                              borderWidth="1"
                              borderColor={theme.colors.shared.softGray}
                              fontSize="xs"
                              fontWeight="medium"
                              backgroundColor={theme.colors.shared.black_3}
                              placeholder="Enter your mesage here"
                            />
                          </Box>
                          <Box w="full" position="relative">
                            <Input
                              paddingLeft={{ base: '8', sm: '10' }}
                              paddingTop="3"
                              paddingRight="3"
                              paddingBottom="3"
                              w="full"
                              borderRadius="lg"
                              borderWidth="1"
                              borderColor={theme.colors.shared.softGray}
                              fontSize="xs"
                              fontWeight="medium"
                              backgroundColor={theme.colors.shared.black_3}
                              placeholder="How did you hear about us ?"
                            />
                            <Box
                              position="absolute"
                              left="3"
                              h="full"
                              flexDir="row"
                              alignItems="center"
                            >
                              <Box w="18px">
                                <IconInfo />
                              </Box>
                            </Box>
                          </Box>
                        </VStack>
                      </Box>
                      <Hidden till="lg">
                        <Box w="286px">
                          <Text
                            fontSize="md"
                            fontWeight="medium"
                            marginBottom="4"
                            marginTop="2"
                          >
                            Preview
                          </Text>
                          <VStack space="3">
                            <Box
                              p="4"
                              borderWidth="1"
                              borderColor={theme.colors.shared.softGray}
                              borderRadius="lg"
                              backgroundColor={theme.colors.shared.aliceBlue}
                            >
                              <HStack
                                alignItems="center"
                                justifyContent="space-between"
                              >
                                <Center
                                  w="40px"
                                  h="40px"
                                  borderWidth="1"
                                  borderColor={theme.colors.shared.softGray}
                                  borderRadius="md"
                                  marginRight="2"
                                  backgroundColor="white"
                                >
                                  <Box w="22px">
                                    <IconMetaLogo />
                                  </Box>
                                </Center>
                                <Pressable
                                  borderWidth="1"
                                  borderColor={theme.colors.shared.soft4Gray}
                                  borderRadius="md"
                                  p={{ base: '6px', sm: '0.4rem' }}
                                  backgroundColor="white"
                                  _hover={{
                                    backgroundColor:
                                      theme.colors.shared.softerGray
                                  }}
                                  disabled={true}
                                >
                                  <Box w="16px">
                                    <IconMoreVertical />
                                  </Box>
                                </Pressable>
                              </HStack>
                              <Text
                                fontSize="sm"
                                fontWeight="semibold"
                                marginTop="2"
                              >
                                Social Media Markeing
                              </Text>
                              <Text fontSize="2xs" fontWeight="medium">
                                Meta - Facebook
                              </Text>
                              <Text
                                fontSize="xs"
                                fontWeight="medium"
                                color="gray.600"
                                marginTop="2"
                              >
                                Praesent vitae tincidunt libero. Maecenas
                                lobortis odio tortor, eget placerat eros aliquet
                                et.
                              </Text>
                              <HStack
                                justifyContent="space-between"
                                alignItems="center"
                                marginTop="2"
                              >
                                <Text fontSize="2xs" fontWeight="medium">
                                  Last year
                                </Text>
                                <HStack space="1" justifyContent="end">
                                  <Box>
                                    <Pressable
                                      backgroundColor="white"
                                      borderWidth="1"
                                      borderColor={
                                        theme.colors.shared.soft4Gray
                                      }
                                      borderRadius="md"
                                      p={{ base: '6px', sm: '0.3rem' }}
                                      _hover={{
                                        backgroundColor:
                                          theme.colors.shared.softerGray
                                      }}
                                      disabled={true}
                                    >
                                      <Box w="16px">
                                        <IconTrashBin
                                          color={theme.colors.shared.redText}
                                        />
                                      </Box>
                                    </Pressable>
                                  </Box>
                                  <Box>
                                    <Pressable
                                      backgroundColor="white"
                                      borderWidth="1"
                                      borderColor={
                                        theme.colors.shared.soft4Gray
                                      }
                                      borderRadius="md"
                                      p={{ base: '6px', sm: '0.3rem' }}
                                      _hover={{
                                        backgroundColor:
                                          theme.colors.shared.softerGray
                                      }}
                                      disabled={true}
                                    >
                                      <Box w="16px">
                                        <IconDownload />
                                      </Box>
                                    </Pressable>
                                  </Box>
                                  <Box>
                                    <Pressable
                                      backgroundColor="white"
                                      borderWidth="1"
                                      borderColor={
                                        theme.colors.shared.soft4Gray
                                      }
                                      borderRadius="md"
                                      p={{ base: '6px', sm: '0.3rem' }}
                                      _hover={{
                                        backgroundColor:
                                          theme.colors.shared.softerGray
                                      }}
                                      disabled={true}
                                    >
                                      <Box w="16px">
                                        <IconLayers />
                                      </Box>
                                    </Pressable>
                                  </Box>
                                </HStack>
                              </HStack>
                            </Box>
                            <Box
                              backgroundColor={theme.colors.shared.softer6Gray}
                              flexDirection="row"
                              alignItems="center"
                              borderWidth="1"
                              borderColor={theme.colors.shared.softGray}
                              borderRadius="lg"
                              paddingY="3"
                              paddingX="4"
                            >
                              <Text
                                flex="1"
                                fontSize="13px"
                                fontWeight="medium"
                              >
                                Allow Duplication
                              </Text>
                              <Switch
                                onThumbColor="white"
                                onTrackColor={theme.colors.shared.brightBlue}
                                offThumbColor="white"
                                offTrackColor="gray.200"
                                _hover={{
                                  onTrackColor:
                                    theme.colors.shared.blueGentianFlower,
                                  offTrackColor: 'gray.300'
                                }}
                              />
                            </Box>
                            <Box
                              backgroundColor={theme.colors.shared.softer6Gray}
                              flexDirection="row"
                              alignItems="center"
                              borderWidth="1"
                              borderColor={theme.colors.shared.softGray}
                              borderRadius="lg"
                              paddingY="3"
                              paddingX="4"
                            >
                              <Text
                                flex="1"
                                fontSize="13px"
                                fontWeight="medium"
                              >
                                Show Company Logo
                              </Text>
                              <Switch
                                onThumbColor="white"
                                onTrackColor={theme.colors.shared.brightBlue}
                                offThumbColor="white"
                                offTrackColor="gray.200"
                                _hover={{
                                  onTrackColor:
                                    theme.colors.shared.blueGentianFlower,
                                  offTrackColor: 'gray.300'
                                }}
                              />
                            </Box>
                          </VStack>
                        </Box>
                      </Hidden>
                    </Box>
                    <HStack marginTop="3">
                      <Pressable
                        backgroundColor={theme.colors.shared.blueGentianFlower}
                        borderRadius="md"
                        paddingX="3"
                        paddingY="2"
                        _hover={{
                          backgroundColor: theme.colors.shared.brightBlue
                        }}
                        onPress={() => setOpenCreateNewMessageModal(true)}
                      >
                        <HStack alignItems="center" space="3" h="full">
                          <Box w="18px">
                            <IconPlus color="white" />
                          </Box>
                          <Text color="white" fontSize="xs" fontWeight="medium">
                            Add new message
                          </Text>
                        </HStack>
                      </Pressable>
                      <Pressable
                        backgroundColor={theme.colors.shared.aliceBlue}
                        borderWidth="1"
                        borderColor={theme.colors.shared.softGray}
                        borderRadius="md"
                        paddingX="6"
                        paddingY="2"
                        marginLeft="4"
                        _hover={{
                          backgroundColor: theme.colors.shared.softerGray
                        }}
                      >
                        <Text
                          color={theme.colors.shared.soft2Gray}
                          fontSize="xs"
                          fontWeight="medium"
                          textAlign="center"
                        >
                          Cancel
                        </Text>
                      </Pressable>
                    </HStack>
                  </Box>
                  {/* <!-- Modal footer --> */}
                  {/* <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => setOpenModalDetailAchievementType(false)}>
                I accept
              </button>
              <button
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
                onClick={() => setOpenModalDetailAchievementType(false)}>
                Decline
              </button>
            </div> */}
                </Box>
              </KeyboardAwareScrollView>
            </Box>
          </Box>
        </>
      ) : null}
    </>
  )
}

export default CreateNewMessageModal
