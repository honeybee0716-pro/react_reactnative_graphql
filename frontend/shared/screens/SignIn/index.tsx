import { Link } from 'solito/link'

import * as Styled from './styles'

export const SignIn = () => {
  return (
    <Styled.Container>
      <Link href="/home">
        <Styled.Header>Landing</Styled.Header>
      </Link>
    </Styled.Container>
  )
}
