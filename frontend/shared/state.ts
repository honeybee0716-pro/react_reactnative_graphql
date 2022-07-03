import { atom } from 'recoil'

export const userSubscriptionDataState = atom({
  key: 'userSubscriptionData',
  default: undefined
})

export const leadsState = atom({
  key: 'leads',
  default: []
})
