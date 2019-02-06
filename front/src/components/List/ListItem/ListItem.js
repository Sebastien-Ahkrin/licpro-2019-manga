import React, { Component } from 'react'

import './ListItem.css'

class ListItem extends Component {

  render() {
    const { episode, callback } = this.props
    const [ , season, ep ] = episode.code.split(/[S|E]/g)

    return (
      <tr className='ListItem'>
        <td>{ episode.name }</td>
        <td>{ season }</td>
        <td>{ ep }</td>
        <td>{ episode.grade }</td>
        <td><span className='btn btn-primary' onClick={ () => callback() }>x</span></td>
      </tr>
    )
  }

}

export default ListItem
