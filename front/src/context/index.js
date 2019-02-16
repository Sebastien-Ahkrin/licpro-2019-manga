import { createContext } from 'react'

import { remove } from './../actions'

export const ActionContext = createContext({
  name: 'ActionContext',
  state: '',
  actions: { remove }
}) 