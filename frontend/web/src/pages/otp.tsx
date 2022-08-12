import { NextSeo } from 'next-seo'
import OTP from 'shared/screens/OTP/dev'

export default function Page() {
  return (
    <>
      <NextSeo
        title="ClientEye - OTP"
        description="Confirm your one time passcode."
        noindex={true}
      />
      <OTP />
    </>
  )
}
