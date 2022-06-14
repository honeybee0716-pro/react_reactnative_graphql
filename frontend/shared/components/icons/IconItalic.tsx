import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse } from 'react-native-svg'
import { theme } from 'shared/styles/theme'

interface MyProps {
  color?: string
}

const IconItalic: React.FC<MyProps> = ({
  color = '#323232',
}) => {
  return (
    <Svg width='100%' height='100%' preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M7.83971 6.28569H9.17305L7.70638 13.6666H6.37305L7.83971 6.28569ZM8.95971 3.33331C8.82786 3.33331 8.69897 3.3766 8.58933 3.4577C8.4797 3.53881 8.39425 3.65408 8.34379 3.78895C8.29334 3.92382 8.28013 4.07223 8.30586 4.2154C8.33158 4.35858 8.39507 4.4901 8.48831 4.59332C8.58154 4.69654 8.70033 4.76684 8.82965 4.79532C8.95897 4.8238 9.09302 4.80918 9.21484 4.75332C9.33665 4.69745 9.44077 4.60285 9.51403 4.48147C9.58728 4.36009 9.62638 4.21739 9.62638 4.07141C9.62638 3.87565 9.55614 3.68792 9.43112 3.5495C9.30609 3.41108 9.13652 3.33331 8.95971 3.33331Z"
        fill={color} />
    </Svg>

  )
}

export default IconItalic