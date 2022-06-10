import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
  sizeScale?: number
}


const IconFlag: React.FC<MyProps> = ({
  color = theme.colors.shared.soft2Gray,
  sizeScale = 1,
}) => {
  return (
    <Svg width={24 * sizeScale} height={25 * sizeScale} viewBox='0 0 24 25' fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M4 15.4871C4 15.4871 5 14.4849 8 14.4849C11 14.4849 13 16.4892 16 16.4892C19 16.4892 20 15.4871 20 15.4871V3.4612C20 3.4612 19 4.46336 16 4.46336C13 4.46336 11 2.45905 8 2.45905C5 2.45905 4 3.4612 4 3.4612V15.4871Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M4 22.5021V15.4871" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  )
}

export default IconFlag