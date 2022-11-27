import { NextSeo } from 'next-seo'
import OTP from 'shared/screens/OTP'

export default function Page() {
  return (
    <>
      <NextSeo
        title="SaleSpin - OTP"
        description="Confirm your one time passcode."
        noindex={true}
      />
      <OTP />
    </>
  )
}
