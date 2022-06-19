import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconAlignLeft: React.FC<MyProps> = ({ color = '#464646' }) => {
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
        d="M12.75 7.5H2.25"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15.75 4.5H2.25"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15.75 10.5H2.25"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.75 13.5H2.25"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default IconAlignLeft
