import { Link } from 'solito/link'

import * as Styled from './styles'

export const SignIn = () => {
  return (
    <Styled.Container>
      <Link href="/home">
        <Styled.Header>This is the sign in screen</Styled.Header>
      </Link>
      <Link href="/home">
        <Styled.Header>Go to landing screen</Styled.Header>
      </Link>
    </Styled.Container>
  )
}
