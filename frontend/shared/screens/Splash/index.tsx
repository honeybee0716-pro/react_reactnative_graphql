import { useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { useRouter } from 'solito/router'

export const Splash = () => {
  const { push } = useRouter()

  useEffect(() => {
    ;(async () => {
      const jwt = await AsyncStorage.getItem('jwt')
      if (jwt) {
        push('/home')
      } else {
        push('/sign-in')
      }
    })()
  }, [])

  return null
}
