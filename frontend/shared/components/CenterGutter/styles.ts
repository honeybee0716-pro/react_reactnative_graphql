import styled from 'styled-components/native'

import { webOnly } from '../../utils/crossPlatformMediaQueries'

export const CenterGutter = styled.View`
  position: relative;
  ${webOnly(`
    padding-left: 22.5vw;
    padding-right: 22.5vw;
  `)}
`
