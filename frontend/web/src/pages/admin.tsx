import Admin from 'shared/screens/Admin'
import { NextSeo } from 'next-seo'

export default function Page() {
  return (
    <>
      <NextSeo
        title="SaleSpin - Admin"
        description="Admin portal"
        noindex={true}
      />
      <Admin />
    </>
  )
}
