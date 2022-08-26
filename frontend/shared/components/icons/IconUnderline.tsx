import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconUnderline: React.FC<MyProps> = ({ color = '#323232' }) => {
  return (
    <Svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M13.4583 14.1667V15.5833H3.54163V14.1667H13.4583ZM11.3333 9.36063C11.31 9.82812 11.1712 10.2825 10.9294 10.6833C10.6875 11.0841 10.3502 11.4187 9.94745 11.6572C9.54473 11.8958 9.08918 12.0308 8.62152 12.0503C8.15385 12.0698 7.68864 11.9732 7.26746 11.769C6.782 11.5589 6.37029 11.2088 6.08509 10.7633C5.79988 10.3178 5.65418 9.79735 5.66663 9.26855V3.54521H4.24996V9.36063C4.27392 10.0275 4.45456 10.6793 4.77725 11.2633C5.09995 11.8474 5.55562 12.3472 6.1074 12.7224C6.65918 13.0976 7.29155 13.3377 7.95332 13.4231C8.6151 13.5084 9.28768 13.4368 9.91663 13.214C10.7532 12.9351 11.4791 12.3967 11.9887 11.6769C12.4982 10.9572 12.7649 10.0936 12.75 9.21188V3.54521H11.3333V9.36063ZM11.3333 3.54167H12.75H11.3333ZM5.66663 3.54167H4.24996H5.66663Z"
        fill={color}
      />
    </Svg>
  )
}

export default IconUnderline