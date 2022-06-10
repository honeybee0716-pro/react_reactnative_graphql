import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
  sizeScale?: number
}


const IconLists: React.FC<MyProps> = ({
  color = theme.colors.shared.soft2Gray,
  sizeScale = 1,
}) => {
  return (
    <Svg width={24 * sizeScale} height={25 * sizeScale} viewBox='0 0 24 25' fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M19.8889 10.6889H5.11111C3.94683 10.6889 3 11.6378 3 12.8046V21.2672C3 22.434 3.94683 23.3829 5.11111 23.3829H19.8889C21.0532 23.3829 22 22.434 22 21.2672V12.8046C22 11.6378 21.0532 10.6889 19.8889 10.6889ZM5.11111 21.2672V12.8046H19.8889L19.891 21.2672H5.11111ZM5.11111 6.45761H19.8889V8.57327H5.11111V6.45761ZM7.22222 2.22629H17.7778V4.34195H7.22222V2.22629Z"
        fill={color} />
    </Svg>
  )
}

export default IconLists