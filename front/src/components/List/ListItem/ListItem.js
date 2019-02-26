import React, { Component } from 'react'
import { ActionContext } from './../../../context'

import './ListItem.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

class ListItem extends Component {

  send (ep) {
    const serie = document.getElementById('serie')
    const season = document.getElementById('season')
    const episode = document.getElementById('episode')
    const grade = document.getElementById('grade')
    const uuid = document.getElementById('uuid')

    serie.value = ep.name
    grade.value = ep.grade
    season.value = ep.code.split(/[S||E]/g)[1]
    episode.value = ep.code.split(/[S||E]/g)[2]
    uuid.value = ep.id

    const watched = document.getElementById('watched')
    const update = document.getElementById('update')

    watched.className = 'btn btn-primary disabled'
    update.className = 'btn btn-primary'
  }

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
                this.send(episode)
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
