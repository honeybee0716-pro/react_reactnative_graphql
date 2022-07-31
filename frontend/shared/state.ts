import { atom } from 'recoil'
import { useEffect } from 'react'
import { useRecoilSnapshot } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

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
  default: undefined,
  effects_UNSTABLE: [persistAtom]
})

export const userSubscriptionDataState = atom({
  key: 'userSubscriptionData',
  default: undefined,
  effects_UNSTABLE: [persistAtom]
})

export const leadsState = atom({
  key: 'leads',
  default: [],
  effects_UNSTABLE: [persistAtom]
})

export const filterSort = atom({
  key: 'filterSort',
  default: 'date',
  effects_UNSTABLE: [persistAtom]
})

export const filterFirstName = atom({
  key: 'filterFirstName',
  default: '',
  effects_UNSTABLE: [persistAtom]
})

export const filterLastName = atom({
  key: 'filterLastName',
  default: '',
  effects_UNSTABLE: [persistAtom]
})

export const filterCompanyName = atom({
  key: 'filterCompanyName',
  default: '',
  effects_UNSTABLE: [persistAtom]
})

export const filterJobTitle = atom({
  key: 'filterJobTitle',
  default: '',
  effects_UNSTABLE: [persistAtom]
})

export const searchForLeadsVariablesState = atom({
  key: 'searchForLeadsVariablesState',
  default: undefined,
  effects_UNSTABLE: [persistAtom]
})
