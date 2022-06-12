import { useColorModeValue } from 'native-base'
import * as React from 'react'
import Svg, { G, Path } from 'react-native-svg'

export default function IconLanguage() {
  const iconBgColor = useColorModeValue('#6b7280', '#9ca3af')
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      color="green"
      tabIndex="-1"
    >
      <G data-name="Group 97224" tabIndex="-1">
        <Path
          data-name="Path 350"
          d="M0 0h24v24H0z"
          fill="none"
          tabIndex="-1"
        />
        <Path
          data-name="Path 351"
          d="M20 5h-9.12L10 2H4a2.006 2.006 0 00-2 2v13a2.006 2.006 0 002 2h7l1 3h8a2.006 2.006 0 002-2V7a2.006 2.006 0 00-2-2zM7.17 14.59a4.09 4.09 0 010-8.18 3.949 3.949 0 012.74 1.07l.07.06-1.23 1.18-.06-.05a2.172 2.172 0 00-1.52-.59 2.42 2.42 0 000 4.84 2.049 2.049 0 002.12-1.46H7.08V9.91h3.95l.01.07a3.14 3.14 0 01.05.61 3.791 3.791 0 01-3.92 4zm6.03-1.71a9.982 9.982 0 001.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99a7.681 7.681 0 01-1.56 2.74 9.181 9.181 0 01-1.13-1.7zM21 20a1 1 0 01-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68a8.731 8.731 0 001.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20a1 1 0 011 1z"
          fill={iconBgColor}
          tabIndex="-1"
        />
        <Path
          data-name="Rectangle 254"
          fill="none"
          d="M0 0h24v24H0z"
          tabIndex="-1"
        />
      </G>
    </Svg>
  )
}
