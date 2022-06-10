import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
  sizeScale?: number
}

const IconZap: React.FC<MyProps> = ({
  color = theme.colors.shared.soft3Gray,
  sizeScale = 1,
}) => {
  return (
    <Svg width={24 * sizeScale} height={24 * sizeScale} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  )
}

export default IconZap