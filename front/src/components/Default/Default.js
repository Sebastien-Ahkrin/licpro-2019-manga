import React, { Component } from 'react'
import axios from 'axios'

import { api } from './../../config'
import { List } from './../List/'
import { Form } from './../Form/'

class Default extends Component {

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
    )
  }

}

export default Default
