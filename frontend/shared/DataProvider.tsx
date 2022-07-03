import React from 'react'
// import { useRouter } from 'solito/router'
// import AsyncStorage from '@react-native-community/async-storage'
import { gql, useLazyQuery } from '@apollo/client'
import { useRecoilState } from 'recoil'
import { userSubscriptionDataState } from './state'

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
    }
  }
`

export const DataProvider = ({ children }) => {
  // const { push } = useRouter()
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

  React.useEffect(() => {
    // setRoute(document.location.pathname);
    ;(async () => {
      await getUserSubscriptionData()
    })()
  }, [])

  React.useEffect(() => {
    if (data?.getUserSubscriptionData) {
      setUserSubscriptionData(data.getUserSubscriptionData)
    }
  }, [data])

  return children
}
