import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconUndo: React.FC<MyProps> = ({
  color = '#7B7B7B',
}) => {
  return (
    <Svg width='100%' height='100%' preserveAspectRatio="none" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M6.5 5.875C5.4375 6.0625 4.5 6.4375 3.625 7.125L1.875 5.3125V9.6875H6.25L4.5625 8C6.875 6.375 10.0625 6.875 11.75 9.1875C11.875 9.375 12 9.5 12.0625 9.6875L13.1875 9.125C11.8125 6.75 9.1875 5.4375 6.5 5.875Z"
        fill={color} />
    </Svg>
  )
}

export default IconUndo