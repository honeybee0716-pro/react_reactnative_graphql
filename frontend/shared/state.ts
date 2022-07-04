import { atom } from 'recoil'
import { useEffect } from 'react'
import { useRecoilSnapshot } from 'recoil'

export const DebugObserver = () => {
  const snapshot = useRecoilSnapshot()
  useEffect(() => {
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.debug(
        `atom value changed: ${node.key}`,
        snapshot.getLoadable(node)
      )
    }
  }, [snapshot])

  return null
}

export const jwtState = atom({
  key: 'jwtState',
  default: undefined
})

export const userSubscriptionDataState = atom({
  key: 'userSubscriptionData',
  default: undefined
})

export const leadsState = atom({
  key: 'leads',
  default: []
})
