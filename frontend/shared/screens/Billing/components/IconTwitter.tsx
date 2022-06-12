import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function IconTwitter() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      tabIndex="-1"
    >
      <Defs tabIndex="-1"></Defs>
      <G data-name="Group 97752" tabIndex="-1">
        <G data-name="Group 97713" tabIndex="-1">
          <Path
            data-name="Path 638"
            d="M10 4a10 10 0 1010 10A10 10 0 0010 4zm4.942 7.464c.005.108.008.219.008.329a7.212 7.212 0 01-7.261 7.264 7.128 7.128 0 01-3.9-1.154 5.172 5.172 0 00.609.037 5.112 5.112 0 003.168-1.093 2.554 2.554 0 01-2.384-1.772 2.407 2.407 0 00.479.047 2.567 2.567 0 00.671-.089 2.552 2.552 0 01-2.046-2.5v-.032a2.49 2.49 0 001.159.319 2.555 2.555 0 01-.793-3.408 7.226 7.226 0 005.257 2.668 2.5 2.5 0 01-.066-.582 2.549 2.549 0 014.411-1.743 5.066 5.066 0 001.62-.619 2.559 2.559 0 01-1.122 1.412 5.153 5.153 0 001.464-.4 5.189 5.189 0 01-1.274 1.32z"
            fill="#4191DF"
            tabIndex="-1"
          />
        </G>
        <G data-name="Group 97748" tabIndex="-1">
          <G data-name="Group 97715" tabIndex="-1">
            <Path
              data-name="Path 79456"
              d="M331 2h24v24h-24z"
              fill="none"
              tabIndex="-1"
            />
          </G>
          <G data-name="Group 9976" tabIndex="-1">
            <Path
              data-name="Path 591"
              d="M337 5h12a9 9 0 110 18h-12a9 9 0 010-18z"
              fill="#E5E7EB"
              tabIndex="-1"
            />
            <G filter="url(#prefix__a)" tabIndex="-1">
              <Ellipse
                data-name="Ellipse 71"
                cx={8.5}
                cy={8.182}
                rx={8.5}
                ry={8.182}
                transform="translate(329 6)"
                fill="#fff"
                tabIndex="-1"
              />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  )
}

export default IconTwitter
