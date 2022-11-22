import React from 'react'
import { Platform } from 'react-native'
import { useRouter } from 'solito/router'
// import AsyncStorage from '@react-native-community/async-storage'
import { gql, useLazyQuery } from '@apollo/client'
import { useRecoilState } from 'recoil'
import OneSignal from 'react-onesignal'
import { userSubscriptionDataState, jwtState } from './state'

const GET_BUSINESS_SUBSCRIPTION_DATA = gql`
  query Query {
    getBusinessSubscriptionData {
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
  const [getBusinessSubscriptionData, { data, loading }] = useLazyQuery(
    GET_BUSINESS_SUBSCRIPTION_DATA,
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
        await getBusinessSubscriptionData()
      } else {
        if (
          document.location.href.includes('/home') ||
          document.location.href.includes('/billing') ||
          document.location.href.includes('transactions') ||
          document.location.href.includes('customers') ||
          document.location.href.includes('tiers') ||
          document.location.href.includes('automation') ||
          document.location.href.includes('products') ||
          document.location.href.includes('reports') ||
          document.location.href.includes('branding') ||
          document.location.href.includes('campaigns') ||
          document.location.href.includes('help') ||
          document.location.href.includes('account') ||
          document.location.href.includes('shopping')
        ) {
          push('/sign-in-business')
        }
      }
    })()
  }, [])

  React.useEffect(() => {
    console.log("data:",data)
    if (data?.getBusinessSubscriptionData) {
      setUserSubscriptionData(data.getBusinessSubscriptionData)
      // will need to change the line below to not look for document.location.href once we have mobile app
      if (
        data.getBusinessSubscriptionData.redirectToOTPPage &&
        !document.location.href.includes('otp')
      ) {
        if(data.getBusinessSubscriptionData.stripeCustomer.metadata.accountType==="business")
        push('/otp')
        else
        push('/otp-customer')
      }else{
        if(data.getBusinessSubscriptionData.stripeCustomer.metadata.accountType==="customer" && 
          ( document.location.href.includes('customers') ||
          document.location.href.includes('tiers') ||
          document.location.href.includes('automation') ||
          document.location.href.includes('products') ||
          document.location.href.includes('reports') ||
          document.location.href.includes('branding') ||
          document.location.href.includes('campaigns') ))
          push('/home')
        else if(data.getBusinessSubscriptionData.stripeCustomer.metadata.accountType==="business" && 
        document.location.href.includes('shopping'))
        push('/home')  
      }
    }
  }, [data])

  React.useEffect(() => {
    if (jwt) {
      ;(async () => {
        await getBusinessSubscriptionData()
      })()
    }
  }, [jwt])

  return children
}
