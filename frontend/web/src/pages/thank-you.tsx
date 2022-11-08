import { NextSeo } from 'next-seo'
import ThankYou from 'shared/screens/ThankYou'

export default function Page() {
  return (
    <>
      <NextSeo
        title="SaleSpin - Thank You"
        description="Thank you for signing up."
        noindex={true}
      />
      <ThankYou />
    </>
  )
}
