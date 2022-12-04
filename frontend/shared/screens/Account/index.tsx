import React from 'react'
import {
  Box,
  Center,
  Hidden,
  Text,
  Image,
  VStack,
  Checkbox,
  Pressable,
  useToast
} from 'native-base'
import { useRouter } from 'solito/router'
import { theme } from 'shared/styles/theme'
import { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import DashboardLayout from 'shared/layouts/DashboardLayout'
import IconCornerUpRight from 'shared/components/icons/IconCornerUpRight'
import IconDollarSign from 'shared/components/icons/IconDollarSign'
import IconDownload from 'shared/components/icons/IconDownload'
import IconMoreVertical from 'shared/components/icons/IconMoreVertical'
import IconChevronDown from 'shared/components/icons/IconChevronDown'
import IconCreditCard from 'shared/components/icons/IconCreditCard'
import IconLightcoin from 'shared/components/icons/IconLightcoin'
import IconNFC from 'shared/components/icons/IconNFC'
import IconEdit from 'shared/components/icons/IconEdit'
import IconMasterCard from 'shared/components/icons/IconMasterCard'
import IconVISA from 'shared/components/icons/IconVISA'
import IconHome from 'shared/components/icons/IconHome'
import IconGlobe from 'shared/components/icons/IconGlobe'
import IconPlus from 'shared/components/icons/IconPlus'
import { useRecoilState } from 'recoil'
import { userSubscriptionDataState, jwtState } from '../../state'
import { gql, useLazyQuery } from '@apollo/client'
import LoadingSpinner from '../../components/LoadingSpinner'

const GET_BUSINESS_DETAILS = gql`
  query getBusinessDetails {
    getBusinessDetails {
      message
      status
      dataBusiness
    }
  }
`

const GET_CUSTOMER_DETAILS = gql`
  query getCustomerDetails {
    getCustomerDetails {
      message
      status
      dataBusiness
    }
  }
`

export default function Account() {
  const toast = useToast()
  const { push } = useRouter()

  const [userSubscriptionData, setUserSubscriptionData] = useRecoilState<any>(
    userSubscriptionDataState
  )

  const [loading, setLoading] = React.useState(true)
  const [getB] = useLazyQuery(GET_BUSINESS_DETAILS)
  const [getC] = useLazyQuery(GET_CUSTOMER_DETAILS)

  const [bd, setBd] = React.useState({})

  React.useEffect(() => {
    console.log(userSubscriptionData)
    if (
      userSubscriptionData.stripeCustomer.metadata.accountType === 'business'
    ) {
      getB({
        onCompleted: async ({ getBusinessDetails }) => {
          if (getBusinessDetails?.status === 'success') {
            console.log(getBusinessDetails.dataBusiness)
            setBd(getBusinessDetails.dataBusiness)
            setLoading(false)
          }
          if (getBusinessDetails?.message) {
            toast.show({
              description: getBusinessDetails.message
            })
            return
          } else {
            toast.show({
              description: 'There was a problem....'
            })
          }
        },
        onError: (error) => {
          toast.show({
            description: `${error.message}`
          })
        }
      })
    } else if (
      userSubscriptionData.stripeCustomer.metadata.accountType === 'customer'
    ) {
      getC({
        onCompleted: async ({ getCustomerDetails }) => {
          if (getCustomerDetails?.status === 'success') {
            console.log(getCustomerDetails.dataBusiness)
            setBd(getCustomerDetails.dataBusiness)
            setLoading(false)
          }
          if (getCustomerDetails?.message) {
            toast.show({
              description: getCustomerDetails.message
            })
            return
          } else {
            toast.show({
              description: 'There was a problem....'
            })
          }
        },
        onError: (error) => {
          toast.show({
            description: `${error.message}`
          })
        }
      })
    }
  }, [userSubscriptionData])

  return (
    <DashboardLayout>
      {loading ? (
        <div>
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div>
            <h1>Account Page</h1>
            <p>
              Account type:{' '}
              {userSubscriptionData.stripeCustomer.metadata.accountType}
            </p>
            <p>firstname: {bd?.firstName}</p>
            <p>lastname: {bd?.lastName}</p>
            <p>email: {bd?.email}</p>
            <p>company name: {bd?.companyName}</p>
          </div>

          <Pressable
            width={100}
            backgroundColor={theme.colors.shared.SaleSpinPrimary}
            onPress={() => push('/sign-out')}
            padding="10px"
          >
            <Center>
              <Text color={theme.colors.shared.white}>Sign out</Text>
            </Center>
          </Pressable>
        </>
      )}
    </DashboardLayout>
  )
}
