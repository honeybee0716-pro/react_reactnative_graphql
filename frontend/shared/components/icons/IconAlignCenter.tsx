import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconAlignCenter: React.FC<MyProps> = ({ color = '#323232' }) => {
  return (
    <Svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M6.375 12.75H10.625V11.3333H6.375V12.75ZM4.25 7.79167V9.20833H12.75V7.79167H4.25ZM2.125 4.25V5.66667H14.875V4.25H2.125Z"
        fill={color}
      />
    </Svg>
  )
}

export default IconAlignCenter
