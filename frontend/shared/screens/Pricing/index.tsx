import React from 'react'
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Center,
  Button,
  Pressable,
  Divider,
  Hidden
} from 'native-base'
import { useRouter } from 'solito/router'
import { gql, useLazyQuery } from '@apollo/client'
import { Link as SolitoLink } from 'solito/link'
import { MaterialIcons } from '@expo/vector-icons'
import IconSubscription from './components/IconSubscription'
import DashboardLayout from '../../layouts/DashboardLayout'

const GET_STRIPE_CHECKOUT_LINK = gql`
  query CreateStripeCheckoutPage($input: createStripeCheckoutPageInput) {
    createStripeCheckoutPage(input: $input) {
      message
      status
      link
    }
  }
`

function OptionSection({ tabName, setTabName }) {
  return (
    <>
      <HStack mt="4" alignItems="center" width="100%">
        <Pressable
          onPress={() => {
            setTabName('Starter')
          }}
          flex={1}
          _light={{
            bgColor: 'primary.50'
          }}
          _dark={{
            bgColor: 'customGray'
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Text
            py={1}
            fontSize="lg"
            fontWeight="medium"
            letterSpacing="0.4"
            _light={{
              color: 'coolGray.800'
            }}
            _dark={{
              color: 'coolGray.200'
            }}
          >
            Starter
          </Text>
          {tabName === 'Starter' ? (
            <Box w="100%">
              <Divider
                _light={{
                  bgColor: 'coolGray.800'
                }}
                _dark={{
                  bgColor: 'coolGray.50'
                }}
                py="0.5"
              />
            </Box>
          ) : (
            <Box w="100%">
              <Divider
                _light={{
                  bgColor: 'primary.50'
                }}
                _dark={{
                  bgColor: 'customGray'
                }}
                py="0.5"
              />
            </Box>
          )}
        </Pressable>

        <Pressable
          onPress={() => {
            setTabName('Professional')
          }}
          flex={1}
          _light={{
            bgColor: 'primary.900'
          }}
          _dark={{
            bgColor: 'primary.700'
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Text
            py={1}
            fontSize="lg"
            fontWeight="medium"
            letterSpacing="0.4"
            _light={{
              color: 'coolGray.50'
            }}
            _dark={{
              color: 'coolGray.50'
            }}
          >
            Professional
          </Text>
          {tabName === 'Professional' ? (
            <Box w="100%">
              <Divider
                _light={{
                  bgColor: 'primary.900'
                }}
                _dark={{
                  bgColor: 'coolGray.50'
                }}
                py="0.5"
              />
            </Box>
          ) : (
            <Box w="100%">
              <Divider
                _light={{
                  bgColor: 'primary.900'
                }}
                _dark={{
                  bgColor: 'primary.700'
                }}
                py="0.5"
              />
            </Box>
          )}
        </Pressable>
        <Pressable
          onPress={() => {
            setTabName('Enterprise')
          }}
          flex={1}
          _light={{
            bgColor: 'primary.50'
          }}
          _dark={{
            bgColor: 'customGray'
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Text
            py={1}
            fontSize="lg"
            fontWeight="medium"
            letterSpacing="0.4"
            _light={{
              color: 'coolGray.800'
            }}
            _dark={{
              color: 'coolGray.200'
            }}
          >
            Enterprise
          </Text>
          {tabName === 'Enterprise' ? (
            <Box w="100%">
              <Divider
                _light={{
                  bgColor: 'coolGray.800'
                }}
                _dark={{
                  bgColor: 'coolGray.50'
                }}
                py="0.5"
              />
            </Box>
          ) : (
            <Box w="100%">
              <Divider
                _light={{
                  bgColor: 'primary.50'
                }}
                _dark={{
                  bgColor: 'customGray'
                }}
                py="0.5"
              />
            </Box>
          )}
        </Pressable>
      </HStack>
      {tabName === 'Starter' ? (
        <VStack
          alignItems="center"
          mt={{ base: 6, md: '30px' }}
          space={{ base: 2, md: 2 }}
        >
          <Text
            _light={{ color: 'primary.900' }}
            _dark={{ color: 'primary.700' }}
            fontSize="2xl"
            textAlign="center"
            fontWeight={{ base: 'semibold', md: 'bold' }}
          >
            300 Visitors
          </Text>
          <Text
            px="10"
            _light={{ color: 'coolGray.500' }}
            _dark={{ color: 'coolGray.400' }}
            fontSize="sm"
            textAlign="center"
            fontWeight="medium"
          >
            Per Month
          </Text>
        </VStack>
      ) : tabName === 'Enterprise' ? (
        <VStack
          alignItems="center"
          mt={{ base: 6, md: '30px' }}
          space={{ base: 2, md: 2 }}
        >
          <Text
            _light={{ color: 'primary.900' }}
            _dark={{ color: 'primary.700' }}
            fontSize="2xl"
            textAlign="center"
            fontWeight={{ base: 'semibold', md: 'bold' }}
          >
            Custom
          </Text>
          <Text
            px="10"
            _light={{ color: 'coolGray.500' }}
            _dark={{ color: 'coolGray.400' }}
            fontSize="sm"
            textAlign="center"
            fontWeight="medium"
          >
            Talk to us.
          </Text>
        </VStack>
      ) : (
        <VStack
          alignItems="center"
          mt={{ base: 6, md: '30px' }}
          space={{ base: 2, md: 2 }}
        >
          <Text
            _light={{ color: 'primary.900' }}
            _dark={{ color: 'primary.700' }}
            fontSize="2xl"
            textAlign="center"
            fontWeight={{ base: 'semibold', md: 'bold' }}
          >
            5000 Visitors
          </Text>
          <Text
            px="10"
            _light={{ color: 'coolGray.500' }}
            _dark={{ color: 'coolGray.400' }}
            fontSize="sm"
            textAlign="center"
            fontWeight="medium"
          >
            Per Month
          </Text>
        </VStack>
      )}
    </>
  )
}

export default function () {
  const [tabName, setTabName] = React.useState('Professional')
  const [createStripeCheckoutPage, { loading }] = useLazyQuery(
    GET_STRIPE_CHECKOUT_LINK
  )
  const { push } = useRouter()

  const handlePress = () => {
    if (tabName === 'Enterprise') {
      window.open('https://interview.joeyfenny.com')
    } else {
      createStripeCheckoutPage({
        variables: {
          input: {
            plan: tabName
          }
        },
        onCompleted: async ({ createStripeCheckoutPage }) => {
          document.location = createStripeCheckoutPage.link

          return
        },
        onError: (error) => {
          alert(`There was an error: ${error}`)
        }
      })
    }
  }

  return (
    <DashboardLayout
      title={'Subscription Plans'}
      displaySidebar={false}
      displayScreenTitle={false}
    >
      <VStack
        safeAreaBottom
        borderRadius={{ md: '8' }}
        _light={{
          borderColor: 'coolGray.200',
          bg: { base: 'white' }
        }}
        _dark={{
          borderColor: 'coolGray.800',
          bg: { md: 'coolGray.900', base: 'coolGray.800' }
        }}
        px={{
          base: 4,
          md: 32
        }}
      >
        <Center mt="8">
          <IconSubscription />
        </Center>
        <Text
          fontSize="xl"
          textAlign="center"
          fontWeight="bold"
          mt="8"
          _light={{ color: 'coolGray.800' }}
          _dark={{ color: 'coolGray.100' }}
        >
          Upgrade your account
        </Text>
        <Text
          mt="3"
          _light={{ color: 'coolGray.500' }}
          _dark={{ color: 'coolGray.400' }}
          fontSize="sm"
          textAlign="center"
          fontWeight="medium"
        >
          Take your lead generation to the next level.
        </Text>
        <OptionSection tabName={tabName} setTabName={setTabName} />
        <Center mt={{ base: '18px', md: 15 }} pb="8" w="100%">
          <Button
            borderRadius="4"
            width="100%"
            size="md"
            py="4"
            _light={{
              bg: 'primary.900'
            }}
            _dark={{
              bg: 'primary.700',
              _pressed: { bg: 'primary.500' }
            }}
            onPress={handlePress}
            _text={{
              fontSize: 'sm',
              fontWeight: 'semibold'
            }}
          >
            {loading
              ? 'LOADING...'
              : tabName === 'Enterprise'
              ? 'CONTACT US'
              : 'UPGRADE NOW'}
          </Button>
        </Center>
      </VStack>
    </DashboardLayout>
  )
}
