import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse, Rect, ClipPath } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconLayers: React.FC<MyProps> = ({
  color = theme.colors.shared.soft2Gray
}) => {
  return (
    <Svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clip-path="url(#clip0_0_777)">
        <Path
          d="M6.57846 1.08333L1.11316 3.79167L6.57846 6.5L12.0438 3.79167L6.57846 1.08333Z"
          stroke={color}
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M1.11316 9.20833L6.57846 11.9167L12.0438 9.20833"
          stroke={color}
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M1.11316 6.5L6.57846 9.20833L12.0438 6.5"
          stroke={color}
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_0_777">
          <Rect
            width="13.1167"
            height="13"
            fill="white"
            transform="translate(0.0200806)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default IconLayers
