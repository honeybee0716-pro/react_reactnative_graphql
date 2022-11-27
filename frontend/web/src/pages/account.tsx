import Account from 'shared/screens/Account'
import { NextSeo } from 'next-seo'

export default function Page() {
  return (
    <>
      <NextSeo
        title="SaleSpin - Manage Account"
        description="Create, edit, and manage your account information."
        noindex={true}
      />
      <Account />
    </>
  )
}
