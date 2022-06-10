import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
  sizeScale?: number
}


const IconTrashBin: React.FC<MyProps> = ({
  color = theme.colors.shared.soft2Gray,
  sizeScale = 1,
}) => {
  return (
    <Svg width={24 * sizeScale} height={25 * sizeScale} viewBox='0 0 24 25' fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M3 6.78233H5H21" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M8 6.78233V4.77802C8 4.24645 8.21071 3.73664 8.58579 3.36076C8.96086 2.98488 9.46957 2.77371 10 2.77371H14C14.5304 2.77371 15.0391 2.98488 15.4142 3.36076C15.7893 3.73664 16 4.24645 16 4.77802V6.78233M19 6.78233V20.8125C19 21.3441 18.7893 21.8539 18.4142 22.2298C18.0391 22.6056 17.5304 22.8168 17 22.8168H7C6.46957 22.8168 5.96086 22.6056 5.58579 22.2298C5.21071 21.8539 5 21.3441 5 20.8125V6.78233H19Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M10 11.7931V17.8061" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M14 11.7931V17.8061" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  )
}

export default IconTrashBin