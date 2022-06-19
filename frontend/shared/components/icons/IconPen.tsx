import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse, Rect, ClipPath } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconPen: React.FC<MyProps> = ({ color = '#545658' }) => {
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
        d="M10.6748 1.44527C10.9599 1.16017 11.3466 1 11.7498 1C11.9494 1 12.1471 1.03932 12.3315 1.11572C12.516 1.19212 12.6836 1.3041 12.8247 1.44527C12.9659 1.58644 13.0779 1.75403 13.1543 1.93847C13.2307 2.12292 13.27 2.3206 13.27 2.52024C13.27 2.71989 13.2307 2.91757 13.1543 3.10202C13.0779 3.28646 12.9659 3.45405 12.8247 3.59522L3.8666 12.5534L1 13.27L1.71665 10.4034L10.6748 1.44527Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default IconPen
