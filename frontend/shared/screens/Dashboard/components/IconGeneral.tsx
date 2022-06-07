import { useColorModeValue } from 'native-base'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export default function IconGeneral() {
  const iconBgColor = useColorModeValue('#6b7280', '#9ca3af')
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      tabIndex="-1"
    >
      <Path data-name="Path 378" d="M0 0h24v24H0z" fill="none" tabIndex="-1" />
      <Path
        data-name="Path 379"
        d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
        fill={iconBgColor}
        tabIndex="-1"
      />
    </Svg>
  )
}
