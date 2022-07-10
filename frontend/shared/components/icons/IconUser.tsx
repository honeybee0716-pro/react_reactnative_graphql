import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconUser: React.FC<MyProps> = ({
  color = theme.colors.shared.soft2Gray
}) => {
  return (
    <Svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M20 21.8103V19.806C20 18.7429 19.5786 17.7233 18.8284 16.9715C18.0783 16.2197 17.0609 15.7974 16 15.7974H8C6.93913 15.7974 5.92172 16.2197 5.17157 16.9715C4.42143 17.7233 4 18.7429 4 19.806V21.8103"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 11.7888C14.2091 11.7888 16 9.99407 16 7.78017C16 5.56627 14.2091 3.77155 12 3.77155C9.79086 3.77155 8 5.56627 8 7.78017C8 9.99407 9.79086 11.7888 12 11.7888Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default IconUser
