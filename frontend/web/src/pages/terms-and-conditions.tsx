import { NextSeo } from 'next-seo'
import TermsAndConditions from 'shared/screens/TermsAndConditions'

export default function Page() {
  return (
    <>
      <NextSeo
        title="SaaS Template - Terms and Conditions"
        description="Terms and Conditions"
        noindex={false}
      />
      <TermsAndConditions />
    </>
  )
}
