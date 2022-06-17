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
  InputGroup,
  Button,
  Checkbox,
  Link,
  Icon,
  Pressable
} from 'native-base'
import { Dimensions, View } from 'react-native'
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
import IconChevronDown from 'shared/components/icons/IconChevronDown'
import IconArrowRight from 'shared/components/icons/IconArrowRight'
import IconMenu from 'shared/components/icons/IconMenu'

const { width, height } = Dimensions.get('window')

const DashboardLayout: React.FC = ({ children }) => {
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

      {/* Top navigation */}
      <HStack
        position="fixed"
        top="0"
        paddingLeft={{ base: '0', sm: '90px', lg: '310px' }}
        w="full"
        zIndex={10}
        height={{ base: '69px', sm: '84px' }}
        backgroundColor="white"
        borderBottomWidth="1"
        borderBottomColor={theme.colors.shared.softGray}
      >
        {/* Logo Contact Blaster */}
        <Hidden from="sm">
          <Center
            flex="1"
            paddingLeft="4"
            borderBottomWidth="1"
            borderBottomColor={theme.colors.shared.softer2Gray}
          >
            <Box flexDir="row" alignItems="center" w="full">
              <Image
                w="2.5rem"
                h="2.5rem"
                source={require('shared/assets/images/contact-blaster-blue.png')}
              />
              <Text
                color={theme.colors.shared.softBlack}
                fontSize="lg"
                fontWeight="semibold"
                marginLeft={'2'}
              >
                ClientEye
              </Text>
            </Box>
          </Center>
        </Hidden>
        {/* Search here */}
        <Hidden till="sm">
          <Center flex="1" paddingLeft="6"></Center>
        </Hidden>
        <HStack
          marginLeft={{ base: '5', lg: '0' }}
          width={{ lg: '430px' }}
          justifyContent="end"
          paddingRight={{ base: '4', sm: '12' }}
        >
          <Hidden till="sm">
            <Center>
              <HStack
                alignItems="center"
                space="1"
                backgroundColor={theme.colors.shared.blueGentianFlower}
                paddingY="2"
                paddingX="6"
                rounded="full"
              >
                <Box w="21px">
                  <IconCredits />
                </Box>
                <Text color="white" fontWeight="semibold">
                  8,752
                </Text>
              </HStack>
            </Center>
          </Hidden>
          <Hidden till="lg">
            <Center marginLeft="6">
              <Pressable>
                <Box w="24px">
                  <IconSun />
                </Box>
              </Pressable>
            </Center>
          </Hidden>
          <Center marginLeft={{ base: '0', sm: '6' }}>
            <Pressable>
              <Box w="19px">
                <IconNotificationBell />
              </Box>
            </Pressable>
          </Center>
          <Center marginLeft={{ base: '4', sm: '8' }}>
            <Box
              w={{ base: '35px', sm: '12' }}
              h={{ base: '35px', sm: '12' }}
              borderRadius="full"
              borderWidth="1"
              borderColor={theme.colors.shared.darkerGray}
            ></Box>
          </Center>
          <Hidden from="sm">
            <Center marginLeft={{ base: '4', sm: '8' }}>
              <Box p="1">
                <Box w="24px">
                  <IconMenu />
                </Box>
              </Box>
            </Center>
          </Hidden>
        </HStack>
      </HStack>
      {/* Left Navbar */}
      <Hidden till="sm">
        <Box
          position="fixed"
          left="0"
          top="0"
          bottom="0"
          zIndex={10}
          w={{ base: '90px', lg: '310px' }}
          h="full"
          backgroundColor="white"
        >
          <VStack h="full">
            <Center
              h="84px"
              borderBottomWidth="1"
              borderBottomColor={theme.colors.shared.softer2Gray}
            >
              <Center
                flexDir="row"
                w="full"
                borderRightWidth="1"
                borderRightColor={theme.colors.shared.softer2Gray}
              >
                <Image
                  w={{ base: '2.5rem', sm: '3.1rem' }}
                  h={{ base: '2.5rem', sm: '3.1rem' }}
                  source={require('shared/assets/images/contact-blaster-blue.png')}
                />
                <Hidden till="lg">
                  <Text
                    color={theme.colors.shared.softBlack}
                    fontSize={{ base: 'xl', sm: '2xl' }}
                    fontWeight="semibold"
                    marginLeft={'4'}
                  >
                    ClientEye
                  </Text>
                </Hidden>
              </Center>
            </Center>
            <Box flex="1" paddingY="3">
              <VStack
                h="full"
                paddingY={{ base: '0', lg: '4' }}
                paddingX={{ base: '0', lg: '7' }}
                borderRightWidth="1"
                borderRightColor={theme.colors.shared.softer2Gray}
              >
                <Box flex="1">
                  <Center marginY={{ base: '2', lg: '0' }}>
                    <Pressable
                      w={{ lg: 'full' }}
                      flexDirection="row"
                      backgroundColor={theme.colors.shared.brightBlue}
                      alignItems="center"
                      paddingX={{ base: '3', lg: '6' }}
                      paddingY="3"
                      borderRadius="lg"
                    >
                      <Box w={{ base: '20px', lg: '24px' }}>
                        <IconHome color="white" />
                      </Box>
                      <Hidden till="lg">
                        <Text
                          color="white"
                          fontWeight="semibold"
                          paddingLeft="4"
                        >
                          Leads
                        </Text>
                      </Hidden>
                    </Pressable>
                  </Center>
                </Box>
                <Box>
                  <Hidden from="lg">
                    <>
                      <Center marginY={{ base: '2', lg: '0' }}>
                        <Pressable
                          w={{ lg: 'full' }}
                          flexDirection="row"
                          alignItems="center"
                          paddingX={{ base: '3', lg: '6' }}
                          paddingY="3"
                          borderRadius="lg"
                          _hover={{
                            backgroundColor: theme.colors.shared.softer2Gray
                          }}
                        >
                          <Box w="20px">
                            <IconArrowRight />
                          </Box>
                        </Pressable>
                      </Center>
                      <Center marginY={{ base: '2', lg: '0' }}>
                        <Pressable
                          w={{ lg: 'full' }}
                          flexDirection="row"
                          alignItems="center"
                          paddingX={{ base: '3', lg: '6' }}
                          paddingY="3"
                          borderRadius="lg"
                          _hover={{
                            backgroundColor: theme.colors.shared.softer2Gray
                          }}
                        >
                          <Box w="20px">
                            <IconSun />
                          </Box>
                        </Pressable>
                      </Center>
                      <Box
                        borderBottomWidth="1px"
                        borderColor="#0000001A"
                        marginX="3"
                      ></Box>
                    </>
                  </Hidden>
                  <Center marginY={{ base: '2', lg: '0' }}>
                    <Pressable
                      w={{ lg: 'full' }}
                      flexDirection="row"
                      alignItems="center"
                      paddingX={{ base: '3', lg: '6' }}
                      paddingY="3"
                      borderRadius="lg"
                      _hover={{
                        backgroundColor: theme.colors.shared.softer2Gray
                      }}
                    >
                      <Box w={{ base: '20px', lg: '24px' }}>
                        <IconCreditCard />
                      </Box>
                      <Hidden till="lg">
                        <Text
                          color={theme.colors.shared.soft2Gray}
                          fontWeight="semibold"
                          paddingLeft="4"
                        >
                          Billing
                        </Text>
                      </Hidden>
                    </Pressable>
                  </Center>
                  <Center marginY={{ base: '2', lg: '0' }}>
                    <Pressable
                      w={{ lg: 'full' }}
                      flexDirection="row"
                      alignItems="center"
                      paddingX={{ base: '3', lg: '6' }}
                      paddingY="3"
                      borderRadius="lg"
                      _hover={{
                        backgroundColor: theme.colors.shared.softer2Gray
                      }}
                    >
                      <Box w={{ base: '20px', lg: '24px' }}>
                        <IconUser />
                      </Box>
                      <Hidden till="lg">
                        <Text
                          color={theme.colors.shared.soft2Gray}
                          fontWeight="semibold"
                          paddingLeft="4"
                        >
                          Account
                        </Text>
                      </Hidden>
                    </Pressable>
                  </Center>
                  <Center marginY={{ base: '2', lg: '0' }}>
                    <Pressable
                      w={{ lg: 'full' }}
                      flexDirection="row"
                      alignItems="center"
                      paddingX={{ base: '3', lg: '6' }}
                      paddingY="3"
                      borderRadius="lg"
                      _hover={{
                        backgroundColor: theme.colors.shared.softer2Gray
                      }}
                    >
                      <Box w={{ base: '20px', lg: '24px' }}>
                        <IconHelpCircle />
                      </Box>
                      <Hidden till="lg">
                        <Text
                          color={theme.colors.shared.soft2Gray}
                          fontWeight="semibold"
                          paddingLeft="4"
                        >
                          {`Help & Support`}
                        </Text>
                      </Hidden>
                    </Pressable>
                  </Center>
                </Box>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Hidden>
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        marginTop={{
          base: '69px',
          sm: '84px'
        }}
        marginLeft={{
          base: '0',
          sm: '90px',
          lg: '310px'
        }}
      >
        <KeyboardAwareScrollView
          contentContainerStyle={{
            width: '100%',
            height: '100%',
            backgroundColor: theme.colors.shared.aliceBlue
          }}
          overScrollMode="auto"
        >
          {children}
        </KeyboardAwareScrollView>
      </Box>
    </>
  )
}

export default DashboardLayout
