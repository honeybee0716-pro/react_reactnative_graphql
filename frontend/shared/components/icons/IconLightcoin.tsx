import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconLightcoin: React.FC<MyProps> = ({
  color = 'white',
}) => {
  return (
    <Svg width='100%' height='100%' preserveAspectRatio="none" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M21.8235 11C21.8235 16.891 16.9777 21.6667 11 21.6667C5.02233 21.6667 0.176468 16.891 0.176468 11C0.176468 5.10896 5.02233 0.333328 11 0.333328C16.9777 0.333328 21.8235 5.10896 21.8235 11ZM8.06199 11.792L9.5878 6.15173H12.8947L11.75 10.5387L13.2764 9.9121L12.8947 11.2906L11.3683 11.792L10.6054 14.5495H16.0745L15.5657 16.5547H6.78972L7.68025 13.1705L6.40855 13.6719L6.78972 12.2934L8.06199 11.792Z"
        fill={color} />
    </Svg>
  )
}

export default IconLightcoin