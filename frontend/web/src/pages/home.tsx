import { NextSeo } from 'next-seo'
import Home from 'shared/screens/Home'
import { pageTitleState} from 'shared/state'
import { useRecoilState } from 'recoil'

export default function Page() {

  const [pageTitle,setPageTitle]=useRecoilState<any>(
    pageTitleState
  )

  return (
    <>
      <NextSeo
        title={pageTitle?pageTitle.companyName:"SaleSpin - Dashboard"}
        description="View your Dashboard."
        noindex={false}
      />
      <Home />
    </>
  )
}
