import { NextSeo } from 'next-seo'
import HelpAndSupport from 'shared/screens/HelpAndSupport'

export default function Page() {
  return (
    <>
      <NextSeo
        title="SaaS Template - Help and Support"
        description="Get help using SaaS Template"
        noindex={false}
      />
      <HelpAndSupport />
    </>
  )
}
