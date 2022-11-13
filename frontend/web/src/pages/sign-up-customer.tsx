import { NextSeo } from 'next-seo'
import SignUp from 'shared/screens/SignUpCustomer'

export default function Page({ client }) {
  return (
    <>
      <NextSeo
        title="SaleSpin - Sign Up"
        description="Sign up for an account"
        noindex={false}
      />
      <SignUp client={client} />
    </>
  )
}
