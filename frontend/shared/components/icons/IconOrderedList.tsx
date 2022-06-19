import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconOrderedList: React.FC<MyProps> = ({ color = '#323232' }) => {
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
        d="M9.59786 13.4583H11.0145L7.47286 3.54167H6.05619L2.51453 13.4583H3.93119L4.92286 10.625H8.53536L9.59786 13.4583ZM5.41869 9.20834L6.76453 5.52501L8.11036 9.20834H5.41869ZM14.4854 12.3958C14.4854 12.606 14.423 12.8114 14.3063 12.9861C14.1895 13.1609 14.0236 13.297 13.8295 13.3775C13.6353 13.4579 13.4217 13.4789 13.2156 13.4379C13.0095 13.3969 12.8202 13.2957 12.6716 13.1471C12.523 12.9985 12.4218 12.8092 12.3808 12.6031C12.3398 12.397 12.3608 12.1834 12.4412 11.9892C12.5217 11.7951 12.6578 11.6292 12.8326 11.5124C13.0073 11.3957 13.2127 11.3333 13.4229 11.3333C13.7047 11.3333 13.9749 11.4453 14.1742 11.6445C14.3734 11.8438 14.4854 12.114 14.4854 12.3958ZM14.4854 9.56251C14.4854 9.77265 14.423 9.97807 14.3063 10.1528C14.1895 10.3275 14.0236 10.4637 13.8295 10.5441C13.6353 10.6245 13.4217 10.6456 13.2156 10.6046C13.0095 10.5636 12.8202 10.4624 12.6716 10.3138C12.523 10.1652 12.4218 9.97589 12.3808 9.76979C12.3398 9.56368 12.3608 9.35005 12.4412 9.1559C12.5217 8.96176 12.6578 8.79582 12.8326 8.67907C13.0073 8.56232 13.2127 8.50001 13.4229 8.50001C13.7047 8.50001 13.9749 8.61195 14.1742 8.8112C14.3734 9.01046 14.4854 9.28071 14.4854 9.56251ZM14.4854 6.72917C14.4854 6.93931 14.423 7.14474 14.3063 7.31947C14.1895 7.49419 14.0236 7.63038 13.8295 7.71079C13.6353 7.79121 13.4217 7.81225 13.2156 7.77126C13.0095 7.73026 12.8202 7.62907 12.6716 7.48047C12.523 7.33188 12.4218 7.14256 12.3808 6.93646C12.3398 6.73035 12.3608 6.51672 12.4412 6.32257C12.5217 6.12842 12.6578 5.96248 12.8326 5.84574C13.0073 5.72899 13.2127 5.66667 13.4229 5.66667C13.7047 5.66667 13.9749 5.77861 14.1742 5.97787C14.3734 6.17713 14.4854 6.44738 14.4854 6.72917Z"
        fill={color}
      />
    </Svg>
  )
}

export default IconOrderedList
