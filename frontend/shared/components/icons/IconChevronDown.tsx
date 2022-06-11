import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
  rotation?: number
}

const IconChevronDown: React.FC<MyProps> = ({
  color = '#545658',
  rotation = 0,
}) => {
  return (
    <Svg rotation={rotation} width='100%' height='100%' preserveAspectRatio="none" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M15 12.986L10 7.97525L5 12.986" stroke={color} stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  )
}

export default IconChevronDown