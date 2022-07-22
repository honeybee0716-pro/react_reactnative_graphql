import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  // color?: string
}

const IconMicrosoftLogo: React.FC<MyProps> = (
  {
    // color = '#323232',
  }
) => {
  return (
    <Svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M10.4538 10.4538H0V0H10.4538V10.4538Z" fill="#F1511B" />
      <Path d="M21.9959 10.4538H11.5424V0H21.9959V10.4538Z" fill="#80CC28" />
      <Path d="M10.4535 22H0V11.5463H10.4535V22Z" fill="#00ADEF" />
      <Path d="M21.9959 22H11.5424V11.5463H21.9959V22Z" fill="#FBBC09" />
    </Svg>
  )
}

export default IconMicrosoftLogo
