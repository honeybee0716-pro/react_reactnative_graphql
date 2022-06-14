import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconPlus: React.FC<MyProps> = ({
  color = "#545658",
}) => {
  return (
    <Svg width='100%' height='100%' preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M10 4.16667V15.8333" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M4.16666 10H15.8333" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  )
}

export default IconPlus