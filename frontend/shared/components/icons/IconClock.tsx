import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse, Rect, ClipPath } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconClock: React.FC<MyProps> = ({ color = '#545658' }) => {
  return (
    <Svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_1_212)">
        <Path
          d="M9.14428 16.5C13.3323 16.5 16.7273 13.1421 16.7273 9C16.7273 4.85786 13.3323 1.5 9.14428 1.5C4.95631 1.5 1.56128 4.85786 1.56128 9C1.56128 13.1421 4.95631 16.5 9.14428 16.5Z"
          stroke={color}
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M9.14429 4.5V9L12.1775 10.5"
          stroke={color}
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_212">
          <Rect
            width="18.1992"
            height="18"
            fill="white"
            transform="translate(0.0446777)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default IconClock
