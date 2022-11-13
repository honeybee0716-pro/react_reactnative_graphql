import { NextSeo } from 'next-seo'
import SignIn from 'shared/screens/SignInCustomer/dev'

export default function Page({ client }) {
  return (
    <>
      <NextSeo
        title="SaleSpin - Sign In"
        description="Sign in to your account"
        noindex={false}
      />
      <SignIn client={client} />
    </>
  )
}
