import * as styled from '../../styles/convertedComponents'
import {
  largeScreenOnly,
  mediumScreenOnly,
  smallOrMediumScreenOnly
} from '../../utils/crossPlatformMediaQueries'
import { webOnly, mobileOnly } from '../../utils/deviceSpecificCSS'
import { colors } from '../../constants/theme'

export const Container = styled.View`
  background-color: white;
  margin: 10px 0px 10px 0px;
  padding: 50px;
  border: 1px solid ${colors.CDBDBDB};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Header = styled.Text`
  text-align: ${(props) => props.align || 'center'};
  margin-top: ${(props) => props.marginTop || '0px'};
  margin-bottom: ${(props) => props.marginBottom || '0px'};
  font-size: 30px;
  color: #000000;
  ${largeScreenOnly(`
    font-size: 50px;
  `)}
`

export const SubHeader = styled.Text`
  color: #333;
  margin-top: 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`

export const Logo = styled.Image`
  ${largeScreenOnly(`
    height: 50px;
    width: 150px;
  `)}
  ${smallOrMediumScreenOnly(`
    height: 25px;
    width: 75px;
  `)}
  margin-top: 20px;
  padding: 0 20px 0 20px;
  ${webOnly(`
    cursor: pointer;
    object-fit: contain;
  `)}
  ${mobileOnly(`
    resize-mode: contain;
  `)}
`

export const LogoContainer = styled.View`
  display: flex;
  flex-direction: row;
`
