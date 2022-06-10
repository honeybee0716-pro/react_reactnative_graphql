import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
  sizeScale?: number
}

const IconUploadCloud: React.FC<MyProps> = ({
  color = theme.colors.shared.soft3Gray,
  sizeScale = 1,
}) => {
  return (
    <Svg width={24 * sizeScale} height={24 * sizeScale} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <Path d="M16 16L12 12L8 16" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M12 12V21" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M20.39 18.39C21.3654 17.8583 22.1359 17.0169 22.5799 15.9986C23.0239 14.9804 23.1162 13.8432 22.8422 12.7667C22.5682 11.6901 21.9435 10.7355 21.0667 10.0534C20.1899 9.37138 19.1109 9.00073 18 9H16.74C16.4373 7.82924 15.8732 6.74233 15.09 5.82099C14.3068 4.89965 13.3249 4.16785 12.2181 3.68061C11.1114 3.19336 9.90857 2.96336 8.70014 3.00788C7.4917 3.05241 6.30909 3.3703 5.2412 3.93766C4.17331 4.50503 3.24793 5.3071 2.53464 6.28358C1.82135 7.26006 1.33871 8.38554 1.123 9.57539C0.907291 10.7653 0.964126 11.9885 1.28923 13.1533C1.61434 14.318 2.19926 15.3939 3.00002 16.3" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  )
}

export default IconUploadCloud