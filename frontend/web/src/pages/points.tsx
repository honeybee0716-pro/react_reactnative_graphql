import { NextSeo } from 'next-seo'
import Points from 'shared/screens/Points'

export default function Page() {
  return (
    <>
      <NextSeo
        title="SaleSpin - Manage Points"
        description="View your points information."
        noindex={true}
      />
      <Points />
    </>
  )
}
