import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse, Rect } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
  sizeScale?: number
}

const IconEye: React.FC<MyProps> = ({ color = '#2F2F2F', sizeScale = 1 }) => {
  return (
    <svg
      width={13 * sizeScale}
      height={12 * sizeScale}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_220)">
        <path
          d="M1.29419 6C1.29419 6 3.31632 2 6.85506 2C10.3938 2 12.4159 6 12.4159 6C12.4159 6 10.3938 10 6.85506 10C3.31632 10 1.29419 6 1.29419 6Z"
          stroke={color}
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.8551 7.5C7.6927 7.5 8.3717 6.82843 8.3717 6C8.3717 5.17157 7.6927 4.5 6.8551 4.5C6.01751 4.5 5.3385 5.17157 5.3385 6C5.3385 6.82843 6.01751 7.5 6.8551 7.5Z"
          stroke={color}
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_220">
          <rect
            width="12.1328"
            height="12"
            fill="white"
            transform="translate(0.788696)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default IconEye
