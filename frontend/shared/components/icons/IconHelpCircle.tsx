import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'

interface MyProps {
  color?: string
}

const IconHelpCircle: React.FC<MyProps> = ({ color = '#545658' }) => {
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
        d="M12 22.9289C17.5228 22.9289 22 18.4421 22 12.9073C22 7.37257 17.5228 2.88577 12 2.88577C6.47715 2.88577 2 7.37257 2 12.9073C2 18.4421 6.47715 22.9289 12 22.9289Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.08997 9.90086C9.32507 9.23108 9.78912 8.66631 10.3999 8.30656C11.0107 7.94681 11.7289 7.81531 12.4271 7.93534C13.1254 8.05537 13.7588 8.41919 14.215 8.96236C14.6713 9.50554 14.921 10.193 14.92 10.903C14.92 12.9073 11.92 13.9095 11.92 13.9095"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 17.9181H12.01"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default IconHelpCircle
