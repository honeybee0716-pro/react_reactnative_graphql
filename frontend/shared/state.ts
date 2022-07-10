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
  default: ''
})

export const filterLastName = atom({
  key: 'filterLastName',
  default: ''
})

export const filterCompanyName = atom({
  key: 'filterCompanyName',
  default: ''
})

export const filterJobTitle = atom({
  key: 'filterJobTitle',
  default: ''
})

export const searchForLeadsVariablesState = atom({
  key: 'searchForLeadsVariablesState',
  default: undefined
})
