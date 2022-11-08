import { NextSeo } from 'next-seo'
import { SignOut } from 'shared/screens/SignOut'

export default function Page({ client }) {
  return (
    <>
      <NextSeo
        title="SaleSpin - Sign Out"
        description="Sign our of your account"
        noindex={true}
      />
      <SignOut client={client} />
    </>
  )
}
