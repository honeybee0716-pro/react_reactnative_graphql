import { NextSeo } from 'next-seo'
import ThankYou from 'shared/screens/ThankYou'

export default function Page() {
  return (
    <>
      <NextSeo
        title="SaaS Template - Thank You"
        description="Thank you for signing up."
        noindex={true}
      />
      <ThankYou />
    </>
  )
}
