import { Link } from 'solito/link'

import * as Styled from './styles'

export const Landing = () => {
  return (
    <Styled.Container>
      <Styled.Header>Landing Screen</Styled.Header>
      <Link href="/sign-in">
        <Styled.Link>Sign In</Styled.Link>
      </Link>
      <Styled.Logo
        src={require('../../assets/images/logo.png')}
        source={require('../../assets/images/logo.png')}
        alt="Keep Logo"
      />
    </Styled.Container>
  )
}
