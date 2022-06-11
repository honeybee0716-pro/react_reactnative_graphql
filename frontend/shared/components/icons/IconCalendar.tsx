import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
  sizeScale?: number
}

const IconCalendar: React.FC<MyProps> = ({
  color = '#535353',
  sizeScale = 1,
}) => {
  return (
    <Svg width={21 * sizeScale} height={19 * sizeScale} viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M16.5538 3.09152H4.35627C3.39391 3.09152 2.61377 3.78359 2.61377 4.63729V15.4577C2.61377 16.3114 3.39391 17.0034 4.35627 17.0034H16.5538C17.5161 17.0034 18.2963 16.3114 18.2963 15.4577V4.63729C18.2963 3.78359 17.5161 3.09152 16.5538 3.09152Z" stroke={color} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M13.94 1.54578V4.63731" stroke={color} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M6.96997 1.54578V4.63731" stroke={color} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M2.61377 7.72882H18.2963" stroke={color} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  )
}

export default IconCalendar