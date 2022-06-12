import * as React from 'react'
import Svg, { Circle, G, Path } from 'react-native-svg'

export default function IconPaymentOne() {
  return (
    <Svg
      tabIndex="-1"
      //   xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
    >
      <G
        tabIndex="-1"
        id="Icon_Offers"
        data-name="Icon/Offers"
        transform="translate(-924 -420)"
      >
        <Circle
          tabIndex="-1"
          id="Icon_bg"
          data-name="Icon/bg"
          cx="18"
          cy="18"
          r="18"
          transform="translate(924 420)"
          fill="#dbffd9"
        />
        <Path
          tabIndex="-1"
          id="icon_container"
          data-name="icon/container"
          d="M0,0H24V24H0Z"
          transform="translate(930 426)"
          fill="none"
        />
        <Circle
          tabIndex="-1"
          id="icon_shape_2"
          data-name="icon/shape 2"
          cx="1.5"
          cy="1.5"
          r="1.5"
          transform="translate(935 431)"
          fill="#0e911d"
        />
        <Path
          tabIndex="-1"
          id="icon_shape_1"
          data-name="icon/shape 1"
          d="M21.41,11.58l-9-9A1.987,1.987,0,0,0,11,2H4A2.006,2.006,0,0,0,2,4v7a2,2,0,0,0,.59,1.42l9,9A1.987,1.987,0,0,0,13,22a1.955,1.955,0,0,0,1.41-.59l7-7A1.955,1.955,0,0,0,22,13,2.02,2.02,0,0,0,21.41,11.58ZM13,20.01,4,11V4h7V3.99l9,9Z"
          transform="translate(930 426)"
          fill="#0e911d"
        />
      </G>
    </Svg>
  )
}
