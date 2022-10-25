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
      tabIndex="-1"
    >
      <G data-name="Group 98105" tabIndex="-1">
        <G data-name="Group 97732" tabIndex="-1">
          <Path
            data-name="Path 80107"
            d="M0 0h24v24H0z"
            fill="none"
            tabIndex="-1"
          />
          <Path
            data-name="Path 80108"
            d="M3.9 12A3.1 3.1 0 017 8.9h4V7H7a5 5 0 000 10h4v-1.9H7A3.1 3.1 0 013.9 12zM8 13h8v-2H8zm9-6h-4v1.9h4a3.1 3.1 0 110 6.2h-4V17h4a5 5 0 000-10z"
            fill={iconBgColor}
            tabIndex="-1"
          />
        </G>
      </G>
    </Svg>
  )
}
