import { NextSeo } from 'next-seo'
import HelpAndSupport from 'shared/screens/HelpAndSupport'

export default function Page() {
  return (
    <>
      <NextSeo
        title="ClientEye - Help and Support"
        description="Get help using ClientEye"
        noindex={false}
      />
      <HelpAndSupport />
    </>
  )
}
