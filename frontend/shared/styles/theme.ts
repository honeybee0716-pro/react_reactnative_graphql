import { Platform } from 'react-native'

export const theme = {
  colors: {
    shared: {
      white: '#FFFFFF',
      blue: '#355DFF',
      purple: '#9757D7',
      yellow: '#FFB21A',
      pink: '#EF466F',

      brightBlue: "#3972F9",
      brightBlue_20: '#3972F933',
      blueLink: '#004CFF',
      blueGentianFlower: '#355DFF',
      softBlack: "#23262F",
      darkerGray: "#808191",
      darkGray: "#6F767E",
      softGray: "#DEE0E2",
      soft2Gray: '#545658',
      soft3Gray: '#363636',
      soft4Gray:'#D0D0D0',
      soft4Gray_50:'#D0D0D080',
      softerGray: "#E2E4E6",
      softer2Gray: '#E6E8EC',
      aliceBlue: "#F4F7FE",
      softViolet: "#c6c4dc",
      lavenderBlue: '#CABDFF',

      redStop: '#FF2626',
      redOrange: '#FF4500',
      redOrange_20: '#FF450033',

      purple1: '#7F60FF',
      purple1_34: '#CABDFF57',

      lightBlue: '#4AC7FF',
      lightBlue_34: '#B1E5FC57',

      lightGreen: '#B5E4CA',
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
        ? 'Arial'
        : 'Arial'
  }
}
