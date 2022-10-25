import {
  Box,
  Center,
  Hidden,
  Text,
  HStack,
  VStack,
  Input,
  Pressable
} from 'native-base'
import React from 'react'
import { theme } from 'shared/styles/theme'
import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'
import DashboardLayout from 'shared/layouts/DashboardLayout'
import IconCornerUpRight from 'shared/components/icons/IconCornerUpRight'
import IconMoreVertical from 'shared/components/icons/IconMoreVertical'
import IconChevronDown from 'shared/components/icons/IconChevronDown'
import IconCreditCard from 'shared/components/icons/IconCreditCard'
import IconMail from 'shared/components/icons/IconMail'
import IconHelpCircle from 'shared/components/icons/IconHelpCircle'
import IconUser from 'shared/components/icons/IconUser'
import IconAlignLeft from 'shared/components/icons/IconAlignLeft'
import IconFileText from 'shared/components/icons/IconFileText'
import IconImage from 'shared/components/icons/IconImage'
import IconX from 'shared/components/icons/IconX'
import IconPen from 'shared/components/icons/IconPen'
import IconPlus from 'shared/components/icons/IconPlus'
import IconBook from 'shared/components/icons/IconBook'
import IconLists from 'shared/components/icons/IconLists'
import IconFlag from 'shared/components/icons/IconFlag'
import IconFile from 'shared/components/icons/IconFile'
import IconFacebookCircleWhite from 'shared/components/icons/IconFacebookCircleWhite'
import IconLink from 'shared/components/icons/IconLink'
import IconTwitterWhite from 'shared/components/icons/IconTwitterWhite'
import IconInstagramWhite from 'shared/components/icons/IconInstagramWhite'
import IconBold from 'shared/components/icons/IconBold'
import IconItalic from 'shared/components/icons/IconItalic'
import IconUnderline from 'shared/components/icons/IconUnderline'
import IconTextMore from 'shared/components/icons/IconTextMore'
import IconAlignCenter from 'shared/components/icons/IconAlignCenter'
import IconOrderedList from 'shared/components/icons/IconOrderedList'
import IconParagraphMore from 'shared/components/icons/IconParagraphMore'
import IconSmile from 'shared/components/icons/IconSmile'
import IconInsertMore from 'shared/components/icons/IconInsertMore'
import IconUndo from 'shared/components/icons/IconUndo'
import IconRedo from 'shared/components/icons/IconRedo'
import IconPaperClip from 'shared/components/icons/IconPaperClip'

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

export default function Credits() {
  // const [editor] = useState(() => withReact(createEditor()))

  return (
    <>
      <DashboardLayout>
        <Box flexDirection="row">
          {/* Get in touch */}
          <Box flex="1">
            <Box
              marginTop={{ base: '3', sm: '5' }}
              marginLeft={{ base: '3', sm: '5' }}
              marginRight={{ base: '3', sm: '5', lg: '0' }}
              paddingX={{ base: '4', sm: '5' }}
              paddingTop={{ base: '4', sm: '5' }}
              paddingBottom={{ base: '4', sm: '4' }}
              borderTopRadius={{ base: 'xl', sm: '2xl' }}
              borderBottomRadius={{ base: 'xl', sm: '2xl', lg: 'none' }}
              backgroundColor="white"
              borderWidth="1"
              borderBottomWidth={{ base: '1', lg: '0' }}
              borderColor={theme.colors.shared.softer3Gray}
            >
              <HStack alignItems="center" marginBottom={{ base: '5', sm: '6' }}>
                <Center
                  backgroundColor={theme.colors.shared.green_10}
                  paddingY="2"
                  paddingX="2"
                  borderRadius="lg"
                >
                  <Box w="18px">
                    <IconMail />
                  </Box>
                </Center>
                <Text
                  flex="1"
                  marginLeft="3"
                  fontWeight="medium"
                  fontSize={{ base: 'lg', sm: 'xl' }}
                >
                  Get in touch
                </Text>
                <Hidden from="sm">
                  <Pressable
                    backgroundColor="white"
                    borderWidth="1"
                    borderColor={theme.colors.shared.soft4Gray}
                    borderRadius="md"
                    p={{ base: '5px', sm: '0.3rem' }}
                    _hover={{
                      backgroundColor: theme.colors.shared.softerGray
                    }}
                  >
                    <Box w="16px">
                      <IconMoreVertical />
                    </Box>
                  </Pressable>
                </Hidden>
              </HStack>
              <Box flexDirection={{ base: 'column', lg: 'row' }}>
                <VStack
                  flex="1"
                  marginRight={{ base: '0', lg: '6' }}
                  marginBottom={{ base: '4', lg: '0' }}
                  space="4"
                >
                  <HStack>
                    <Box position="relative" w="full">
                      <Input
                        paddingLeft={{ base: '10', sm: '12' }}
                        paddingTop="3"
                        paddingRight="3"
                        paddingBottom="3"
                        w="full"
                        borderRadius="lg"
                        borderWidth="1"
                        borderColor={theme.colors.shared.black_18}
                        fontSize="xs"
                        fontWeight="medium"
                        backgroundColor={theme.colors.shared.black_3}
                        placeholder="Full Name"
                      />
                      <Box
                        position="absolute"
                        left="4"
                        h="full"
                        flexDir="row"
                        alignItems="center"
                      >
                        <Box w={{ base: '5', sm: '6' }}>
                          <IconUser />
                        </Box>
                      </Box>
                    </Box>
                  </HStack>
                  <HStack>
                    <Box position="relative" w="full">
                      <Input
                        paddingLeft={{ base: '10', sm: '12' }}
                        paddingTop="3"
                        paddingRight="3"
                        paddingBottom="3"
                        w="full"
                        borderRadius="lg"
                        borderWidth="1"
                        borderColor={theme.colors.shared.black_18}
                        fontSize="xs"
                        fontWeight="medium"
                        backgroundColor={theme.colors.shared.black_3}
                        placeholder="Subject"
                      />
                      <Box
                        position="absolute"
                        left="4"
                        h="full"
                        flexDir="row"
                        alignItems="center"
                      >
                        <Box w={{ base: '5', sm: '6' }}>
                          <IconAlignLeft />
                        </Box>
                      </Box>
                    </Box>
                  </HStack>
                  <Box
                    borderRadius="lg"
                    borderWidth="1"
                    borderColor={theme.colors.shared.black_18}
                    backgroundColor={theme.colors.shared.black_3}
                  >
                    <HStack
                      paddingX="3"
                      paddingY="3"
                      justifyContent="space-between"
                      borderBottomWidth="1"
                      borderBottomColor={theme.colors.shared.black_18}
                    >
                      <HStack flex="1" alignItems="center" flexWrap="wrap">
                        <Pressable w="17px" marginRight="4">
                          <IconBold />
                        </Pressable>
                        <Pressable w="16px" marginRight="4">
                          <IconItalic />
                        </Pressable>
                        <Pressable w="17px" marginRight="4">
                          <IconUnderline />
                        </Pressable>
                        <Pressable w="17px" marginRight="4">
                          <IconTextMore />
                        </Pressable>
                        <Hidden till="sm">
                          <>
                            <Pressable w="17px" marginRight="4">
                              <IconAlignLeft />
                            </Pressable>
                            <Pressable w="17px" marginRight="4">
                              <IconAlignCenter />
                            </Pressable>
                            <Pressable w="17px" marginRight="4">
                              <IconOrderedList />
                            </Pressable>
                            <Pressable w="17px" marginRight="4">
                              <IconParagraphMore />
                            </Pressable>
                            <Pressable w="17px" marginRight="4">
                              <IconLink />
                            </Pressable>
                            <Pressable w="17px" marginRight="4">
                              <IconSmile />
                            </Pressable>
                            <Pressable w="17px" marginRight="4">
                              <IconUnderline />
                            </Pressable>
                            <Pressable w="17px" marginRight="4">
                              <IconInsertMore />
                            </Pressable>
                          </>
                        </Hidden>
                      </HStack>
                      <HStack space="4" alignItems="center">
                        <Pressable w="17px">
                          <IconUndo />
                        </Pressable>
                        <Pressable w="17px">
                          <IconRedo />
                        </Pressable>
                        <Pressable
                          backgroundColor="white"
                          borderWidth="1"
                          borderColor={theme.colors.shared.soft4Gray}
                          borderRadius="md"
                          p={{ base: '5px', sm: '0.3rem' }}
                          _hover={{
                            backgroundColor: theme.colors.shared.softerGray
                          }}
                        >
                          <Box w="16px">
                            <IconMoreVertical />
                          </Box>
                        </Pressable>
                      </HStack>
                    </HStack>
                    <Box paddingX="4" paddingY="3" minH="176px">
                      <Text fontSize="xs" fontWeight="medium">
                        Your Message
                      </Text>
                    </Box>
                  </Box>
                </VStack>
                <Box
                  borderRadius="2xl"
                  backgroundColor={{
                    base: 'transparent',
                    lg: theme.colors.shared.lightAliceBlue
                  }}
                  borderWidth={{ base: '0', lg: '1' }}
                  borderColor={theme.colors.shared.black_18}
                  w={{ base: 'full', lg: '279px' }}
                  padding={{ base: '0', lg: '4' }}
                >
                  <Hidden till="lg">
                    <Center
                      h="155px"
                      borderWidth="1.3px"
                      borderColor="gray.700"
                      borderStyle="dashed"
                      borderRadius="2xl"
                      paddingY="1"
                    >
                      <Box w="40px">
                        <IconFileText />
                      </Box>
                      <Center>
                        <Text fontSize="11px" fontWeight="semibold">
                          {`Drag & Drop your files here`}
                        </Text>
                        <Text fontSize="9px" fontWeight="medium">
                          File Types : pdf, jpg, png, docx
                        </Text>
                      </Center>
                    </Center>
                  </Hidden>
                  <Hidden from="sm">
                    <HStack
                      alignItems="center"
                      marginBottom={{ base: '3', sm: '6' }}
                    >
                      <Text flex="1" fontWeight="medium" fontSize="13px">
                        Attached Files
                      </Text>
                      <Hidden from="sm">
                        <Pressable
                          backgroundColor="white"
                          borderWidth="1"
                          borderColor={theme.colors.shared.soft4Gray}
                          borderRadius="md"
                          p={{ base: '5px', sm: '0.3rem' }}
                          _hover={{
                            backgroundColor: theme.colors.shared.softerGray
                          }}
                        >
                          <Box w="16px">
                            <IconPlus />
                          </Box>
                        </Pressable>
                      </Hidden>
                    </HStack>
                  </Hidden>
                  <Box
                    marginTop={{ base: '0', lg: '3' }}
                    flexDirection="row"
                    alignItems="start"
                  >
                    <Box
                      flex="1"
                      flexDirection={{
                        base: 'column',
                        sm: 'row',
                        lg: 'column'
                      }}
                      flexWrap="wrap"
                    >
                      {[...Array(3)].map((_, i) => (
                        <HStack
                          maxW={{ base: 'full', sm: '45%', lg: 'full' }}
                          key={i}
                          alignItems="center"
                          backgroundColor={theme.colors.shared.aliceBlue}
                          borderWidth="1"
                          borderColor={theme.colors.shared.softGray}
                          borderRadius={{ base: 'xl', lg: 'md' }}
                          padding="2"
                          marginTop={{ base: '0', lg: '0.4rem' }}
                          marginRight={{ base: '0', sm: '0.4rem', lg: '0' }}
                          marginBottom={{ base: '0.4rem', lg: '0' }}
                        >
                          <Box w="18px">
                            <IconImage />
                          </Box>
                          <Text
                            flex="1"
                            marginLeft="3"
                            fontSize="11px"
                            fontWeight="medium"
                          >
                            Screenshot 01-03-2022.jpg
                          </Text>
                          <Box w="15px">
                            <IconX />
                          </Box>
                        </HStack>
                      ))}
                    </Box>
                    <Hidden till="sm">
                      <Hidden from="lg">
                        <HStack
                          alignItems="center"
                          backgroundColor={theme.colors.shared.aliceBlue}
                          borderWidth="1"
                          borderColor={theme.colors.shared.softGray}
                          borderRadius={{ base: 'xl', lg: 'md' }}
                          paddingY="2"
                          paddingX="3"
                          marginLeft="3"
                        >
                          <Box w="18px">
                            <IconPaperClip />
                          </Box>
                          <Text
                            marginLeft="3"
                            fontSize="11px"
                            fontWeight="medium"
                          >
                            Attach
                          </Text>
                        </HStack>
                      </Hidden>
                    </Hidden>
                  </Box>
                </Box>
              </Box>
              <HStack marginTop={{ base: '2', lg: '4' }} space="3">
                <Pressable
                  backgroundColor={theme.colors.shared.brightBlue}
                  borderRadius="lg"
                  w="40"
                  paddingY="2"
                  _hover={{
                    backgroundColor: theme.colors.shared.blueGentianFlower
                  }}
                >
                  <Text
                    color="white"
                    fontSize="sm"
                    fontWeight="medium"
                    textAlign="center"
                  >
                    Send Message
                  </Text>
                </Pressable>
                <Pressable
                  backgroundColor={{
                    base: 'white',
                    sm: theme.colors.shared.aliceBlue
                  }}
                  borderWidth="1"
                  borderColor={{
                    base: 'gray.300',
                    sm: theme.colors.shared.softGray
                  }}
                  borderRadius="lg"
                  w="40"
                  paddingY="2"
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
                    Clear All
                  </Text>
                </Pressable>
              </HStack>
            </Box>
            <Box
              marginBottom="5"
              marginLeft="5"
              marginTop={{ base: '5', lg: '0' }}
              marginRight={{ base: '5', lg: '0' }}
              paddingX={{ base: '4', sm: '5' }}
              paddingTop={{ base: '4', sm: '5' }}
              paddingBottom="4"
              borderBottomRadius="2xl"
              borderTopRadius={{ base: '2xl', lg: 'none' }}
              backgroundColor="white"
              borderWidth="1"
              borderTopWidth={{ base: '1', lg: '0' }}
              borderColor={theme.colors.shared.softer3Gray}
            >
              <HStack alignItems="center" marginBottom="4">
                <Center
                  backgroundColor={theme.colors.shared.brightBlue_15}
                  paddingY="2"
                  paddingX="2"
                  borderRadius="lg"
                >
                  <Box w="18px">
                    <IconHelpCircle color={theme.colors.shared.brightBlue} />
                  </Box>
                </Center>
                <Text
                  marginLeft="3"
                  fontWeight="medium"
                  fontSize={{ base: 'lg', sm: 'xl' }}
                >
                  Frequently Asked Questions
                </Text>
              </HStack>
              <VStack marginTop="4" space="2">
                {[...Array(3)].map((_, i) => (
                  <HStack
                    key={i}
                    alignItems="center"
                    backgroundColor={theme.colors.shared.softer5Gray}
                    borderWidth="1"
                    borderColor={theme.colors.shared.softGray}
                    borderRadius="xl"
                    paddingY="3"
                    paddingLeft="3"
                    paddingRight="4"
                  >
                    <Center
                      p="2"
                      backgroundColor={theme.colors.shared.black_9}
                      borderRadius="md"
                    >
                      <Center w="18px">
                        <IconPen />
                      </Center>
                    </Center>
                    <Text
                      flex="1"
                      marginLeft="3"
                      fontSize="sm"
                      fontWeight="medium"
                    >
                      How to create and schedule campaign ?
                    </Text>
                    <Box w="20px">
                      <IconPlus />
                    </Box>
                  </HStack>
                ))}
              </VStack>
              <HStack
                alignItems="center"
                justifyContent="space-between"
                marginTop={{ base: '4', sm: '5' }}
              >
                <Box>
                  <Text
                    fontWeight="medium"
                    fontSize={{ base: '13px', sm: 'sm' }}
                  >
                    Page 1 of 3
                  </Text>
                </Box>
                <HStack>
                  <Pressable
                    backgroundColor="white"
                    borderWidth="1"
                    borderColor={theme.colors.shared.softer3Gray}
                    borderLeftRadius="lg"
                    p="2"
                    _hover={{
                      backgroundColor: 'theme.colors.shared.softerGray'
                    }}
                  >
                    <Box w="16px">
                      <IconChevronDown rotation={270} />
                    </Box>
                  </Pressable>

                  <Pressable
                    backgroundColor="white"
                    borderWidth="1"
                    borderColor={theme.colors.shared.softer3Gray}
                    borderRightRadius="lg"
                    p="2"
                    _hover={{
                      backgroundColor: 'theme.colors.shared.softerGray'
                    }}
                  >
                    <Box w="16px">
                      <IconChevronDown rotation={90} />
                    </Box>
                  </Pressable>
                </HStack>
              </HStack>
            </Box>
          </Box>
          <Hidden till="lg">
            <Box width={{ lg: '430px' }}>
              <Box
                marginLeft="5"
                marginRight="5"
                marginTop="5"
                marginBottom="5"
                paddingX="6"
                paddingY="6"
                borderRadius="2xl"
                backgroundColor="white"
                borderWidth="1"
                borderColor={theme.colors.shared.softer3Gray}
                minHeight="518px"
              >
                <HStack alignItems="center" marginBottom="6">
                  <Center
                    backgroundColor={theme.colors.shared.darkPink_15}
                    paddingY="2"
                    paddingX="2"
                    borderRadius="lg"
                  >
                    <Box w="18px">
                      <IconBook />
                    </Box>
                  </Center>
                  <Text
                    marginLeft="3"
                    fontWeight="medium"
                    fontSize={{ base: 'lg', sm: 'xl' }}
                  >
                    Documentation
                  </Text>
                </HStack>
                <VStack marginTop="4" space="4">
                  <HStack
                    alignItems="center"
                    backgroundColor={theme.colors.shared.softer5Gray}
                    borderWidth="1"
                    borderColor={theme.colors.shared.softGray}
                    borderRadius="xl"
                    paddingX="3"
                    paddingY="2"
                  >
                    <Box w="20px">
                      <IconUser />
                    </Box>
                    <Text
                      flex="1"
                      marginLeft="3"
                      fontSize="13px"
                      fontWeight="medium"
                    >
                      My Account
                    </Text>
                    <Pressable
                      backgroundColor="white"
                      borderWidth="1"
                      borderColor={theme.colors.shared.softer3Gray}
                      borderRadius="lg"
                      paddingY="0.3rem"
                      paddingX="0.35rem"
                      _hover={{
                        backgroundColor: 'theme.colors.shared.softerGray'
                      }}
                    >
                      <Box w="16px">
                        <IconChevronDown rotation={90} />
                      </Box>
                    </Pressable>
                  </HStack>
                  <HStack
                    alignItems="center"
                    backgroundColor={theme.colors.shared.softer5Gray}
                    borderWidth="1"
                    borderColor={theme.colors.shared.softGray}
                    borderRadius="xl"
                    paddingX="3"
                    paddingY="2"
                  >
                    <Box w="20px">
                      <IconCreditCard />
                    </Box>
                    <Text
                      flex="1"
                      marginLeft="3"
                      fontSize="13px"
                      fontWeight="medium"
                    >
                      Managing Billing
                    </Text>
                    <Pressable
                      backgroundColor="white"
                      borderWidth="1"
                      borderColor={theme.colors.shared.softer3Gray}
                      borderRadius="lg"
                      paddingY="0.3rem"
                      paddingX="0.35rem"
                      _hover={{
                        backgroundColor: 'theme.colors.shared.softerGray'
                      }}
                    >
                      <Box w="16px">
                        <IconChevronDown rotation={90} />
                      </Box>
                    </Pressable>
                  </HStack>
                  <HStack
                    alignItems="center"
                    backgroundColor={theme.colors.shared.softer5Gray}
                    borderWidth="1"
                    borderColor={theme.colors.shared.softGray}
                    borderRadius="xl"
                    paddingX="3"
                    paddingY="2"
                  >
                    <Box w="20px">
                      <IconLists />
                    </Box>
                    <Text
                      flex="1"
                      marginLeft="3"
                      fontSize="13px"
                      fontWeight="medium"
                    >
                      Creating Lists
                    </Text>
                    <Pressable
                      backgroundColor="white"
                      borderWidth="1"
                      borderColor={theme.colors.shared.softer3Gray}
                      borderRadius="lg"
                      paddingY="0.3rem"
                      paddingX="0.35rem"
                      _hover={{
                        backgroundColor: 'theme.colors.shared.softerGray'
                      }}
                    >
                      <Box w="16px">
                        <IconChevronDown rotation={90} />
                      </Box>
                    </Pressable>
                  </HStack>
                  <HStack
                    alignItems="center"
                    backgroundColor={theme.colors.shared.softer5Gray}
                    borderWidth="1"
                    borderColor={theme.colors.shared.softGray}
                    borderRadius="xl"
                    paddingX="3"
                    paddingY="2"
                  >
                    <Box w="20px">
                      <IconFlag />
                    </Box>
                    <Text
                      flex="1"
                      marginLeft="3"
                      fontSize="13px"
                      fontWeight="medium"
                    >
                      Scheduling Campaigns
                    </Text>
                    <Pressable
                      backgroundColor="white"
                      borderWidth="1"
                      borderColor={theme.colors.shared.softer3Gray}
                      borderRadius="lg"
                      paddingY="0.3rem"
                      paddingX="0.35rem"
                      _hover={{
                        backgroundColor: 'theme.colors.shared.softerGray'
                      }}
                    >
                      <Box w="16px">
                        <IconChevronDown rotation={90} />
                      </Box>
                    </Pressable>
                  </HStack>
                  <HStack
                    alignItems="center"
                    backgroundColor={theme.colors.shared.softer5Gray}
                    borderWidth="1"
                    borderColor={theme.colors.shared.softGray}
                    borderRadius="xl"
                    paddingX="3"
                    paddingY="2"
                  >
                    <Box w="20px">
                      <IconFile />
                    </Box>
                    <Text
                      flex="1"
                      marginLeft="3"
                      fontSize="13px"
                      fontWeight="medium"
                    >
                      Terms and Conditions
                    </Text>
                    <Pressable
                      backgroundColor="white"
                      borderWidth="1"
                      borderColor={theme.colors.shared.softer3Gray}
                      borderRadius="lg"
                      paddingY="0.3rem"
                      paddingX="0.35rem"
                      _hover={{
                        backgroundColor: 'theme.colors.shared.softerGray'
                      }}
                    >
                      <Box w="16px">
                        <IconChevronDown rotation={90} />
                      </Box>
                    </Pressable>
                  </HStack>
                </VStack>
              </Box>
              <Box
                marginLeft="5"
                marginRight="5"
                marginBottom="5"
                paddingX="6"
                paddingY="6"
                borderRadius="2xl"
                backgroundColor="white"
                borderWidth="1"
                borderColor={theme.colors.shared.softer3Gray}
              >
                <HStack alignItems="center" marginBottom="6">
                  <Center
                    backgroundColor={theme.colors.shared.redOrange_20}
                    paddingY="2"
                    paddingX="2"
                    borderRadius="lg"
                  >
                    <Box w="18px">
                      <IconCornerUpRight
                        color={theme.colors.shared.redOrange}
                      />
                    </Box>
                  </Center>
                  <Text
                    marginLeft="3"
                    fontWeight="medium"
                    fontSize={{ base: 'lg', sm: 'xl' }}
                  >
                    Follow us on
                  </Text>
                </HStack>
                <VStack marginTop="4" space="4">
                  <HStack
                    alignItems="center"
                    backgroundColor={theme.colors.shared.softer5Gray}
                    borderWidth="1"
                    borderColor={theme.colors.shared.softGray}
                    borderRadius="xl"
                    paddingX="3"
                    paddingY="2"
                  >
                    <Center
                      w="32px"
                      h="32px"
                      borderRadius="xl"
                      backgroundColor="#1877F2"
                    >
                      <Box w="16px">
                        <IconFacebookCircleWhite />
                      </Box>
                    </Center>
                    <Text
                      flex="1"
                      marginLeft="3"
                      fontSize="13px"
                      fontWeight="medium"
                    >
                      Facebook
                    </Text>
                    <Box w="18px">
                      <IconLink />
                    </Box>
                  </HStack>
                  <HStack
                    alignItems="center"
                    backgroundColor={theme.colors.shared.softer5Gray}
                    borderWidth="1"
                    borderColor={theme.colors.shared.softGray}
                    borderRadius="xl"
                    paddingX="3"
                    paddingY="2"
                  >
                    <Center
                      w="32px"
                      h="32px"
                      borderRadius="xl"
                      backgroundColor="#1DA1F2"
                    >
                      <Box w="16px">
                        <IconTwitterWhite />
                      </Box>
                    </Center>
                    <Text
                      flex="1"
                      marginLeft="3"
                      fontSize="13px"
                      fontWeight="medium"
                    >
                      Twitter
                    </Text>
                    <Box w="18px">
                      <IconLink />
                    </Box>
                  </HStack>
                  <HStack
                    alignItems="center"
                    backgroundColor={theme.colors.shared.softer5Gray}
                    borderWidth="1"
                    borderColor={theme.colors.shared.softGray}
                    borderRadius="xl"
                    paddingX="3"
                    paddingY="2"
                  >
                    <Center
                      w="32px"
                      h="32px"
                      borderRadius="xl"
                      backgroundColor="#F00073"
                    >
                      <Box w="16px">
                        <IconInstagramWhite />
                      </Box>
                    </Center>
                    <Text
                      flex="1"
                      marginLeft="3"
                      fontSize="13px"
                      fontWeight="medium"
                    >
                      Instagram
                    </Text>
                    <Box w="18px">
                      <IconLink />
                    </Box>
                  </HStack>
                </VStack>
              </Box>
            </Box>
          </Hidden>
        </Box>
      </DashboardLayout>
    </>
  )
}
