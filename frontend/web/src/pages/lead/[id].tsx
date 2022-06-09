import Lead from 'shared/screens/Lead'
import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()
  const { id } = router.query

  return <Lead id={id} />
}
