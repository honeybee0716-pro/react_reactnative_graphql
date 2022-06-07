import { Link } from 'solito/link'

import * as Styled from './styles'
import { Header } from '../../components/Header'

export const Landing = () => {
  return (
    <Styled.Container>
      <Header>Landing Page Goes Here</Header>
      <Link href="/sign-in">
        <Header>Go to Sign In Screen</Header>
      </Link>
    </Styled.Container>
  )
}
