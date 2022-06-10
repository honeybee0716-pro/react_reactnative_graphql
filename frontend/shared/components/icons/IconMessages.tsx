import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
  sizeScale?: number
}


const IconMessages: React.FC<MyProps> = ({
  color = theme.colors.shared.soft2Gray,
  sizeScale = 1,
}) => {
  return (
    <Svg width={24 * sizeScale} height={25 * sizeScale} viewBox='0 0 24 25' fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M16 2.34268H8C4.691 2.34268 2 5.03948 2 8.35561V20.3815C2 20.6473 2.10536 20.9022 2.29289 21.0901C2.48043 21.278 2.73478 21.3836 3 21.3836H16C19.309 21.3836 22 18.6868 22 15.3707V8.35561C22 5.03948 19.309 2.34268 16 2.34268ZM20 15.3707C20 17.5815 18.206 19.3793 16 19.3793H4V8.35561C4 6.14486 5.794 4.34699 8 4.34699H16C18.206 4.34699 20 6.14486 20 8.35561V15.3707Z" fill={color} />
      <Path d="M9.5 13.3664C10.3284 13.3664 11 12.6934 11 11.8632C11 11.0329 10.3284 10.3599 9.5 10.3599C8.67157 10.3599 8 11.0329 8 11.8632C8 12.6934 8.67157 13.3664 9.5 13.3664Z" fill={color} />
      <Path d="M14.5 13.3664C15.3284 13.3664 16 12.6934 16 11.8632C16 11.0329 15.3284 10.3599 14.5 10.3599C13.6716 10.3599 13 11.0329 13 11.8632C13 12.6934 13.6716 13.3664 14.5 13.3664Z" fill={color} />
    </Svg>
  )
}

export default IconMessages