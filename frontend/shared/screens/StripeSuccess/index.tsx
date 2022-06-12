import React from 'react'
import { Text, VStack, Hidden } from 'native-base'
import { useRouter } from 'solito/router'
import IconBalanceCheckTwo from './components/IconBalanceCheckTwo'
import DashboardLayout from '../../layouts/DashboardLayout'

export default function StripeSuccess() {
  const { push } = useRouter()

  React.useEffect(() => {
    setTimeout(() => {
      push('/home')
    }, 5000)
  }, [])

  return (
    <>
      <Hidden from="md">
        <VStack
          flex={1}
          px={{ base: 4, md: 8 }}
          py={{ base: 4, md: 8 }}
          borderRadius={{ md: '8' }}
          _light={{
            borderColor: 'coolGray.200',
            bg: { base: 'coolGray.50' }
          }}
          _dark={{
            borderColor: 'coolGray.800',
            bg: { md: 'coolGray.900', base: 'coolGray.800' }
          }}
          borderWidth="1"
        >
          <VStack
            px={{ md: 8 }}
            mt="120px"
            alignItems="center"
            justifyContent="center"
          >
            <IconBalanceCheckTwo />
            <VStack alignItems="center" space={1} mb="8" mt="26px">
              <Text
                _dark={{ color: 'coolGray.400' }}
                _light={{ color: 'coolGray.500' }}
                fontSize="sm"
              >
                Saving Account
              </Text>
              <Text
                _dark={{ color: 'coolGray.50' }}
                _light={{ color: 'coolGray.800' }}
                fontSize="md"
                fontWeight="medium"
              >
                Axis Bank of India - 2445
              </Text>
            </VStack>
            <VStack alignItems="center" space={1}>
              <Text
                _dark={{ color: 'coolGray.400' }}
                _light={{ color: '#979797' }}
                fontSize="md"
              >
                Account Balance
              </Text>
              <Text
                _dark={{ color: 'coolGray.50' }}
                _light={{ color: 'coolGray.800' }}
                fontSize="xl"
                fontWeight="medium"
              >
                Rs. 10,000.00
              </Text>
            </VStack>
          </VStack>
        </VStack>
      </Hidden>

      <Hidden till="md">
        <DashboardLayout title="Success" displaySidebar={false}>
          <VStack
            flex={1}
            px={{ base: 4, md: 8 }}
            py={{ base: 4, md: 8 }}
            borderRadius={{ md: '8' }}
            _light={{
              borderColor: 'coolGray.200',
              bg: { base: 'coolGray.50' }
            }}
            _dark={{
              borderColor: 'coolGray.800',
              bg: { md: 'coolGray.900', base: 'coolGray.800' }
            }}
            borderWidth="1"
          >
            <VStack
              px={{ md: 8 }}
              mt="96px"
              alignItems="center"
              justifyContent="center"
            >
              <IconBalanceCheckTwo />
              <VStack alignItems="center" space={1} mb="9" mt="26px">
                <Text
                  _dark={{ color: 'coolGray.400' }}
                  _light={{ color: 'coolGray.500' }}
                  fontSize="sm"
                >
                  Thank you
                </Text>
                <Text
                  _dark={{ color: 'coolGray.50' }}
                  _light={{ color: 'coolGray.800' }}
                  fontSize="md"
                  fontWeight="medium"
                >
                  Your subscription has been activated.
                </Text>
              </VStack>
              <VStack alignItems="center" space={1}>
                <Text
                  _dark={{ color: 'coolGray.50' }}
                  _light={{ color: 'coolGray.800' }}
                  fontSize="xl"
                  fontWeight="medium"
                >
                  You will be redirected in 5 seconds.
                </Text>
              </VStack>
            </VStack>
          </VStack>
        </DashboardLayout>
      </Hidden>
    </>
  )
}
