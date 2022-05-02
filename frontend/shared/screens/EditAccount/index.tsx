import { Navbar } from '../../components/Navbar'
import { Feed } from '../../components/Feed'
import * as Styled from './styles'
import { MainGutter } from '../../components/MainGutter/styles'

export const HomeScreen = () => {
  return (
    <Styled.Container>
      <MainGutter>
        <Navbar />
        <Feed />
      </MainGutter>
    </Styled.Container>
  )
}
