import React, { Component } from 'react'
import { ActionContext } from './../../../context'

import { get } from './../../../actions'

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
              <i className="btn btn-primary fas fa-edit"></i>
              <i className="btn btn-primary far fa-times-circle" onClick={ () => {
                value.actions.remove(episode.id).catch(console.error).then(data => console.log('deleted'))
                value.actions.get().then(({ data }) => {
                  value.state = { 'episodes': data }
                }).catch(error => value.state = { error })
              } }></i>
            </td>
          </tr>
        ) }
      </ActionContext.Consumer>
    )
  }

}

export default ListItem
