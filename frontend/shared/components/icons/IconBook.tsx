import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse, Rect, ClipPath } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconBook: React.FC<MyProps> = ({ color = '#F00073' }) => {
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
        d="M3 14.625C3 14.1277 3.19754 13.6508 3.54917 13.2992C3.90081 12.9475 4.37772 12.75 4.875 12.75H15"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.875 1.5H15V16.5H4.875C4.37772 16.5 3.90081 16.3025 3.54917 15.9508C3.19754 15.5992 3 15.1223 3 14.625V3.375C3 2.87772 3.19754 2.40081 3.54917 2.04917C3.90081 1.69754 4.37772 1.5 4.875 1.5V1.5Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default IconBook
