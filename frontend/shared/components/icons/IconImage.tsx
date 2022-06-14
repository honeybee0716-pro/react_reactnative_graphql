import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconImage: React.FC<MyProps> = ({
  color = "#464646",
}) => {
  return (
    <Svg width='100%' height='100%' preserveAspectRatio="none" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M14.25 2.25H3.75C2.92157 2.25 2.25 2.92157 2.25 3.75V14.25C2.25 15.0784 2.92157 15.75 3.75 15.75H14.25C15.0784 15.75 15.75 15.0784 15.75 14.25V3.75C15.75 2.92157 15.0784 2.25 14.25 2.25Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M6.375 7.5C6.99632 7.5 7.5 6.99632 7.5 6.375C7.5 5.75368 6.99632 5.25 6.375 5.25C5.75368 5.25 5.25 5.75368 5.25 6.375C5.25 6.99632 5.75368 7.5 6.375 7.5Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M15.75 11.25L12 7.5L3.75 15.75" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  )
}

export default IconImage