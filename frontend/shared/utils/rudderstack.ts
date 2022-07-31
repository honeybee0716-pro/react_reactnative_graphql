import { Platform } from 'react-native'

export const sendRudderstackEvent = () => {
  if (Platform.OS === 'web') {
    // @ts-ignore
    window.rudderanalytics.page()
    // @ts-ignore
    // window.rudderanalytics.track('Track Event')
  }
}
