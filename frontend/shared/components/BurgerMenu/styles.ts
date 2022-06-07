import { Dimensions } from 'react-native'
import * as styled from '../../convertedComponents'
import {
  largeScreenOnly,
  smallOrMediumScreenOnly
} from '../../utils/crossPlatformMediaQueries'
import { webOnly, mobileOnly } from '../../utils/deviceSpecificCSS'

export const MenuIconContainer = styled.TouchableOpacity`
  height: 25px;
  width: 25px;
  ${largeScreenOnly(`
    display: none;
  `)}
`

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

export const LinkText = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  ${mobileOnly(`
    font-size: 16px;
  `)}
`

export const HamburgerMenu = styled.View`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: red;
`

export const Icon = styled.Image`
  height: 25px;
  width: 25px;
`
export const MenuIsOpenContainer = styled.View`
  position: absolute;
  z-index: 1;
  height: 100vh;
  width: 100vw;
  background-color: purple;
  display: flex;
  justify-content: center;
  align-items: center;
`
