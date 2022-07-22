import { NextSeo } from 'next-seo'
import Credits from 'shared/screens/Billing'

export default function Page() {
  return (
    <>
      <NextSeo
        title="ClientEye - Manage Credits"
        description="View your credit information."
        noindex={true}
      />
      <Credits />
    </>
  )
}
