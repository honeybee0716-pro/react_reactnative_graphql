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
      <G data-name="Group 98181" tabIndex="-1">
        <G data-name="Group 97732" tabIndex="-1">
          <Path
            data-name="Path 80107"
            d="M0 0h24v24H0z"
            fill="none"
            tabIndex="-1"
          />
          <G data-name="Group 98179" tabIndex="-1">
            <G data-name="Group 98178" fill={iconBgColor} tabIndex="-1">
              <Path
                data-name="Path 80110"
                d="M15.18 10.94a3.451 3.451 0 00.32-1.44A3.5 3.5 0 0012 6a3.451 3.451 0 00-1.44.32z"
                tabIndex="-1"
              />
              <Path
                data-name="Path 80111"
                d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 13a9.947 9.947 0 00-6.14 2.12A7.963 7.963 0 015.69 7.1l2.86 2.86a3.47 3.47 0 002.99 2.99l2.2 2.2A10.051 10.051 0 0012 15zm6.31 1.9L7.1 5.69A7.9 7.9 0 0112 4a7.987 7.987 0 016.31 12.9z"
                tabIndex="-1"
              />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  )
}
