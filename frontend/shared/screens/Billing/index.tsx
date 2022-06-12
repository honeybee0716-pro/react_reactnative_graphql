import React from 'react'
import {
  HStack,
  Icon,
  Text,
  VStack,
  Avatar,
  Pressable,
  Center,
  IconButton,
  Radio,
  Divider
} from 'native-base'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import DashboardLayout from '../../layouts/DashboardLayout'
import { gql, useLazyQuery } from '@apollo/client'
import { useRouter } from 'solito/router'

const CANCEL_SUBSCRIPTION = gql`
  query CancelSubscription {
    cancelSubscription {
      message
      status
    }
  }
`

export default function ManageAccount() {
  const [cancelSubscription, { loading }] = useLazyQuery(CANCEL_SUBSCRIPTION)
  const { push } = useRouter()

  const handleCancelSubscription = () => {
    const confirm = window.confirm(
      'Are you sure you want to cancel your subscription?'
    )

    if (confirm) {
      cancelSubscription({
        onCompleted: async ({ cancelSubscription }) => {
          if (cancelSubscription.status === 'success') {
            push('/goodbye')

            return
          }
        },
        onError: (error) => {
          alert(`There was an error: ${error}`)
        }
      })
    }
  }

  return (
    <DashboardLayout title={'Billing'} displayScreenTitle={true}>
      <VStack
        px={{ base: 4, md: 8 }}
        py={{ base: 4, md: 8 }}
        borderRadius={{ md: '8' }}
        _light={{
          borderColor: 'coolGray.200',
          bg: { base: 'white' }
        }}
        _dark={{
          borderColor: 'coolGray.800',
          bg: { md: 'coolGray.900', base: 'coolGray.800' }
        }}
        borderWidth={{ md: '1' }}
        borderBottomWidth={{ base: '1', md: '0' }}
        space="9"
      >
        <Pressable onPress={handleCancelSubscription}>
          <HStack alignItems="center" space="3">
            <Icon
              as={Ionicons}
              name={'close'}
              _light={{ color: 'coolGray.500' }}
              _dark={{ color: 'coolGray.400' }}
              size="6"
            />
            <Text
              _light={{ color: 'coolGray.800' }}
              _dark={{ color: 'coolGray.50' }}
              fontSize="md"
              fontWeight="medium"
            >
              Cancel subscription
            </Text>
          </HStack>
        </Pressable>
      </VStack>
    </DashboardLayout>
  )
}
