import axios from 'axios'

import { api } from './../config'

const remove = id => axios.delete(`${ api }/episodes/${ id }`).catch(console.error)
const get = () => axios.get(`${ api }/episodes`).catch(console.error)
const add = obj => axios.post(`${ api }/episodes`, obj).catch(console.error)

const update = (id, data) => axios.put(`${ api }/episodes/${ id }`, data).catch(console.error)

export { 
  remove, add, get, update
}