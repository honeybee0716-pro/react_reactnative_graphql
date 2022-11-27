import React, { useState } from 'react'
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
  Pressable,
  ScrollView,
  Menu
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
import IconExit from '../components/icons/IconExit'
import { useRouter } from 'solito/router'
import { useRecoilState } from 'recoil'
import { userSubscriptionDataState, jwtState } from '../state'

const { width, height } = Dimensions.get('window')

const DashboardLayout: React.FC = ({ children }) => {
  const [shouldOverlapWithTrigger] = useState(false)
  const [position, setPosition] = React.useState('auto')
  const  [control,setControl]=React.useState("")
  const { push } = useRouter()
  const [userSubscriptionData, setUserSubscriptionData] = useRecoilState<any>(
    userSubscriptionDataState
  )

  React.useEffect(()=>{
    if(userSubscriptionData.stripeCustomer.metadata.accountType==="business")
    {
      setControl("business")
    }else if (userSubscriptionData.stripeCustomer.metadata.accountType==="customer")
    {
      setControl("customer")
    }
  },[userSubscriptionData])

  const handleSignOut = async () => {
    push('/sign-out')
  }

  const GotoTransaction = async () => {
    push('/transactions')
  }

  const GotoCustomers = async () => {
    push('/customers')
  }

  const GotoTiers = async () => {
    push('/tiers')
  }

  const GotoAutomation = async () => {
    push('/automation')
  }

  const GotoReports = async () => {
    push('/reports')
  }

  const GotoProducts = async () => {
    push('/products')
  }

  const GotoBranding = async () => {
    push('/branding')
  }

  const goToBilling = async () => {
    push('/billing')
  }

  const goToShopping = async () => {
    push('/shopping')
  }

  const goToHome = async () => {
    push('/home')
  }

  const goToCampaigns = async () => {
    push('/campaigns')
  }

  const goToAccount = async () => {
    push('/account')
  }

  const goToHelp = async () => {
    //push('/help')
    window.location.href="mailto:support@salespin.co"
  }

  const GotoIntegration = async () =>{
    push('/integrations')
  }

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
        height={{ base: '69px', sm: '74px' }}
        backgroundColor="white"
        borderBottomWidth="1"
        borderBottomColor={theme.colors.shared.softGray}
      >
        {/* Logo SaleSpin */}
        <Hidden from="sm">
          <Center
            flex="1"
            paddingLeft="4"
            borderBottomWidth="1"
            borderBottomColor={theme.colors.shared.softer2Gray}
          >
            <Box flexDir="row" alignItems="center" w="full">
              <Image
                w="80px"
                h="40px"
                source={require('shared/images/salespinLogo.png')}
              />
              <Text
                color={theme.colors.shared.softBlack}
                fontSize="lg"
                fontWeight="semibold"
                marginLeft={'2'}
              >
                SaleSpin
              </Text>
            </Box>
          </Center>
        </Hidden>
        {/* Search here */}
        {/*<Hidden till="sm">
          <Center flex="1" paddingLeft="6">
            <Input
              borderRadius="lg"
              flex={{ md: undefined, lg: undefined, base: 1 }}
              w="full"
              h={{ base: '2.5rem', sm: '2.9rem' }}
              backgroundColor={theme.colors.shared.softer2Gray}
              py={3}
              _light={{ bg: 'white' }}
              _dark={{ bg: { base: 'coolGray.800', md: 'coolGray.900' } }}
              InputLeftElement={
                <Icon
                  as={<AntDesign name="search1" />}
                  size={{ base: '4', md: '7' }}
                  paddingLeft="1"
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
                <Hidden till="lg">
                  <Box
                    flexDirection="row"
                    alignItems="center"
                    borderWidth="1"
                    paddingY="4px"
                    paddingX="8px"
                    borderColor={theme.colors.shared.soft4Gray_50}
                    borderRadius="md"
                    backgroundColor={theme.colors.shared.white}
                    marginRight="2"
                  >
                    <Box w="12px">
                      <IconMacCommand />
                    </Box>
                    <Text marginLeft="1" fontSize="sm">
                      F
                    </Text>
                  </Box>
                </Hidden>
              }
              color="coolGray.800"
              placeholder="Search here"
            />
          </Center>
        </Hidden>*/}
        <HStack
          marginLeft={{ base: '5', lg: '0' }}
          width={{ lg: '430px' }}
          justifyContent="end"
          paddingRight={{ base: '4', sm: '5' }}
          style={{ width: '100%' }}
        >
          {/*<Hidden till="sm">
            <Center>
              <HStack
                alignItems="center"
                space="1"
                backgroundColor={theme.colors.shared.blueGentianFlower}
                paddingY="2"
                paddingX="6"
                rounded="full"
              >
                <Box w="24px">
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
              <Box w="20px">
                <IconNotificationBell />
              </Box>
            </Pressable>
      </Center>*/}
          <Center
            marginLeft={{ base: '4', sm: '8' }}
            style={{ marginRight: '10px' }}
          >
            <Menu
              w="160"
              shouldOverlapWithTrigger={shouldOverlapWithTrigger} // @ts-ignore
              placement={position == 'auto' ? undefined : position}
              trigger={(triggerProps) => {
                return (
                  <Button
                    variant="solid"
                    {...triggerProps}
                    style={{ backgroundColor: 'none' }}
                  >
                    <Image
                      w={{ base: '35px', sm: '12' }}
                      h={{ base: '35px', sm: '12' }}
                      borderRadius="full"
                      borderWidth="1"
                      borderColor={theme.colors.shared.darkerGray}
                      source={require('shared/images/eclipse4.jpeg')}
                    />
                  </Button>
                )
              }}
            >
              <Menu.Item>
                <Pressable onPress={handleSignOut}>
                  <Text>Sign Out</Text>
                </Pressable>
              </Menu.Item>
            </Menu>
          </Center>
          <Hidden from="lg">
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
              h="74px"
              borderBottomWidth="1"
              borderBottomColor={theme.colors.shared.softer2Gray}
            >
              <Center
                flexDir="row"
                w="full"
                h="full"
                borderRightWidth="1"
                borderRightColor={theme.colors.shared.softer2Gray}
              >
                <Image
                  w="80px"
                  h="40px"
                  source={require('shared/images/salespinLogo.png')}
                />
                <Hidden till="lg">
                  <Text
                    color={theme.colors.shared.softBlack}
                    fontSize={{ base: 'xl', sm: '2xl' }}
                    fontWeight="semibold"
                    marginLeft={'4'}
                  >
                    SaleSpin
                  </Text>
                </Hidden>
              </Center>
            </Center>
            <Box flex="1" paddingY="0">
              <VStack
                h="full"
                paddingY={{ base: '0', lg: '4' }}
                paddingX={{ base: '0', lg: '7' }}
                borderRightWidth="1"
                borderRightColor={theme.colors.shared.softer2Gray}
              >
                <Box flex="1">
                  <ScrollView>
                    <Center marginY={{ base: '2', lg: '0' }}>
                      <Pressable
                        onPress={goToHome}
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
                            Home
                          </Text>
                        </Hidden>
                      </Pressable>
                    </Center>

                    {/*
                  <Center marginY={{ base: '2', lg: '0' }}>
                    <Pressable
                      w={{ lg: 'full' }}
                      flexDirection="row"
                      alignItems="center"
                      justifyContent="space-between"
                      paddingX={{ base: '3', lg: '6' }}
                      paddingY="3"
                      borderRadius="lg"
                      _hover={{
                        backgroundColor: theme.colors.shared.softer2Gray
                      }}
                    >
                      <Box flexDirection="row" alignItems="center">
                        <Box w={{ base: '20px', lg: '24px' }}>
                          <IconMessages />
                        </Box>
                        <Hidden till="lg">
                          <Text
                            color={theme.colors.shared.soft2Gray}
                            fontWeight="semibold"
                            paddingLeft="4"
                          >
                            Messages
                          </Text>
                        </Hidden>
                      </Box>
                      <Hidden till="lg">
                        <Center>
                          <Box
                            paddingX="2"
                            paddingY="  0.125rem"
                            borderRadius="lg"
                            backgroundColor={theme.colors.shared.lavenderBlue}
                          >
                            <Text fontWeight="semibold">6</Text>
                          </Box>
                        </Center>
                      </Hidden>
                    </Pressable>
                  </Center>*/}
                  {control==="business"&& (
                    <Center marginY={{ base: '2', lg: '0' }}>
                    <Pressable
                      onPress={goToCampaigns}
                      w={{ lg: 'full' }}
                      flexDirection="row"
                      alignItems="center"
                      justifyContent="space-between"
                      paddingX={{ base: '3', lg: '6' }}
                      paddingY="3"
                      borderRadius="lg"
                      _hover={{
                        backgroundColor: theme.colors.shared.softer2Gray
                      }}
                    >
                      <Box flexDirection="row" alignItems="center">
                        <Box w={{ base: '20px', lg: '24px' }}>
                          <IconFlag />
                        </Box>
                        <Hidden till="lg">
                          <Text
                            color={theme.colors.shared.soft2Gray}
                            fontWeight="semibold"
                            paddingLeft="4"
                          >
                            Campaigns
                          </Text>
                        </Hidden>
                      </Box>
                      {/*<Hidden till="lg">
                      <Center>
                        <Box w="20px">
                          <IconChevronDown rotation={180} />
                        </Box>
                      </Center>
                    </Hidden>*/}
                    </Pressable>
                  </Center>
                  )}
                    
                    {/*<Hidden till="lg">
                    <Box marginLeft="33px">
                      <Box
                        marginLeft="2px"
                        w="1px"
                        h="5"
                        backgroundColor={theme.colors.shared.soft4Gray}
                      ></Box>
                      <HStack h="1px">
                        <Box
                          backgroundColor={theme.colors.shared.soft4Gray}
                          w="5px"
                          h="5px"
                          borderRadius="full"
                        ></Box>
                        <Box position="relative" w="full" marginLeft="7">
                          <Text
                            color={theme.colors.shared.soft2Gray}
                            fontWeight="semibold"
                            position="absolute"
                            top="-5px"
                          >
                            SEO Agencies
                          </Text>
                        </Box>
                      </HStack>
                      <Box
                        marginLeft="2px"
                        w="1px"
                        h="10"
                        backgroundColor={theme.colors.shared.soft4Gray}
                      ></Box>
                      <HStack h="1px">
                        <Box
                          backgroundColor={theme.colors.shared.soft4Gray}
                          w="5px"
                          h="5px"
                          borderRadius="full"
                        ></Box>
                        <Box position="relative" w="full" marginLeft="7">
                          <Text
                            color={theme.colors.shared.soft2Gray}
                            fontWeight="semibold"
                            position="absolute"
                            top="-5px"
                          >
                            Advertising
                          </Text>
                        </Box>
                      </HStack>
                      <Box marginLeft="2px" w="1px" h="7"></Box>
                    </Box>
                  </Hidden>*/}
                    {/*<Center marginY={{ base: '2', lg: '0' }}>
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
                        <IconTrashBin />
                      </Box>
                      <Hidden till="lg">
                        <Text
                          color={theme.colors.shared.soft2Gray}
                          fontWeight="semibold"
                          paddingLeft="4"
                        >
                          Recycle Bin
                        </Text>
                      </Hidden>
                    </Pressable>
                  </Center>*/}
                  
                    
                  
                    <Center marginY={{ base: '2', lg: '0' }}>
                      <Pressable
                        onPress={GotoTransaction}
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
                          {/*<IconLists />*/}
                          <Image
                            w="6"
                            h="6"
                            source={require('shared/images/transaction.svg')}
                          />
                        </Box>
                        <Hidden till="lg">
                          <Text
                            color={theme.colors.shared.soft2Gray}
                            fontWeight="semibold"
                            paddingLeft="4"
                          >
                            Transactions
                          </Text>
                        </Hidden>
                      </Pressable>
                    </Center>
                    {control==="customer" && (
                  <Center marginY={{ base: '2', lg: '0' }}>
                    <Pressable
                      onPress={goToShopping}
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
                      <Image
                            w="6"
                            h="6"
                            source={require('shared/images/shopping.svg')}
                          />
                      </Box>
                      <Hidden till="lg">
                        <Text
                          color={theme.colors.shared.soft2Gray}
                          fontWeight="semibold"
                          paddingLeft="4"
                        >
                          Shopping
                        </Text>
                      </Hidden>
                    </Pressable>
                  </Center>)}
                    {control==="business" && (
                      <>
                    <Center marginY={{ base: '2', lg: '0' }}>
                      <Pressable
                        onPress={GotoCustomers}
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
                          <Image
                            w="6"
                            h="6"
                            source={require('shared/images/company.svg')}
                          />
                        </Box>
                        <Hidden till="lg">
                          <Text
                            color={theme.colors.shared.soft2Gray}
                            fontWeight="semibold"
                            paddingLeft="4"
                          >
                            Customers
                          </Text>
                        </Hidden>
                      </Pressable>
                    </Center>
                    <Center marginY={{ base: '2', lg: '0' }}>
                      <Pressable
                        onPress={GotoTiers}
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
                          <Image
                            w="6"
                            h="6"
                            source={require('shared/images/tiers.svg')}
                          />
                        </Box>
                        <Hidden till="lg">
                          <Text
                            color={theme.colors.shared.soft2Gray}
                            fontWeight="semibold"
                            paddingLeft="4"
                          >
                            Tiers
                          </Text>
                        </Hidden>
                      </Pressable>
                    </Center>
                    <Center marginY={{ base: '2', lg: '0' }}>
                      <Pressable
                        onPress={GotoAutomation}
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
                          <Image
                            w="6"
                            h="6"
                            source={require('shared/images/automation.svg')}
                          />
                        </Box>
                        <Hidden till="lg">
                          <Text
                            color={theme.colors.shared.soft2Gray}
                            fontWeight="semibold"
                            paddingLeft="4"
                          >
                            Automation
                          </Text>
                        </Hidden>
                      </Pressable>
                    </Center>
                    <Center marginY={{ base: '2', lg: '0' }}>
                      <Pressable
                        onPress={GotoProducts}
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
                          <Image
                            w="6"
                            h="6"
                            source={require('shared/images/products.svg')}
                          />
                        </Box>
                        <Hidden till="lg">
                          <Text
                            color={theme.colors.shared.soft2Gray}
                            fontWeight="semibold"
                            paddingLeft="4"
                          >
                            Products
                          </Text>
                        </Hidden>
                      </Pressable>
                    </Center>
                    <Center marginY={{ base: '2', lg: '0' }}>
                      <Pressable
                        onPress={GotoReports}
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
                          <Image
                            w="6"
                            h="6"
                            source={require('shared/images/reports.svg')}
                          />
                        </Box>
                        <Hidden till="lg">
                          <Text
                            color={theme.colors.shared.soft2Gray}
                            fontWeight="semibold"
                            paddingLeft="4"
                          >
                            Reports
                          </Text>
                        </Hidden>
                      </Pressable>
                    </Center>
                    <Center marginY={{ base: '2', lg: '0' }}>
                      <Pressable
                        onPress={GotoBranding}
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
                          <Image
                            w="3"
                            h="4"
                            source={require('shared/images/b.svg')}
                          />
                        </Box>
                        <Hidden till="lg">
                          <Text
                            color={theme.colors.shared.soft2Gray}
                            fontWeight="semibold"
                            paddingLeft="4"
                          >
                            Branding
                          </Text>
                        </Hidden>
                      </Pressable>
                    </Center>
                    <Center marginY={{ base: '2', lg: '0' }}>
                      <Pressable
                        onPress={GotoIntegration}
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
                         <Text>I</Text>
                        </Box>
                        <Hidden till="lg">
                          <Text
                            color={theme.colors.shared.soft2Gray}
                            fontWeight="semibold"
                            paddingLeft="4"
                          >
                            Integrations
                          </Text>
                        </Hidden>
                      </Pressable>
                    </Center>
                    </>)}
                  </ScrollView>
                </Box>
                <br />
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
                      onPress={goToBilling}
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
                      onPress={goToAccount}
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
                      onPress={goToHelp}
                      
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
                  {/*<Center marginY={{ base: '2', lg: '0' }}>
                    <Pressable
                    onPress={handleSignOut}
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
                      <Image
                            w="5"
                            h="5"
                            source={require('shared/images/exit-1.svg')}
                          />
                      </Box>
                      <Hidden till="lg">
                        <Text
                          color={theme.colors.shared.soft2Gray}
                          fontWeight="semibold"
                          paddingLeft="4"
                        >
                          {`Sign out`}
                        </Text>
                      </Hidden>
                    </Pressable>
                  </Center>*/}
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
        backgroundColor={theme.colors.shared.aliceBlue}
        marginTop={{
          base: '69px',
          sm: '74px'
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
