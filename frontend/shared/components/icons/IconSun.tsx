import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse, Rect } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconSun: React.FC<MyProps> = ({
  color = theme.colors.shared.soft2Gray
}) => {
  return (
    <Svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_1_283)">
        <Path
          d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
          stroke={color}
          stroke-width="2.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M12 1V3"
          stroke={color}
          stroke-width="2.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M12 21V23"
          stroke={color}
          stroke-width="2.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M4.22 4.21997L5.64 5.63997"
          stroke={color}
          stroke-width="2.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M18.36 18.36L19.78 19.78"
          stroke={color}
          stroke-width="2.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M1 12H3"
          stroke={color}
          stroke-width="2.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M21 12H23"
          stroke={color}
          stroke-width="2.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M4.22 19.78L5.64 18.36"
          stroke={color}
          stroke-width="2.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M18.36 5.63997L19.78 4.21997"
          stroke={color}
          stroke-width="2.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <clipPath id="clip0_1_283">
          <Rect width="24" height="24" fill="white" />
        </clipPath>
      </Defs>
    </Svg>
  )
}

export default IconSun
