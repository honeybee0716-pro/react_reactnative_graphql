import React, { useState } from 'react'
import {
  StatusBar,
  Box,
  Center,
  Hidden,
  Text,
  Image,
  HStack,
  VStack,
  Pressable,
  Icon
} from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { theme } from 'shared/styles/theme'
import { useRouter } from 'solito/router'
import { useRecoilState } from 'recoil'
import { userSubscriptionDataState } from '../state'
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Feather,
  SimpleLineIcons
} from '@expo/vector-icons'

enum showOn {
  business = 'business',
  customer = 'customer',
  both = 'both'
}

enum sidebarItemPosition {
  top = 'top',
  bottom = 'bottom'
}

enum accountTypes {
  business = 'business',
  customer = 'customer'
}

const SideBarItem = ({ e }: any) => {
  const [path, setPath] = useState(document.location.href.toLowerCase())

  React.useEffect(() => {
    setPath(document.location.href)
  }, [document.location.href])

  return (
    <Pressable
      onPress={e.onClick}
      flexDirection="row"
      backgroundColor={
        path.includes(e.label.toLowerCase())
          ? theme.colors.shared.SaleSpinPrimary
          : theme.colors.shared.white
      }
      paddingX={{ base: '3', lg: '6' }}
      paddingY="4"
      borderRadius="lg"
    >
      {e.icon}
      <Text
        color={
          path.includes(e.label.toLowerCase())
            ? theme.colors.shared.white
            : theme.colors.shared.soft2Gray
        }
        fontWeight="semibold"
        paddingLeft="4"
      >
        {e.label}
      </Text>
    </Pressable>
  )
}

const DashboardLayout: React.FC = ({ children }) => {
  const [control, setControl] = React.useState(accountTypes.customer)
  const { push } = useRouter()
  const [userSubscriptionData] = useRecoilState<any>(userSubscriptionDataState)

  const getSideBarColor = (label: string) => {
    return document.location.href.toLowerCase().includes(label.toLowerCase())
      ? theme.colors.shared.white
      : theme.colors.shared.soft2Gray
  }

  const sidebarRoutes = [
    {
      label: 'Home',
      icon: (
        <Icon
          size="5"
          color={getSideBarColor('Home')}
          as={Ionicons}
          name="home"
        />
      ),
      onClick: () => push('/home'),
      showOn: showOn.both,
      position: sidebarItemPosition.top
    },
    {
      label: 'Campaigns',
      icon: (
        <Icon
          size="5"
          color={getSideBarColor('Campaigns')}
          as={Ionicons}
          name="flag"
        />
      ),
      onClick: () => push('/campaigns'),
      showOn: showOn.business,
      position: sidebarItemPosition.top
    },
    {
      label: 'Orders',
      icon: (
        <Icon
          size="5"
          color={getSideBarColor('Orders')}
          as={MaterialCommunityIcons}
          name="cash-register"
        />
      ),
      onClick: () => push('/orders'),
      showOn: showOn.both,
      position: sidebarItemPosition.top
    },
    {
      label: 'Customers',
      icon: (
        <Icon
          size="5"
          color={getSideBarColor('Customers')}
          as={Ionicons}
          name="people"
        />
      ),
      onClick: () => push('/customers'),
      showOn: showOn.business,
      position: sidebarItemPosition.top
    },
    {
      label: 'Tiers',
      icon: (
        <Icon
          size="5"
          color={getSideBarColor('Tiers')}
          as={Ionicons}
          name={'medal'}
        />
      ),
      onClick: () => push('/tiers'),
      showOn: showOn.business,
      position: sidebarItemPosition.top
    },
    {
      label: 'Automation',
      icon: (
        <Icon
          size="5"
          color={getSideBarColor('Automation')}
          as={MaterialCommunityIcons}
          name={'robot'}
        />
      ),
      onClick: () => push('/automation'),
      showOn: showOn.business,
      position: sidebarItemPosition.top
    },
    {
      label: 'Products',
      icon: (
        <Icon
          size="5"
          color={getSideBarColor('Product')}
          as={Feather}
          name="package"
        />
      ),
      onClick: () => push('/products'),
      showOn: showOn.business,
      position: sidebarItemPosition.top
    },
    {
      label: 'Shopping',
      icon: (
        <Icon
          size="5"
          color={getSideBarColor('Shopping')}
          as={SimpleLineIcons}
          name="present"
        />
      ),
      onClick: () => push('/shopping'),
      showOn: showOn.customer,
      position: sidebarItemPosition.top
    },
    {
      label: 'Branding',
      icon: (
        <Icon
          size="5"
          color={getSideBarColor('Branding')}
          as={MaterialCommunityIcons}
          name="mirror"
        />
      ),
      onClick: () => push('/branding'),
      showOn: showOn.business,
      position: sidebarItemPosition.top
    },
    {
      label: 'Integrations',
      icon: (
        <Icon
          size="5"
          color={getSideBarColor('Integrations')}
          as={FontAwesome}
          name="chain"
        />
      ),
      onClick: () => push('/integrations'),
      showOn: showOn.business,
      position: sidebarItemPosition.top
    },
    {
      label: 'Billing',
      icon: (
        <Icon
          size="5"
          color={getSideBarColor('Billing')}
          as={FontAwesome}
          name="credit-card"
        />
      ),
      onClick: () => push('/billing'),
      showOn: showOn.business,
      position: sidebarItemPosition.bottom
    },
    {
      label: 'Account',
      icon: (
        <Icon
          size="5"
          color={getSideBarColor('Account')}
          as={Ionicons}
          name="person"
        />
      ),
      onClick: () => push('/account'),
      showOn: showOn.both,
      position: sidebarItemPosition.bottom
    },
    {
      label: 'Help',
      icon: (
        <Icon
          size="5"
          color={getSideBarColor('Help')}
          as={MaterialIcons}
          name="support-agent"
        />
      ),
      onClick: () => push('/help'),
      showOn: showOn.both,
      position: sidebarItemPosition.bottom
    }
  ]

  React.useEffect(() => {
    if (
      userSubscriptionData.stripeCustomer.metadata.accountType === 'business'
    ) {
      setControl(accountTypes.business)
    } else if (
      userSubscriptionData.stripeCustomer.metadata.accountType === 'customer'
    ) {
      setControl(accountTypes.customer)
    }
  }, [userSubscriptionData])

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
        {/* Logo */}
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
                  {sidebarRoutes
                    .filter((e) => {
                      if (e.position !== sidebarItemPosition.top) {
                        return false
                      }

                      if (e.showOn === showOn.both) {
                        return true
                      }

                      if (
                        e.showOn === showOn.business &&
                        control === accountTypes.business
                      ) {
                        return true
                      }

                      if (
                        e.showOn === showOn.customer &&
                        control === accountTypes.customer
                      ) {
                        return true
                      }

                      return false
                    })
                    .map((e) => (
                      <SideBarItem e={e} />
                    ))}
                </Box>
                <br />
                <Box>
                  {sidebarRoutes
                    .filter((e) => {
                      if (e.position !== sidebarItemPosition.bottom) {
                        return false
                      }

                      if (e.showOn === showOn.both) {
                        return true
                      }

                      if (
                        e.showOn === showOn.business &&
                        control === accountTypes.business
                      ) {
                        return true
                      }

                      if (
                        e.showOn === showOn.customer &&
                        control === accountTypes.customer
                      ) {
                        return true
                      }

                      return false
                    })
                    .map((e) => (
                      <SideBarItem e={e} />
                    ))}
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
