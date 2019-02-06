import React, { Component } from 'react'
import './ListItem.css'

class ListItem extends Component {

  render() {
    const { episode } = this.props
    const [ , season, ep ] = episode.code.split(/[S|E]/g)

    return (
      <tr className='ListItem'>
        <td>{ episode.id }</td>
        <td>{ episode.name }</td>
        <td>{ season }</td>
        <td>{ ep }</td>
      </tr>
    )
  }

}

export default ListItem
