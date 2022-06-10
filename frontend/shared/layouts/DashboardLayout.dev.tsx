import {
  StatusBar, Box,
  Center, Stack, Hidden, Text,
  Image, HStack, VStack, Input,
  InputGroup, Button, Checkbox,
  Link, Icon, Pressable
} from 'native-base'
import { Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from 'shared/styles/theme'
import { Link as SolitoLink } from 'solito/link'
import IconMacCommand from 'shared/components/icons/IconMacCommand'
import IconCredits from 'shared/components/icons/IconCredits'
import IconSun from 'shared/components/icons/IconSun'
import IconNotificationBell from 'shared/components/icons/IconNotificationBell'
import IconHome from 'shared/components/icons/IconHome'
import IconLists from 'shared/components/icons/IconLists'
import IconMessages from 'shared/components/icons/IconMessages'
import IconFlag from 'shared/components/icons/IconFlag'
import IconTrashBin from 'shared/components/icons/IconTrashBin'
import IconCreditCard from 'shared/components/icons/IconCreditCard'
import IconUser from 'shared/components/icons/IconUser'
import IconHelpCircle from 'shared/components/icons/IconHelpCircle'

const { width, height } = Dimensions.get('window')

const DashboardLayout: React.FC = ({
  children,
}) => {
  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <Box
        safeAreaTop
        _light={{ bg: 'primary.900' }}
        _dark={{ bg: 'coolGray.900' }}
      />

      <VStack
        h='full'
      >
        {/* Top navigation */}
        <HStack
          height='84px'
          backgroundColor='white'
          borderBottomWidth='1'
          borderBottomColor={theme.colors.shared.softGray}
        >
          <Center>
            <Center
              flexDir='row'
              w='310px'
              borderRightWidth='1'
              borderRightColor={theme.colors.shared.softer2Gray}
            >
              <Image
                w={{ base: '2.5rem', sm: '3.1rem' }}
                h={{ base: '2.5rem', sm: '3.1rem' }}
                source={require("shared/assets/images/contact-blaster-blue.png")}
              />
              <Text
                color={theme.colors.shared.softBlack}
                fontSize={{ base: 'xl', sm: '2xl' }}
                fontWeight='semibold'
                marginLeft={'4'}
              >
                Contact Blaster
              </Text>
            </Center>
          </Center>
          <Center
            flex='1'
            paddingLeft='8'
          >
            <Input
              borderRadius='lg'
              flex={{ md: undefined, lg: undefined, base: 1 }}
              w='full'
              h={{ base: '2.5rem', sm: '2.9rem' }}
              backgroundColor={theme.colors.shared.softer2Gray}
              py={3}
              _light={{ bg: 'white' }}
              _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
              InputLeftElement={
                <Icon
                  as={<AntDesign name="search1" />}
                  size={{ base: '4', md: '7' }}
                  paddingLeft='1'
                  my={2}
                  ml={2}
                  _light={{
                    color: 'coolGray.800'
                  }}
                  _dark={{
                    color: 'coolGray.300'
                  }}
                />
              }
              InputRightElement={
                <Box
                  flexDirection='row'
                  alignItems='center'
                  borderWidth='1'
                  paddingY='4px'
                  paddingX='8px'
                  borderColor={theme.colors.shared.soft4Gray_50}
                  borderRadius='md'
                  backgroundColor={theme.colors.shared.white}
                  marginRight='2'
                >
                  <IconMacCommand />
                  <Text
                    marginLeft='1'
                    fontSize='sm'
                  >
                    F
                  </Text>
                </Box>
              }
              color="coolGray.800"
              placeholder="Search here"
            />
          </Center>
          <HStack
            width='430px'
            justifyContent='end'
            paddingRight='12'
          >
            <Center>
              <HStack
                alignItems='center'
                space='1'
                backgroundColor={theme.colors.shared.blueGentianFlower}
                paddingY='2'
                paddingX='5'
                rounded='full'
              >
                <IconCredits />
                <Text
                  color='white'
                  fontWeight='semibold'
                >
                  8,752
                </Text>
              </HStack>
            </Center>
            <Center
              marginLeft='6'
            >
              <Pressable>
                <IconSun />
              </Pressable>
            </Center>
            <Center
              marginLeft='6'
            >
              <Pressable>
                <IconNotificationBell />
              </Pressable>
            </Center>
            <Center
              marginLeft='8'
            >
              <Box
                w='12'
                h='12'
                borderRadius='full'
                borderWidth='1'
                borderColor={theme.colors.shared.darkerGray}
              >

              </Box>
            </Center>
          </HStack>
        </HStack>
        <HStack flex='1'>
          <Box
            w='310px'
            h='full'
            backgroundColor='white'
            paddingY='3'
          >
            <VStack
              h='full'
              paddingY='4'
              paddingX='7'
              borderRightWidth='1'
              borderRightColor={theme.colors.shared.softGray}
            >
              <Box flex='1'>
                <Pressable
                  flexDirection='row'
                  backgroundColor={theme.colors.shared.brightBlue}
                  alignItems='center'
                  paddingX='6'
                  paddingY='3'
                  borderRadius='lg'
                >
                  <IconHome
                    color='white'
                  />
                  <Text
                    color='white'
                    fontWeight='semibold'
                    paddingLeft='4'
                  >
                    Home
                  </Text>
                </Pressable>
                <Pressable
                  flexDirection='row'
                  alignItems='center'
                  paddingX='6'
                  paddingY='3'
                  borderRadius='lg'
                  _hover={{
                    backgroundColor: theme.colors.shared.softer2Gray
                  }}
                >
                  <IconLists
                  />
                  <Text
                    color={theme.colors.shared.soft2Gray}
                    fontWeight='semibold'
                    paddingLeft='4'
                  >
                    Lists
                  </Text>
                </Pressable>
                <Pressable
                  flexDirection='row'
                  alignItems='center'
                  justifyContent='space-between'
                  paddingX='6'
                  paddingY='3'
                  borderRadius='lg'
                  _hover={{
                    backgroundColor: theme.colors.shared.softer2Gray
                  }}
                >
                  <Box
                    flexDirection='row'
                    alignItems='center'
                  >
                    <IconMessages
                    />
                    <Text
                      color={theme.colors.shared.soft2Gray}
                      fontWeight='semibold'
                      paddingLeft='4'
                    >
                      Messages
                    </Text>
                  </Box>
                  <Center>
                    <Box
                      paddingX='2'
                      paddingY='  0.125rem'
                      borderRadius='lg'
                      backgroundColor={theme.colors.shared.lavenderBlue}
                    >
                      <Text fontWeight='semibold'>
                        6
                      </Text>
                    </Box>
                  </Center>
                </Pressable>
                <Pressable
                  flexDirection='row'
                  alignItems='center'
                  paddingX='6'
                  paddingY='3'
                  borderRadius='lg'
                  _hover={{
                    backgroundColor: theme.colors.shared.softer2Gray
                  }}
                >
                  <IconFlag
                  />
                  <Text
                    color={theme.colors.shared.soft2Gray}
                    fontWeight='semibold'
                    paddingLeft='4'
                  >
                    Campaigns
                  </Text>
                </Pressable>
                <Pressable
                  flexDirection='row'
                  alignItems='center'
                  paddingX='6'
                  paddingY='3'
                  borderRadius='lg'
                  _hover={{
                    backgroundColor: theme.colors.shared.softer2Gray
                  }}
                >
                  <IconTrashBin
                  />
                  <Text
                    color={theme.colors.shared.soft2Gray}
                    fontWeight='semibold'
                    paddingLeft='4'
                  >
                    Recycle Bin
                  </Text>
                </Pressable>
              </Box>
              <Box>
                <Pressable
                  flexDirection='row'
                  alignItems='center'
                  paddingX='6'
                  paddingY='3'
                  borderRadius='lg'
                  _hover={{
                    backgroundColor: theme.colors.shared.softer2Gray
                  }}
                >
                  <IconCreditCard
                  />
                  <Text
                    color={theme.colors.shared.soft2Gray}
                    fontWeight='semibold'
                    paddingLeft='4'
                  >
                    Billing
                  </Text>
                </Pressable>
                <Pressable
                  flexDirection='row'
                  alignItems='center'
                  paddingX='6'
                  paddingY='3'
                  borderRadius='lg'
                  _hover={{
                    backgroundColor: theme.colors.shared.softer2Gray
                  }}
                >
                  <IconUser
                  />
                  <Text
                    color={theme.colors.shared.soft2Gray}
                    fontWeight='semibold'
                    paddingLeft='4'
                  >
                    Account
                  </Text>
                </Pressable>
                <Pressable
                  flexDirection='row'
                  alignItems='center'
                  paddingX='6'
                  paddingY='3'
                  borderRadius='lg'
                  _hover={{
                    backgroundColor: theme.colors.shared.softer2Gray
                  }}
                >
                  <IconHelpCircle
                  />
                  <Text
                    color={theme.colors.shared.soft2Gray}
                    fontWeight='semibold'
                    paddingLeft='4'
                  >
                    {`Help & Support`}
                  </Text>
                </Pressable>
              </Box>
            </VStack>
          </Box>
          <KeyboardAwareScrollView
            contentContainerStyle={{ width: '100%', height: height - 310, backgroundColor: theme.colors.shared.aliceBlue }}
            overScrollMode='auto'
          >
            <Box>
              {children}
            </Box>
          </KeyboardAwareScrollView>
        </HStack>
      </VStack>
    </>
  )
}

export default DashboardLayout