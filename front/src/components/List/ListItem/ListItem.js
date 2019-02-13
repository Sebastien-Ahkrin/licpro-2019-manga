import React, { Component } from 'react'

import './ListItem.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

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
        <td>
          <i class="btn btn-primary fas fa-edit" onClick={ () => callback() }></i>
          <i class="btn btn-primary far fa-times-circle" onClick={ () => callback() }></i>
        </td>
      </tr>
    )
  }

}

export default ListItem
