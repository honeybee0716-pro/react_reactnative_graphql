import React from 'react'

import * as Styled from './styles'

interface CenterGutterProps {
  children: any
}

const CenterGutter = ({ children }: CenterGutterProps) => (
  <Styled.CenterGutter>{children}</Styled.CenterGutter>
)

export default CenterGutter
