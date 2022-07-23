import { Platform } from 'react-native'

export const sendRudderstackEvent = () => {
  if (Platform.OS === 'web') {
    window.rudderanalytics.page()
    window.rudderanalytics.track('Track Event')
  }
}
