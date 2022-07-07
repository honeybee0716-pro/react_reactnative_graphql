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

export const filterSort = atom({
  key: 'filterSort',
  default: 'date'
})

export const filterFirstName = atom({
  key: 'filterFirstName',
  default: undefined
})

export const filterLastName = atom({
  key: 'filterLastName',
  default: undefined
})

export const filterCompanyName = atom({
  key: 'filterCompanyName',
  default: undefined
})

export const filterJobTitle = atom({
  key: 'filterJobTitle',
  default: undefined
})

export const searchForLeadsVariablesState = atom({
  key: 'searchForLeadsVariablesState',
  default: undefined
})
