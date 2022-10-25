import { NextSeo } from 'next-seo'
import Home from 'shared/screens/Home'

export default function Page() {
  return (
    <>
      <NextSeo
        title="SaaS Template - Dashboard"
        description="View your Dashboard."
        noindex={false}
      />
      <Home />
    </>
  )
}
