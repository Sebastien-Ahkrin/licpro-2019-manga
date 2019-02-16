import React, { Component, Fragment } from 'react'

import { ListItem } from '../'
import { ActionContext } from './../../../context'

import './List.css'

class List extends Component {

  constructor () {
    this.setState({ name: 'List', state: 'Running' })
  }

  render () {
    const { episodes } = this.props
    return (
      <ActionContext.Provider value={ this.state }>
        <table className='table table-responsive-sm'>
          <thead>
            <tr>
              <th scope='col'>Série</th>
              <th scope='col'>Saison</th>
              <th scope='col'>Episode</th>
              <th scope='col'>Note</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            { episodes.map(episode => (<ListItem key={ episode.id } episode={ episode }/>)) } 
          </tbody> 
        </table>
      </ActionContext.Provider>
    )
  }

}

export default List
