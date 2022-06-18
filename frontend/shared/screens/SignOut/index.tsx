import { useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { useRouter } from 'solito/router'

export const SignOut = () => {
  const { push } = useRouter()

  useEffect(() => {
    ;(async () => {
      await AsyncStorage.removeItem('jwt')
      push('/sign-in')
    })()
  }, [])

  return null
}
