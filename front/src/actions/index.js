import axios from 'axios'

import { api } from './../config'

const remove = id => axios.delete(`${ api }/episodes/${ id }`).catch(console.error)
const get = () => axios.get(`${ api }/episodes`).catch(console.error)
/*.then(({ data }) => {
  this.setState(() => ({ 'episodes': data }))
}).catch(error => {
  this.setState(() => ({ error }))
})*/

export { 
  remove, get
}