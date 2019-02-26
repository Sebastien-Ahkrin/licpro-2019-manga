import { createContext } from 'react'

import { remove, add, update } from './../actions'

export const ActionContext = createContext({
  name: 'ActionContext',
  state: '',
  actions: { remove, add, update }
}) 