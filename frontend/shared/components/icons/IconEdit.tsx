import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse, Rect, ClipPath } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconEdit: React.FC<MyProps> = ({ color = '#545658' }) => {
  return (
    <Svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_0_439)">
        <Path
          d="M6.36537 2.16667H2.53966C2.24976 2.16667 1.97174 2.2808 1.76675 2.48397C1.56176 2.68713 1.4466 2.96268 1.4466 3.25V10.8333C1.4466 11.1207 1.56176 11.3962 1.76675 11.5994C1.97174 11.8025 2.24976 11.9167 2.53966 11.9167H10.1911C10.481 11.9167 10.759 11.8025 10.964 11.5994C11.169 11.3962 11.2841 11.1207 11.2841 10.8333V7.04167"
          stroke={color}
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10.4643 1.35417C10.6818 1.13868 10.9767 1.01762 11.2841 1.01762C11.5916 1.01762 11.8865 1.13868 12.1039 1.35417C12.3214 1.56966 12.4435 1.86192 12.4435 2.16667C12.4435 2.47141 12.3214 2.76368 12.1039 2.97917L6.9119 8.125L4.72578 8.66667L5.27231 6.5L10.4643 1.35417Z"
          stroke={color}
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_0_439">
          <Rect
            width="13.1167"
            height="13"
            fill="white"
            transform="translate(0.353539)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default IconEdit
