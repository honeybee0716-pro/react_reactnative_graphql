import {
  Box,
  Center,
  Hidden,
  Text,
  HStack,
  VStack,
  Input,
  Pressable,
  useToast
} from 'native-base'
import { theme } from 'shared/styles/theme'
import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'
import DashboardLayout from 'shared/layouts/DashboardLayout.dev'
import IconMoreVertical from 'shared/components/icons/IconMoreVertical'
import IconMail from 'shared/components/icons/IconMail'
import IconHelpCircle from 'shared/components/icons/IconHelpCircle'
import IconAlignLeft from 'shared/components/icons/IconAlignLeft'
import IconPen from 'shared/components/icons/IconPen'
import IconPlus from 'shared/components/icons/IconPlus'
import IconLink from 'shared/components/icons/IconLink'
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
  const toast = useToast()
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
                    <IconMail color={theme.colors.shared.green} />
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
                  marginRight={{ base: '0', lg: '0' }}
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
                  onPress={() => {
                    setTimeout(() => {
                      toast.show({
                        description:
                          'Feature is not active yet. Please email support at support@clienteye.com'
                      })
                    }, 1000)
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
            </Box>
          </Box>
          <Hidden till="lg">
            <Box width={{ lg: '20px' }}></Box>
          </Hidden>
        </Box>
      </DashboardLayout>
    </>
  )
}
