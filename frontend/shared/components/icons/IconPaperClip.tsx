import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconPaperClip: React.FC<MyProps> = ({
  color = '#464646',
}) => {
  return (
    <Svg width='100%' height='100%' preserveAspectRatio="none" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M16.08 8.2875L9.18747 15.18C8.34309 16.0244 7.19786 16.4988 6.00372 16.4988C4.80959 16.4988 3.66436 16.0244 2.81997 15.18C1.97559 14.3356 1.50122 13.1904 1.50122 11.9963C1.50122 10.8021 1.97559 9.65688 2.81997 8.8125L9.71247 1.92C10.2754 1.35708 11.0389 1.04083 11.835 1.04083C12.6311 1.04083 13.3946 1.35708 13.9575 1.92C14.5204 2.48292 14.8366 3.24641 14.8366 4.0425C14.8366 4.83859 14.5204 5.60208 13.9575 6.165L7.05747 13.0575C6.77601 13.339 6.39427 13.4971 5.99622 13.4971C5.59818 13.4971 5.21643 13.339 4.93497 13.0575C4.65351 12.776 4.49539 12.3943 4.49539 11.9963C4.49539 11.5982 4.65351 11.2165 4.93497 10.935L11.3025 4.575"
        stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  )
}

export default IconPaperClip