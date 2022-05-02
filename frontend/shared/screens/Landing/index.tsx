import { Navbar } from '../../components/Navbar'
import { Feed } from '../../components/Feed'
import * as Styled from './styles'
import { MainGutter } from '../../components/MainGutter/styles'

export const Landing = () => {
  return (
    <Styled.Container>
      <MainGutter>
        <Navbar />
        <Feed />
      </MainGutter>
    </Styled.Container>
  )
}
