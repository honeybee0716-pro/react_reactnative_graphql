import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconNotificationBell: React.FC<MyProps> = ({
  color = 'white',
}) => {
  return (
    <Svg width='100%' height='100%' preserveAspectRatio="none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M12.16 4.90991C15.48 9.20991 15.48 14.7999 12.16 19.0999" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M15.6401 2C20.3201 8.06 20.3201 15.94 15.6401 22" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M8.50998 6.79004C10.95 9.94004 10.95 14.05 8.50998 17.2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M4.84995 9.40002C6.06995 10.98 6.06995 13.03 4.84995 14.61" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  )
}

export default IconNotificationBell