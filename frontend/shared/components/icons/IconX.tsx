import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconX: React.FC<MyProps> = ({ color = '#23262F' }) => {
  return (
    <Svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M11.25 3.75L3.75 11.25"
        stroke={color}
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.75 3.75L11.25 11.25"
        stroke={color}
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default IconX
