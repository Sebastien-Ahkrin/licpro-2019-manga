import React, { Component } from 'react'
import axios from 'axios'

import { api } from '../../../config'
import { ListItem } from '../'

import './List.css'

class List extends Component {

  constructor () {
    super()
    this.state = { episodes: '' }
  }

  componentDidMount () {
    axios.get(`${ api }/episodes`).then(({ data }) => {
      this.setState(() => ({ 'episodes': data }))
    }).catch(error => {
      this.setState(() => ({ error }))
    })
  }

  render() {
    if(this.state.error) return (<div className='error'>Error: { this.state.error.message }</div>)
    if(this.state.episodes === '') return (<div></div>)
    
    return (
      <div className='List'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>Serie</th>
              <th scope='col'>Saison</th>
              <th scope='col'>Episode</th>
            </tr>
          </thead>
          <tbody>
            { this.state.episodes.map(episode => (<ListItem key={ episode.id } episode={ episode }/>)) } 
          </tbody> 
        </table>
      </div>
    )
  }

}

export default List
