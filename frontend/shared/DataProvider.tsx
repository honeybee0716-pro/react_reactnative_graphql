import React from 'react'
import { Platform } from 'react-native'
import { useRouter } from 'solito/router'
// import AsyncStorage from '@react-native-community/async-storage'
import { gql, useLazyQuery } from '@apollo/client'
import { useRecoilState } from 'recoil'
import OneSignal from 'react-onesignal'
import { userSubscriptionDataState, jwtState } from './state'

const GET_USER_SUBSCRIPTION_DATA = gql`
  query Query {
    getUserSubscriptionData {
      message
      status
      stripeCustomer
      activeSubscription
      remainingCredits
      isInTrial
      redirectToPricingPage
      redirectToOTPPage
      isCustomPlan
      userInternalID
      userEmail
    }
  }
`

export const DataProvider = ({ children }) => {
  const { push } = useRouter()
  // const [route, setRoute] = React.useState<string | undefined>()
  const [getUserSubscriptionData, { data, loading }] = useLazyQuery(
    GET_USER_SUBSCRIPTION_DATA,
    {
      fetchPolicy: 'network-only'
    }
  )
  const [userSubscriptionData, setUserSubscriptionData] = useRecoilState<any>(
    userSubscriptionDataState
  )
  const [jwt, setJWT] = useRecoilState<any>(jwtState)

  React.useEffect(() => {
    // setRoute(document.location.pathname);
    ;(async () => {
      if (Platform.OS === 'web') {
        const ONESIGNAL_APP_ID: string =
          process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID || ''
        await OneSignal.init({
          appId: ONESIGNAL_APP_ID,
          allowLocalhostAsSecureOrigin: true
        })
      }

      const jwt = await localStorage.getItem('jwt')

      if (jwt) {
        // caches the request
        await getUserSubscriptionData()
      } else {
        if (
          document.location.href.includes('/home') ||
          document.location.href.includes('/billing')
        ) {
          push('/sign-in')
        }
      }
    })()
  }, [])

  React.useEffect(() => {
    if (data?.getUserSubscriptionData) {
      setUserSubscriptionData(data.getUserSubscriptionData)
      // will need to change the line below to not look for document.location.href once we have mobile app
      if (
        data.getUserSubscriptionData.redirectToOTPPage &&
        !document.location.href.includes('otp')
      ) {
        push('/otp')
      }
    }
  }, [data])

  React.useEffect(() => {
    if (jwt) {
      ;(async () => {
        await getUserSubscriptionData()
      })()
    }
  }, [jwt])

  return children
}
