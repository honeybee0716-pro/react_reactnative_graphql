import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconUpload: React.FC<MyProps> = ({ color = 'white' }) => {
  return (
    <Svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5"
        stroke={color}
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.1666 6.66667L9.99998 2.5L5.83331 6.66667"
        stroke={color}
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10 2.5V12.5"
        stroke={color}
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default IconUpload
