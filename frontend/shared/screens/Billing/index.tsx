import React, { Fragment, useState } from 'react'
import {
  Box,
  Center,
  Hidden,
  Text,
  Image,
  HStack,
  VStack,
  Pressable,
  useToast
} from 'native-base'
import { theme } from 'shared/styles/theme'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import DashboardLayout from 'shared/layouts/DashboardLayout'
import IconDownload from 'shared/components/icons/IconDownload'
import IconMoreVertical from 'shared/components/icons/IconMoreVertical'
import IconCreditCard from 'shared/components/icons/IconCreditCard'
import IconLightcoin from 'shared/components/icons/IconLightcoin'
import IconNFC from 'shared/components/icons/IconNFC'
import IconMasterCard from 'shared/components/icons/IconMasterCard'
import IconPlus from 'shared/components/icons/IconPlus'
import { gql, useLazyQuery } from '@apollo/client'
import { useRouter } from 'solito/router'
import { Prompt } from '../../components/Prompt/Prompt'
import { useRecoilState } from 'recoil'
import { userSubscriptionDataState } from '../../state'
import { useRouteAuthentication } from '../../hooks/useRouteAuthentication/useRouteAuthentication'

const CANCEL_SUBSCRIPTION = gql`
  query CancelSubscription {
    cancelSubscription {
      message
      status
    }
  }
`

const GET_STRIPE_CUSTOMER_PORTAL = gql`
  query GetStripeCustomerPortal {
    getStripeCustomerPortal {
      message
      status
      link
    }
  }
`

const RowItem = ({
  text,
  disabled,
  onPress
}: {
  text: string
  disabled: boolean
  onPress: any
}) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      marginX="3"
      marginTop="3"
      padding="7"
      paddingLeft="2"
      borderRadius="2xl"
      backgroundColor="white"
      borderWidth="1"
      borderColor={theme.colors.shared.softer3Gray}
    >
      <Text
        flex="1"
        marginLeft="3"
        fontWeight="medium"
        fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}
      >
        {text}
      </Text>
    </Pressable>
  )
}

export default function Billing() {
  useRouteAuthentication()
  const { push } = useRouter()
  const toast = useToast()
  const [cancelSubscription, { loading }] = useLazyQuery(CANCEL_SUBSCRIPTION)
  const [getStripeCustomerPortal, { loading: loadingGetStripeCustomerPortal }] =
    useLazyQuery(GET_STRIPE_CUSTOMER_PORTAL)
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const [userSubscriptionData] = useRecoilState<any>(userSubscriptionDataState)

  const handleCancelSubscription = () => {
    setIsOpen(true)
  }

  const confirmCancelSubscription = () => {
    cancelSubscription({
      onCompleted: async ({ cancelSubscription }) => {
        if (cancelSubscription.status === 'success') {
          push('/goodbye')

          return
        }
      },
      onError: (error) => {
        toast.show({
          description: `There was an error: ${error}`
        })
      }
    })
  }

  const handleManageBillingPress = () => {
    getStripeCustomerPortal({
      onCompleted: async ({ getStripeCustomerPortal }) => {
        if (getStripeCustomerPortal.status === 'success') {
          document.location = getStripeCustomerPortal.link

          return
        }
      },
      onError: (error) => {
        toast.show({
          description: `There was an error: ${error}`
        })
      }
    })
  }

  return (
    <>
      {isOpen ? (
        <Prompt
          title="Cancel Subscription"
          description="This will take effect immediately. Are you sure you want to cancel your subscription?"
          cancelText="Nevermind"
          submitText="Confirm"
          onCancel={onClose}
          onSubmit={confirmCancelSubscription}
        />
      ) : null}

      <DashboardLayout>
        {userSubscriptionData ? (
          <>
            <RowItem
              onPress={
                userSubscriptionData?.isInTrial
                  ? null
                  : handleCancelSubscription
              }
              disabled={userSubscriptionData?.isInTrial}
              text={
                userSubscriptionData?.isInTrial
                  ? 'You are on a trial plan. You can upgrade your plan at anytime.'
                  : 'Cancel subscription.'
              }
            />
            {userSubscriptionData?.isCustomPlan !== true ? (
              <RowItem
                onPress={() => push('/pricing')}
                text="View our pricing options."
              />
            ) : null}
            {userSubscriptionData?.isCustomPlan !== true ? (
              <RowItem
                onPress={handleManageBillingPress}
                text={
                  loadingGetStripeCustomerPortal
                    ? 'Loading...'
                    : 'Manage billing account.'
                }
              />
            ) : null}
          </>
        ) : null}
      </DashboardLayout>
    </>
  )
}
