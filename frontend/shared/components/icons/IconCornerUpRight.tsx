import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
  sizeScale?: number
}

const IconCornerUpRight: React.FC<MyProps> = ({
  color = theme.colors.shared.redOrange,
  sizeScale = 1,
}) => {
  return (
    <Svg width={21 * sizeScale} height={21 * sizeScale} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M13.125 12.25L17.5 7.875L13.125 3.5" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M3.5 17.5V11.375C3.5 10.4467 3.86875 9.5565 4.52513 8.90013C5.1815 8.24375 6.07174 7.875 7 7.875H17.5" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  )
}

export default IconCornerUpRight