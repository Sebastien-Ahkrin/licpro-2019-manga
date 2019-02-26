import React, { Component } from 'react'

import { ActionContext } from './../../context'
import { add, remove, get, update } from './../../actions'

import { List } from './../List/'
import { Form } from './../Form/'

class Default extends Component {

  getValues () {
    get().then(({ data }) => {
      this.setState({ 'episodes': data })
    }).catch(error => {
      this.setState({ error })
    })
  }

  constructor () {
    super()
    this.getValues()
  }

  componentDidMount () {
    this.getValues()
  }

  render() {
    if(this.state === null) return (<div></div>)
    if(this.state.error) return (<div className='error'>Error: { this.state.error.message }</div>)
    if(this.state.episodes === '') return (<div></div>)

    const value = {
      actions: {
        remove: (id) => {
          remove(id)
          this.setState({ 'episodes':  this.state.episodes.filter(episode => episode.id !== id)})
        },
        add: (data) => {
          add(data).then(_ => { this.getValues() })
        },
        update: (id, data) => {
          update(id, data).then(_ => { this.getValues() })
        }
      },
      state: this.state
    }

    return (
      <ActionContext.Provider value={ value }>
      { console.log(value) }
        <div className="Default">
          <div className='container-fluid'>
            <div className="row">
              <div className="col-md-8">
                <List episodes={ this.state.episodes } />
              </div>
              <div className="col-md-4">
                <Form/>
              </div>
            </div>
          </div>
        </div>
      </ActionContext.Provider>
    )
  }

}

export default Default
