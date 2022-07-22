import { NextSeo } from 'next-seo'
import Dashboard from 'shared/screens/Dashboard'

export default function Page() {
  return (
    <>
      <NextSeo
        title="ClientEye - Dashboard"
        description="View your Dashboard."
        noindex={false}
      />
      <Dashboard />
    </>
  )
}
