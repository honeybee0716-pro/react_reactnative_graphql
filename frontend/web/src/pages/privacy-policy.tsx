import { NextSeo } from 'next-seo'
import PrivacyPolicy from 'shared/screens/PrivacyPolicy'

export default function Page() {
  return (
    <>
      <NextSeo
        title="SaleSpin - Privacy Policy"
        description="View our privacy policy."
        noindex={false}
      />
      <PrivacyPolicy />
    </>
  )
}
