import { Link } from 'solito/link'

import * as Styled from './styles'

export const Landing = () => {
  return (
    <Styled.Container>
      <div>Landing</div>
      <Link href="/sign-in">
        <div>Sign in</div>
      </Link>
      <Link href="/sign-up">
        <div>Sign up</div>
      </Link>
    </Styled.Container>
  )
}
