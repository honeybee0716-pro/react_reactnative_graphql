import { NextSeo } from 'next-seo'
import HelpAndSupport from 'shared/screens/HelpAndSupport'

export default function Page() {
  return (
    <>
      <NextSeo
        title="SaleSpin - Help and Support"
        description="Get help using SaleSpin"
        noindex={false}
      />
      <HelpAndSupport />
    </>
  )
}
