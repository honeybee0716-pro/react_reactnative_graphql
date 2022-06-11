import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconMoreVertical: React.FC<MyProps> = ({
  color = '#545658',
}) => {
  return (
    <Svg width='100%' height='100%' preserveAspectRatio="none" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M8.12553 8.66667C8.49703 8.66667 8.79819 8.36819 8.79819 8C8.79819 7.63181 8.49703 7.33333 8.12553 7.33333C7.75404 7.33333 7.45288 7.63181 7.45288 8C7.45288 8.36819 7.75404 8.66667 8.12553 8.66667Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M8.12553 4C8.49703 4 8.79819 3.70152 8.79819 3.33333C8.79819 2.96514 8.49703 2.66667 8.12553 2.66667C7.75404 2.66667 7.45288 2.96514 7.45288 3.33333C7.45288 3.70152 7.75404 4 8.12553 4Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M8.12553 13.3333C8.49703 13.3333 8.79819 13.0349 8.79819 12.6667C8.79819 12.2985 8.49703 12 8.12553 12C7.75404 12 7.45288 12.2985 7.45288 12.6667C7.45288 13.0349 7.75404 13.3333 8.12553 13.3333Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  )
}

export default IconMoreVertical