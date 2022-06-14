import { Platform } from 'react-native'

export const theme = {
  colors: {
    shared: {
      white: '#FFFFFF',
      blue: '#355DFF',
      purple: '#9757D7',
      yellow: '#FFB21A',
      pink: '#EF466F',

      black_3: '#00000008',
      black_4: '#0000000A',
      black_6: '#0000000F',
      black_9: '#00000017',
      black_18: '#0000002E',
      brightBlue: '#3972F9',
      brightBlue_15: '#3772FF26',
      brightBlue_20: '#3972F933',
      blueLink: '#004CFF',
      blueGentianFlower: '#355DFF',
      softBlack: '#23262F',
      darkerGray: '#808191',
      darkGray: '#6F767E',
      softGray: '#DEE0E2',
      soft2Gray: '#545658',
      soft3Gray: '#363636',
      soft4Gray: '#D0D0D0',
      soft4Gray_50: '#D0D0D080',
      soft4Gray_6: '#D0D0D00F',
      soft5Gray: '#696969',
      softerGray: '#E2E4E6',
      softer2Gray: '#E6E8EC',
      softer3Gray: '#E3E3E3',
      softer4Gray: '#E6E6E6',
      softer5Gray: '#F5F5F5',
      lightAliceBlue: '#FAFAFA',
      aliceBlue: '#F4F7FE',
      softViolet: '#c6c4dc',
      lavenderBlue: '#CABDFF',

      redStop: '#FF2626',
      redOrange: '#FF4500',
      redOrange_20: '#FF450033',
      redText: '#FF363C',

      purple1: '#7F60FF',
      purple1_34: '#CABDFF57',

      lightBlue: '#4AC7FF',
      lightBlue_34: '#B1E5FC57',

      green: '#00B976',
      green_10: '#00B9761A',
      lightGreen: '#B5E4CA',

      tosca: '#00F1B7',
      tosca_10: '#00F1B71A',

      darkPink: '#F00073',
      darkPink_15: '#F0007326'
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
