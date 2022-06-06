import { Link } from 'solito/link'

import * as Styled from './styles'
import { Navbar } from '../../components/Navbar'

export const Landing = () => {
  return (
    <Styled.Container>
      <Navbar />
      <Styled.Header>This is the landing screen</Styled.Header>
      <Link href="/sign-in">
        <Styled.Link>Go to Sign In Screen</Styled.Link>
      </Link>
    </Styled.Container>
  )
}
