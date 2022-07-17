import React from 'react'
import {
  HStack,
  Text,
  VStack,
  Center,
  Button,
  Pressable,
  useToast
} from 'native-base'
import { useRouter } from 'solito/router'
import { gql, useLazyQuery } from '@apollo/client'
import { theme } from 'shared/styles/theme'
import DashboardLayout from 'shared/layouts/DashboardLayout'

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
            setTabName('Standard')
          }}
          flex={1}
          _light={{
            bgColor:
              tabName === 'Standard'
                ? theme.colors.shared.clientEyePrimary
                : 'coolGray.200'
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
              color: tabName === 'Standard' ? 'white' : 'coolGray.800'
            }}
            _dark={{
              color: 'coolGray.200'
            }}
          >
            Standard
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setTabName('Custom')
          }}
          flex={1}
          _light={{
            bgColor:
              tabName === 'Custom'
                ? theme.colors.shared.clientEyePrimary
                : 'coolGray.200'
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
              color: tabName === 'Custom' ? 'white' : 'coolGray.800'
            }}
            _dark={{
              color: 'coolGray.200'
            }}
          >
            Custom
          </Text>
        </Pressable>
      </HStack>
      {tabName === 'Standard' ? (
        <VStack
          alignItems="center"
          mt={{ base: 6, md: '30px' }}
          space={{ base: 2, md: 2 }}
        >
          <Text
            _light={{ color: 'coolGray.800' }}
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
            $500 USD Per Month
          </Text>
        </VStack>
      ) : tabName === 'Custom' ? (
        <VStack
          alignItems="center"
          mt={{ base: 6, md: '30px' }}
          space={{ base: 2, md: 2 }}
        >
          <Text
            _light={{ color: 'coolGray.800' }}
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
            We will make a custom plan to fit your needs.
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
  const [tabName, setTabName] = React.useState('Standard')
  const [createStripeCheckoutPage, { loading }] = useLazyQuery(
    GET_STRIPE_CHECKOUT_LINK
  )
  const [createCustomStripeCheckoutPage, { loading: loadingCustomPlan }] =
    useLazyQuery(GET_STRIPE_CHECKOUT_LINK)

  const toast = useToast()

  const handlePress = () => {
    if (tabName === 'Custom') {
      window.open('https://clienteye.com/contact')
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
          toast.show({
            description: `There was an error: ${error}`
          })
        }
      })
    }
  }

  const handleAlreadyHaveCustomPlanPress = () => {
    createCustomStripeCheckoutPage({
      variables: {
        input: {
          plan: 'tempCustom'
        }
      },
      onCompleted: async ({ createStripeCheckoutPage }) => {
        document.location = createStripeCheckoutPage.link

        return
      },
      onError: (error) => {
        toast.show({
          description: `There was an error: ${error}`
        })
      }
    })
  }

  return (
    <DashboardLayout>
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
        <Text
          fontSize="xl"
          textAlign="center"
          fontWeight="bold"
          mt="8"
          _light={{ color: 'coolGray.800' }}
          _dark={{ color: 'coolGray.100' }}
        >
          Select a plan
        </Text>
        <Text
          mt="3"
          _light={{ color: 'coolGray.500' }}
          _dark={{ color: 'coolGray.400' }}
          fontSize="sm"
          textAlign="center"
          fontWeight="medium"
        >
          Unlock the next level.
        </Text>

        <OptionSection tabName={tabName} setTabName={setTabName} />

        <Center mt={{ base: '18px', md: 15 }} pb="8" w="100%">
          <Button
            borderRadius="4"
            width="20%"
            size="md"
            py="4"
            _light={{
              bg: theme.colors.shared.clientEyePrimary
            }}
            _hover={{
              bg: theme.colors.shared.clientEyePrimary
            }}
            // _dark={{
            //   bg: 'primary.700',
            //   _pressed: { bg: 'primary.500' }
            // }}
            onPress={handlePress}
            _text={{
              fontSize: 'sm',
              fontWeight: 'semibold'
            }}
          >
            {loading
              ? 'LOADING...'
              : tabName === 'Custom'
              ? 'CONTACT US'
              : 'UNLOCK NOW'}
          </Button>
          {tabName === 'Custom' ? (
            <Pressable onPress={handleAlreadyHaveCustomPlanPress}>
              <Text
                px="10"
                marginTop={3}
                marginBottom={0}
                _light={{ color: 'coolGray.500' }}
                _dark={{ color: 'coolGray.400' }}
                fontSize="sm"
                textAlign="center"
                fontWeight="medium"
              >
                {loadingCustomPlan
                  ? 'Loading...'
                  : 'Already on a custom package? Click here.'}
              </Text>
            </Pressable>
          ) : null}
        </Center>
      </VStack>
    </DashboardLayout>
  )
}
