import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
  rotation?: number
}

const IconCornerLeftDown: React.FC<MyProps> = ({
  color = '#FF4500',
  rotation = 0
}) => {
  return (
    <Svg
      rotation={rotation}
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M10.5 11.25L6.75 15L3 11.25"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15 3H9.75C8.95435 3 8.19129 3.31607 7.62868 3.87868C7.06607 4.44129 6.75 5.20435 6.75 6V15"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default IconCornerLeftDown
