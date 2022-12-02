import {
  Box,
  Center,
  Hidden,
  Text,
  HStack,
  VStack,
  Input,
  Pressable,
  Icon
} from 'native-base'
import React from 'react'
import { theme } from 'shared/styles/theme'
import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'
import DashboardLayout from 'shared/layouts/DashboardLayout'
import { MaterialIcons } from '@expo/vector-icons'
import IconMail from 'shared/components/icons/IconMail'
import IconPhone from 'shared/components/icons/IconPhone'
import IconPhoneCall from 'shared/components/icons/IconPhoneCall'
import IconHelpCircle from 'shared/components/icons/IconHelpCircle'

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
            <Pressable
              marginTop={{ base: '3', sm: '5' }}
              marginLeft={{ base: '3', sm: '5' }}
              marginRight={{ base: '3', sm: '5', lg: '0' }}
              paddingX={{ base: '4', sm: '5' }}
              paddingTop={{ base: '4', sm: '5' }}
              paddingBottom={{ base: '4', sm: '4' }}
              borderTopRadius={{ base: 'xl', sm: '2xl' }}
              borderBottomRadius={{ base: 'xl', sm: '2xl' }}
              backgroundColor="white"
              borderWidth="1"
              h={'96'}
              display="flex"
              justifyContent="center"
              borderBottomWidth={{ base: '1', lg: '0' }}
              borderColor={theme.colors.shared.softer3Gray}
              //   borderWidth="1"
              // background={'red'}

              borderRadius="md"
              p={{ base: '5px', sm: '0.3rem' }}
              _hover={{
                backgroundColor: theme.colors.shared.softerGray
              }}
              onPress={() => {
                window.location.href = 'mailto:support@salespin.co'
              }}
            >
              <HStack
                flexDirection={'column'}
                alignItems="center"
                justifyContent={'center'}
              >
                <Center
                  // backgroundColor={theme.colors.shared.green_10}
                  paddingY="2"
                  paddingX="2"
                  borderRadius="lg"
                >
                  <Box w={{ sm: '58px', xl: '20' }}>
                    <IconMail />
                  </Box>
                </Center>
                <Text
                  flex="1"
                  marginTop="3"
                  fontWeight="medium"
                  fontSize={{ base: '9xl', sm: '2xl', xl: '4xl' }}
                >
                  Email
                </Text>
                <Text
                  flex="1"
                  marginTop="3"
                  fontWeight="medium"
                  fontSize={{ base: '9xl', sm: 'sm', xl: '2xl' }}
                >
                  support@salespin.co
                </Text>
              </HStack>
            </Pressable>
          </Box>
          <Box flex="1">
            <Pressable
              onPress={() => {
                window.open('https://www.google.com', '_blank')
              }}
              marginTop={{ base: '3', sm: '5' }}
              marginLeft={{ base: '3', sm: '5' }}
              marginRight={{ base: '3', sm: '5', lg: '0' }}
              paddingX={{ base: '4', sm: '5' }}
              paddingTop={{ base: '4', sm: '5' }}
              paddingBottom={{ base: '4', sm: '4' }}
              borderTopRadius={{ base: 'xl', sm: '2xl' }}
              borderBottomRadius={{ base: 'xl', sm: '2xl' }}
              backgroundColor="white"
              borderWidth="1"
              h={'96'}
              display="flex"
              justifyContent="center"
              borderBottomWidth={{ base: '1', lg: '0' }}
              borderColor={theme.colors.shared.softer3Gray}
              //   borderWidth="1"
              // background={'red'}

              borderRadius="md"
              p={{ base: '5px', sm: '0.3rem' }}
              _hover={{
                backgroundColor: theme.colors.shared.softerGray
              }}
            >
              <HStack
                flexDirection={'column'}
                alignItems="center"
                justifyContent={'center'}
                style={{ marginBottom: '10%' }}
              >
                <Center
                  // backgroundColor={theme.colors.shared.green_10}
                  paddingY="2"
                  paddingX="2"
                  borderRadius="lg"
                >
                  <Icon
                    size={{ sm: 20, xl: 90 }}
                    color={'#464646'}
                    as={MaterialIcons}
                    name="support-agent"
                  />
                </Center>
                {/* <Center
                    backgroundColor={theme.colors.shared.green_10}
                    paddingY="2"
                    paddingX="2"
                    borderRadius="lg"
                  >
                    <Box  w={{sm:'58px',xl:"20"}}>
                      <IconHelpCircle />
                    </Box>
                  </Center> */}
                <Text
                  flex="1"
                  // marginTop="3"
                  fontWeight="medium"
                  fontSize={{ base: '9xl', sm: '2xl', xl: '4xl' }}
                >
                  Live Chat
                </Text>
              </HStack>
            </Pressable>
          </Box>
          <Box flex="1" marginRight="20px">
            <Pressable
              onPress={() => {
                window.location.href = 'tel:+17864960562'
              }}
              marginTop={{ base: '3', sm: '5' }}
              marginLeft={{ base: '3', sm: '5' }}
              marginRight={{ base: '3', sm: '5', lg: '0' }}
              paddingX={{ base: '4', sm: '5' }}
              paddingTop={{ base: '4', sm: '5' }}
              paddingBottom={{ base: '4', sm: '4' }}
              borderTopRadius={{ base: 'xl', sm: '2xl' }}
              borderBottomRadius={{ base: 'xl', sm: '2xl' }}
              backgroundColor="white"
              borderWidth="1"
              h={'96'}
              display="flex"
              justifyContent="center"
              borderBottomWidth={{ base: '1', lg: '0' }}
              borderColor={theme.colors.shared.softer3Gray}
              //   borderWidth="1"
              // background={'red'}

              borderRadius="md"
              p={{ base: '5px', sm: '0.3rem' }}
              _hover={{
                backgroundColor: theme.colors.shared.softerGray
              }}
            >
              <HStack
                flexDirection={'column'}
                alignItems="center"
                justifyContent={'center'}
              >
                <Center
                  // backgroundColor={theme.colors.shared.green_10}
                  paddingY="2"
                  paddingX="2"
                  borderRadius="lg"
                >
                  <Box w={{ sm: '58px', xl: '20' }}>
                    <IconPhone />
                  </Box>
                </Center>
                <Text
                  flex="1"
                  marginTop="3"
                  fontWeight="medium"
                  fontSize={{ base: '9xl', sm: '2xl', xl: '4xl' }}
                >
                  Phone
                </Text>
                <Text
                  flex="1"
                  marginTop="3"
                  fontWeight="medium"
                  fontSize={{ base: '9xl', sm: 'sm', xl: '2xl' }}
                >
                  +1 (786) 496-0562
                </Text>
              </HStack>
            </Pressable>
          </Box>
        </Box>
      </DashboardLayout>
    </>
  )
}
