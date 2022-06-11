import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'

interface MyProps {
  color?: string
}


const IconHome: React.FC<MyProps> = ({
  color = '#545658',
}) => {
  return (
    <Svg width='100%' height='100%' preserveAspectRatio="none" viewBox='0 0 24 25' fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M3 9.12498L12 2.10989L21 9.12498V20.1487C21 20.6803 20.7893 21.1901 20.4142 21.5659C20.0391 21.9418 19.5304 22.153 19 22.153H5C4.46957 22.153 3.96086 21.9418 3.58579 21.5659C3.21071 21.1901 3 20.6803 3 20.1487V9.12498Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M9 22.153V12.1314H15V22.153" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  )
}

export default IconHome