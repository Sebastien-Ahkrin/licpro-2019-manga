import { createContext } from 'react'

import { remove, get } from './../actions'

export const ActionContext = createContext({
  name: 'ActionContext',
  state: '',
  actions: { remove, get }
}) 