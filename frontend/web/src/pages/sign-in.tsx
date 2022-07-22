import { NextSeo } from 'next-seo'
import SignIn from 'shared/screens/SignIn'

export default function Page() {
  return (
    <>
      <NextSeo
        title="ClientEye - Sign In"
        description="Sign in to your account"
        noindex={false}
      />
      <SignIn />
    </>
  )
}
