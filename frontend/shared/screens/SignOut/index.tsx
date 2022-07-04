import { useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { useRouter } from 'solito/router'
import { useRecoilState } from 'recoil'
import { jwtState } from '../../state'

export const SignOut = () => {
  const { push } = useRouter()
  const [jwt, setJWT] = useRecoilState<any>(jwtState)

  useEffect(() => {
    ;(async () => {
      await AsyncStorage.removeItem('jwt')
      setJWT(undefined)
      push('/sign-in')
    })()
  }, [])

  return null
}
