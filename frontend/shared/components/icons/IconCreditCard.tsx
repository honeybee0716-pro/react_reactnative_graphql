import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'

interface MyProps {
  color?: string
}


const IconCreditCard: React.FC<MyProps> = ({
  color = '#545658',
}) => {
  return (
    <Svg width='100%' height='100%' preserveAspectRatio="none" viewBox='0 0 24 25' fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M21 4.65729H3C1.89543 4.65729 1 5.55465 1 6.6616V18.6875C1 19.7944 1.89543 20.6918 3 20.6918H21C22.1046 20.6918 23 19.7944 23 18.6875V6.6616C23 5.55465 22.1046 4.65729 21 4.65729Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M1 10.6702H23" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  )
}

export default IconCreditCard