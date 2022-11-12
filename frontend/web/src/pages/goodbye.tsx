import { NextSeo } from 'next-seo'
import Goodbye from 'shared/screens/Goodbye'

export default function Page() {
  return (
    <>
      <NextSeo
        title="SaleSpin - Goodbye"
        description="We're sorry to see you go."
        noindex={true}
      />
      <Goodbye />
    </>
  )
}
