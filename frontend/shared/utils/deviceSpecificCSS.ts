import {Platform} from 'react-native';

export const iOSOnly = (styles: string) => {
  if (Platform.OS === 'ios') {
    return styles;
  }
};

export const androidOnly = (styles: string) => {
  if (Platform.OS === 'android') {
    return styles;
  }
};

export const mobileOnly = (styles: string) => {
  if (Platform.OS === 'android' || Platform.OS === 'ios') {
    return styles;
  }
};

export const webOnly = (styles: string) => {
  if (Platform.OS === 'web') {
    return styles;
  }
};
