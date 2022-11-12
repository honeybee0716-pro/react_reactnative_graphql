import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'

import Home from '../shared/screens/Home'
import SignIn from '../shared/screens/SignIn'

export function NavigationProvider({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: '/home',
            screens: {
              '/home': '/home',
              '/sign-in': '/sign-in',
              '/user-detail': '/user/:id'
            }
          }
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  )
}

const Stack = createNativeStackNavigator()

export const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="/home"
      screenOptions={{
        headerShown: false,
        animation: 'none'
      }}
    >
      <Stack.Screen name="/home" component={Home} />
      <Stack.Screen name="/sign-in" component={SignIn} />
    </Stack.Navigator>
  )
}
