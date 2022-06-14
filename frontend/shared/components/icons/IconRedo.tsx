import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconRedo: React.FC<MyProps> = ({
  color = '#7B7B7B',
}) => {
  return (
    <Svg width='100%' height='100%' preserveAspectRatio="none" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M8.5 5.875C9.5625 6.0625 10.5 6.4375 11.375 7.125L13.125 5.3125V9.6875H8.75L10.4375 8C8.125 6.3125 4.9375 6.875 3.3125 9.1875C3.1875 9.375 3.0625 9.5 3 9.6875L1.875 9.125C3.1875 6.75 5.8125 5.4375 8.5 5.875Z"
        fill={color} />
    </Svg>
  )
}

export default IconRedo