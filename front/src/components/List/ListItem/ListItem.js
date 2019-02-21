import React, { Component } from 'react'
import { ActionContext } from './../../../context'

import './ListItem.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

class ListItem extends Component {

  render() {
    const { episode } = this.props
    const [ , season, ep ] = episode.code.split(/[S|E]/g)

    return (
      <ActionContext.Consumer>
        { value => (
          <tr className='ListItem'>
            <td>{ episode.name }</td>
            <td>{ season }</td>
            <td>{ ep }</td>
            <td>{ episode.grade }</td>
            <td>
              <i className="btn btn-primary fas fa-edit" onClick={ () => {
                console.log(episode)
              } }></i>
              <i className="btn btn-primary far fa-times-circle" onClick={ () => {
                value.actions.remove(episode.id)
              } }></i>
            </td>
          </tr>
        ) }
      </ActionContext.Consumer>
    )
  }

}

export default ListItem
