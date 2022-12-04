import React, { useEffect, useState } from 'react'
import { Box, Text, Pressable, useToast, Input } from 'native-base'
import { useRecoilState } from 'recoil'
import QRCode from 'react-qr-code'

import { theme } from 'shared/styles/theme'
import DashboardLayout from 'shared/layouts/DashboardLayout'

import { userSubscriptionDataState } from '../../state'

export default function Sharing() {
  const toast = useToast()
  const [userSubscriptionData] = useRecoilState<any>(userSubscriptionDataState)
  const [url, setUrl] = useState('')

  const copyToClipBoard = async () => {
    await navigator.clipboard.writeText(url)
    toast.show({
      description: 'Copied to clipboard.'
    })
  }

  useEffect(() => {
    userSubscriptionData?.stripeCustomer?.metadata?.accountType == 'customer'
      ? setUrl(
          `${process.env.NEXT_PUBLIC_ROOT_URL}/sign-up-customer?customerReferral=${userSubscriptionData?.stripeCustomer?.metadata?.userID}`
        )
      : setUrl(
          `${process.env.NEXT_PUBLIC_ROOT_URL}/sign-up-customer?businessID=${userSubscriptionData?.stripeCustomer?.metadata?.userID}`
        )
  }, [userSubscriptionDataState])

  return (
    <>
      <DashboardLayout>
        <Box
          style={{
            width: '100%',
            height: '40%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <QRCode
            size={255}
            style={{ height: 'auto', width: '20%' }}
            value={url}
            viewBox={`0 0 256 256`}
          />
        </Box>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Input
            value={url}
            editable={false}
            type={'text'}
            paddingLeft="3"
            paddingTop="3"
            paddingRight="3"
            paddingBottom="3"
            w="1/3"
            borderRadius="xl"
            borderWidth="2"
            borderColor={theme.colors.shared.softerGray}
            fontSize={{ base: 'xs', sm: 'md' }}
            fontWeight="medium"
            backgroundColor={theme.colors.shared.aliceBlue}
            placeholder="Enter your password"
          />
          <Pressable
            onPress={() => {
              copyToClipBoard()
            }}
            style={{
              height: 47,
              width: '10%',
              borderRadius: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: theme.colors.shared.SaleSpinPrimary,
              marginLeft: 10
            }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Copy</Text>
          </Pressable>
        </Box>
      </DashboardLayout>
    </>
  )
}
