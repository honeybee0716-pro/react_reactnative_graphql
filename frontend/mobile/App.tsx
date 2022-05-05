import React from 'react'
import { enableScreens } from 'react-native-screens'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { LogBox } from 'react-native'

import { Landing } from 'shared/screens/Landing'

enableScreens(true)

// because we're using react native web and using one image component for both
// and web require "src" and native requires "source", we need to provide both
LogBox.ignoreLogs([
  'The <Image> component requires a `source` property rather than `src`.'
])

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Landing />
    </SafeAreaProvider>
  )
}