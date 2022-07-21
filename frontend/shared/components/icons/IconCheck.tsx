import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse, Rect, ClipPath } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconCheck: React.FC<MyProps> = ({
  color = theme.colors.shared.darkPink2
}) => {
  return (
    <Svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M15 4.5L6.75 12.75L3 9"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default IconCheck
