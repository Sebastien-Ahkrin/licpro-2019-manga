import axios from 'axios'

import { api } from './../config'

const remove = id => axios.delete(`${ api }/episodes/${ id }`).catch(console.error)

export { 
  remove
}