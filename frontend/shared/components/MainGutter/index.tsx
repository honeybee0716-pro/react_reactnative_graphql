import React from 'react'

import * as Styled from './styles'

interface MainGutterProps {
  children: any
}

const MainGutter = ({ children }: MainGutterProps) => (
  <Styled.MainGutter>{children}</Styled.MainGutter>
)

export default MainGutter
