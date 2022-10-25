import { useColorModeValue } from 'native-base'
import * as React from 'react'
import Svg, { Circle, G, Path } from 'react-native-svg'

export default function IconManageAccount() {
  const iconBgColor = useColorModeValue('#6b7280', '#9ca3af')
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      tabIndex="-1"
    >
      <G data-name="Group 97731" tabIndex="-1">
        <G data-name="Group 97600" tabIndex="-1">
          <G data-name="Group 97597" tabIndex="-1">
            <Path
              data-name="Path 79441"
              d="M0 0h24v24H0z"
              fill="none"
              tabIndex="-1"
            />
          </G>
          <G data-name="Group 97599" tabIndex="-1">
            <G data-name="Group 97598" fill={iconBgColor} tabIndex="-1">
              <Circle
                data-name="Ellipse 18"
                cx={4}
                cy={4}
                r={4}
                transform="translate(6 4)"
                tabIndex="-1"
              />
              <Path
                data-name="Path 79442"
                d="M10.67 13.02c-.22-.01-.44-.02-.67-.02a12.876 12.876 0 00-6.61 1.82A2.922 2.922 0 002 17.35V20h9.26A6.963 6.963 0 0110 16a7.072 7.072 0 01.67-2.98z"
                tabIndex="-1"
              />
              <Path
                data-name="Path 79443"
                d="M20.75 16a4.338 4.338 0 00-.06-.63l1.14-1.01-1-1.73-1.45.49a3.647 3.647 0 00-1.08-.63L18 11h-2l-.3 1.49a3.647 3.647 0 00-1.08.63l-1.45-.49-1 1.73 1.14 1.01a4.338 4.338 0 00-.06.63 4.338 4.338 0 00.06.63l-1.14 1.01 1 1.73 1.45-.49a3.647 3.647 0 001.08.63L16 21h2l.3-1.49a3.647 3.647 0 001.08-.63l1.45.49 1-1.73-1.14-1.01a4.338 4.338 0 00.06-.63zM17 18a2 2 0 112-2 2.006 2.006 0 01-2 2z"
                tabIndex="-1"
              />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  )
}
