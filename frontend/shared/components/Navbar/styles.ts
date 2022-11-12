import * as styled from '../../convertedComponents'
import {
  largeScreenOnly,
  smallOrMediumScreenOnly
} from '../../utils/crossPlatformMediaQueries'
import { webOnly, mobileOnly } from '../../utils/deviceSpecificCSS'

import { Dimensions } from 'react-native'

export const Container = styled.View`
  background-color: red;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  ${largeScreenOnly(`
    flex-direction: row;
    justify-content: space-between;
  `)}
  ${smallOrMediumScreenOnly(`
    flex-direction: column;
  `)}
`

export const LeftNavbar = styled.View`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`

export const CenterNavbar = styled.View``

export const RightNavbar = styled.View`
  height: 50px;
  width: 100%;
  background-color: white;
  ${smallOrMediumScreenOnly(`
    display: none;
  `)}
  ${largeScreenOnly(`
    float: right;
    display: flex;
    justify-content: flex-end;
  `)}
`

export const Input = styled.TextInput`
  display: flex;
  flex-direction: row;
  background-color: #ebebeb;
  border-radius: 10px;
  height: 50px;
  ${smallOrMediumScreenOnly(`
      flex: 1;
  `)}
  ${webOnly(`
    outline-width: 0;
    border: none;
    ::placeholder {
      Chrome, Firefox, Opera, Safari 10.1+
      color: #7c7c7c;
      opacity: 1; Firefox
    }
  `)}
`

export const Hamburger = styled.Image`
  height: 25px;
  width: 25px;
  ${webOnly(`
    cursor: pointer;
  `)}
  ${largeScreenOnly(`
    display: none;
  `)}
`

export const Logo = styled.Image`
  height: 50px;
  width: 150px;
  ${webOnly(`
    cursor: pointer;
    object-fit: contain;
  `)}
  ${mobileOnly(`
    resize-mode: contain;
  `)}
`

export const You = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 50px;
  object-fit: cover;
  ${webOnly(`
    cursor: pointer;
  `)}
`

export const Login = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 48px;
  width: 75px;
  ${webOnly(`
    cursor: pointer;
  `)}
`

export const Join = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #116fff;
  border-radius: 10px;
  height: 48px;
  width: 75px;
  ${webOnly(`
    cursor: pointer;
    ::hover {
      background-color: #418cff;
    }
  `)}
`

export const JoinText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`

export const LoginText = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`

export const Spacer = styled.View`
  margin: 0 5px 0 5px;
`

export const Row = styled.View`
  display: flex;
  flex-direction: row;
`

export const SearchIcon = styled.Image`
  height: 25px;
  width: 25px;
  margin-right: 5px;
  margin-left: 10px;
`

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

export const MenuContainer = styled.View`
  z-index: 1;
  height: 200px;
  width: 200px;
  background-color: purple;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`
