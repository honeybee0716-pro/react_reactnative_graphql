import { NextSeo } from 'next-seo'
import SignUp from 'shared/screens/SignUp/dev'

export default function Page({ client }) {
  return (
    <>
      <NextSeo
        title="ClientEye - Sign Up"
        description="Sign up for an account"
        noindex={false}
      />
      <SignUp client={client} />
    </>
  )
}
