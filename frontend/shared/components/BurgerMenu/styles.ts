import { Dimensions } from 'react-native'
import * as styled from '../../styles/convertedComponents'
import {
  largeScreenOnly,
  smallOrMediumScreenOnly
} from '../../utils/crossPlatformMediaQueries'
import { webOnly, mobileOnly } from '../../utils/deviceSpecificCSS'

export const MenuIcon = styled.Image`
  height: 25px;
  width: 25px;
  ${largeScreenOnly(`
    display: none;
  `)}
`

export const MenuContainer = styled.View`
  height: ${Dimensions.get('window').height}px;
  width: ${Dimensions.get('window').width}px;
  position: absolute;
`

export const MenuLink = styled.Text``
