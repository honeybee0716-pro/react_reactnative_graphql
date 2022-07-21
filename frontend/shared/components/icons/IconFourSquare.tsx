import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconFourSquare: React.FC<MyProps> = ({
  color = theme.colors.shared.soft2Gray
}) => {
  return (
    <Svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M5.94938 1H1.28271V5.66667H5.94938V1Z"
        fill="#E8E8E8"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.2829 1H8.61621V5.66667H13.2829V1Z"
        fill="#E8E8E8"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.2829 8.33325H8.61621V12.9999H13.2829V8.33325Z"
        fill="#E8E8E8"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.94938 8.33325H1.28271V12.9999H5.94938V8.33325Z"
        fill="#E8E8E8"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default IconFourSquare
