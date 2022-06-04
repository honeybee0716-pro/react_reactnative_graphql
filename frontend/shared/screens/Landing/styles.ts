import * as styled from '../../convertedComponents'

import { theme } from '../../styles/theme'

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${theme.colors.dark.background};
  padding: 20px;
`

export const Header = styled.Text`
  color: ${theme.colors.shared.white};
  font-family: ${theme.font.header};
  font-weight: bold;
  font-size: 24px;
`

export const Logo = styled.Image`
  height: 50px;
  resize-mode: contain;
  margin: 20px;
`
