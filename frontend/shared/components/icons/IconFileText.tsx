import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconFileText: React.FC<MyProps> = ({ color = '#434343' }) => {
  return (
    <Svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M23.3333 3.33334H10C9.11596 3.33334 8.26812 3.68453 7.643 4.30965C7.01788 4.93478 6.66669 5.78262 6.66669 6.66668V33.3333C6.66669 34.2174 7.01788 35.0652 7.643 35.6904C8.26812 36.3155 9.11596 36.6667 10 36.6667H30C30.8841 36.6667 31.7319 36.3155 32.357 35.6904C32.9822 35.0652 33.3333 34.2174 33.3333 33.3333V13.3333L23.3333 3.33334Z"
        stroke={color}
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M23.3333 3.33334V13.3333H33.3333"
        stroke={color}
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M26.6666 21.6667H13.3333"
        stroke={color}
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M26.6666 28.3333H13.3333"
        stroke={color}
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.6666 15H15H13.3333"
        stroke={color}
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default IconFileText
