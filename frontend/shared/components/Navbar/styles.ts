import styled from 'styled-components/native'

import { View, Text } from '../../convertedComponents'

import { theme } from '../../styles/theme'

export const Container = styled.View`
  width: 100%;
  height: 100px;
  background-color: ${theme.colors.shared.pink};
`

export const Logo = styled.Image`
  height: 50px;
  resize-mode: contain;
  margin: 20px;
`
