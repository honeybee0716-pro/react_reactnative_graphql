import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconShoppingCart: React.FC<MyProps> = ({
  color = theme.colors.shared.white,
}) => {
  return (
    <Svg width='100%' height='100%' preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M7.49999 18.3333C7.96023 18.3333 8.33332 17.9602 8.33332 17.5C8.33332 17.0398 7.96023 16.6667 7.49999 16.6667C7.03975 16.6667 6.66666 17.0398 6.66666 17.5C6.66666 17.9602 7.03975 18.3333 7.49999 18.3333Z" stroke={color} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M16.6667 18.3333C17.1269 18.3333 17.5 17.9602 17.5 17.5C17.5 17.0398 17.1269 16.6667 16.6667 16.6667C16.2064 16.6667 15.8333 17.0398 15.8333 17.5C15.8333 17.9602 16.2064 18.3333 16.6667 18.3333Z" stroke={color} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M0.833344 0.833328H4.16668L6.40001 11.9917C6.47621 12.3753 6.68493 12.72 6.98963 12.9652C7.29433 13.2105 7.67559 13.3408 8.06668 13.3333H16.1667C16.5578 13.3408 16.939 13.2105 17.2437 12.9652C17.5484 12.72 17.7571 12.3753 17.8333 11.9917L19.1667 5H5.00001" stroke={color} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  )
}

export default IconShoppingCart