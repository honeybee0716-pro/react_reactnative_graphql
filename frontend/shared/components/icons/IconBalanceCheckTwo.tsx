import * as React from 'react'
import Svg, { G, Circle, Path } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function IconBalanceCheckTwo() {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={178} height={178}>
      <G data-name="icon/check">
        <G>
          <Circle
            data-name="icon/bg"
            cx={80}
            cy={80}
            r={80}
            transform="translate(9 6)"
            fill="rgba(0,167,106,0.1)"
          />
        </G>
        <G>
          <Circle
            data-name="Icon/bg"
            cx={53}
            cy={53}
            r={53}
            transform="translate(36 33)"
            fill="#00A76A"
          />
        </G>
        <Path
          data-name="Icon/shape"
          d="M113.128 69.5l-32.744 32.744L65.5 87.36"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={8}
        />
      </G>
    </Svg>
  )
}

export default IconBalanceCheckTwo
