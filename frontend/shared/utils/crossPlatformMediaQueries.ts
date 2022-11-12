import { Platform, Dimensions } from 'react-native'

export const minWidth = (styles: string, width: number) => {
  if (Platform.OS === 'web') {
    return `@media (min-width: ${width}px) { ${styles} }`
  } else {
    if (Dimensions.get('window').width >= width) {
      return styles
    }
  }
}

export const maxWidth = (styles: string, width: number) => {
  if (Platform.OS === 'web') {
    return `@media (max-width: ${width}px) { ${styles} }`
  } else {
    if (Dimensions.get('window').width <= width) {
      return styles
    }
  }
}

// breakpoints
export const smallToMedium = 700
export const mediumToLarge = 1400

// above iPad Large (computers)
export const largeScreenOnly = (styles: string) => {
  return minWidth(styles, mediumToLarge)
}

// iPad large to iPad Mini (tablets)
export const mediumScreenOnly = (styles: string) => {
  const maxStyles = maxWidth(styles, mediumToLarge)
  if (maxStyles) {
    return minWidth(maxStyles, smallToMedium)
  }
}

// iPad Mini or smaller (phones)
export const smallScreenOnly = (styles: string) => {
  return maxWidth(styles, smallToMedium)
}

// (tablet or phone)
export const smallOrMediumScreenOnly = (styles: string) => {
  return maxWidth(styles, mediumToLarge)
}

export const webOnly = (styles) => {
  if (Platform.OS === 'web') {
    return styles
  } else {
    return ''
  }
}

export const mobileOnly = (styles) => {
  if (Platform.OS === 'ios' || Platform.OS === 'android') {
    return styles
  } else {
    return ''
  }
}
