import React from 'react'
import { Text, VStack, Hidden } from 'native-base'
import { useRouter } from 'solito/router'
import DashboardLayout from '../../layouts/DashboardLayout'

export default function StripeSuccess() {
  const { push } = useRouter()

  React.useEffect(() => {
    setTimeout(() => {
      push('/pricing')
    }, 5000)
  }, [])

  return (
    <>
      <Hidden till="md">
        <DashboardLayout
          title="Subscription Canelled"
          displaySidebar={false}
          displayScreenTitle={false}
        >
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
              <VStack alignItems="center" space={1} mb="9" mt="26px">
                <Text
                  _dark={{ color: 'coolGray.50' }}
                  _light={{ color: 'coolGray.800' }}
                  fontSize="xl"
                  fontWeight="medium"
                >
                  Goodbye! We're sad to see you go.
                </Text>
                <Text
                  _dark={{ color: 'coolGray.50' }}
                  _light={{ color: 'coolGray.800' }}
                  fontSize="xl"
                  fontWeight="medium"
                >
                  Your subscription has been cancelled.
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
