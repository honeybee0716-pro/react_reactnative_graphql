import { NextSeo } from 'next-seo'
import OTPCUST from 'shared/screens/OTPCustomer'

export default function Page() {
  return (
    <>
      <NextSeo
        title="SaleSpin - OTP"
        description="Confirm your one time passcode."
        noindex={true}
      />
      <OTPCUST />
    </>
  )
}
