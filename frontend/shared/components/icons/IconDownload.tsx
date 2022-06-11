import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconDownload: React.FC<MyProps> = ({
  color = "#535353",
}) => {
  return (
    <Svg width='100%' height='100%' preserveAspectRatio="none" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M15.75 11.25V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V11.25" stroke={color} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M5.25 7.5L9 11.25L12.75 7.5" stroke={color} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M9 11.25V2.25" stroke={color} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  )
}

export default IconDownload