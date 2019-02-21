import { createContext } from 'react'

import { remove, add } from './../actions'

export const ActionContext = createContext({
  name: 'ActionContext',
  state: '',
  actions: { remove, add }
}) 