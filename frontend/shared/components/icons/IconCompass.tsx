import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
  sizeScale?: number
}

const IconCompass: React.FC<MyProps> = ({
  color = theme.colors.shared.lightBlue,
  sizeScale = 1
}) => {
  return (
    <Svg
      width={22 * sizeScale}
      height={22 * sizeScale}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M11 20.1667C16.0627 20.1667 20.1667 16.0626 20.1667 11C20.1667 5.93739 16.0627 1.83334 11 1.83334C5.93743 1.83334 1.83337 5.93739 1.83337 11C1.83337 16.0626 5.93743 20.1667 11 20.1667Z"
        stroke={color}
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.8866 7.11333L12.9433 12.9433L7.11328 14.8867L9.05661 9.05667L14.8866 7.11333Z"
        stroke={color}
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default IconCompass
