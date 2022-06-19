import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconAtSign: React.FC<MyProps> = ({ color = '#3A3E43' }) => {
  return (
    <Svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 6V9.75C12 10.3467 12.2371 10.919 12.659 11.341C13.081 11.7629 13.6533 12 14.25 12C14.8467 12 15.419 11.7629 15.841 11.341C16.263 10.919 16.5 10.3467 16.5 9.75V9C16.4999 7.30727 15.9272 5.66436 14.875 4.3384C13.8227 3.01244 12.3529 2.08142 10.7045 1.69672C9.05605 1.31203 7.32596 1.49628 5.79552 2.21953C4.26508 2.94277 3.02431 4.16247 2.27495 5.68029C1.5256 7.19812 1.31173 8.9248 1.66813 10.5796C2.02453 12.2344 2.93024 13.7199 4.23798 14.7947C5.54572 15.8695 7.17858 16.4703 8.87106 16.4994C10.5635 16.5285 12.2161 15.9842 13.56 14.955"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default IconAtSign
