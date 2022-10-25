import { useColorModeValue } from 'native-base'
import * as React from 'react'
import Svg, { G, Path } from 'react-native-svg'

export default function IconPassword(props: any) {
  const iconBgColor = useColorModeValue('#6b7280', '#9ca3af')
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      tabIndex="-1"
      {...props}
    >
      <G data-name="Group 97223" tabIndex="-1">
        <G data-name="Group 549" tabIndex="-1">
          <Path
            data-name="Path 365"
            d="M0 0h24v24H0z"
            fill="none"
            tabIndex="-1"
          />
        </G>
        <G data-name="Group 551" tabIndex="-1">
          <G data-name="Group 550" tabIndex="-1">
            <Path
              data-name="Path 366"
              d="M2 17h20v2H2zm1.15-4.05L4 11.47l.85 1.48 1.3-.75-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7 4 8.47 3.15 7l-1.3.75.85 1.47H1v1.5h1.7l-.85 1.48zm6.7-.75l1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H15v-1.5h-1.7l.85-1.47-1.3-.75L12 8.47 11.15 7l-1.3.75.85 1.47H9v1.5h1.7zM23 9.22h-1.7l.85-1.47-1.3-.75L20 8.47 19.15 7l-1.3.75.85 1.47H17v1.5h1.7l-.85 1.48 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H23z"
              fill={iconBgColor}
              tabIndex="-1"
            />
          </G>
        </G>
        <Path
          data-name="Rectangle 252"
          fill="none"
          d="M0 1h24v24H0z"
          tabIndex="-1"
        />
      </G>
    </Svg>
  )
}
