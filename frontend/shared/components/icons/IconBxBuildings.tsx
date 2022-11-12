import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconBxBuildings: React.FC<MyProps> = ({ color = '#464646' }) => {
  return (
    <Svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M15.8333 1.66667H7.5C6.58083 1.66667 5.83333 2.41417 5.83333 3.33334V8.33334H4.16667C3.2475 8.33334 2.5 9.08084 2.5 10V17.5C2.5 17.721 2.5878 17.933 2.74408 18.0893C2.90036 18.2455 3.11232 18.3333 3.33333 18.3333H16.6667C16.8877 18.3333 17.0996 18.2455 17.2559 18.0893C17.4122 17.933 17.5 17.721 17.5 17.5V3.33334C17.5 2.41417 16.7525 1.66667 15.8333 1.66667ZM4.16667 10H9.16667V16.6667H4.16667V10ZM15.8333 16.6667H10.8333V10C10.8333 9.08084 10.0858 8.33334 9.16667 8.33334H7.5V3.33334H15.8333V16.6667Z"
        fill={color}
      />
      <Path
        d="M9.16671 5H10.8334V6.66667H9.16671V5ZM12.5 5H14.1667V6.66667H12.5V5ZM12.5 8.35917H14.1667V10H12.5V8.35917ZM12.5 11.6667H14.1667V13.3333H12.5V11.6667ZM5.83337 11.6675H7.50004V13.3342H5.83337V11.6675Z"
        fill={color}
      />
    </Svg>
  )
}

export default IconBxBuildings
