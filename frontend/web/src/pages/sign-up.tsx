import { NextSeo } from 'next-seo'
import SignUp from 'shared/screens/SignUp'

export default function Page({ client }) {
  return (
    <>
      <NextSeo
        title="SaaS Template - Sign Up"
        description="Sign up for an account"
        noindex={false}
      />
      <SignUp client={client} />
    </>
  )
}
