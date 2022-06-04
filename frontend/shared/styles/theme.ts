import { Platform } from 'react-native'

export const theme = {
  colors: {
    shared: {
      white: '#FFFFFF',
      blue: '#355DFF',
      purple: '#9757D7',
      yellow: '#FFB21A',
      pink: '#EF466F'
    },
    light: {
      background: '#999999'
    },
    dark: {
      background: '#1A1D1F'
    }
  },
  font: {
    header:
      Platform.OS === 'android'
        ? 'Roboto'
        : Platform.OS === 'ios'
        ? 'Roboto'
        : 'Arial'
  }
}
