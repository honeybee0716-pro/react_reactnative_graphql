import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse, Line } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconLine: React.FC<MyProps> = ({ color = '#B1B5C3' }) => {
  return (
    <Svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 18 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Line
        x1="1"
        y1="1.5"
        x2="17"
        y2="1.5"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
    </Svg>
  )
}

export default IconLine
