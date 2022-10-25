import Billing from 'shared/screens/Billing'
import { NextSeo } from 'next-seo'

export default function Page() {
  return (
    <>
      <NextSeo
        title="SaaS Template - Manage Billing"
        description="Create, edit, and manage your billing information."
        noindex={true}
      />
      <Billing />
    </>
  )
}
