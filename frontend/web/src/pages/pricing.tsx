import { NextSeo } from 'next-seo'
import Pricing from 'shared/screens/Pricing'

export default function Page() {
  return (
    <>
      <NextSeo
        title="SaaS Template - Pricing"
        description="View our pricing options."
        noindex={true}
      />
      <Pricing />
    </>
  )
}
