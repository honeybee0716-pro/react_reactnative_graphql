import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse, Rect } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  rotation?: number
}

const IconMasterCard: React.FC<MyProps> = ({ rotation = 0 }) => {
  return (
    <Svg
      rotation={rotation}
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 33 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clip-path="url(#clip0_0_428)">
        <Path
          d="M20.9614 2.1389H12.0386V17.8611H20.9614V2.1389Z"
          fill="#FF5F00"
        />
        <Path
          d="M12.6052 10.0001C12.6052 6.80561 14.1348 3.97227 16.4858 2.13894C14.7579 0.805607 12.5768 4.76837e-05 10.1974 4.76837e-05C4.56052 4.76837e-05 0 4.47227 0 10.0001C0 15.5278 4.56052 20.0001 10.1974 20.0001C12.5768 20.0001 14.7579 19.1945 16.4858 17.8612C14.1348 16.0556 12.6052 13.1945 12.6052 10.0001Z"
          fill="#EB001B"
        />
        <Path
          d="M33 10C33 15.5278 28.4395 20 22.8026 20C20.4232 20 18.2421 19.1945 16.5142 17.8611C18.8936 16.0278 20.3948 13.1945 20.3948 10C20.3948 6.80557 18.8652 3.97224 16.5142 2.1389C18.2421 0.805571 20.4232 1.14441e-05 22.8026 1.14441e-05C28.4395 1.14441e-05 33 4.50001 33 10Z"
          fill="#F79E1B"
        />
      </G>
      <Defs>
        <clipPath id="clip0_0_428">
          <Rect width="33" height="20" fill="white" />
        </clipPath>
      </Defs>
    </Svg>
  )
}

export default IconMasterCard
