import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
function SvgComponent() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      tabIndex="-1"
    >
      <Defs tabIndex="-1"></Defs>
      <G data-name="Group 97754" tabIndex="-1">
        <Path
          data-name="Icon awesome-apple"
          d="M14.396 14.827a4.27 4.27 0 012.287-3.877 4.915 4.915 0 00-3.874-2.04c-1.624-.128-3.4.947-4.048.947-.686 0-2.26-.9-3.495-.9C2.713 8.995 0 10.99 0 15.05a11.4 11.4 0 00.659 3.711c.586 1.679 2.7 5.8 4.9 5.727 1.16-.027 1.971-.818 3.471-.818 1.455 0 2.209.819 3.495.819 2.223-.032 4.135-3.774 4.693-5.457a4.535 4.535 0 01-2.822-4.2zm-2.589-7.511A4.308 4.308 0 0012.907 4a4.85 4.85 0 00-3.106 1.6 4.376 4.376 0 00-1.174 3.285 3.842 3.842 0 003.18-1.569z"
          tabIndex="-1"
        />

        <G data-name="Group 97750" tabIndex="-1">
          <G data-name="Group 97718" tabIndex="-1">
            <Path
              data-name="Path 79456"
              d="M334 2h24v24h-24z"
              fill="none"
              tabIndex="-1"
            />
          </G>
          <G data-name="Group 97756" tabIndex="-1">
            <Path
              data-name="Path 591"
              d="M337 5h12a9 9 0 110 18h-12a9 9 0 010-18z"
              fill="#E9E9EB"
              tabIndex="-1"
            />
            <G tabIndex="-1">
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
export default SvgComponent
