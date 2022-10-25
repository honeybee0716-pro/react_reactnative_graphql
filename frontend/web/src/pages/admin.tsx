import Admin from 'shared/screens/Admin'
import { NextSeo } from 'next-seo'

export default function Page() {
  return (
    <>
      <NextSeo
        title="SaaS Template - Admin"
        description="Admin portal"
        noindex={true}
      />
      <Admin />
    </>
  )
}
